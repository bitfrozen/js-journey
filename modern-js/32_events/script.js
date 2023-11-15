//
// Adding click event
//
const clearBtn = document.querySelector("#clear");
function clearItems() {
  // const itemList = document.querySelectorAll("#item-list li");
  // itemList.forEach(item => item.remove());

  const itemContainer = document.querySelector("#item-list");
  while (itemContainer.firstChild) {
    itemContainer.removeChild(itemContainer.firstChild);
  }

  // itemContainer.innerHTML = "";
}
clearBtn.addEventListener("click", clearItems);
setTimeout(() => clearBtn.removeEventListener("click", clearItems), 5000);

//
// Adding other mouse events
//
const logo = document.querySelector("img");
const onClick = () => console.log("clicked logo");
const onDoubleClick = () => console.log("double clicked logo");
const onRightClick = () => console.log("right clicked logo");
const onMouseDown = () => console.log("mouse downed logo");
const onMouseUp = () => console.log("mouse upped logo");
const onMouseWheel = () => console.log("mouse wheel over logo");
const onMouseOver = () => console.log("mouse over logo");
const onMouseOut = () => console.log("mouse out of logo");
const onDragStart = () => console.log("start drag logo");
const onDrag = () => console.log("drag logo");
const onDragEnd = () => console.log("end drag logo");
logo.addEventListener("click", onClick);
logo.addEventListener("dblclick", onDoubleClick);
logo.addEventListener("contextmenu", onRightClick);
logo.addEventListener("mousedown", onMouseDown);
logo.addEventListener("mouseup", onMouseUp);
logo.addEventListener("wheel", onMouseWheel);
logo.addEventListener("mouseover", onMouseOver);
logo.addEventListener("mouseout", onMouseOut);
logo.addEventListener("dragstart", onDragStart);
logo.addEventListener("drag", onDrag);
logo.addEventListener("dragend", onDragEnd);