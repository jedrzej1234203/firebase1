export function clearValue(element) {
  element.value = "";
}

export function addLiElement(value) {
  let element = document.createElement("li");
  element.innerHTML = value;
  shoppingList.appendChild(element);
}
