function createNewItemDirty(itemName) {
  const liItem = document.createElement("li");
  liItem.innerHTML = `${itemName}
    <button class="remove-item btn-link text-red"><i class="fa-solid fa-xmark"></i></button>`;
  document.querySelector(".items").appendChild(liItem);
}

function createNewItem(itemName) {
  const newItem = document.createElement("li");
  const newItemText = document.createTextNode(itemName);
  const newItemButton = document.createElement("button");
  newItemButton.className = "remove-item btn-link text-red";
  const newItemButtonIcon = document.createElement("i");
  newItemButtonIcon.className = "fa-solid fa-xmark";

  newItemButton.appendChild(newItemButtonIcon);
  newItem.appendChild(newItemText);
  newItem.appendChild(newItemButton);

  console.log(newItem.outerHTML);
  document.querySelector(".items").appendChild(newItem)
}

createNewItemDirty("Eggs");
createNewItem("Bread");