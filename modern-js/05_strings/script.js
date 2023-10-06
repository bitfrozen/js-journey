let x;
const vardasŠauks = "Jonai"
const amžius = 30;
x = "Sveiki atvykę" + " " + vardasŠauks + ". Ar jums tikrai" + " " + amžius + "?";
console.log(x);

x = `Sveiki atvykę ${vardasŠauks}. Ar jums tikrai ${amžius}?`;
console.log(x);

const s= new String("Gerą dieną");
console.log(s.length)
console.log(typeof s);
console.log(s[0]);
console.log(Object.getPrototypeOf(s));
console.log(s.toUpperCase());
console.log(s.charAt(0));
console.log(s.indexOf("a"));
console.log(s.substring(4, -1));
console.log(s.slice(5, -1));
console.log(s.replace("dieną", "naktį"));
console.log(s.includes("dien"));
console.log(typeof s.valueOf());
console.log(s.split(""));