(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{ON18:function(e,n,o){"use strict";o.d(n,"a",function(){return l});var t=o("mrSG"),i=o("AytR"),r=o("Kmpd"),a=o("fXoL"),s=o("KNWA"),c=o("rux5");let l=(()=>{class e{constructor(e,n){this._directus=e,this._storeService=n,this.environmentApiURL="",this.environmentApiURL=i.a.api,this.serviceJSPayload()}serviceJSPayload(){this.$payload=this._storeService.tokenId.subscribe(e=>{const n=JSON.stringify(e);try{r.Minima.file.save(n,"tokenid.txt",e=>{if(!e.success)throw new Error("TokenId, ScaleFactor not saved!")})}catch(o){r.Minima.log(o)}})}login(e){return Object(t.a)(this,void 0,void 0,function*(){return localStorage.getItem("kickemoff")&&localStorage.removeItem("kickemoff"),this._directus.post(this.environmentApiURL+"auth/login",e)})}logout(){return Object(t.a)(this,void 0,void 0,function*(){document.getElementById("sign-out-btn").style.opacity="1.0",yield this._storeService.getUserDetailsOnce().then(e=>{const n=e;n.loginData.access_token="",n.loginData.refresh_token="",this._storeService.data.next(n),document.location.reload()})})}firstTime(){return new Promise(e=>{r.Minima.file.load("loggedEmail.txt",n=>{n.success?n.data&&JSON.parse(n.data).true&&e(!0):e(!1)})})}logEmail(e){return new Promise(n=>{r.Minima.cmd("hash 256 "+e.toLowerCase(),e=>{if(e.status)if(e.response.hash){const o=JSON.stringify({email:e.response.hash});r.Minima.file.save(o,"loggedEmail.txt",e=>{e.success?(r.Minima.log("logEmail(): Email logged"),n(!0)):(r.Minima.log("logEmail(): Failed to save loggedEmail.txt"),n(!1))})}else r.Minima.log("logEmail(): Hashed email invalid"),n(!1)})})}checkEmail(e){return new Promise(n=>{r.Minima.file.load("loggedEmail.txt",o=>{if(o.success)if(o.data){const t=JSON.parse(o.data);r.Minima.cmd("hash 256 "+e.toLowerCase(),e=>{e.status&&(e.response.hash?n(e.response.hash===t.email):(console.log("loggedEmail.txt: Invalid hashed email."),n(!1)))})}else console.log("Data from loggedEmail.txt failed to load"),n(!1);else console.log("Minima failed to execute load file"),n(!1)})})}}return e.\u0275fac=function(n){return new(n||e)(a.Pb(s.a),a.Pb(c.a))},e.\u0275prov=a.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},"ct+p":function(e,n,o){"use strict";o.r(n),o.d(n,"HomePageModule",function(){return O});var t=o("ofXK"),i=o("TEn/"),r=o("3Pt+"),a=o("tyNb"),s=o("mrSG"),c=o("Kmpd"),l=o("fXoL"),d=o("ON18"),g=o("rux5");const m=["inputs"],u=["getReferenceButton"],f=["pageContent"];function p(e,n){if(1&e){const e=l.Mb();l.Lb(0,"div",31),l.Lb(1,"div"),l.nc(2," You have been safely signed off after being inactive for a while. "),l.Kb(),l.Lb(3,"span",32),l.Tb("click",function(){return l.gc(e),l.Vb().hideBanner()}),l.nc(4," \xd7 "),l.Kb(),l.Kb()}}function b(e,n){1&e&&l.Jb(0,"ion-icon",33)}function h(e,n){1&e&&(l.Lb(0,"ion-note",34),l.nc(1,"An email is required."),l.Kb())}function v(e,n){1&e&&(l.Lb(0,"ion-note",34),l.nc(1,"You have entered an invalid email address, please try again."),l.Kb())}function _(e,n){1&e&&l.Jb(0,"ion-icon",33)}function w(e,n){1&e&&(l.Lb(0,"ion-note",34),l.nc(1,"A password is required."),l.Kb())}function y(e,n){1&e&&(l.Lb(0,"ion-row",35),l.Lb(1,"ion-col",36),l.Jb(2,"ion-progress-bar",37),l.Kb(),l.Kb())}const x=function(e,n){return{"has-success":e,"has-error":n}},M=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/,C=[{path:"",component:(()=>{class e{constructor(e,n,o,t){this._loginService=e,this.formBuilder=n,this.router=o,this._storeService=t,this.loginStatus="",this.kickemoff=!1,this.progressBar=!1,this.checkForKick(),this.initLoginForm(),this.username.setValidators(e=>M.test(e.value)?null:{validEmail:!0})}ionViewWillEnter(){}ionViewWillLeave(){}initLoginForm(){this.loginForm=this.formBuilder.group({uName:["",[r.j.required]],password:["",[r.j.required]]})}onSubmit(){return Object(s.a)(this,void 0,void 0,function*(){this.inputs.disabled=!0,this.progressBar=!1,this.loginStatus="Logging in...",this.getReferenceButton.disabled=!0,this.scrollToBottom();const e={email:this.username.value.trim(),password:this.password.value};(yield this.checkForEmailTxtFile())?(yield this._loginService.checkEmail(e.email))?this.login(e):(this.loginStatus="This email doesn't match your previously used email.",this.progressBar=!0,this.inputs.disabled=!1,setTimeout(()=>{this.getReferenceButton.disabled=!1},1e3)):(yield this._loginService.logEmail(e.email))?this.login(e):(this.inputs.disabled=!0,this.loginStatus="Your email couldn't be logged.  Please consult an admin.",this.progressBar=!1)})}checkForEmailTxtFile(){return new Promise(e=>{c.Minima.file.load("loggedEmail.txt",n=>{e(!!n.success)})})}checkForKick(){return Object(s.a)(this,void 0,void 0,function*(){const e=yield this._storeService.checkForKick();this.kickemoff=!!e.kickemoff&&e.kickemoff})}login(e){var n,o;return Object(s.a)(this,void 0,void 0,function*(){try{const t=yield this._loginService.login(e);if(!t.ok){const o=yield t.json();if(this.progressBar=!0,this.inputs.disabled=!1,null===(n=o.errors[0])||void 0===n?void 0:n.message)throw new Error(o.errors[0].message);throw new Error("Login has failed: "+e.email)}{const n=yield t.json();if(!(null===(o=n.data)||void 0===o?void 0:o.access_token))throw new Error("Login has failed"+e.email);{const e={access_token:n.data.access_token,expires:n.data.expires,refresh_token:n.data.refresh_token};if(!(yield this.updateUserData(e)))throw new Error("Server timed out");this.getReferenceButton.disabled=!1,this.inputs.disabled=!1,this.progressBar=!0,this.loginStatus="Authenticated! Signing in...",this.router.navigate(["/rewards"]),this.lastAccess(),localStorage.setItem("isLogged","true"),c.Minima.log("IncentiveCash: User has logged in.")}}}catch(t){this.loginStatus=t,c.Minima.log(t.message),t.message&&(this.loginStatus=t.message),setTimeout(()=>{this.getReferenceButton.disabled=!1,this.inputs.disabled=!1,this.loginStatus=""},2e3)}})}saveUid(e){console.log("Saving users id to a txt");const n="https://incentivedb.minima.global/users/me?access_token="+e.access_token;return new Promise((e,o)=>{c.Minima.net.GET(n,n=>{if(n&&(null==n?void 0:n.result)){let t=decodeURIComponent(n.result);t||o("Decoding URI data from server failed. Consult with an admin.");let i=JSON.parse(t||"");i&&(null==i?void 0:i.data.id)?c.Minima.file.save(JSON.stringify({uid:null==i?void 0:i.data.id}),"uid.txt",n=>{n&&(null==n?void 0:n.status)?(console.log("Saved user's ID"),e(!0)):o("Failed to save user's data.")}):o("Failed to parse data")}else o("Server timed out! Consult with an admin.")})})}updateUserData(e){return Object(s.a)(this,void 0,void 0,function*(){const n="https://incentivedb.minima.global/users/me?access_token="+e.access_token;let o=yield this.makeSessionStart(),t=yield this.makeSessionEnd(e);return new Promise(i=>{c.Minima.net.GET(n,n=>{var r;if(n&&n.result){let a=decodeURIComponent(n.result);a||i(!1);let s=JSON.parse(a);if(s&&0!==(null===(r=s.data)||void 0===r?void 0:r.id.length)){const n={email:this.username.value,pKey:"",refID:s.data.id,loginData:{access_token:e.access_token,refresh_token:e.refresh_token,expires:e.expires,sessions:{sessionStart:o,sessionEnd:t}}};c.Minima.file.save(JSON.stringify({uid:n.refID}),"uid.txt",e=>{e&&(null==e?void 0:e.success)||(c.Minima.log("Failed to log user id"),i(!1))}),this._storeService.data.next(n),this.clearForm(),i(!0)}else i(!1)}else i(!1)})})})}clearForm(){this.loginForm.reset(),this.formInit()}hideBanner(){this.kickemoff=!1,this._storeService.removeTheirInactivityFileOnLogin()}makeSessionStart(){return new Promise(e=>{e(new Date||new Date("foo"))})}makeSessionEnd(e){return new Promise(n=>{let o=(new Date).getTime();n(new Date(o+e.expires)||new Date("foo"))})}lastAccess(){let e=(new Date).getTime();this._storeService.lastAccess.next({milliseconds:e})}formInit(){this.loginForm=this.formBuilder.group({uName:["",r.j.required],password:["",r.j.required]})}get username(){return this.loginForm.get("uName")}get password(){return this.loginForm.get("password")}scrollToBottom(){try{this.pageContent.scrollToBottom(300)}catch(e){console.log(e)}}}return e.\u0275fac=function(n){return new(n||e)(l.Ib(d.a),l.Ib(r.a),l.Ib(a.g),l.Ib(g.a))},e.\u0275cmp=l.Cb({type:e,selectors:[["app-home"]],viewQuery:function(e,n){if(1&e&&(l.qc(m,!0),l.qc(u,!0),l.qc(f,!0)),2&e){let e;l.ec(e=l.Ub())&&(n.inputs=e.first),l.ec(e=l.Ub())&&(n.getReferenceButton=e.first),l.ec(e=l.Ub())&&(n.pageContent=e.first)}},decls:65,vars:22,consts:[[1,"ion-no-border",3,"translucent"],[1,"ion-no-padding"],[1,"title","ion-no-padding","ion-text-center"],["class","signed-off",4,"ngIf"],[3,"scrollEvents","fullscreen"],["pageContent",""],[1,"welcome-container","animate__animated","animate__fadeIn"],[1,"ion-text-center","welcome"],[1,"has"],[1,"blue-ruler"],[1,"m-t7","ion-text-center","welcome-subtitle"],["href","https://incentive.minima.global/#/register","target","_"],[1,"animate__animated","animate__fadeIn","animate__delay-1s",3,"formGroup","ngSubmit","keydown.enter"],["lines","none",1,"ion-no-padding","no-ripple"],["position","stacked"],["clearInput","false","formControlName","uName",3,"ngClass"],["inputs",""],["class","input-error-icon","name","alert-circle",4,"ngIf"],["class","input-error-message",4,"ngIf"],["clearInput","false","formControlName","password","type","password",3,"ngClass"],["fill","clear","expand","block","type","submit",1,"sign-up-btn",3,"disabled"],["getReferenceButton",""],[1,"animate__animated","animate__fadeIn","animate__delay-1s"],[1,"forgot","ion-text-center"],["href","https://incentive.minima.global/#/reset","target","_"],[1,"login-status-wrapper",3,"hidden"],[1,"has","animate__animated","animate__pulse","animate__infinite"],[1,"login-status","ion-text-center"],["class","has ion-justify-content-center ion-align-items-center",4,"ngIf"],[1,"ion-no-border"],[1,"content"],[1,"signed-off"],[3,"click"],["name","alert-circle",1,"input-error-icon"],[1,"input-error-message"],[1,"has","ion-justify-content-center","ion-align-items-center"],[1,"progress","ion-text-center"],["color","primary","type","indeterminate"]],template:function(e,n){1&e&&(l.Lb(0,"ion-header",0),l.Lb(1,"ion-toolbar"),l.Lb(2,"ion-title"),l.Lb(3,"ion-grid",1),l.Lb(4,"ion-row"),l.Lb(5,"ion-col",2),l.nc(6," Incentive Cash "),l.Kb(),l.Kb(),l.Kb(),l.Kb(),l.Kb(),l.lc(7,p,5,0,"div",3),l.Kb(),l.Lb(8,"ion-content",4,5),l.Lb(10,"ion-grid",6),l.Lb(11,"ion-row"),l.Lb(12,"ion-col",7),l.nc(13," Welcome to the"),l.Jb(14,"br"),l.nc(15," Minima Incentive Program "),l.Kb(),l.Kb(),l.Lb(16,"ion-row",8),l.Lb(17,"ion-col"),l.Jb(18,"div",9),l.Kb(),l.Kb(),l.Lb(19,"ion-row",8),l.Lb(20,"ion-col",10),l.nc(21," If you have already signed up for our"),l.Jb(22,"br"),l.nc(23,"Incentive Program, please sign in using "),l.Jb(24,"br"),l.nc(25," your email & password below. "),l.Jb(26,"br"),l.Jb(27,"br"),l.nc(28," Or click here to "),l.Lb(29,"a",11),l.nc(30,"register"),l.Kb(),l.nc(31," now. "),l.Kb(),l.Kb(),l.Kb(),l.Lb(32,"form",12),l.Tb("ngSubmit",function(){return n.onSubmit()})("keydown.enter",function(){return n.onSubmit()}),l.Lb(33,"ion-list"),l.Lb(34,"ion-item",13),l.Lb(35,"ion-label",14),l.nc(36,"Email"),l.Kb(),l.Lb(37,"ion-input",15,16),l.lc(39,b,1,0,"ion-icon",17),l.Kb(),l.lc(40,h,2,0,"ion-note",18),l.lc(41,v,2,0,"ion-note",18),l.Kb(),l.Lb(42,"ion-item",13),l.Lb(43,"ion-label",14),l.nc(44,"Password"),l.Kb(),l.Lb(45,"ion-input",19,16),l.lc(47,_,1,0,"ion-icon",17),l.Kb(),l.lc(48,w,2,0,"ion-note",18),l.Kb(),l.Lb(49,"ion-button",20,21),l.nc(51," Sign in "),l.Kb(),l.Kb(),l.Kb(),l.Lb(52,"ion-grid",22),l.Lb(53,"ion-row",8),l.Lb(54,"ion-col",23),l.Lb(55,"a",24),l.nc(56,"Forgot password?"),l.Kb(),l.Kb(),l.Kb(),l.Kb(),l.Lb(57,"ion-grid",25),l.Lb(58,"ion-row",26),l.Lb(59,"ion-col",27),l.nc(60),l.Kb(),l.Kb(),l.lc(61,y,3,0,"ion-row",28),l.Kb(),l.Kb(),l.Lb(62,"ion-footer",29),l.Lb(63,"div",30),l.nc(64," \xa9 Copyright 2021 Minima GmbH "),l.Kb(),l.Kb()),2&e&&(l.ac("translucent",!0),l.yb(7),l.ac("ngIf",!0===n.kickemoff),l.yb(1),l.ac("scrollEvents",!0)("fullscreen",!0),l.yb(24),l.ac("formGroup",n.loginForm),l.yb(5),l.ac("ngClass",l.dc(16,x,n.username.valid&&(n.username.dirty||n.username.touched),n.username.invalid&&(n.username.dirty||n.username.touched))),l.yb(2),l.ac("ngIf",n.username.invalid&&n.username.touched),l.yb(1),l.ac("ngIf",n.loginForm.touched&&n.loginForm.invalid&&0===n.username.value.length),l.yb(1),l.ac("ngIf",n.username.value.length>0&&n.username.hasError("validEmail")),l.yb(4),l.ac("ngClass",l.dc(19,x,n.password.valid&&(n.password.dirty||n.password.touched),n.password.invalid&&(n.password.dirty||n.password.touched))),l.yb(2),l.ac("ngIf",n.password.invalid&&n.password.touched),l.yb(1),l.ac("ngIf",n.loginForm.touched&&n.loginForm.invalid&&0===n.password.value.length),l.yb(1),l.ac("disabled",n.loginForm.invalid),l.yb(8),l.ac("hidden",0===n.loginStatus.length),l.yb(3),l.pc(" ",n.loginStatus," "),l.yb(1),l.ac("ngIf",!n.progressBar))},directives:[i.k,i.x,i.w,i.j,i.t,i.g,t.k,i.h,r.k,r.h,r.c,i.p,i.n,i.o,i.m,i.C,r.g,r.b,t.i,i.d,i.i,i.l,i.q,i.r],styles:["ion-content[_ngcontent-%COMP%]{--padding-top:25px;--padding-start:25px;--padding-end:25px}ion-list[_ngcontent-%COMP%]{background-color:initial;padding:0}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background:transparent;--background-color:transparent}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-left:20px;margin-bottom:10px;font-size:20px;color:#aaaabe;font-family:manrope-medium}ion-input[_ngcontent-%COMP%]{font-size:16px;color:#000;border:1px solid #d1d1de;background-color:#fff;padding-left:20px!important}ion-grid.login-status-wrapper[_ngcontent-%COMP%]{margin-top:50px}@media only screen and (max-height:797px){ion-grid.login-status-wrapper[_ngcontent-%COMP%]{margin-top:0}}ion-col.login-status[_ngcontent-%COMP%]{letter-spacing:-.02em;font-family:manrope-regular;padding:0;color:var(--ion-color-primary);font-size:14px}ion-col.welcome[_ngcontent-%COMP%]{font-size:20px}ion-col.welcome[_ngcontent-%COMP%], ion-col.welcome-subtitle[_ngcontent-%COMP%]{font-family:manrope-regular;color:#91919d}ion-col.welcome-subtitle[_ngcontent-%COMP%]{font-size:14px}ion-col.welcome-subtitle[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#001d33;font-family:manrope-bold}ion-col.welcome-subtitle[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--ion-color-primary);cursor:pointer}ion-col[_ngcontent-%COMP%]   div.blue-ruler[_ngcontent-%COMP%]{max-width:164px;margin:auto;border-bottom:2px solid var(--ion-color-primary)}@media only screen and (min-width:990px){ion-col[_ngcontent-%COMP%]   div.blue-ruler[_ngcontent-%COMP%]{max-width:376px}ion-content[_ngcontent-%COMP%]{--padding-start:95px;--padding-end:95px}}ion-row.has[_ngcontent-%COMP%]   ion-col.forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:18px;color:#aaaabe;font-family:manrope-medium}ion-row.has[_ngcontent-%COMP%]   ion-col.forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--ion-color-primary);cursor:pointer}ion-row.has[_ngcontent-%COMP%]   ion-col.progress[_ngcontent-%COMP%]{max-width:120px}ion-row.has[_ngcontent-%COMP%]   ion-col.progress[_ngcontent-%COMP%]   ion-progress-bar[_ngcontent-%COMP%]{margin:0;padding:0;--buffer-background:#fafaff}ion-row.has[_ngcontent-%COMP%]   ion-col.failure[_ngcontent-%COMP%]{font-family:manrope-bold;font-size:30px;color:#031b32}ion-footer[_ngcontent-%COMP%]{height:51px;position:relative}ion-footer[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]{text-align:center;width:100%;position:absolute;bottom:20px}.signed-off[_ngcontent-%COMP%]{width:100%;background-color:#f0f0fa;padding:15px;display:flex;justify-content:center;align-items:center;flex-direction:row}.signed-off[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-family:manrope-bold;position:relative;font-size:.825rem;padding-left:25px;color:#031b32;white-space:normal}.signed-off[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;top:50px;right:5px;cursor:pointer;font-size:1.5rem;color:#001d33}ion-card.kicked-off-card[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;background-color:var(--ion-color-secondary);height:48px;box-shadow:none;font-family:manrope-bold;color:#fafaff;border-radius:15px}ion-card.kicked-off-card[_ngcontent-%COMP%]   ion-col#textWrapper[_ngcontent-%COMP%]{text-align:center;padding:10px}ion-card.kicked-off-card[_ngcontent-%COMP%]   ion-col#spanWrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}ion-card.kicked-off-card[_ngcontent-%COMP%]   ion-col#spanWrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:manrope-bold;font-size:30px;float:right;position:absolute;right:5px;cursor:pointer;color:#fafaff}.input-error-message[_ngcontent-%COMP%]{font-size:.8rem;color:var(--ion-color-danger)}.input-error-icon[_ngcontent-%COMP%]{color:var(--ion-color-danger);width:20.43px;height:20.43px;position:absolute;right:5px}.has-success[_ngcontent-%COMP%]{border-color:var(--ion-color-success)}.has-error[_ngcontent-%COMP%]{border-color:var(--ion-color-danger)}"]}),e})()}];let k=(()=>{class e{}return e.\u0275mod=l.Gb({type:e}),e.\u0275inj=l.Fb({factory:function(n){return new(n||e)},imports:[[a.j.forChild(C)],a.j]}),e})(),O=(()=>{class e{}return e.\u0275mod=l.Gb({type:e}),e.\u0275inj=l.Fb({factory:function(n){return new(n||e)},imports:[[t.b,r.d,r.i,i.y,k]]}),e})()}}]);