const consoleHeaderStyle = "padding: 5px; background-color: white; color: black; font-weight: bold;";

//
// Truthy & Falsy
//
console.log("%cTruthy & Falsy", consoleHeaderStyle);

console.log("false", Boolean(false));
console.log("0", Boolean(0));
console.log("\"\"", Boolean(""));
console.log("null", Boolean(null));
console.log("undefined", Boolean(undefined));
console.log("NaN", Boolean(NaN));

//
// Operators
//
console.log("%cOperators", consoleHeaderStyle);

console.log(10 && 20 && 30);
console.log(10 && 0 && 30);

const posts1 = [];
console.log(posts1[0]);
posts1.length > 0 && console.log(posts1[0]);

console.log(10 || 20 || 30);
console.log(0 || null || NaN);

console.log(10 ?? 20);
console.log(null ?? 20);
console.log(undefined ?? 20);
console.log(0 ?? 20);
console.log("" ?? 20);

//
// Logical Assignments
//
console.log("%cLogical Assignments", consoleHeaderStyle);

// Check for false
let a = false;
a = a || 10;
console.log(a);
a ||= 20;
console.log(a);

let b = 10;
b = b && 20;
console.log(b);
b &&= 30;
console.log(b);

// Check for null or undefined
let c = null
c = c ?? {};
console.log(c);
c = undefined;
c ??= 10;
console.log(c);
