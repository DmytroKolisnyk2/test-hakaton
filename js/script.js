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
document.querySelector(".column").insertAdjacentHTML("afterbegin", string);
document.querySelector(".column").insertAdjacentHTML("afterbegin", string);
document.querySelector(".column").insertAdjacentHTML("afterbegin", string);
document.querySelector(".column").insertAdjacentHTML("afterbegin", string);

const removeCard = (event) => {
   event.currentTarget.parentNode.parentNode.parentNode.classList.add("hidden-card");
   setTimeout(() => event.currentTarget.parentNode.parentNode.parentNode.remove(), 400);
};
document.querySelectorAll(".card__btn--trash").forEach((btn) => {
   btn.addEventListener("click", removeCard);
});
