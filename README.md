# typescript_learning

TS compiler command = npx tsc app.ts // for one time use 
TS compiler command = npx tsc app.ts --watch //continuous run, no need to compile again

How to generate config file: tsc --init

Once we have TS config file than can be done with = tsc
no need to compile file per file 

If compiled file must be in one folder then we need to change 
"tsconfig.js/compilerOptions/"outDir": "./","

---------------------------------------------------
declaration means how we declared our data 

"tsconfig.js/compilerOptions/"declaration": true, 
It will create an extra file just for declaration 
ex. app.d.ts

It will will help to check quickly the declaration of variables 