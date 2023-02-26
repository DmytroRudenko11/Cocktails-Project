import {
  fetchRandomCoctails,
  fetchCocktailByName,
  fetchCocktailByLetter,
} from './fetch';
import { markupingBtn } from './add-from-gallery';
import personalheart from '../images/personalheart.svg';
import { handlePagination } from './pagination';

const box = document.querySelector('.cocktail__list');
const paginator = document.querySelector('.paginator');
const paginatorList = document.querySelector('.pagination__list');
const sectionGallery = document.querySelector('.cocktail__section');
const form = document.querySelector('.header-search-icon');
const title = document.querySelector('.gallery__title');
const forwardBox = document.querySelector('.fore__wrapper');
const backwardBox = document.querySelector('.back__wrapper');
const lettersList = document.querySelector('.hero__list');

const meuform = document.querySelector('.menu-search-icon');

form.addEventListener('submit', onSearch);
meuform.addEventListener('submit', onSearch);

let randomList = [];
let currentPage = 1;
export let perPage = 0;
perPage = pagesMediaCheck();

export async function onClick(e) {
  e.preventDefault();
  currentPage = 1;
  paginator.classList.add('visually-hidden');
  title.classList.remove('visually-hidden');

  const searchValue = e.target.dataset.letter;

  removeActiveLetter();
  e.target.classList.add('letter-active');

  box.innerHTML = '';
  const requestedData = await fetchCocktailByLetter(searchValue);

  if (requestedData === null) {
    errorMarkup();
    box.scrollIntoView({ block: 'end', behavior: 'smooth' });
    return;
  }

  renderCocktails(requestedData, perPage, currentPage);
  if (requestedData.length > perPage) {
    buildGallery(requestedData);
  }
  title.scrollIntoView({ block: 'start', behavior: 'smooth' });
}

async function onSearch(e) {
  e.preventDefault();
  paginator.classList.add('visually-hidden');
  title.classList.remove('visually-hidden');

  const searchValue = e.target.elements.searchQuery.value.trim().toLowerCase();

  removeActiveLetter();
  box.innerHTML = '';

  const requestedData = await fetchCocktailByName(searchValue);

  if (requestedData === null) {
    errorMarkup();
    box.scrollIntoView({ block: 'end', behavior: 'smooth' });
    return;
  }

  renderCocktails(requestedData, perPage, currentPage);
  if (requestedData.length > perPage) {
    buildGallery(requestedData);
  }

  title.scrollIntoView({ block: 'start', behavior: 'smooth' });
  form.reset();
  meuform.reset();
}

async function renderRandomCocktails() {
  title.classList.remove('visually-hidden');
  paginator.classList.add('visually-hidden');
  randomList = await fetchRandomCoctails(perPage);
  box.innerHTML = '';
  buildMarkup(randomList);
}
renderRandomCocktails();

function buildGallery(searchValue) {
  paginatorList.innerHTML = '';
  backwardBox.innerHTML = '';
  forwardBox.innerHTML = '';
  paginator.classList.remove('visually-hidden');
  currentPage = 1;

  totalPages = Math.ceil(searchValue.length / perPage);

  handlePagination(searchValue, totalPages, currentPage);
}

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

function buildMarkup(data) {
  if (data === null) {
    const noMatch = `<p class='noresult__text'>Sorry, we didn't find any cocktail for you</p>
                     <div class='noresult__box'></div>`;
    sectionGallery.innerHTML = noMatch;
    return;
  }
  const markup = data.map(({ strDrinkThumb, strDrink, idDrink }) => {
    return `<li class='cocktail__item item' data-id='${idDrink}''>
      <img class='cocktail__image image' src='${strDrinkThumb}' alt='cocktail'/>
      <h3 class='cocktail__title name'>${strDrink}</h3>
      <div class='cocktail__btn--box'>
      <button class='learnmore__btn' type='button' data-cocktail='${idDrink}'>Learn More</button>
      <button class='add__btn' type='button' data-add>Add to
     <svg class="icon-hert" width="17" height="15">
            <use href="${personalheart + '#icon-black'}"></use>
    </svg>
     </button>
      </div>
      </li>`;
  });
  box.insertAdjacentHTML('beforeend', markup.join(''));
  markupingBtn();
}

function paginationFilter(cocktailList, perPage, page) {
  page--;
  box.innerHTML = '';

  const begin = perPage * page;
  const end = begin + perPage;
  const paginatedData = cocktailList.slice(begin, end);
  return paginatedData;
}

export function renderCocktails(cocktailList, perPage, page) {
  page--;
  box.innerHTML = '';

  const begin = perPage * page;
  const end = begin + perPage;
  const paginatedData = cocktailList.slice(begin, end);
  return buildMarkup(paginatedData);
}

function errorMarkup() {
  const noMatch = `<div class='noresult__container'>
                     <p class='noresult__text'>Sorry, we didn't find any cocktail for you</p>
                     <div class='noresult__box'></div></div>`;
  title.classList.add('visually-hidden');
  paginatorList.innerHTML = '';
  return (box.innerHTML = noMatch);
}

function removeActiveLetter() {
  Array.from(lettersList.children).forEach(letter => {
    if (letter.classList.contains('letter-active')) {
      letter.classList.remove('letter-active');
    }
  });
}
