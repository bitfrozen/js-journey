console.log(100);
console.log("Helloworld");
console.log(20, "Hello", true);

const x=100;
console.log(x);

console.error("Alert");
console.warn("Warning");

console.table({name: "Tony", email: "tony@example.com"})

console.group("simple");
console.log(x);
console.error("Alert");
console.warn("Warning");
console.groupEnd();

const styles = "padding: 10px; background-color: white; color: green";
console.log("%cHello World", styles);
