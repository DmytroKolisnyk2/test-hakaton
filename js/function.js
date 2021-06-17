const string = `<div class="card">
<input type="text" placeholder="Your title..." class="card__headline">
 <!-- <h3 class="card__headline">Description</h3> -->
 <textarea class="card__textarea" name="text" cols="30" rows="5" placeholder="Type your text here..."></textarea>
 <ul class="card__controls-wrapper">
    <li class="card__controls-item"><button class="card__btn card__btn--arrow">&#60;</button></li>
    <li class="card__controls-item"><button class="card__btn card__btn--trash"></button></li>
    <li class="card__controls-item"><button class="card__btn card__btn--arrow">&#62;</button></li>
 </ul>
</div>`;

export const createCardFn = (event) => {
   event.currentTarget.parentNode.parentNode.insertAdjacentHTML("afterbegin", string);
   document.querySelectorAll(".card__btn--trash").forEach((btn) => {
      btn.addEventListener("click", removeCard);
   });
};

export const removeCard = (event) => {
   event.currentTarget.parentNode.parentNode.parentNode.classList.add("hidden-card");
   event.currentTarget.parentNode.parentNode.parentNode.remove();
};
export const addColumn = () => {
   const wrapper = document.querySelector(".columns");

   const columnString = `
<div class="column">
		   <div class="column__wrapper">
			<input type="text" placeholder="Title of column..." value="" class="column__title"></input>
			  <div class="column__wrapper-cards" data-index="${wrapper.children.length + 1}">
				 <div class="column__plus-wrapper">
					<p class="column__wrapper--plus">+</p>
				 </div>
			  </div>
		   </div>
		</div>
`;
   wrapper.insertAdjacentHTML("beforeend", columnString);
   document.querySelectorAll(".column__wrapper--plus").forEach((btn) => {
      btn.addEventListener("click", createCardFn);
   });
};
export const removeColumn = event;
