const string = `<div class="card">
<input type="text" placeholder="Your title..." class="card__headline">
 <!-- <h3 class="card__headline">Description</h3> -->
 <textarea class="card__textarea" name="text" cols="30" rows="5" placeholder="Type your text here..."></textarea>
 <ul class="card__controls-wrapper">
    <li class="card__controls-item"><button class="card__btn card__btn--arrow left" data-value='left'>&#60;</button></li>
    <li class="card__controls-item"><button class="card__btn card__btn--trash"></button></li>
    <li class="card__controls-item"><button class="card__btn card__btn--arrow right data-value='right'">&#62;</button></li>
 </ul>
</div>`;
let index;
const moveCardRightFn = (event) => {
  index =
    +event.currentTarget.parentNode.parentNode.parentNode.parentNode.dataset
      .index + 1;
  if (index === 1) index = document.querySelector(".columns").children.length;
  document
    .querySelector(`.column__wrapper-cards--${index}`)
    .appendChild(document.querySelector(".card").cloneNode(true));
  removeCard(event);
  document.querySelectorAll(".card__btn--arrow").forEach((elem) => {
    document.querySelectorAll(".left").forEach((elem) => {
      elem.addEventListener("click", moveCardLeftFn);
    });
    document.querySelectorAll(".card__btn--trash").forEach((btn) => {
      btn.addEventListener("click", removeCard);
    });
    document.querySelectorAll(".right").forEach((elem) => {
      elem.addEventListener("click", moveCardRightFn);
    });
  });
    // document
    //   .querySelectorAll(".card__btn--arrow")[1]
    //   .addEventListener("click", moveCardRightFn);
    // document
    //   .querySelectorAll(".card__btn--arrow")[0]
    //   .addEventListener("click", moveCardLeftFn);
};

const moveCardLeftFn = (event) => {
  index =
    +event.currentTarget.parentNode.parentNode.parentNode.parentNode.dataset
      .index - 1;
  if (index === 0) index = document.querySelector(".columns").children.length;
  document
    .querySelector(`.column__wrapper-cards--${index}`)
    .appendChild(document.querySelector(".card").cloneNode(true));
  removeCard(event);
  document.querySelectorAll(".card__btn--arrow").forEach((elem) => {
    document.querySelectorAll(".left").forEach((elem) => {
      elem.addEventListener("click", moveCardLeftFn);
    });
    document.querySelectorAll(".card__btn--trash").forEach((btn) => {
      btn.addEventListener("click", removeCard);
    });
    document.querySelectorAll(".right").forEach((elem) => {
      elem.addEventListener("click", moveCardRightFn);
    });
  });

};

export const createCardFn = (event) => {
  event.currentTarget.parentNode.insertAdjacentHTML("afterbegin", string);
  document.querySelectorAll(".card__btn--trash").forEach((btn) => {
    btn.addEventListener("click", removeCard);
  });
  document.querySelectorAll(".card__btn--arrow").forEach((elem) => {
    document.querySelectorAll(".left").forEach((elem) => {
      elem.addEventListener("click", moveCardLeftFn);
    });
    document.querySelectorAll(".card__btn--trash").forEach((btn) => {
      btn.addEventListener("click", removeCard);
    });
    document.querySelectorAll(".right").forEach((elem) => {
      elem.addEventListener("click", moveCardRightFn);
    });
  });
};

export const removeCard = (event) => {
  event.currentTarget.parentNode.parentNode.parentNode.classList.add(
    "hidden-card"
  );
  event.currentTarget.parentNode.parentNode.parentNode.remove();
};

