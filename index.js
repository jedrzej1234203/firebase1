import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

import { clearValue, addLiElement } from "./functions.js";

const appSettings = {
  databaseURL:
    "https://playground-e496e-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "ShoppingList");

console.log("dziala");

onValue(shoppingListInDB, (snapshot)=>{
    let listArray = Object.values(snapshot.val());
    listArray.forEach((el)=>addLiElement(el));
})

const addButton = document.getElementById("add-button");
const elementField = document.getElementById("input-field");
const shoppingList = document.getElementById("shoppingList");

addButton.addEventListener("click", () => {
  let inputValue = elementField.value;
  push(shoppingListInDB, inputValue);
  addLiElement(inputValue);
  clearValue(elementField);
});
