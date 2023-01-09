"use strict";
class Dog {
    // constructor 稱為構造函數
    // 構造函數會在對象創建時調用
    constructor(name, age) {
        // 在實例方法中，this就表示當前的實例
        // 在構造函數中，當前對象就是新建的對象
        // 可以通過this向新建的對象中添加屬性
        // console.log(this);
        this.name = name;
        this.age = age;
    }
    bark() {
        // alert("汪汪汪!");
        // 在方法中，可以通過this來表示當前調用的對象
        console.log(this);
    }
}
const dog = new Dog("小黑", 3);
const dog2 = new Dog("小白", 4);
console.log(dog);
console.log(dog2);
// console.log(dog); // Dog {name: '旺財', age: 3}
// console.log(dog2); // Dog {name: '旺財', age: 3}
// console.log(dog3); // Dog {name: '旺財', age: 3}
// console.log(dog4); // Dog {name: '旺財', age: 3}
// 沒辦法判斷不同對象
dog2.bark();
