function getJoke() {
  jokeContainer.textContent = "Loading...";
  const apiEndpoint = "https://api.chucknorris.io/jokes/random";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", apiEndpoint);
  xhr.onload = updateJoke;
  xhr.onerror = () => {
    const err = this.statusText;
    console.error(`Error ${err}`);
  };
  xhr.send();
}

function updateJoke() {
  if (this.readyState === 4 && this.status === 200) {
    const joke = JSON.parse(this.responseText);
    jokeContainer.innerHTML = joke.value;
  } else {
    console.error(this.statusText);
  }
}

const jokeContainer = document.getElementById("joke");
document.addEventListener("DOMContentLoaded", getJoke);
document.getElementById("joke-btn").addEventListener("click", getJoke);
