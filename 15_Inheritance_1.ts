(function () {
  // 定義狗類
  class Dog {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    sayHello() {
      console.log("汪汪!");
    }
  }

  // 定義貓類
  class Cat {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    sayHello() {
      console.log("喵喵!");
    }
  }

  const dog = new Dog("旺財", 5);
  const cat = new Cat("咪咪", 3);

  console.log(dog);
  dog.sayHello();

  console.log(cat);
  cat.sayHello();
})();

// 類是一樣的 也就是說 可以使用繼承 參照15_Inheritance_2
