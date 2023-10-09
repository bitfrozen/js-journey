const consoleHeaderStyle = "padding: 5px; background-color: white; color: black; font-weight: bold;";

console.log("%cCreate functions", consoleHeaderStyle);
//
// Creating functions
//
function sayHello() {
  console.log("Hello world!");
}

sayHello();

function add(num1, num2) {
  console.log(num1 + num2);
}

add(5, 10);

function subtract(num1, num2) {
  return num1 - num2;
}

const subResult = subtract(10, 2);
console.log(subResult);

function registerUser(user = "Bot") {
  return user + " is registered";
}

console.log(registerUser());

function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));

console.log("%cScope", consoleHeaderStyle);
//
// Declaration vs Expression
//

console.log(addDollarSign(100));

function addDollarSign(value) {
  return "$" + value;
}

// console.log(addPlusSign(200));  // function object not available yet
const addPlusSign = function (value) {
  return "+" + value;
};
console.log(addPlusSign(200));


console.log("%cArrow functions", consoleHeaderStyle);
//
// Arrow Functions
//

// function add(a, b) {
//   return a + b;
// }

const subValue = (a, b) => {
  return a - b;
};
const addValue = (a, b) => a + b;
const double = a => a * 2;
const createObj = () => ({
  name: "Bot",
});

console.log(subValue(4, 1));
console.log(addValue(1, 2));
console.log(double(10));
console.log(createObj());

const numbers = [1, 2, 3];
numbers.forEach(function (n) {
  console.log(n);
});
numbers.forEach(n => console.log(n));

console.log("%cIIFE", consoleHeaderStyle);
//
// Immediately Invoked Functions
//

(function () {
  const user = "Bot";
  const hello = user => console.log(`Hello ${user} from the IIFE`);
  hello(user)
})();

(function (name) {
  console.log(`Hello ${name}`);
})(user);
