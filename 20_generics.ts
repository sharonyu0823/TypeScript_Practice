// function fn(a: number): number {
//   return a;
// }

/* 
在定義函數或是類時，如果遇到類型不明確就可以使用泛型
 */

function fn<T>(a: T): T {
  return a;
}

// 直接調用具有泛型的函數
let result = fn(10); // 不指定泛型 TS可以自動對類型進行推斷
let result2 = fn<string>("hello"); // 指定泛型

// ======================================
function fn2<T, K>(a: T, b: K): T {
  return a;
}

fn2<number, string>(123, "hello");

// ======================================
// 限制泛型的範圍

interface Inter {
  length: number;
}

// T extends Inter 表示泛型T必須時Inter實現類(子類)
function fn3<T extends Inter>(a: T): number {
  return a.length;
}

// fn3("123");
// fn3(123);
// fn3({ length: 10 });
// fn3({ name: 10 });

class MyClass<T> {
  name: T;
  constructor(name: T) {
    this.name = name;
  }
}

const m = new MyClass<string>("孫悟空");
