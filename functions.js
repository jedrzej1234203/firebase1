import {
  ref,
  remove,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

import { database } from "./index.js";

export function clearValue(element) {
  element.value = "";
}

export function addLiElement(value) {
  let elID = value[0];
  let elVal = value[1];
  let element = document.createElement("li");
  element.innerHTML = elVal;
  shoppingList.appendChild(element);
  element.addEventListener("click", () => {
    let locationInDB = ref(database, `ShoppingList/${elID}`);
    remove(locationInDB);
  });
}

export function clearShoppingListEl() {
  shoppingList.innerHTML = "";
}
