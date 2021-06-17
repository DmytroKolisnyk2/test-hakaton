import { removeCard } from "./function.js";
import { createCardFn } from "./function.js";
import {addColumn}from "./function.js";
document.querySelectorAll(".column__wrapper--plus").forEach((btn) => {
  btn.addEventListener("click", createCardFn);
});
document.querySelector(".column__plus-wrapper-right").addEventListener("click", addColumn);