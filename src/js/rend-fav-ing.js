// const parrentDiv = document.querySelector('.parrent-div-test');
// const ingName = document.querySelector(".modal-ingrid__name");
// const ingTitle = document.querySelector(".modal-ingrid__title");

// console.log(ingName);
// console.log(ingTitle);

// if (localStorage.getItem('key-of-ingridient')) {
//   const resulPars = JSON.parse(localStorage.getItem('key-of-ingridient'));
//   const makeMarkup = `<div id="test-div" class="test-div"><h2 class="name-ing">${resulPars.hone}</h2><p class="what-ing">${resulPars.htwo}</p><p><button type="button" id="learnBtn" class="learn-btn">Learn more</button><button type="button" id="remove" class="remove-btn">Remove</button></div>`;
//   parrentDiv.insertAdjacentHTML('afterbegin', makeMarkup);
//   const removeBtn = document.querySelector('#remove');

//   removeBtn.addEventListener('click', () => {
//     localStorage.removeItem('key-of-ingridient');
//     const newDiv = document.querySelector('#test-div');
//     newDiv.remove();
//   });
// }

// const makeMarkup = `<div id="test-div" class="test-div"><h2 class="name-ing">${resulPars.hone}</h2>
// <p class="what-ing">${resulPars.htwo}</p><p><button type="button" id="learnBtn" class="learn-btn">Learn more</button><button type="button" id="remove" class="remove-btn">Remove</button></div>`;

import personalheart from '../images/personalheart.svg';

const box = document.querySelector('.cocktail__list');
// const paginator = document.querySelector('.paginator');
// const paginatorList = document.querySelector('.pagination__list');
// const sectionGallery = document.querySelector('.cocktail__section');
const ingList = JSON.parse(localStorage.getItem('ingridients'));
const wrapper = document.querySelector('.favorit-coct__wrapper');
const ingridients = [];
// console.log(wrapper);

let currentPage = 1;
let perPage = 0;
perPage = pagesMediaCheck();

function pagesMediaCheck() {
  if (window.matchMedia('(min-width: 320px)').matches) {
    perPage = 3;
  }
  if (window.matchMedia('(min-width: 768px)').matches) {
    perPage = 6;
  }
  if (window.matchMedia('(min-width: 1200px)').matches) {
    perPage = 9;
  }

  return perPage;
}

if (!localStorage.getItem('ingridients')) {
  localStorage.setItem('ingridients', JSON.stringify(ingridients));
}

if (localStorage.getItem('ingridients') !== '[]') {
  wrapper.innerHTML = '';
  wrapper.style.display = 'none';
  box.innerHTML = '';
  buildMarkupIng(ingList);
}

document.addEventListener('click', event => {
  if (event.target.dataset.add != undefined) {
    console.log('hello');
    const ingList = JSON.parse(localStorage.getItem('ingridients'));
    const card = event.target.closest('.ing-item');
    const ingName = card.querySelector('.ing-name').textContent;
    console.log(ingName);
    const names = ingList.map(({ name }) => name);
    if (names.some(value => value === ingName)) {
      const removeIng = ingList.filter(({ name }) => name !== ingName);
      localStorage.setItem('ingridients', JSON.stringify(removeIng));
      box.innerHTML = '';
      buildMarkupIng(removeIng);

      if (localStorage.getItem('ingridients') === '[]') {
        renderStartMarkup();
      }
    }
  }
});

function renderStartMarkup() {
  wrapper.style.display = 'block';
  const startMarkup = `<p class="favorit-coct__text ing-text">You haven't added any <br> favorite ingridients yet</p>`;
  wrapper.insertAdjacentHTML('beforeend', startMarkup);
}

export function buildMarkupIng(data) {
  const markup = data.map(({ name, type }) => {
    return `   <li class='cocktail__item item ing-item'>
      <h3 class='cocktail__title name modal-ingrid__name ing-name'>${name}</h3>
      <p class="ing-type">${type}</p>
      <div class='cocktail__btn--box'>
     <button class='learnmore__btn' type='button' data-ingredient='${name}'>Learn More</button>
      <button class='add__btn' type='button' data-add>Remove
     <svg class="icon-hert-remove" width="17" height="15">
     <use href="${personalheart + '#fullorrange'}"></use>
   </svg>
     </button>
      </div>
      </li>`;
  });
  box.insertAdjacentHTML('beforeend', markup.join(''));
}
