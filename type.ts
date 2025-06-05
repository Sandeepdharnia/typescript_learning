type DataType = { name: string, email: string }
// type is similar approach in a way to interface 
// but here there are some differences  
// Cant union them with interface but with 'extend' will work 
// 

var emmpData = {
    name: "Raj",
    email:"raj@as.com"
}


var studentData2 : DataType = {
    name: "sam",
    email:"sam@email.com"
} 

