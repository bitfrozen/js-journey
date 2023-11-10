const consoleHeaderStyle = "padding: 5px; background-color: white; color: black; font-weight: bold;";

//
// Access
//
console.log("%cAccess", consoleHeaderStyle);

console.log(window.document);
console.dir(document.body.innerHTML);
console.log(document.links[0])

document.write("Hello from JS");
console.log(document.getElementById("main"));
const main = document.getElementById("main");
// main.innerHTML = "<h1>Hello from main</h1>";
document.querySelector("#main h1").innerText = "Welcome";
