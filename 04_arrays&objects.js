"use strict";
// we want to have an arrya of strings in hobbies
let hobbies;
hobbies = ['sports', 'cooking'];
// hobbies = ['sports', 'cooking', 12] // error
// ========================================================================
// we dont't want to let TS know about the types of values stored in this variable. Anything is allowed.
let person;
person = {
    name: 'Max',
    age: 32
};
// person = {
// isEmployee: true;
// } // error
// ========================================================================
// define array types and object types
let people;
