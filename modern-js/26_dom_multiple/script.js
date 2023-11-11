const listItems = document.querySelectorAll(".item");
console.log(listItems[1].innerText);
listItems.forEach((item, idx) => {
  item.style.color = "red";
  if (idx === 1) {
    item.remove();
  }
});

const listItems2 = document.getElementsByClassName("item");
const listItemsArray = Array.from(listItems2);
console.log(listItems2);
console.log(listItemsArray);

const listItems3 = document.getElementsByTagName("li");
console.log(listItems3[0].innerText);
