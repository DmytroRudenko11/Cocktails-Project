import personalheart from '../images/personalheart.svg';

const box = document.querySelector('.cocktail__list');
// const paginator = document.querySelector('.paginator');
// const paginatorList = document.querySelector('.pagination__list');
// const sectionGallery = document.querySelector('.cocktail__section');
const wrapper = document.querySelector('.favorit-coct__wrapper');
const coctailse = [];

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

if (!localStorage.getItem('coctailse')) {
  localStorage.setItem('coctailse', JSON.stringify(coctailse));
}
const coctailList = JSON.parse(localStorage.getItem('coctailse'));

if (localStorage.getItem('coctailse') !== '[]') {
  wrapper.innerHTML = '';
  wrapper.style.display = 'none';
  box.innerHTML = '';
  buildMarkup(coctailList);
}

document.addEventListener('click', event => {
  if (event.target.dataset.add != undefined) {
    const coctailList = JSON.parse(localStorage.getItem('coctailse'));
    const card = event.target.closest('.item');
    const coctId = card.dataset.id;
    const numbers = coctailList.map(({ id }) => id);

    if (numbers.some(value => value === coctId)) {
      const filteredCoctails = coctailList.filter(({ id }) => id !== coctId);
      localStorage.setItem('coctailse', JSON.stringify(filteredCoctails));
      box.innerHTML = '';
      buildMarkup(filteredCoctails);

      if (localStorage.getItem('coctailse') === '[]') {
        renderStartMarkup();
      }
    }
  }
});

function renderStartMarkup() {
  wrapper.style.display = 'block';
  const startMarkup = `<p class="favorit-coct__text">You haven't added any favorite cocktails yet</p>`;
  wrapper.insertAdjacentHTML('beforeend', startMarkup);
}

export function buildMarkup(data) {
  const markup = data.map(({ id, name, src }) => {
    return `   <li class='cocktail__item item' data-id='${id}''>
      <img class='cocktail__image image' src="${src}" alt='cocktail'/>
      <h3 class='cocktail__title name'>${name}</h3>
      <div class='cocktail__btn--box'>
     <button class='learnmore__btn' type='button' data-cocktail='${id}'>Learn More</button>
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
