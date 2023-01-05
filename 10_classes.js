var Stduent = /** @class */ (function () {
    function Stduent(first, last, age, courses) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }
    // add method
    Stduent.prototype.enrol = function (courseName) {
        this.courses.push(courseName);
    };
    Stduent.prototype.listCourses = function () {
        return this.courses.slice();
    };
    return Stduent;
}());
var student = new Stduent("Max", "Yu", 32, ["Angular"]);
student.enrol("React");
// if I add private on courses, it will show:
// student.courses // error
var listCourses = student.listCourses(); // Angular, React
// student.courses => Angular, React
console.log(student);
console.log(listCourses);
