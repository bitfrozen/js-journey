const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task complete");
    resolve();
  }, 1000);
});

prom.then(() => {
  console.log("promise consumed.");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async 2 task complete");
    resolve({ name: 'John', age: 30});
  }, 1000);
}).then((user) => console.log(`Promise 2 consumed with`, user));

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async 3 task complete");
    let error = Math.round(Math.random());
    if (!error) {
      resolve({ name: 'Laura', age: 28});
    } else {
      reject(new Error("Something went wrong"));
    }
  }, 1000);
})
getUser
  .then((user) => {
    console.log(`Promise 3 consumed with`, user);
    return user.name;
  })
  .then((name) => {
    console.log(`Promise returned ${name}`);
    return name.length;
  })
  .then((length) => console.log(`User name is ${length} characters`))
  .catch((error) => {
    console.log(error);
    return error.message.length;
  })
  .then((len) => console.log(`Before me comes ${len} character long error`))
  .finally(() => console.log('The promise has been completed.'));

console.log('Hello from global scope');