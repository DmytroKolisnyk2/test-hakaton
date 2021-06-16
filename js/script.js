import { removeCard } from "./function.js";
import { createCardFn } from "./function.js";

document.querySelectorAll(".column__wrapper--plus").forEach((btn) => {
  btn.addEventListener("click", createCardFn);
});
