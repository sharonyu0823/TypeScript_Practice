"use strict";
(function () {
    //   const obj: myType = {
    //     name: "sss",
    //     age: 111,
    //   };
    const obj = {
        name: "sss",
        age: 111,
        gender: "男",
    };
    /*
    定義類時，可以使類去實現一個接口，
      實現接口是使類滿足接口的要求
     */
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log("Hello~");
        }
    }
    /* 接口舉例來說
    充電要插頭 那插頭就要符合插座的規格
    
    所以接口 可被視為 規格
  
    只要你實現這個接口 也就是滿足這個規範 那你就可以在指定場景中作使用
     */
})();
