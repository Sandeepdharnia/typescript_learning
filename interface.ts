interface info {
    name: string
    age: number
    college:string
}
    
    
var studentObj:info = {
    name: 'raj',
    age: 30, 
    college: "itc hisar"

}

var teacher: info = {
  name: "Sam",
  age: 50,
  college: "itc hisar",
};

// to add new information then use extends

interface teacherSub extends info {
  subject:string
}

var teacherExtend:teacherSub = {
  name: "Sam",
  age: 50,
  college: "itc hisar",
  subject:"Math"
};
console.log(teacherExtend);
