"use strict";
let max;
max = {
    firstName: "Max",
    age: 32,
    greet() {
        console.log("Hello");
    },
};
class Instructor {
    constructor(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }
    greet() {
        console.log("Hello");
    }
}
const ins = new Instructor("拉拉", 23);
// they dont't just act as object types. Instead, they also force us to set up a certain structure for our classes.
// strict mode: https://www.angularjswiki.com/angular/property-has-no-initializer-and-is-not-definitely-assigned-in-the-constructor/
