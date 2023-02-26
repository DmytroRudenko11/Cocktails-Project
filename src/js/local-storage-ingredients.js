// Логика добавления и удаления из лакального хранилища на кнопке модалки-ингридиент

// const objectOfIng = {
//   hone: 'Campari',
//   htwo: 'Liqueur',
// };

// const LOCALSTORAGE_KEY = 'key-of-ingridient';
const btnToFavor = document.querySelector('#add-to-fav-ing');

const ingridients = [];

if (!localStorage.getItem('ingridients')) {
  localStorage.setItem('ingridients', JSON.stringify(ingridients));
}

btnToFavor.addEventListener('click', addToLocalStorage);

function addToLocalStorage(event) {
  const card = event.target.closest('.modal-ingrid');
  const ingName = card.querySelector('.modal-ingrid__name').textContent;
  const ingType = card.querySelector('.modal-ingrid__title').textContent;
  const ingList = JSON.parse(localStorage.getItem('ingridients'));
  console.log(ingName);
  console.log(ingList);
  const names = ingList.map(({ name }) => name);

  if (
    names.every(value => value !== ingName) ||
    localStorage.getItem('ingridients') === '[]'
  ) {
    const favorIng = {
      name: ingName,
      type: ingType,
    };
    ingList.push(favorIng);
    localStorage.setItem('ingridients', JSON.stringify(ingList));
    markupingBtnIng();
  } else if (names.some(value => value === ingName)) {
    const removeIng = ingList.filter(({ name }) => name !== ingName);
    localStorage.setItem('ingridients', JSON.stringify(removeIng));
    markupingBtnIng();
  }
}

export function markupingBtnIng() {
  const btns = document.querySelectorAll('[data-ing]');
  btns.forEach(btn => {
    const card = btn.closest('.modal-ingrid');
    const ingName = card.querySelector('.modal-ingrid__name').textContent;
    // const card = btn.closest('.item');
    // const coctId = card.dataset.id;
    const ingList = JSON.parse(localStorage.getItem('ingridients'));
    const names = ingList.map(({ name }) => name);
    if (names.some(value => value === ingName)) {
      if (btn.dataset.ing != undefined) {
        btn.textContent = 'Remove from favorite';
      } else {
        btn.innerHTML = `Remove
    <svg class=""icon-hert-remove" width="17" height="15">
     <use href="${personalheart + '#fullorrange'}"></use>
   </svg>`;
      }
    } else {
      if (btn.dataset.ing != undefined) {
        btn.textContent = 'Add to favorite';
      } else {
        btn.innerHTML = `Add to
   <svg class="icon-hert" width="17" height="15">
     <use href="${personalheart + '#icon-black'}"></use>
   </svg>`;
      }
    }
  });
}

//   if (btnToFavor.textContent === 'Add to favorite') {
//     array.push(ingName)
//     console.log(array);
//     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(array));
//     return (btnToFavor.textContent = 'Remove from favorite');
//   }
//   if ((btnToFavor.textContent = 'Remove from favorite')) {
//     localStorage.removeItem(LOCALSTORAGE_KEY);
//     return (btnToFavor.textContent = 'Add to favorite');
//   }
// }
