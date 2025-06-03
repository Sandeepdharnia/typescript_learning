"use strict";
function getInfo() {
    const name = document.getElementById("username");
    const userEmail = document.getElementById("email");
    const userAge = document.getElementById("age");
    const userName = name.value;
    const email = userEmail.value;
    const age = userAge.value;
    console.log(userName, email, age);
}
