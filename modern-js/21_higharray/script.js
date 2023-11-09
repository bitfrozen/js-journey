const consoleHeaderStyle = "padding: 5px; background-color: white; color: black; font-weight: bold;";

//
// Loops
//
console.log("%cLoops", consoleHeaderStyle);

const items = [{name: "book"}, {name: "table"}, {name: "chair"}, {name: "kite"}];
for (const item of items) {
  console.log(item.name);
}

const map = new Map();
map.set("name", "John");
map.set("age", 30);

for (const [key, value] of map) {
  console.log(key, value);
}

const colorObj = {
  color1: "red", color2: "blue", color3: "green", color4: "yellow",
};
for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

const colorArray = ["red", "blue", "green", "yello"];
for (const idx in colorArray) {
  console.log(colorArray[idx]);
}

//
// Hight array foreach
//
console.log("%cHight array: foreach", consoleHeaderStyle);

const socials = ["Twitter", "LinkedIn", "Facebook", "Instagram"];
socials.forEach((item, idx, arr) => console.log(`${idx} - ${item}`, arr));

function logSocial(social) {
  console.log(social);
}
socials.forEach(logSocial);

const socialNetworks = [
  {name: "Twitter", URL: "https://twitter.com"},
  {name: "LinkedIn", URL: "https://linkedin.com"},
  {name: "Facebook", URL: "https://facebook.com"},
  {name: "Instagram", URL: "https://instagram.com"},
];
socialNetworks.forEach(item => console.log(item.url));

//
// Hight array filter
//
console.log("%cHight array: filter", consoleHeaderStyle);

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers1.filter(item => item % 2 === 0);
console.log(result);

const companies = [
  { name: "Company A", category: "Finance", start: 1981, end: 2004 },
  { name: "Company B", category: "Retail", start: 1992, end: 2008 },
  { name: "Company C", category: "Auto", start: 1999, end: 2007 },
  { name: "Company D", category: "Technology", start: 2009, end: 2014 },
  { name: "Company E", category: "Fashion", start: 1986, end: 2010 },
  { name: "Company F", category: "Food", start: 1987, end: 2020 },
  { name: "Company G", category: "Insurance", start: 2003, end: 2022 },
  { name: "Company H", category: "Energy", start: 2010, end: 2023 },
  { name: "Company I", category: "Retail", start: 2000, end: 2019 }
];
console.log(companies.filter(company => company.category === "Retail"))
console.log(companies.filter(company => company.start >= 1990 && company.end <= 2010))
console.log(companies.filter(company => company.end - company.start >= 10));

//
// Hight array map
//
console.log("%cHight array: map", consoleHeaderStyle);

const numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2.map(n => n * n));

console.log(companies.map(company => company.name));
console.log(companies.map(company => {
  return {
    name: company.name,
    category: company.category
  }
}));

//
// Hight array reduce
//
console.log("%cHight array: reduce", consoleHeaderStyle);

console.log(numbers1.reduce((prev, curr) => { return prev + curr }, 2));
const cart = [
  {id: 1, name: "Product 1", price: 125},
  {id: 2, name: "Product 2", price: 150},
  {id: 3, name: "Product 3", price: 175},
];
console.log(cart.reduce((prv, cur) => {
  return prv + cur.price
}, 0));
