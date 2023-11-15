const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("h1");
const form = document.getElementById("item-form");

function onInput(evt) {
  heading.textContent = evt.target.value;
}

function onChecked(evt) {
  const isChecked = evt.target.checked;
  heading.textContent = isChecked ? "Checked" : "Not checked";
}

function onFocus(evt) {
  evt.target.style.outlineStyle = "solid";
  evt.target.style.outlineStyle = "1px ";
  evt.target.style.outlineStyle = "green";
}

function onBlur(evt) {
  evt.target.style.outlineStyle = "none";
}

function onSubmit(evt) {
  evt.preventDefault();

  if (itemInput.value === "" || priorityInput.value === "0") {
    alert("Please fill in all fields");
  }
}

function onSubmit2(evt) {
  evt.preventDefault();

  const formData = new FormData(form);
  console.log(formData.get("item"), formData.get("priority"));
  const entries = formData.entries();
  for (const entry of entries) {
    console.log(entry);
  }
}

itemInput.addEventListener("input", onInput);
priorityInput.addEventListener("input", onInput);
checkbox.addEventListener("input", onChecked);
itemInput.addEventListener("focus", onFocus);
itemInput.addEventListener("blur", onBlur);
form.addEventListener("submit", onSubmit2);

const listItems = document.querySelectorAll("li");
listItems.forEach(item => {
  item.addEventListener("click", (evt) => {
    evt.target.remove();
  })
})

const list = document.querySelector("ul");
list.addEventListener("mouseover", (evt) => {
  if (evt.target.tagName === "LI") {
    evt.target.style.color = "red";
  }
});
list.addEventListener("mouseout", (evt) => {
  if (evt.target.tagName === "LI") {
    evt.target.style.color = "black";
  }
});

window.addEventListener("load", () => console.log("Page loaded"));
window.addEventListener("DOMContentLoaded", () => console.log("DOM loaded"));
console.log("JS running");

window.addEventListener("resize", () => {
  document.querySelector("h1").innerText = `Resized to ${window.innerHeight} x ${window.innerWidth}`;
});