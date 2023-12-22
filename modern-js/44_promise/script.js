const posts = [
  {title: "Post One", body: "This is post one"},
  {title: "Post Two", body: "This is post two"},
];

function createPost(post) {
  console.log("Calling `createPost`");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Creating new post");
      let err = Math.round(Math.random());
      if (!err) {
        posts.push(post);
        resolve();
      } else {
        reject(new Error("failed to create post"));
      }
    }, 2000);
  });
}

function getPosts() {
  console.log("Getting posts");
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector("#posts").appendChild(div);
    });
  }, 1000);
}

function showError(reason) {
  const errorBanner = document.createElement("h3");
  errorBanner.innerHTML = `<strong>${reason}</strong>`;
  document.getElementById("posts").appendChild(errorBanner);
  console.log(reason);
}

createPost({title: "Post Three", body: "This is post"})
  .then(() => console.log('Created post'))
  .catch(showError)
  .finally(getPosts);
