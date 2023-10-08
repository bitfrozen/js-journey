const consoleHeaderStyle = "padding: 5px; background-color: white; color: black; font-weight: bold;";
console.log("%cObject literal", consoleHeaderStyle);

const person = {
  name: "John Doe",
  age: 30,
  isAdmin: true,
  address: {
    street: "123 Main st",
    city: "Boston",
    state: "MA",
  },
  hobbies: ["music", "sports"],
};

console.log(person.name);
console.log(person["age"]);
console.log(person.address.state);
console.log(person.hobbies[0]);

console.log(person);
person.name = "Jane Doe";
delete person.age;
console.log(person);

person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};
person.greet();

const badObject = {
  "call me": function () {
    console.log("How did you call me?");
  }
};
badObject["call me"]();

console.log("%cObject spread & methods", consoleHeaderStyle);
const todo = {};
todo.id = 1;
todo.name = "Buy Milk";
todo.completed = false;
console.log(todo);

const locations = {
  address: {
    coords: {
      lat: 42.3601,
      lng: -71.0589,
    },
  },
};

console.log({...todo, ...locations});
console.log(Object.assign({}, todo, locations));

const people = [
  {id: 1, name: "John"},
  {id: 2, name: "Sara"},
  {id: 3, name: "Mike"},
];

console.log(people[0].name);
console.log(Object.keys(people[1]));
console.log(Object.keys(todo).length);
console.log(Object.entries(todo));
console.log(todo.hasOwnProperty("name"));

console.log("%cDestructuring and Naming", consoleHeaderStyle);

const firstName = "John";
const lastName = "Doe";
const age = 30;
const simplePerson = {
  firstName,
  lastName,
  age,
};
console.log(simplePerson);

const {name, hobbies: [mainHobby, ...otherHobbies], address: {street: personStreet}} = person;
console.log(
  `name: ${name},
main hobby: ${mainHobby},
other hobbies: ${otherHobbies},
street: ${personStreet}`
);
