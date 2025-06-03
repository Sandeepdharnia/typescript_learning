console.log("bigint example");

var bignum: bigint = 9007199254740991n;
// this addition will throw the error 
var x = 1;
var y = 2;

//console.log(bignum + x);


var bignum2: bigint = 9007199254740991n;
//here x1 & y1 also created bigint 
var x1 = 1n;
var y1 = 2n;

console.log(bignum + BigInt(x));