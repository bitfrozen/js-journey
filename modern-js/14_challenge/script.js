const library = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    status: {
      own: true,
      reading: false,
      read: false,
    }
  },
  {
    title: "1984",
    author: "George Orwell",
    status: {
      own: true,
      reading: false,
      read: false,
    }
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    status: {
      own: true,
      reading: false,
      read: false,
    }
  }
];
console.log(library);

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
console.log(library);

const [ {title: firstBook} ] = library
console.log(firstBook);

console.log(JSON.stringify(library));
console.log(typeof library);