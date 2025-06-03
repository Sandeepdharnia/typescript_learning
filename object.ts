var userData: {
    name: string,
    age: number,
    company: string
} = {
    name: "Raj",
    age: 30,
    company:'ABC'
}

userData.name = 'sam'

console.log(userData);

// to make it more adoptable, we can use as below   

var empData1:{
    [key:string]:string|number|undefined
} = {
    name: "Raj",
    age: 30,
    company: "ABC",
    city:"Zurich"
}

console.log(empData1)

//nested object 

var userData3: {
  name: string
  age: number
    company: string
    address: {
        houseNo: string
        sector: string
        city:string
    }
  
} = {
  name: "Raj",
  age: 30,
    company: "ABC",
    address: {
        houseNo: "60B",
        sector: '45-b',
        city:"Delhi"
  }
};

console.log(userData3);
