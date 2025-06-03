type personTN = {name:string}
type personTA = { age: number }
type personTC = personTN & personTA

var personDataA: { name: string } = {
    name: "Raj"
}

var personDataB: { age: number } = {
  age:20,
};


var personDataC: personTC = {
    name: 'Raj',
    age: 30,
    
}

