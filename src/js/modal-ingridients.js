import axios from 'axios';
const box = document.querySelector('.box-ingrid');

const refs = {
  closeModalBtn: document.querySelector('[data-modal-ingrid-close]'),
  modal: document.querySelector('[data-modal-ingrid]'),
  body: document.querySelector('body'),
};

refs.closeModalBtn.addEventListener('click', toggleModal);
refs.modal.addEventListener('click', closeModal);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  refs.body.classList.add('no-scroll');
}

function closeModal(event) {
  if (event.target === refs.modal) {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
}

document.addEventListener('click', async e => {
  if (e.target.dataset.ingredient) {
    const ingridName = e.target.dataset.ingredient;
    const ingridData = await fetchIngridient(ingridName);
    buildMarkup(ingridData);
    toggleModal();
  }
  return;
});

async function fetchIngridient(queryToFetch) {
  try {
    const result = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${queryToFetch}`
    );
    return result.data.ingredients[0];
  } catch (error) {
    console.log(error);
  }
}

function buildMarkup(data) {
  const {
    strIngredient: name,
    strType: type,
    strDescription: description,
  } = data;

  const markup = `<h2 class="modal-ingrid__name">${name}</h2>
                <h3 class="modal-ingrid__title">${type?.replace(name, '') || 'liquid'}</h3>
                <div class="line"></div>
    
                <p class="modal-ingrid__descrip"><span class='accent__text'>${name} </span> ${
                  description?.replace(name, '') || 'No description'
                }</p>

                <ul class="modal-ingrid__list">
                    <li class="modal-ingrid__component"><p><span>&#10038;</span> Type: ${
                      type?.replace(name, '') || 'You already know'
                    }</p></li>
                    <li class="modal-ingrid__component"><p><span>&#10038;</span> Country of origin: Italy</p> </li>
                    <li class="modal-ingrid__component"><p><span>&#10038;</span> Alcohol by volume: 20.5–28.5%</p> </li>
                    <li class="modal-ingrid__component"><p><span>&#10038;</span> Flavour: Bitter, spicy and sweet</p></li>
                </ul>`;
  box.innerHTML = markup;
  markupingBtnModalIng();
}

function markupingBtnModalIng() {
  const btns = document.querySelectorAll('[data-ing]');
  btns.forEach(btn => {
    const ingList = JSON.parse(localStorage.getItem('ingridients'));
    const card = btn.closest('.modal-ingrid');
    const ingName = card.querySelector('.modal-ingrid__name').textContent;
    console.log(ingName);
    const names = ingList.map(({ name }) => name);
    if (names.some(value => value === ingName)) {
      if (btn.dataset.ing != undefined) {
        btn.textContent = 'Remove from favorite';
      }
    } else {
      if (btn.dataset.ing != undefined) {
        btn.textContent = 'Add to favorite';
      }
    }
  });
}
