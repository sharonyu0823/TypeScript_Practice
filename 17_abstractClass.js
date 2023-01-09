"use strict";
(function () {
    /*
    以abstract開頭的類是抽象類
      抽象類和其他類區別不大，只是不能用來創建對象
      抽象類是專門用來被繼承的類
  
      抽象類中可以添加抽象方法
    */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log("旺旺!");
        }
    }
    class Cat extends Animal {
        sayHello() {
            console.log("喵喵!");
        }
    }
    const dog = new Dog("旺財");
    dog.sayHello();
    const cat = new Cat("咪咪");
    cat.sayHello();
    // const an = new Animal(); // 通過抽象類來避免被繼承
})();
