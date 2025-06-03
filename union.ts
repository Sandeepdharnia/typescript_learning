var studentData: string | number | [] = "Raj";

studentData = 10;

studentData = [];

function fruitData(): string|string[] {

    var item = 2
    if (item > 1) {
        return ["apple", "banana"]
    }
    else{
      return "apple";
    }
}

console.log(fruitData());


function studentData1(name: string | number | boolean) {
    return name
}

console.log(studentData1(true));
