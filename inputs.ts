function getInfo(){
    const name = document.getElementById("username") as HTMLInputElement;
    const userEmail = document.getElementById("email") as HTMLInputElement;
    const userAge = document.getElementById("age") as HTMLInputElement;

    const userName: string = name.value;
    const email: string = userEmail.value;
    const age: string = userAge.value;

    console.log(userName, email, age);
    
}



