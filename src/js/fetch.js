import axios from 'axios';

export async function fetchRandomCoctails(cardPerPage) {
  let randomArray = [];
  for (let i = 0; i < cardPerPage; i++) {
    const randomCoctail = await axios.get(
      'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    );
    randomArray.push(...randomCoctail.data.drinks);
  }
  const randomCoctails = await Promise.all(randomArray);
  return randomCoctails;
}

export async function fetchCocktailByName(queryToFetch) {
  let cocktails = [];
  try {
    const result = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${queryToFetch}`
    );
    cocktails = await result.data.drinks;
    return cocktails;
  } catch {
    error => console.log(error.message);
  }
}

export async function fetchCocktailByLetter(queryToFetch) {
  let cocktails = [];
  try {
    const result = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${queryToFetch}`
    );
    cocktails = await result.data.drinks;
    return cocktails;
  } catch {
    error => console.log(error.message);
  }
}
