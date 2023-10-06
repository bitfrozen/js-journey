let d;
d = new Date(); // Summer time
console.log(d);
console.log(d.toString());
console.log(`new Date() timezone offset: ${d.getTimezoneOffset()}`);

d = new Date(2021, 1, 10, 1, 51, 1, );  // Standard time
console.log(d.toString());
d = new Date(2021, 1, 10, 25, 91, 1, );  // Standard time
console.log(d.toString());
d = new Date("2021-02-10T22:51:01");  // Standard time
// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
console.log(d.toString());
console.log(`new Date("2021-02-10T22:51:01") timezone offset: ${d.getTimezoneOffset()}`);
d = new Date("2021-02-10T22:51:01Z");  // Standard time
console.log(d.toString());
console.log(`new Date("2021-02-10T22:51:01Z") timezone offset: ${d.getTimezoneOffset()}`);
console.log(d.getUTCDate());
console.log(Date.now());
console.log(d.getTime());
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getMinutes());
console.log(Intl.DateTimeFormat("lt-LT").format(d));
console.log(Intl.DateTimeFormat("default").format(d));
console.log(Intl.DateTimeFormat("default", {month: "long"}).format(d));
console.log(d.toLocaleString("default", {month: "short"}));