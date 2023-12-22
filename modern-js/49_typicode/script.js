const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const addTodoToDOM = todo => {
  const divElement = document.createElement('div');
  divElement.classList.add('todo');
  divElement.appendChild(document.createTextNode(todo.title));
  divElement.setAttribute('data-id', todo.id);
  if (todo.completed) {
    divElement.classList.add('done');
  }
  document.getElementById('todo-list').appendChild(divElement);
};

const getTodos = () => {
  fetch(apiUrl + '?_limit=10')
    .then((res) => res.json())
    .then((data) => data.forEach((todo) => addTodoToDOM(todo)));
};

const createTodo = (evt) => {
  evt.preventDefault();
  const newTodo = {
    title: evt.target.firstElementChild.value,
    completed: false
  };

  fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .then(data => addTodoToDOM(data));
};

const toggleCompleted = (evt) => {
  if (evt.target.classList.contains('todo')) {
    evt.target.classList.toggle('done');
    updateTodo(evt.target.dataset.id, evt.target.classList.contains('done'));
  }
};

const updateTodo = (id, completed) => {
  fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    body: JSON.stringify({completed}),
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(res => res.json())
    .then(data => console.log(data));
};

const deleteTodo = (evt) => {
  if (evt.target.classList.contains('todo')) {
    const itemId = evt.target.dataset.id;
    fetch(`${apiUrl}/${itemId}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(() => evt.target.remove());
  }
};

const init = () => {
  document.addEventListener('DOMContentLoaded', getTodos);
  document.getElementById('todo-form').addEventListener('submit', createTodo);
  document.getElementById('todo-list').addEventListener('click', toggleCompleted);
  document.getElementById('todo-list').addEventListener('dblclick', deleteTodo); // That's a bad interaction design
};

init();