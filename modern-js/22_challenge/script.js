const consoleHeaderStyle = "padding: 5px; background-color: white; color: black; font-weight: bold;";

//
// Young people
//
console.log("%cYoung people", consoleHeaderStyle);

const people = [{
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "123-456-7890",
  age: 24
}, {
  firstName: "Jane",
  lastName: "Smith",
  email: "jane.smith@example.com",
  phone: "234-567-8901",
  age: 30
}, {
  firstName: "Emily",
  lastName: "Johnson",
  email: "emily.johnson@example.com",
  phone: "345-678-9012",
  age: 19
}, {
  firstName: "Michael",
  lastName: "Brown",
  email: "michael.brown@example.com",
  phone: "456-789-0123",
  age: 35
}, {firstName: "Sarah", lastName: "Davis", email: "sarah.davis@example.com", phone: "567-890-1234", age: 22}];

console.log(people.filter(peep => peep.age < 25)
  .map(peep => {
    return {
      name: peep.firstName + " " + peep.lastName, email: peep.email,
    };
  }));

//
// Sum of positive
//
console.log("%cSum of positive", consoleHeaderStyle);

const numbers = [2, -30, 50, 20, -12, -9, 7];
console.log(numbers.reduce((prev, cur) => {
  if (cur > 0) {
    return prev + cur;
  } else {
    return prev;
  }
}, 0));

//
// CAPITAL
//
console.log("%cCAPITAL", consoleHeaderStyle);

const words = ["coder", "programmer", "developer"];
words.forEach((word, idx) => words[idx] = word[0].toUpperCase() + word.slice(1));
console.log(words);
