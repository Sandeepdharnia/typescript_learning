"use strict";
function totalPrice() {
    var price = 100;
    var item = 50;
    console.log(price * item);
}
function totalPrice1(item, price, text) {
    //var price = 100;
    if (text) {
        console.log(text + price * item);
    }
    else {
        console.log(price * item);
    }
}
totalPrice1(70, 200, "This is total amount ");
// can be done as 
// data:string|number|boolean 
// or 
// data:any 
