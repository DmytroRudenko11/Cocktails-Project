import { renderCocktails, perPage } from './render-gallery';
import personalheart from '../images/personalheart.svg';

const forwardBox = document.querySelector('.fore__wrapper');
const backwardBox = document.querySelector('.back__wrapper');
const paginatorList = document.querySelector('.pagination__list');

export function handleActiveBtn(element) {
  let currentActive = document.querySelector('li.pagination__item--active');
  currentActive.classList.remove('pagination__item--active');

  element.classList.add('pagination__item--active');
}

function checkActive(liElems, currentPage) {
  let currentActive = document.querySelector('li.pagination__item--active');
  currentActive.classList.remove('pagination__item--active');
  liElems.forEach(liEl => {
    if (currentPage === Number(liEl.textContent)) {
      liEl.classList.add('pagination__item--active');
    }
  });
}

export function handlePagination(searchResult, totalPages, currentPage) {
  createPaginationMarkup(totalPages);
  createArrowsMarkup();

  const forward = document.querySelector('.forward');
  const backward = document.querySelector('.backward');
  const liElems = document.querySelectorAll('.pagination__item');

  if (currentPage === 1) {
    backward.disabled = true;
    forward.disabled = false;
  }

  liElems.forEach(liEl => {
    if (currentPage === Number(liEl.textContent)) {
      liEl.classList.add('pagination__item--active');
    }
  });

  liElems.forEach(liEl => {
    liEl.addEventListener('click', e => {
      let digit = Number(e.target.textContent);
      currentPage = digit;
      handleActiveBtn(liEl);
      backward.disabled = true;
      forward.disabled = true;
      if (currentPage !== 1) {
        backward.disabled = false;
      }

      if (currentPage !== totalPages) {
        forward.disabled = false;
      }

      renderCocktails(searchResult, perPage, currentPage);
    });
  });

  backward.addEventListener('click', moveBack);
  function moveBack() {
    currentPage--;

    renderCocktails(searchResult, perPage, currentPage);
    checkActive(liElems, currentPage);
    forward.disabled = false;

    if (currentPage === 1) {
      backward.disabled = true;
    }
  }

  forward.addEventListener('click', moveFore);
  function moveFore() {
    currentPage++;

    renderCocktails(searchResult, perPage, currentPage);
    checkActive(liElems, currentPage);

    backward.disabled = false;

    if (currentPage === totalPages) {
      forward.disabled = true;
    }
  }
}

function createPaginationMarkup(totalCount) {
  let pagesCount = [];
  for (let i = 0; i < totalCount; i++) {
    let pageNumber = i + 1;
    pagesCount.push(pageNumber);
  }
  const pagBtn = pagesCount.map(digit => {
    return `<li class='pagination__item'>${digit}</li>`;
  });

  paginatorList.insertAdjacentHTML('beforeend', pagBtn.join(''));
}

function createArrowsMarkup() {
  const markupBack = `<button class="backward" type="button">
        <svg class="arrow__back" width="8" height="13">
          <use href='${personalheart + '#icon-arrow-left'}'></use>
        </svg>
      </button>`;

  const markupFore = `<button class="forward" type="button">
      <svg class="arrow__fore" width="8" height="13">
        <use href="${personalheart + '#icon-arrow-right-black'}"></use>
      </svg>
    </button>`;

  forwardBox.insertAdjacentHTML('beforeend', markupFore);
  backwardBox.insertAdjacentHTML('afterbegin', markupBack);
}

function paginationFilter(cocktailList, perPage, page) {
  page--;
  box.innerHTML = '';

  const begin = perPage * page;
  const end = begin + perPage;
  const paginatedData = cocktailList.slice(begin, end);
  return paginatedData;
}
