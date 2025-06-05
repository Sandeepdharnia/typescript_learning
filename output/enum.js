"use strict";
var whoType;
(function (whoType) {
    whoType["student"] = "student";
    whoType["teacher"] = "teacher";
    whoType["management"] = "management";
    whoType["labStaff"] = "labStaff";
})(whoType || (whoType = {}));
var who = whoType.teacher;
who = whoType.teacher;
who = whoType.labStaff;
who = whoType.management;
console.log(whoType.teacher);
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 0] = "admin";
    Roles[Roles["manager"] = 1] = "manager";
    Roles[Roles["qa"] = 2] = "qa";
    Roles[Roles["developer"] = 3] = "developer";
    Roles[Roles["user"] = 4] = "user";
})(Roles || (Roles = {}));
var userRole = Roles.user;
console.log(userRole);
