(function () {
  /* 
  以abstract開頭的類是抽象類
    抽象類和其他類區別不大，只是不能用來創建對象
    抽象類是專門用來被繼承的類

    抽象類中可以添加抽象方法
  */

  abstract class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    // 定義抽象方法
    // 抽象方法使用abstract開頭，沒有方法體
    // 抽象方法只能定義在抽象類中，子類必須對抽象方法進行重寫
    abstract sayHello(): void;
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
