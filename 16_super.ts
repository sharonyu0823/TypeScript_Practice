(function () {
  class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello() {
      console.log("動物在叫!");
    }
  }

  class Dog extends Animal {
    age: number;

    constructor(name: string, age: number) {
      // 如果在子類中寫了構造函數，在子類構造函數中必須對父類的構造函數進行調用
      super(name); // 調用父類的構造函數
      this.age = age;
    }
    sayHello() {
      // 在類的方法中，super就表示當前類的父類
      super.sayHello();
    }
  }

  const dog = new Dog("旺財", 5);
  dog.sayHello();
})();
