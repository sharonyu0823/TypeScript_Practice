"use strict";
// 所謂的類可以理解為對象的模型
// 程序中根據類創建指定類型的對象
// 舉例: 通過Person類來創建人的對象
// 舉例: 通過Person類來創建人的對象
//
// class 類名 {
//     屬性名: 類型;
//     constructor(參數: 類型) {
//         this.屬性名 = 參數;
//     }
//     方法名() {
//         ...
//     }
// }
class Person1 {
    constructor() {
        /*
          實例屬性:
          const per = new Person1();
          per.name
      
      
          靜態屬性:
          Person.age
      
          readonly 表示只讀的屬性 不能夠修改
          */
        // 定義實例屬性
        // readonly name: string = "孫悟空";
        this.name = "孫悟空";
        // 在屬性前使用static關鍵字可以定義類屬性(靜態屬性)
        // 靜態屬性: 不需要創建對象，就可以使用的屬性
        // 靜態屬性必須要用類屬性來讀取
        // static readonly age: number = 18;
        this.age = 18;
    }
    /*
    實例方法
    靜態方法
     */
    // 定義方法
    //   static sayHello() {
    //     console.log("Hello 大家好!");
    //   }
    sayHello() {
        console.log("Hello 大家好!");
    }
}
const per = new Person1();
console.log(per);
console.log(per.name);
// console.log(Person1.age);
console.log(per.name);
per.name = "tom";
console.log(per.name);
// console.log(Person1.age);
// Person1.age = 33;
// console.log(Person1.age);
per.sayHello();
// Person1.sayHello();
// ** 靜態沒有用很多 還是以實例為主
