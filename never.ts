function loopFunction():never {
    while (true) {
        console.log("loop");
    }
}
// never type to be infinite that cant reach to the end. 
function simple1():never {
    throw new Error ("output and data")
    //console.log("simple1");
}