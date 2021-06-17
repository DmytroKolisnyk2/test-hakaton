const string = `<div class="card">
<input type="text" placeholder="Your title..." class="card__headline save-text">
 <textarea class="card__textarea save-text" name="text" cols="30" rows="5" placeholder="Type your text here..."></textarea>
 <ul class="card__controls-wrapper">
    <li class="card__controls-item"><button class="card__btn card__btn--arrow left" data-value='left'>&#60;</button></li>
    <li class="card__controls-item"><button class="card__btn card__btn--trash"></button></li>
    <li class="card__controls-item"><button class="card__btn card__btn--arrow right data-value='right'">&#62;</button></li>
 </ul>
</div>`;
let index;
export const moveCardRightFn = (event) => {
   index = +event.currentTarget.parentNode.parentNode.parentNode.parentNode.dataset.index + 1;
   if (index === document.querySelector(".columns").children.length + 1) index = 1;
   document.querySelector(`.column__wrapper-cards--${index}`).prepend(event.currentTarget.parentNode.parentNode.parentNode.cloneNode(true));
   removeCard(event);
   document.querySelectorAll(".save-text").forEach((input) => input.addEventListener("input", (event) => (event.target.dataset.text = event.target.value)));
   document.querySelectorAll(".card__btn--trash").forEach((btn) => {
      btn.addEventListener("click", removeCard);
   });
   document.querySelectorAll(".card__btn--arrow").forEach((elem) => {
      document.querySelectorAll(".left").forEach((elem) => {
         elem.addEventListener("click", moveCardLeftFn);
      });

      document.querySelectorAll(".right").forEach((elem) => {
         elem.addEventListener("click", moveCardRightFn);
      });
   });
};

export const moveCardLeftFn = (event) => {
   index = +event.currentTarget.parentNode.parentNode.parentNode.parentNode.dataset.index - 1;
   if (index === 0) index = document.querySelector(".columns").children.length;
   document.querySelector(`.column__wrapper-cards--${index}`).prepend(event.currentTarget.parentNode.parentNode.parentNode.cloneNode(true));
   removeCard(event);
   document.querySelectorAll(".save-text").forEach((input) => input.addEventListener("input", (event) => (event.target.dataset.text = event.target.value)));
   document.querySelectorAll(".card__btn--trash").forEach((btn) => {
      btn.addEventListener("click", removeCard);
   });
   document.querySelectorAll(".card__btn--arrow").forEach((elem) => {
      document.querySelectorAll(".left").forEach((elem) => {
         elem.addEventListener("click", moveCardLeftFn);
      });
      document.querySelectorAll(".right").forEach((elem) => {
         elem.addEventListener("click", moveCardRightFn);
      });
   });
};

export const createCardFn = (event) => {
   event.target.parentNode.parentNode.insertAdjacentHTML("afterbegin", string);
   document.querySelectorAll(".save-text").forEach((input) => input.addEventListener("input", (event) => (event.target.dataset.text = event.target.value)));

   document.querySelectorAll(".card__btn--trash").forEach((btn) => {
      btn.addEventListener("click", removeCard);
   });
   document.querySelectorAll(".card__btn--arrow").forEach((elem) => {
      document.querySelectorAll(".left").forEach((elem) => {
         elem.addEventListener("click", moveCardLeftFn);
      });
      document.querySelectorAll(".right").forEach((elem) => {
         elem.addEventListener("click", moveCardRightFn);
      });
   });
  event.target.parentNode.parentNode.children[0].classList.add("hidden-card");
  setTimeout((event) => event.target.parentNode.parentNode.children[0].classList.remove("hidden-card"), 200, event);
};

export const removeCard = (event) => {
   event.target.parentNode.parentNode.parentNode.classList.add("hidden-card");
   setTimeout((event) => event.target.parentNode.parentNode.parentNode.remove(), 200, event);
};

// ------master-------
// event.currentTarget.parentNode.parentNode.insertAdjacentHTML("afterbegin", string);
document.querySelectorAll(".card__btn--trash").forEach((btn) => {
   btn.addEventListener("click", removeCard);
});
document.querySelectorAll(".card__btn--trash").forEach((btn) => {
   btn.addEventListener("click", removeCard);
});
document.querySelectorAll(".save-text").forEach((input) => input.addEventListener("input", (event) => (event.target.dataset.text = event.target.value)));

