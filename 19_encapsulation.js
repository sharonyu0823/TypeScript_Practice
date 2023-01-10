"use strict";
(function () {
    class Person {
        constructor(name, age) {
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
        set age1(value) {
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
        constructor(num) {
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
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C("xxx", 39);
    console.log(c);
})();
