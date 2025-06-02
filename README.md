# typescript_learning

TS compiler command = npx tsc app.ts // for one time use 
TS compiler command = npx tsc app.ts --watch //continuous run, no need to compile again

How to generate config file: tsc --init

Once we have TS config file than can be done with = tsc
no need to compile file per file 

If compiled file must be in one folder then we need to change 
"tsconfig.js/compilerOptions/"outDir": "./","