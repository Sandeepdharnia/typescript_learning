"use strict";
var num1 = 10;
var num2 = 30;
var num3 = 40;
var total = num1 + num2 + num3;
console.log(total);
// oct, hexadecimal value, binary (oct  0o1, hex 0x, binary 0b) 
var oct = 0o100001;
var hex = 0x10001;
var binary = 0b10001;
console.log(oct, hex, binary);
// convert string to number 
var item1 = 100;
var item2 = '50';
// convert item2 to number 
var item2Converted = +item2;
console.log(item2Converted + item1);
// number without declaration  
var data1 = 40;
data1 = 450;
//data = 'abd'
// Sometimes we need a variable that hold both types values 
var data2 = 40;
data2 = "abc";
console.log(data2);
