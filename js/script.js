import { removeCard } from "./function.js";
import { createCardFn } from "./function.js";
import { addColumn } from "./function.js";
import { saveChanges } from "./function.js";

setInterval(saveChanges, 1000);
document.querySelector(".columns").innerHTML =
   window.localStorage.getItem("progress") ||
   `<section class="columns">
               <div class="column">
		   <div class="column__wrapper">
			  <input type="text" placeholder="Title of column..." value="To do" class="column__title"></input>
			  <div class="column__wrapper-cards" data-index="1">
				 <div class="column__plus-wrapper">
					<p class="column__wrapper--plus">+</p>
				 </div>
			  </div>
		   </div>
		</div>
		<div class="column">
		   <div class="column__wrapper">
			<input type="text" placeholder="Title of column..." value="In progress" class="column__title"></input>
			  <div class="column__wrapper-cards" data-index="2">
				 <div class="column__plus-wrapper">
					<p class="column__wrapper--plus">+</p>
				 </div>
			  </div>
		   </div>
		</div>
		<div class="column">
		   <div class="column__wrapper">
			<input type="text" placeholder="Title of column..." value="Done" class="column__title"></input>
			  <div class="column__wrapper-cards" data-index="3">
				 <div class="column__plus-wrapper">
					<p class="column__wrapper--plus">+</p>
				 </div>
			  </div>
		   </div>
		</div>
            </section>
>`;
document.querySelectorAll(".column__wrapper--plus").forEach((btn) => {
   btn.addEventListener("click", createCardFn);
});
document.querySelector(".column__plus-wrapper-right").addEventListener("click", addColumn);