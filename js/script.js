import { removeCard } from "./function.js";
import { createCardFn } from "./function.js";

document.querySelectorAll(".column__plus-wrapper").forEach((btn) => {
  btn.addEventListener("click", createCardFn);
});
