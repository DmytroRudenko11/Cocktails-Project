// =====================открвтие модалки=================

const refs = {
  closeModalBtn: document.querySelector('[data-modal-cockt-close]'),
  addRemlBtn: document.querySelector('.modal-cockt__add-rem-btn'),
  modal: document.querySelector('[data-modal-cockt]'),
  body: document.querySelector('body'),
};

//   for (item of refs.openModalList) {
//     item.addEventListener('click', toggleModal);
//   }
refs.modal.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    closeModal();
  }
});

refs.closeModalBtn.addEventListener('click', closeModal);
refs.addRemlBtn.addEventListener('click', closeModal);

function closeModal() {
  refs.modal.classList.toggle('is-hidden');
  if (refs.body.classList.contains('no-scroll')) {
    refs.body.classList.remove('no-scroll');
  }
}

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}

document.addEventListener('click', e => {
  if (e.target.dataset.cocktail) {
    const cocktaiId = Number(e.target.dataset.cocktail);
    getCocktailData(cocktaiId);
    toggleModal();
  }
  return;
});

// ===========================================

import axios from 'axios';

// const learnMoreBtn = document.querySelector('.learn-more-btn');
const name = document.querySelector('.modal-cockt__name');
const instractions = document.querySelector('.modal-cockt__instr-text');
const list = document.querySelector('.modal-cockt__per-list');
const image = document.querySelector('.modal-cockt__img');
const item = document.querySelector('.modal-cockt__card');

async function getCocktailData(cocktaiId) {
  const cocktail = await fetchCocktail(cocktaiId);

  renderCocktailCard(cocktail, cocktaiId);
}

async function fetchCocktail(queryToFetch) {
  try {
    const result = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${queryToFetch}`
    );

    return result.data.drinks[0];
  } catch (error) {
    console.log(error);
  }
}

function renderCocktailCard(cocktail, cocktaiId) {
  item.dataset.id = `${cocktaiId}`;
  image.src = `${cocktail.strDrinkThumb}`;
  name.textContent = `${cocktail.strDrink}`;
  instractions.textContent = `${cocktail.strInstructions}`;
  let perList = [];
  list.innerHTML = '';
  for (let i = 1; i < 15; i++) {
    if (cocktail[`strMeasure${i}`] || cocktail[`strIngredient${i}`]) {
      if (!cocktail[`strMeasure${i}`] || (cocktail[`strMeasure${i}`] === "\n")) {
        perList.push(
          `<li class="modal-cockt__ingred">
          <a>
            <p>
            <span data-ingredient="${cocktail[`strIngredient${i}`]}">
              ${cocktail[`strIngredient${i}`]}
            </span></p>
          </a>
        </li>`
        );
        break;
      }
      perList.push(
        `<li class="modal-cockt__ingred">
          <a>
            <p>${cocktail[`strMeasure${i}`]}
            <span data-ingredient="${cocktail[`strIngredient${i}`]}">
              ${cocktail[`strIngredient${i}`]}
            </span></p>
          </a>
        </li>`
      );
    }
  }
  list.insertAdjacentHTML('beforeend', perList.join(''));

  markupingBtnModal();
}

function markupingBtnModal() {
  const btns = document.querySelectorAll('[data-add]');
  btns.forEach(btn => {
    const card = btn.closest('.item');
    const coctId = card.dataset.id;
    const coctailList = JSON.parse(localStorage.getItem('coctailse'));
    const numbs = coctailList.map(({ id }) => id);
    if (numbs.some(value => value === coctId)) {
      if (btn.dataset.modal != undefined) {
        btn.textContent = 'Remove from favorite';
      }
    } else {
      if (btn.dataset.modal != undefined) {
        btn.textContent = 'Add to favorite';
      }
    }
  });
}
