console.log(document.getElementById("app-title"));
console.log(document.getElementById("app-title").id);
console.log(document.getElementById("app-title").classList);
console.log(document.getElementById("app-title").className);
console.log(document.getElementById("app-title").getAttribute("id"));
document.getElementById("app-title").title = "Buying list";
document.getElementById("app-title").setAttribute("class", "title");
document.get;

// Change content
const title = document.getElementById("app-title");
console.log(title.textContent);
title.textContent = "Hello World";
title.innerText = "Hello Again";
title.innerHTML = "<strong>Shopping List</strong>";

// Change styles
title.style.color = "red";
title.style.backgroundColor = "black";
title.style.padding = "10px";
title.style.borderRadius = "10px";

// Query select
console.log(document.querySelector("h1"));
console.log(document.querySelector("#app-title"));
console.log(document.querySelector(".container"));
console.log(document.querySelector("input[type=text]"));
console.log(document.querySelector("li:nth-child(2)").innerText);

const secondItem = document.querySelector("li:nth-child(2)");
secondItem.childNodes.forEach(node => {
  if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== "") {
    node.nodeValue = "Apple Juice";
  }
});
// secondItem.innerText = "Apple Juice";
secondItem.style.color = "violet";

const list = document.querySelector("ul");
console.log(list);
const firstItem = list.querySelector("li");
firstItem.style.color = "green";
