import {courseList} from "./courses.js";

console.log("\nA University CSE Department's Course List:\n");

courseList.map((item,i)=>{
    let Details=`Course Code ==> ${item.code}\nCourse Name ==> ${item.name}\n\n`;
    console.log(Details);
})