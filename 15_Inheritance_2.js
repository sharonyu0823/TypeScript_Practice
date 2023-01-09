"use strict";
(function () {
    // 定義動物類
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log("動物在叫");
        }
    }
    /*
    Dog extends Animal
     - Animal被稱為父類，Dog被稱為子類
     - 使用繼承後，子類會與有父類所有的方法和屬性
     - 通過繼承可以將多個類中共有的代碼寫在一個父類中，
        這樣只需要寫一次即可讓所有的子類都同時擁有父類中的方法和屬性
  
        如果希望在子類中添加一些父類沒有的屬性，直接加就可以了
  
     - 如果子類中添加了和父類相同的方法，則子類方法會覆蓋掉父類，這種方式叫做方法重寫
    */
    // 定義狗類
    // 使Dog類繼承Animal類
    class Dog extends Animal {
        run() {
            console.log(`${this.name}在跑!`);
        }
        sayHello() {
            console.log('汪汪!');
        }
    }
    // 定義貓類
    // 使Cat類繼承Animal類
    class Cat extends Animal {
        sayHello() {
            console.log('喵喵!');
        }
    }
    const dog = new Dog("旺財", 5);
    const cat = new Cat("咪咪", 3);
    console.log(dog);
    dog.sayHello();
    dog.run();
    console.log(cat);
    cat.sayHello();
})();
