const itemForm = document.getElementById("item-form");
const itemFormButton = itemForm.querySelector("button");
const itemInput = document.getElementById("item-input");
const itemFilter = document.getElementById("filter");
const itemList = document.getElementById("item-list");
const clearButton = document.getElementById("clear");
let isEditMode = false;

function onAddItemSubmit(evt) {
  evt.preventDefault();

  const newItem = itemInput.value;
  if (newItem === "") {
    alert("Please add an item");
    return;
  }

  if (isEditMode) {
    const itemToEdit = itemList.querySelector(".edit-mode");
    itemToEdit.classList.remove("edit-mode");
    removeItem(itemToEdit);
    isEditMode = false;
  } else {
    if (checkIfItemExists(newItem)) {
      alert("That item already exists!");
      return;
    }
  }

  addItemToDOM(newItem);
  addItemToStorage(newItem);

  itemInput.value = "";
  checkUI();
}

function checkIfItemExists(item) {
  const itemsFromStorage = getItemsFromStorage();
  return itemsFromStorage.includes(item);
}

function onItemClick(evt) {
  if (evt.target.parentElement.classList.contains("remove-item")) {
    if (!window.confirm("Are you sure?")) {
      return;
    }
    const itemElement = evt.target.parentElement.parentElement;
    removeItem(itemElement);
  } else {
    setItemToEdit(evt.target);
  }
}

function setItemToEdit(item) {
  isEditMode = true;

  itemList
    .querySelectorAll("li")
    .forEach(i => i.classList.remove("edit-mode"));

  item.classList.add("edit-mode");
  itemFormButton.innerHTML = "<i class='fa-solid fa-pen'></i> Update Item";
  itemFormButton.style.backgroundColor = "#228B22";
  itemInput.value = item.textContent;
}

function addItemToDOM(item) {
  const newItemElement = createItemElement(item);
  itemList.appendChild(newItemElement);
}

function createItemElement(item) {
  const liItem = document.createElement("li");
  liItem.appendChild(document.createTextNode(item));
  liItem.appendChild(createItemButtonElement());

  return liItem;
}

function createItemButtonElement() {
  const button = document.createElement("button");
  button.className = "remove-item btn-link text-red";
  const closeIcon = document.createElement("i");
  closeIcon.className = "fa-solid fa-xmark";
  button.appendChild(closeIcon);

  return button;
}

function removeItemFromDOM(itemElement) {
  itemElement.remove();
  checkUI();
}

function addItemToStorage(item) {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.push(item);
  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}

function removeItemFromStorage(item) {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.splice(itemsFromStorage.indexOf(item), 1);
  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage() {
  let itemsFromStorage;

  if (localStorage.getItem("items") === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem("items"));
  }

  return itemsFromStorage;
}

function removeItem(itemElement) {
  removeItemFromDOM(itemElement);
  removeItemFromStorage(itemElement.innerText);
}

function clearItems() {
  const items = itemList.querySelectorAll("li");
  items.forEach(item => removeItem(item));
  itemFilter.value = "";
  checkUI();
}

function checkUI() {
  console.log("Checking UI");
  const items = itemList.querySelectorAll("li");
  if (items.length === 0) {
    clearButton.style.display = "none";
    itemFilter.style.display = "none";
  } else {
    clearButton.style.display = "inline-block";
    itemFilter.style.display = "inline-block";
  }

  if (!isEditMode) {
    itemFormButton.innerHTML = "<i class='fa-solid fa-plus'></i> Add Item";
    itemFormButton.style.backgroundColor = "#333";
  }
}

function filterItems(evt) {
  const filter = evt.target.value.toLowerCase();
  const items = itemList.querySelectorAll("li");

  items.forEach(item => {
    if (item.textContent.trim().toLowerCase().includes(filter)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

function displayItems() {
  console.log("Adding items from storage");
  const items = getItemsFromStorage();
  items.forEach(item => addItemToDOM(item));
}

function onContentLoad() {
  displayItems();
  checkUI();
}

function init() {
  itemForm.addEventListener("submit", onAddItemSubmit);
  itemList.addEventListener("click", onItemClick);
  clearButton.addEventListener("click", clearItems);
  itemFilter.addEventListener("input", filterItems);
  document.addEventListener("DOMContentLoaded", onContentLoad);
}

init();
