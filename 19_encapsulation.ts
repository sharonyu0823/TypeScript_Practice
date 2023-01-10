(function () {
  class Person {
    // 可以在屬性前 添加術性的修飾符
    /* 
    public 修飾的屬性可以再任意位置修改 默認值
    private 私有屬性 只能在類內部進行修改
        - 通過類中添加方法 使得私有屬性可以在外部被訪問
    protected 受保護的屬性 只能在當前類和當前類的子類中訪問
     */
    name: string;
    private age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    /* 
    getter方法 用來讀取屬性
    setter方法 用來設置屬性
        - 他們被稱為屬性的存取器
     */

    // 定義方法 用來獲取private屬性
    // getAge() {
    //   return this.age;
    // }

    // // 定義方法 用來設置private屬性
    // setAge(value: number) {
    //   // 判斷value是否合法
    //   if (value >= 0) {
    //     this.age = value;
    //   }
    // }

    // 假設有多種getter and setter
    // 屬性 容易被修改錯
    // ts中 設置getter方法

    get age1() {
      console.log("get age()執行了");
      return this.age;
    }

    set age1(value: number) {
      if (value >= 0) {
        this.age = value;
      }
    }
  }

  const per = new Person("孫悟空", 18);

  /* 
  屬性可以任意被修改
    會導致對象中的數據變得非常不安全
  */

  per.name = "豬八戒";
  //   per.age = 38;
  //   per.setAge(-38);

  console.log(per);

  per.age1 = 38;
  console.log(per.age1);

  class A {
    protected num: number;

    constructor(num: number) {
      this.num = num;
    }
  }

  class B extends A {
    test() {
      console.log(this.num);
    }
  }

  const b = new B(123);
  //   b.num = 33;

  class C {
    constructor(public name: string, public age: number) {}
  }

  const c = new C("xxx", 39);
  console.log(c)
})();
