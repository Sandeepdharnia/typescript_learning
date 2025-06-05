enum whoType{
    student = "student",
    teacher = "teacher",
    management = "management",
    labStaff = "labStaff"
}

var who: whoType = whoType.teacher;
who = whoType.teacher
who = whoType.labStaff
who  = whoType.management


console.log(whoType.teacher);


enum Roles{
    admin,
    manager,
    qa,
    developer,
    user
}

var userRole = Roles.user
console.log(userRole);
