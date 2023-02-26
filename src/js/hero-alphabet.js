import axios from 'axios';
import { onClick } from './render-gallery';
import mob from '../images/hero-error/people-mob.png';
import mob2 from '../images/hero-error/people-mob-2x.png';
import tab from '../images/hero-error/people-tab.png';
import tab2 from '../images/hero-error/people-tab-2x.png';
import desk from '../images/hero-error/people.png';
import desk2 from '../images/hero-error/people-2x.png';

const selectLetter = document.querySelector('#select');
const lettersList = document.querySelector('.hero__list');
const inputMobile = document.querySelector('.select__input');
const galleryTitle = document.querySelector('.gallery__title');
const gallery = document.querySelector('.cocktail__list');
const inputSpan = document.querySelector('.input-span');

// Render mob letters
const buttons = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
];

export function createDroplist() {
  const markup = `<div class="select__dropdown">
      <ul class="select__list">
      ${createButtonsMarkup()}
      </ul>
      </div>`;
  selectLetter.insertAdjacentHTML('beforeend', markup);
}

function createButtonsMarkup() {
  return buttons
    .map(btn => {
      return `
      <li class="select__item" data-letter="${btn}">${btn.toUpperCase()}</li>
      `;
    })
    .join('');
}

// search by letter

// class CocktailApiService {
//   constructor() {
//     this.BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';
//     this.searchQuery = '';
//     this.drinks = {};
//   }
//   async fetchCocktaileByFirstLetter() {
//     try {
//       const url = `${this.BASE_URL}search.php?f=${this.searchQuery}`;
//       const response = await axios.get(url);
//       this.drinks = response.data.drinks;
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   }
// }

// NoResultRender
function noResultRender() {
  galleryTitle.textContent = '';

  gallery.innerHTML = '';
  const markup = ` <div class="container sorry ">
    <h2 class="sorry__title">Sorry, we didn't find any cocktail for you</h2>
    <div class="sorry__picture">
      <picture>
        <source
          srcset="${desk} 1x, ${desk2} 2x"
          media="(min-width: 768px)"
        />
        <source
          srcset="${tab} 1x, ${tab2} 2x"
          media="(max-width: 767px)"
        />
        <img
          class="sorry__img"
          src="${mob}"
          alt="group"
          loading="lazy"
        />
      </picture>
    </div>
  </div>`;
  gallery.insertAdjacentHTML('beforeend', markup);
}

// const cocktailApiService = new CocktailApiService();
let checked = document.querySelector('.select__input');
let mobOpen = document.querySelector('.gallery__title');

lettersList.addEventListener('click', onClick);
inputMobile.addEventListener('click', onMobLetterClick);

// export async function onLetterClick(e) {
//   checked.classList.add('select__input-checked');
//   if (!e.target.dataset.letter) return;
//   cocktailApiService.searchQuery = e.target.dataset.letter;

//   try {
//     await cocktailApiService.fetchCocktaileByFirstLetter();
//     if (!cocktailApiService.drinks) return noResultRender();
//     console.log(cocktailApiService.drinks);

//     // renderCocktails(cocktailApiService.drinks, perPage, currentPage);
//     galleryTitle.textContent = 'Cocktails';
//   } catch (error) {
//     console.log(error.message);
//   }
// }

function onMobLetterClick() {
  mobOpen.classList.add('mob-open');
  if (selectLetter.children.length > 1) {
    mobOpen.classList.remove('mob-open');
    selectLetter.lastChild.remove();
    return;
  }

  createDroplist();
  selectLetter.lastChild.addEventListener('click', e => {
    onClick(e);
    inputSpan.textContent = e.target.dataset.letter.toUpperCase();
    selectLetter.lastChild.remove();
    mobOpen.classList.remove('mob-open');
  });
}
