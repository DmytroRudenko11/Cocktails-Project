import { buildMarkupIng } from './rend-fav-ing';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import throttle from 'lodash.throttle';

const form = document.querySelector('.header-search-icon');
const wrapper = document.querySelector('.favorit-coct__wrapper');
const box = document.querySelector('.cocktail__list');
const ingList = JSON.parse(localStorage.getItem('ingridients'));
let keyWord = '';

form.addEventListener('input', throttle(handSubmit, 500));
function handSubmit(event) {
  event.preventDefault();
  const inputValue = form.searchQuery.value.trim().toLowerCase();
  // if (!inputValue || keyWord === inputValue) {
  //   form.searchQuery.value = '';
  //   return;
  // }
  keyWord = inputValue;
  //   page = 1;
  // console.log(keyWord);
  onSerch(keyWord);
  // form.searchQuery.value = '';
}

function onSerch(keyWord) {
  const names = ingList.map(({ name }) => name.toLowerCase());
  // console.log(names);

  if (names.some(value => value === keyWord || value.includes(keyWord))) {
    const filteredCoctails = ingList.filter(
      ({ name }) =>
        name.toLowerCase() === keyWord || name.toLowerCase().includes(keyWord)
    );
    // console.log(filteredCoctails);
    box.innerHTML = '';
    buildMarkupIng(filteredCoctails);
  } else {
    wrapper.innerHTML = '';
    wrapper.style.display = 'none';
    errorMarkup();
  }
}

const title = document.querySelector('.gallery__title');
function errorMarkup() {
  const noMatch = `<div class='noresult__container'>
                     <p class='noresult__text'>Sorry, we didn't find this ingridient for you in favorite ingridients</p>
                     <div class='noresult__box'></div></div>`;
  title.classList.add('visually-hidden');
  // paginatorList.innerHTML = '';
  return (box.innerHTML = noMatch);
}
