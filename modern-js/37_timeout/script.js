// setTimeout(changeText, 2000);
const timerId = setTimeout(changeText, 2000);
console.log("Hello from global scope");

function changeText() {
  document.querySelector("h1").textContent = "Hello from callback"
}

document.querySelector("#cancel").addEventListener("click", () => {
  console.log(timerId);
  clearTimeout(timerId);
  console.log("timer canceled");
});
