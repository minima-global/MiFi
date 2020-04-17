//Some Global variables..
var allTokens    = {};
var currentToken = {};
var dexcontract  = "LET owner = PREVSTATE ( 0 ) IF SIGNEDBY ( owner ) THEN RETURN TRUE ENDIF LET address = PREVSTATE ( 1 ) LET token = PREVSTATE ( 2 ) LET amount = PREVSTATE ( 3 ) LET price = PREVSTATE ( 4 ) LET total = amount * price ASSERT VERIFYOUT ( @INPUT address total token )";
var dexaddress   = "0x82EFF2D86E59919FB42D3EE6E1340627DF88D0E60636BA236C08D9799BD877C7";

//All the coins that have been kept already..
var keptcoins = [];

//The INIT function called once connected
function dex_init(){
	UpdateBlockTime();
	
	UpdateBalance();
		
	//Check for which Tokens are available..
	Minima.cmd("tokens", function(resp){
		//Changed..	
		UpdateTokensList(JSON.parse(resp).response);
	});
	
	StartPoller();
}

//Update the Balance Window - you can alwyas get the JSON in Minima.balance..
function UpdateBalance(){
	var baltext = "<table width=100% border=0>"
	var len = Minima.balance.balance.length;
	for(var loop=0;loop<len;loop++){
		var json = Minima.balance.balance[loop];
		if(json.unconfirmed!="0" || json.mempool!="0"){
			baltext += "<tr class='infoboxblue'><td align=right width=30%>"+json.token
			+"&nbsp;&nbsp;</td> <td align=left>&nbsp;&nbsp;"+json.confirmed+" | "+json.unconfirmed+" | "+json.mempool+"</td>  </tr>";	
		}else{
			baltext += "<tr class='infoboxblue'><td align=right width=30%>"+json.token
			+"&nbsp;&nbsp;</td> <td align=left>&nbsp;&nbsp;"+json.confirmed+"</td>  </tr>";
		}
	}
	baltext += "</table>"

	//And set it..
	document.getElementById("minima_balance").innerHTML = baltext;
}

//Update Token List
function UpdateTokensList(tokens_json){
	//Store..
	allTokens = tokens_json;
	
	//How many are there
	var len = tokens_json.tokens.length;
	if(len<2){
		//No Tokens.. since Minima is first
		document.getElementById("minima_tokenlist").innerHTML = "NO TOKENS FOUND.. &nbsp;&nbsp;<a href=''>REFRESH</a> ";
		return;
	}
	
	//Create the Select Box
	var toktext = "<b>CHOOSE TOKEN : </b> <select onchange='tokenSelectChange()' id='select_tokenlist'>"
	for(var loop=1;loop<len;loop++){
		var json = tokens_json.tokens[loop];
			toktext += "<option value='"+json.tokenid+"'>"+json.token+" ( "+json.total+" ) "+json.tokenid.substr(0,40)+"..</option>";
	}
	toktext += "</select> &nbsp;&nbsp;<a href=''>REFRESH</a>";
	
	//And set it..
	document.getElementById("minima_tokenlist").innerHTML = toktext;
	
	//Set the Token..
	tokenSelectChange()
}

//Update the BlockTime - use Minima.status
function UpdateBlockTime(){
	document.getElementById("minima_blocktime").innerHTML = "<b>BLOCKTIME : </b> "+Minima.block;
}

//Simple Poll mechanic.. 
function StartPoller(){
	pollFunction();
	
	//Check every 5 secs
	setInterval(function(){pollFunction();},10000);
}

function updateOrderBook(orderbook){
	
}

function getCoinPrevState(coinproof, prevstate){
	var pslen = coinproof.prevstate.length;
	for(psloop=0;psloop<pslen;psloop++){
		if(coinproof.prevstate[psloop].port == prevstate){
			return coinproof.prevstate[psloop].data;
		}
	}
	return null;
}

function pollFunction(){
	//Search for new Contracts.. and KEEP those that belong to you..
	Minima.cmd( "keys;search "+dexaddress, function(resp){
		fulljson      = JSON.parse(resp);
		keysjson      = fulljson[0];
		contractsjson = fulljson[1];
		
		var relevantcoins = [];
		var coinsfound = contractsjson.response.coins.length;
		var keysfound  = keysjson.response.publickeys.length;
		
		//Cycle and get the relevant ones..
		for(loop=0;loop<coinsfound;loop++){
			coin = contractsjson.response.coins[loop];
			pkey = getCoinPrevState(coin.data,"0");
			//Now check if the Public Key belongs to us.. if so it's one of ours..
			found = false;
			for(key=0;key<keysfound;key++){
				mypkey = keysjson.response.publickeys[key].publickey;
				if(mypkey == pkey){
					//Keep this coin!
					relevantcoins.push(coin.data.coin.coinid);
					console.log("FOUND 1 : "+coin.data.coin.coinid);
				}
			}
		}
		
		
	});
	
	
}

function tokenSelectChange(){
	var tokenSel  = document.getElementById("select_tokenlist").selectedIndex;
	currentToken  = allTokens.tokens[tokenSel+1];
	console.log("Token Selected : "+currentToken.token);
}

function actionBUY(){
	//Get the Values..
	var buyamount = document.getElementById("buyamt").value.trim();
	var buyprice  = document.getElementById("buyprice").value.trim();
	var token     = currentToken.token;
	
	if(buyamount=="" || buyprice==""){
		alert("Cannot have BLANK inputs!");
		return;
	}
	
	//Lets do this! - use Big Boy Maths Lib
	var tamount = new Decimal(buyamount);
	var tprice  = new Decimal(buyprice);
	var total = tamount.mul(tprice);
	
	if(tamount.lte(0) || tprice.lte(0)){
		alert("Cannot have ZERO inputs!");
		return;
	}
	
	//Check is OK
	if(!confirm("Please Confirm :\n\nBUY "+buyamount+" "+token+" @ "+buyprice+" Minima\n\nTotal Order Value : "+total)){
		return;
	}
	
	//We need a new key and a new address
	Minima.cmd( "keys new;newaddress;" , function(resp){
		keysjson = JSON.parse(resp);
		
		var pubkey  = keysjson[0].response.key.publickey;
		var address = keysjson[1].response.address.hexaddress;

		//Now create the txn..
		//The TXN ID is a random number..
		var txnid = Math.floor(Math.random()*1000000000);
		
		//Script to create transaction..
		var txncreator =    
			"txncreate "+txnid+";"+
			"txnauto "+txnid+" "+tamount+" "+dexaddress+";"+
			"txnstate "+txnid+" 0 "+pubkey+";"+
			"txnstate "+txnid+" 1 "+address+";"+
			"txnstate "+txnid+" 2 "+currentToken.tokenid+";"+
			"txnstate "+txnid+" 3 "+tamount+";"+
			"txnstate "+txnid+" 4 "+tprice+";"+
			"txnpost "+txnid+";";
			
		//And Run it..
		Minima.cmd( txncreator , function(resp){
			respjson = JSON.parse(resp);
			if(respjson[7].status == true){
				alert("ORDER POSTED!");
			}else{
				alert("Something went wrong.. Insufficient funds ?");
			}
		});	
	});
	
	
	
}