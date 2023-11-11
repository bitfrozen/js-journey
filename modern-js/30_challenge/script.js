function insertAfter(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.nextElementSibling);
}

const li1 = document.createElement("li");
li1.textContent = "Insert Me After (A)!";

firstItem = document.querySelector("li:first-child");
insertAfter(li1, firstItem);

const li2 = document.createElement("li");
li2.textContent = "Insert Me After (B)!"

secondItem = document.querySelector("li:last-child");
insertAfter(li2, secondItem);