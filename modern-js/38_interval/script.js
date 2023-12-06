// const intervalId = setInterval(myCallback, 1000, "Hello");
// function myCallback(par) {
//   console.log(par, Date.now());
// }

let intervalID;

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(changeColor, 200);
  }
}

function changeColor() {
  if (document.body.style.backgroundColor !== "black") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

  }
}
function stopChange() {
  clearInterval(intervalID);
  intervalID = null;
}

document.getElementById("start").addEventListener("click", startChange);
document.getElementById("stop").addEventListener("click", stopChange);