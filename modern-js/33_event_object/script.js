const logo = document.querySelector("img");
function onClick(evt) {
  console.log(evt.target);
  console.log(evt.currentTarget);
  console.log(evt.type);
  console.log(evt.timeStamp);
  console.log(evt.clientX);
  console.log(evt.clientY);
  console.log(evt.offsetX);
  console.log(evt.offsetY);
  console.log(evt.pageX);
  console.log(evt.pageY);
  console.log(evt.screenX);
  console.log(evt.screenY);
}
function onDrag(ev) {
  document.querySelector("h1").textContent = `X:${ev.clientX} Y:${ev.clientY}`;
}
logo.addEventListener("click", onClick);
logo.addEventListener("drag", onDrag);
document.querySelector("a").addEventListener("click", function (ev) {
  ev.preventDefault();
  console.log("Link was clicked");
});

/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/

const itemInput = document.querySelector("#item-input");
const onKeyUp = (ev) => {
  console.log("keyup");
}
const onKeyDown = (ev) => {
  // key
  console.log(ev.key);
  // keyCode
  console.log(ev.keyCode);
  // code
  console.log(ev.code);

  if (ev.repeat) {
    console.log("You are holding down " + ev.code);
  }

  if (ev.shiftKey && ev.code === "KeyK") {
    console.log("You hit Shift + K");
  }
}
itemInput.addEventListener("keyup", onKeyUp);
itemInput.addEventListener("keydown", onKeyDown);
