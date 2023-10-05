const consoleHeaderStyle = "padding: 5px; background-color: white; color: black; font-weight: bold;";
console.log("%cPrimitives", consoleHeaderStyle);
//
// Primitives
//
// String
const firstName = "Sarah";
console.log(firstName, typeof firstName);
let lastName = "Parker";
lastName[0] = "p";
console.log(lastName);

// Number
const age = 30;
console.log(age, typeof age);
const temp = 98.9;
console.log(temp, typeof temp);

// Boolean
const hasKids = true;
console.log(hasKids, typeof hasKids);

// Null
const aptNumber = null;
console.log(aptNumber, typeof aptNumber);
// The fact that `typeof` categorizes null as `object` is a bug,
// which is not fixed because it would break existing code.
// `null` is a primitive type, not reference.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null
// https://2ality.com/2013/10/typeof-null.html

// Undefined
let score;
console.log(score, typeof score);
const match = undefined;
console.log(match, typeof match);

// Symbol
const id1 = Symbol("id");   // Just creates unique value
const id2 = Symbol("id");   // Just creates unique value
const id3 = Symbol.for("id");    // Creates unique value and places in global registry
const id4 = Symbol.for("id");    // Checks and retrieves value from global registry
console.log(id1===id3);
console.log(id2===id3);
console.log(id3===id4);
console.log(Symbol.for("id"), typeof id1);

// BigInt
const n=9007199254740991n;
console.log(n, typeof n);

console.log("%cReference", consoleHeaderStyle);
//
// Reference
//
// All reference types are of type object

// Array
const numbers = [1, 2, 3, 4, 5];
console.log(numbers, typeof numbers);

// Object
const person = {
  name: "Tom",
};
console.log(person, typeof person);

// Function
// Function is also an object, but an object which implements [[Call]] internal method
// https://262.ecma-international.org/5.1/@sec-11.4.3
function sayHello() {
  console.log("Hello");
}
console.log(sayHello, typeof sayHello);

console.log("%cMemory", consoleHeaderStyle);
//
// Memory
//
let rName = "Tom";
let rAge = 30;
const rPerson = {
  name: rName,
  age: rAge,
};
console.log(rName, rAge, rPerson);

rName = "Jerry";
console.log(rName, rAge, rPerson);

const rNewPerson = rPerson;
rNewPerson.name = "Ben";
console.log(rName, rAge, rPerson);

console.log("%cConversion", consoleHeaderStyle);
//
// Conversion
//
let value = "99.6";
console.log(value, typeof value);
console.log(parseInt(value), typeof parseInt(value));
console.log(parseInt("9a9"), typeof parseInt("9a9"));
console.log(parseFloat(value), typeof parseFloat(value));
console.log(parseFloat("99.1ab23"), typeof parseInt("99.1ab23"));
console.log(+value, typeof +value);
console.log(Number(value), typeof Number(value));
console.log(Number("9a9"), typeof Number("9a9"));

let amount = 100;
console.log(amount, typeof amount);
console.log(amount.toString(), typeof amount.toString());
console.log(String(amount), typeof String(amount));

console.log(Boolean(1), typeof Boolean(1));
console.log(Boolean(0), typeof Boolean(0));
console.log(Boolean(10), typeof Boolean(10));
console.log(Boolean(-10), typeof Boolean(-10));
console.log(Boolean(""), typeof Boolean(""));
console.log(Boolean("false"), typeof Boolean("false"));
console.log(Boolean(null), typeof Boolean(null));

console.log(parseInt("value"), typeof parseInt("value"));
console.log(Math.sqrt(-1), typeof Math.sqrt(-1));
console.log(1 + NaN, typeof (1+NaN));
console.log(undefined + undefined, typeof (undefined + undefined));
console.log("value"/4, typeof ("value"/4));

console.log("%cCoercion", consoleHeaderStyle);
//
// Coercion
//
console.log(4 + "4", typeof (4 + "4"));
console.log(4 * "4", typeof (4 * "4"));
console.log(4 - "4", typeof (4 - "4"));
console.log(4 / "4", typeof (4 / "4"));
console.log(4 % "4", typeof (4 % "4"));
console.log(5 + null, typeof (5 + null));
console.log(5 + true, typeof (5 + true));
console.log(5 + undefined, typeof (5 + undefined));
console.log(Number(null), typeof Number(null));
console.log(Number(true), typeof Number(true));
console.log(Number(undefined), typeof Number(undefined));


