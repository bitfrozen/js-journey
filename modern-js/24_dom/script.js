console.log(document.all);
console.log(document.all[11]);
console.log(document.all.length);

console.log(document.documentElement);

console.log(document.head);
console.log(document.body);

console.log(document.head.children);
console.log(document.body.children);

console.log(document.doctype);
console.log(document.domain);
console.log(document.URL);
console.log(document.characterSet);
console.log(document.contentType);

console.log(document.forms);
console.log(document.forms[0].action);

console.log(document.documentElement.classList);
console.log(document.images);
console.log(document.images[0].src);

const forms = Array.from(document.forms)
forms.forEach((form) => console.log(form))