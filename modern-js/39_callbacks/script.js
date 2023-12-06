// function toggle(e) {
//   console.log('callback ran');
//   e.target.classList.toggle('danger');
// }
//
// document.querySelector('button').addEventListener('click', toggle);

const posts = [
  {title: "Post One", body: "This is post one"},
  {title: "Post Two", body: "This is post two"},
];

function createPost(post, cb) {
  setTimeout(()=> {
    posts.push(post);
    cb();
  }, 2000)
}

function getPosts() {
  setTimeout(() => {
    posts.forEach(function (post) {
      const divEl = document.createElement("div");
      divEl.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector("#posts").appendChild(divEl);
    });
  }, 1000);
}

createPost({title: "Post Three", body: "This is post three"}, getPosts);
