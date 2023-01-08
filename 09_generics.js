// 泛型(generic)
function insertAtBeginning(array, value) {
    const newArray = [value, ...array];
    return newArray;
}
const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");
// updatedArray[0].split("");
console.log(updatedArray);
// this way, now typescript can understand array and value should be the same types.
// before(hover to updatedArray): any[]
// after(add<T> and T): number[]
// NOTE:
// Spread Operator -> ex. ...array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
