#!/bin/sh

rm -rf ./bin

mkdir bin

zip -r ./bin/futurecash.minidapp futurecash

zip -r ./bin/terminal.minidapp terminal

zip -r ./bin/scriptide.minidapp scriptide

zip -r ./bin/dexxed.minidapp dexxed

zip -r ./bin/coinflip.minidapp coinflip

zip -r ./bin/blockx.minidapp blockx

zip -r ./bin/cowsay.minidapp cowsay

cd ./provenator && zip -r ../bin/provenator.minidapp ./build && cd ..

cp ./miniwallet/walletv98.06.minidapp ./bin/
cp ./block/blockv1.3.17.minidapp ./bin/
