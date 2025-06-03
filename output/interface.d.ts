interface info {
    name: string;
    age: number;
    college: string;
}
declare var studentObj: info;
declare var teacher: info;
interface teacherSub extends info {
    subject: string;
}
declare var teacherExtend: teacherSub;
