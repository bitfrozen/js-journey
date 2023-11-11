const divElement = document.createElement("div");
divElement.className = "custom-div";
divElement.id = "custom-div";
divElement.setAttribute("title", "Custom DIV");
// divElement.innerText = "Hello World";
divElement.appendChild(document.createTextNode("Hello World"));
console.log(divElement.outerHTML);

document.body.appendChild(divElement);
document.querySelector(".items").appendChild(divElement);
