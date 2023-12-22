function getUserData() {
  toggleButton();
  fetch('https://randomuser.me/api/')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => renderUserInformation(data.results[0]))
    .then(() => {
      setTimeout(toggleButton, 250);
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
      toggleButton();
    });
}

function renderUserInformation(user) {
  console.log(user);
  const nameElement = document.getElementById('user-name');
  nameElement.textContent = `${user.name.title}. ${user.name.first} ${user.name.last}`;
  const emailElement = document.getElementById('user-email');
  emailElement.textContent = user.email;
  const phoneElement = document.getElementById('user-phone');
  phoneElement.textContent = user.phone;
  const locationElement = document.getElementById('user-location');
  locationElement.textContent = `${user.location.city}, ${user.location.state}, ${user.location.country}`;
  const ageElement = document.getElementById('user-age');
  ageElement.textContent = user.dob.age;
  const imageElement = document.getElementById('user-picture');
  imageElement.onload = null;
  return new Promise((resolve) => {
    imageElement.onload = () => {
      resolve();
    };
    imageElement.src = user.picture.large;
  });
}

function updateUser(evt) {
  getUserData();
}

function toggleButton() {
  button.classList.toggle('is-loading');
}

const button = document.getElementById('generate');
button.addEventListener('click', updateUser);
