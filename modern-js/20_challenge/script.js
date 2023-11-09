const consoleHeaderStyle = "padding: 5px; background-color: white; color: black; font-weight: bold;";

//
// FuzzBuzz
//
console.log("%cFuzzBuzz", consoleHeaderStyle);

for (let i = 1; i <= 100; i++) {
  let result = "";
  if (i % 3 === 0) {
    result += "Fuzz";
  }
  if (i % 5 === 0) {
    result += "Buzz";
  }
  result = result || `${i}`;

  console.log(result);
}