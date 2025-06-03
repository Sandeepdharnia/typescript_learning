var users: string[] = ["abc", "tbc", "kkr"];

var marks: number[] = [50, 60, 30]
var students: Array<string> = ["bajaj", "Akash"]
students.push('anil')


marks.push(100); 
console.log(students, marks);

var collegeName: ReadonlyArray<string> = ['IEL Zurich', 'IIT Delhi']

// here we cant call push or pop methods as it is read only array. 

//collegeName.push()
// console.log();
