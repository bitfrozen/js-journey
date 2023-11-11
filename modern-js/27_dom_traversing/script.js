const parent = document.querySelector(".parent");
const children = parent.children;
console.log(children);

parent.firstElementChild.innerText = "You are the first of my name";
parent.lastElementChild.innerText = "You are the youngest";

children[0].parentElement.style.border = "1px solid #ccc";
children[0].parentElement.style.padding = "10px";

const secondChild = document.querySelector(".child:nth-child(2)");
secondChild.innerText = "You will be priest";
secondChild.nextElementSibling.style.color = "green";

console.log(parent.childNodes);
const node1 = parent.childNodes[0]
node1.nodeValue = "";
console.log(node1.nodeName, node1.nodeType, node1.nodeValue, node1.nodeValue.length);
