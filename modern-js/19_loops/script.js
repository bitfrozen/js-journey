const consoleHeaderStyle = "padding: 5px; background-color: white; color: black; font-weight: bold;";

//
// Loops
//
console.log("%cLoops", consoleHeaderStyle);

for (let i = 0; i <= 5; i = i + 2) {
  console.log("Number " + i);
}

let counter = 0;
while (true) {
  if (counter > 2) {
    break;
  }
  console.log("Counter " + counter);
  counter++;
}

do {
  console.log("Again?");
  counter++;
} while (counter <= 2)