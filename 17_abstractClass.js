"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log("動物在叫!");
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log("旺旺!");
        }
    }
    const dog = new Dog("旺財");
    dog.sayHello();
})();
