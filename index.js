import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

import { clearValue, addLiElement, clearShoppingListEl } from "./functions.js";

const appSettings = {
  databaseURL:
    "https://playground-e496e-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
export const database = getDatabase(app);
const shoppingListInDB = ref(database, "ShoppingList");

console.log("dziala");

onValue(shoppingListInDB, (snapshot) => {
  if (snapshot.exists()) {
    let listArray = Object.entries(snapshot.val());
    clearShoppingListEl();
    listArray.forEach((el) => addLiElement(el));
  }
  else {
    shoppingList.innerHTML = "No items here.... yet!";
  }
});

const addButton = document.getElementById("add-button");
const elementField = document.getElementById("input-field");
const shoppingList = document.getElementById("shoppingList");

addButton.addEventListener("click", () => {
  let inputValue = elementField.value;
  if (inputValue) {
    push(shoppingListInDB, inputValue);
    clearValue(elementField);
  }
});
