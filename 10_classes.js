class Stduent {
    // longhand notation
    //   firstName: string;
    //   lastName: string;
    //   age: number;
    //   private courses: string[];
    //   constructor(first: string, last: string, age: number, courses: string[]) {
    //     this.firstName = first;
    //     this.lastName = last;
    //     this.age = age;
    //     this.courses = courses;
    //   }
    // shorthand notation
    constructor(first, last, age, courses) {
        this.first = first;
        this.last = last;
        this.age = age;
        this.courses = courses;
    }
    // add method
    enrol(courseName) {
        this.courses.push(courseName);
    }
    listCourses() {
        return this.courses.slice();
    }
}
const student = new Stduent("Max", "Yu", 32, ["Angular"]);
student.enrol("React");
// if I add private on courses, it will show:
// student.courses // error
const listCourses = student.listCourses(); // Angular, React
// student.courses => Angular, React
console.log(student);
console.log(listCourses);