export const removeColumnFn = (event) => {
   event.currentTarget.parentNode.parentNode.parentNode.classList.add("hidden-card");

   setTimeout(
      (event) => {
         event.target.parentNode.parentNode.parentNode.parentNode.remove();
         const columnsRef = document.querySelector(".columns");
         console.log(columnsRef.children.length);
         for (let index = 0; index < columnsRef.children.length; index++) {
            const column = columnsRef.children[index].querySelector(".column__wrapper-cards");
            column.dataset.index = index + 1;
            column.classList = "";

            console.log(column.className);
            console.log(column.classList);
            column.classList.add(`column__wrapper-cards--${index + 1}`);
            column.classList.add("column__wrapper-cards");
         }
      },
      300,
      event
   );
};

export const addColumn = () => {
   const wrapper = document.querySelector(".columns");

   const columnString = `
<div class="column">
		   <div class="column__wrapper">
         <div class ="wraper__input__btn">
			<input type="text" placeholder="Title of column..." value="" class="column__title save-text"> 
         <button class="remove__column__btn"><span class="remove__column__btn__text">+</span></button>
         </div>
			  <div class="column__wrapper-cards column__wrapper-cards--${wrapper.children.length + 1}" data-index="${wrapper.children.length + 1}">
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
   document.querySelectorAll(".remove__column__btn").forEach((elem) => {
      elem.addEventListener("click", removeColumnFn);
   });
  document.querySelectorAll(".save-text").forEach((input) => input.addEventListener("input", (event) => (event.target.dataset.text = event.target.value)));
  console.log(wrapper.lastElementChild);
  wrapper.lastElementChild.classList.add("hidden-card");
  setTimeout((wrapper) => wrapper.lastElementChild.classList.remove("hidden-card"), 200, wrapper);
};

export const saveChanges = () => {
   const saveString = document.querySelector(".columns").innerHTML;
   window.localStorage.setItem("progress", saveString);
};

export const resetSettingsFn = () => {
   document.querySelector(".columns").innerHTML = `<div class="column">
		   <div class="column__wrapper">
			  <div class ="wraper__input__btn">
			<input type="text" placeholder="Title of column..." value="To Do" class="column__title save-text"> 
         <button class="remove__column__btn"><span class="remove__column__btn__text">+</span></button>
         </div><div class="column__wrapper-cards column__wrapper-cards--1" data-index="1">
				 <div class="column__plus-wrapper">
					<p class="column__wrapper--plus">+</p>
				 </div>
			  </div>
		   </div>
		</div>
		<div class="column">
		   <div class="column__wrapper">
			<div class ="wraper__input__btn">
			<input type="text" placeholder="Title of column..." value="Doing" class="column__title save-text"> 
         <button class="remove__column__btn"><span class="remove__column__btn__text">+</span></button>
         </div>
			  <div class="column__wrapper-cards column__wrapper-cards--2" data-index="2">
				 <div class="column__plus-wrapper">
					<p class="column__wrapper--plus">+</p>
				 </div>
			  </div>
		   </div>
		</div>
		<div class="column">
		   <div class="column__wrapper">
			<div class ="wraper__input__btn">
			<input type="text" placeholder="Title of column..." value="Done" class="column__title save-text"> 
         <button class="remove__column__btn"><span class="remove__column__btn__text">+</span></button>
         </div><div class="column__wrapper-cards column__wrapper-cards--3" data-index="3">
				 <div class="column__plus-wrapper">
					<p class="column__wrapper--plus">+</p>
				 </div>
			  </div>
		   </div>
		</div>`;
   document.querySelectorAll(".column__plus-wrapper").forEach((btn) => {
      btn.addEventListener("click", createCardFn);
   });
   document.querySelector(".column__plus-wrapper-right").addEventListener("click", addColumn);
   document.querySelectorAll(".save-text").forEach((input) => input.addEventListener("input", (event) => (event.target.dataset.text = event.target.value)));
   document.querySelectorAll(".save-text").forEach((input) => {
      if (input.dataset.text === undefined) return;
      input.value = input.dataset.text;
   });
   document.querySelectorAll(".card__btn--trash").forEach((btn) => {
      btn.addEventListener("click", removeCard);
   });
   document.querySelectorAll(".card__btn--arrow").forEach((elem) => {
      document.querySelectorAll(".left").forEach((elem) => {
         elem.addEventListener("click", moveCardLeftFn);
      });
      document.querySelectorAll(".right").forEach((elem) => {
         elem.addEventListener("click", moveCardRightFn);
      });
   });
   document.querySelectorAll(".remove__column__btn").forEach((elem) => {
      elem.addEventListener("click", removeColumnFn);
   });
   alert("Вадиме навіщо ви все зламали?");
};
