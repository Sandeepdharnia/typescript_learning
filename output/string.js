"use strict";
var str = "abc";
var str1 = 'abc';
var str2 = `abc`;
var age = 30;
var userName = "pttt";
var info = `User name is ${userName} and age is ${age} years`;
console.log(info);
var num1 = 1000;
// convert num to string, below given two method 
//method 1
// var data: string = num1.toString();
//method 2
var dataStr = " " + num1;
var boolData = true;
var dataStr = boolData.toString();
var dataStr = "" + boolData;
// boolean data type 
var itemStr = true;
// var item: boolean = "true"; //this will not work 
var itemStr = true;
