const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = document.querySelectorAll("li");
console.log(items, items.length);
items.forEach(i => console.log(i));

function run() {
  console.log(itemList.className);
  console.log(itemList.classList);
  items.forEach((item, idx) => {
    item.style.color = "red";
    if (idx === 2) {
      item.style.color = "blue";
    }
  })
}

document.querySelector("button").onclick = run;