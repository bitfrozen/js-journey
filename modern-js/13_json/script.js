const consoleHeaderStyle = "padding: 5px; background-color: white; color: black; font-weight: bold;";
console.log("%cJSON", consoleHeaderStyle);

const human = {
  name: 'John',
  age: 30,
  city: 'New York',
};

const humanStr = JSON.stringify(human)
console.log(humanStr);
console.log(JSON.parse(humanStr));