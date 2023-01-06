interface Human {
  firstName: string;
  age: number;

  greet: () => void;
  // every human should have a method to greet other humans
}

let max: Human;

max = {
  firstName: "Max",
  age: 32,
  greet() {
    console.log("Hello");
  },
};

class Instructor implements Human {
  //   constructor(public firstName: string, public age: number) {}

  firstName: string;
  age: number;
  greet() {
    console.log("Hello");
  }
  // greet就只是定義class的方法 greet可以任意命名 不一定要叫greet
}

// they dont't just act as object types. Instead, they also force us to set up a certain structure for our classes.

// strict mode: https://www.angularjswiki.com/angular/property-has-no-initializer-and-is-not-definitely-assigned-in-the-constructor/
