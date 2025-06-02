"use strict";
// Declare a variable 'data' that can only be null
var data = null;
// Declare a variable 'dataUndefined' that can only be undefined
var dataUndefined = undefined;
// The following assignment will not work because 'data' can only be null
// data = 10;
// Declare a variable 'userName' that can be either null or string
var userName3 = null;
// Simulate a login check
var login = true;
if (login) {
    // If logged in, assign a string value to 'userName3'
    userName3 = "user1";
}
// Print the type of 'userName3' (should be 'string' if login is true)
console.log(typeof userName3);
// Declare a variable 'item' that can only be undefined
var item = undefined;
console.log(item); // Prints 'undefined'
// Declare a variable 'userName31' that can be either undefined or string
var userName31 = undefined;
// Assign a string value to 'userName31'
userName31 = "Simi";
// Print the type of 'userName31' (should be 'string')
console.log(typeof userName31);
