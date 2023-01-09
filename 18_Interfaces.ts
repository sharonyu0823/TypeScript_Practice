(function () {
  // 描述一個對象的類型
  type myType = {
    name: string;
    age: number;
    // [propname: string]: any;
  };

  //   type myType = {}; //報錯

  /* 
  接口用來定義一個類結構，用來定義一個類中應該包含哪些屬性和方法
  
  同時接口也可以當成類型聲明去使用
   */

  interface myInterface {
    name: string;
    age: Number;
  }

  interface myInterface {
    gender: string;
  }

  //   const obj: myType = {
  //     name: "sss",
  //     age: 111,
  //   };

  const obj: myInterface = {
    name: "sss",
    age: 111,
    gender: "男",
  };

  /* 
  接口可以在定義的時候去限制類的結構
  接口中，不可以有實際的值
  接口指定義對象的結構，而不考慮實際值
    在接中所有的方法都是抽象方法
   */

  interface myInter {
    name: string;

    sayHello(): void;
  }

  /* 
  定義類時，可以使類去實現一個接口，
    實現接口是使類滿足接口的要求
   */

  class MyClass implements myInter {
    name: string;

    constructor(name: string) {
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
