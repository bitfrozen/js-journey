const promise1 = new Promise((resolve, reject) => {
  console.log('promise 1 called');
  setTimeout(() => {
    resolve({name: 'John', age: 10});
  }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
  console.log('promise 2 called');
  setTimeout(() => {
    resolve({name: 'Tom', age: 20});
  }, 5000);
});
const promise3 = new Promise((resolve, reject) => {
  console.log('promise 3 called');
  setTimeout(() => {
    resolve({name: 'Tay', age: 30});
  }, 2000);
});

async function fetchData(prom) {
  const response = await prom;
  console.log(response);
  return response;
}

(async () => {
  try {
    const result = await Promise.all([fetchData(promise1), fetchData(promise2), fetchData(promise3)]);
    console.log(result);
  } catch (error) {
    console.error('Error during fetchData:', error);
  }
})();

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  console.log(data);
}
getUsers().catch((error) => console.log(error));

const getPosts = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
      // throw new Error('Request Failed'); // Bad solution Brad
      console.log('Request failed:', res.status);
      return;
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getPosts();

try {
  console.log(xxx);
} catch(error) {
  console.log('Error: ' + error);
}

function double (number) {
  if (isNaN(number)) {
    throw new Error(`${number} is not a number`);
  }
  return number * 2;
}

try {
  const y = double('hello');
  console.log(y);
} catch (error) {
  console.log(error);
}