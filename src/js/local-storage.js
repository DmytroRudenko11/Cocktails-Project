// // const wrapper = document.querySelector('.favorit-coct__wrapper');
// const addBtn = document.querySelectorAll('.add__btn');
// console.log(addBtn);
// const list = document.querySelector('.favorit-coct__list');

// const coctailse = [];

// if (!localStorage.getItem('coctailse')) {
//   localStorage.setItem('coctailse', JSON.stringify(coctailse));
// }

// const coctailList = JSON.parse(localStorage.getItem('coctailse'));
// console.log(coctailList);

// if (localStorage.getItem('coctailse') === '[]') {
//   console.log('helllo');
//   // renderStartMarkup();
// }
// // else {
// //   wrapper.innerHTML = '';
// //   // list.innerHTML = '';
// //   renderCocktailsCard(coctailList);
// // }

// // function renderStartMarkup() {
// //   const startMarkup = `<p>You haven't added any favorite cocktails yet</p>`;
// //   wrapper.insertAdjacentHTML('beforebegin', startMarkup);
// // }

// document.addEventListener('click', event => {
//   const card = event.target.closest('li');
//   console.log(card);
//   const coctId = card.dataset.id;
//   console.log(coctId);
//   if (event.target.dataset.add != undefined) {
//     const coctImg = card.querySelector('.cocktail__image').src;
//     const coctName = card.querySelector('.cocktail__title').textContent;

//     const favoritCoct = {
//       id: coctId,
//       name: coctName,
//       src: coctImg,
//     };
//     coctailse.push(favoritCoct);
//     console.log(coctailse);
//     localStorage.setItem('coctailse', JSON.stringify(coctailse));

//     changeToRemove(event);
//     renderCocktailsCard(coctailList);
//   }
//   // if (event.target.dataset.remove != undefined) {
//   //   const coctailList = JSON.parse(localStorage.getItem('coctailse'));
//   //   const filteredCoctails = coctailList.filter(({ id }) => id !== coctId);
//   //   localStorage.setItem('coctailse', JSON.stringify(filteredCoctails));

//   //   renderCocktailsCard(coctailList);
//   //   changeToAdd(event);
//   // }
// });

// function changeToAdd(event) {
//   event.target.removeAttribute('data-remove');
//   event.target.setAttribute('data-add', true);
//   const tekst = event.target.textContent === 'Remove from favorite';
//   if (tekst) {
//     event.target.textContent = 'Add to favorite';
//   } else {
//     event.target.textContent = 'Add to';
//   }
// }

// function changeToRemove(event) {
//   event.target.removeAttribute('data-add');
//   event.target.setAttribute('data-remove', true);

//   const tekst = event.target.textContent === 'Add to favorite';

//   if (tekst) {
//     event.target.textContent = 'Remove from favorite';
//   } else {
//     event.target.textContent = 'Remove';
//   }
// }

// function renderCocktailsCard(cocktailList) {
//   list.innerHTML = '';
//   const markupCoct = cocktailList
//     .map(({ id, name, src }) => {
//       return ` <li class='cocktail__item'>
//                 <div class='cocktail__card' data-id=${id}>
//                     <img class='cocktail__image'
//                         src="${src}"
//                         alt='cocktail' />
//                     <div class='cocktail__thumb'>
//                         <h3 class='cocktail__title'>${name} </h3>
//                         <div class='cocktail__btn--box'>
//                             <button class='learnmore__btn' type='button'>Learn More</button>
//                             <button class='add__btn' type='button' data-add>Add to</button>
//                         </div>
//                     </div>
//                 </div>
//             </li>`;
//     })
//     .join('');
//   list.insertAdjacentHTML('beforeend', markupCoct);
// }

// function markupingBtn() {
//   const btns = document.querySelectorAll([data - add]);
//   console.log(btns);
//   btns.forEach(btn => {
//     const card = btn.closest('.item');
//     const coctId = card.dataset.id;
//     const coctailList = JSON.parse(localStorage.getItem('coctailse'));
//     const numbers = coctailList.map(({ id }) => id);
//     if (numbers.some(value => value === coctId)) {
//       btn.innerHTML = `Remove
//      <svg class="icon-hert" width="19" height="17">
//             <use href="./symbol-defs.a8b2e413.svg#icon-heart-transparent"></use>
//     </svg>`;
//     }
//   });
// }
