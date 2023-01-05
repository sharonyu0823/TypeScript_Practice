// Type Aliases(型別別名)
type Person = {
  name: string;
  age: number;
};

let person1: Person;

let people1: Person[];

// ========================================================================
// original

// let person1: {
//     name: string;
//     age: number;
// };

// let people1: {
//     name: string;
//     age: number;
// }[];

// {
//     name: string;
//     age: number;
// }

// type definition is duplicate. so now you want to avoid this kind of duplication, you can create a so-called type alias.

// you can define your own base type in which a more complex type definition is stored and then use that type alias instead of repeating type definition

// reference: https://willh.gitbook.io/typescript-tutorial/advanced/type-aliases
