function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},n.parcelRequired7c6=r),r.register("kyEFX",(function(t,n){var o,i;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var r={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},i=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("kyEFX").register(JSON.parse('{"5ZPII":"index.c65c34b2.js","3P3sM":"personalheart.8137e271.svg","4qnKo":"people-mob.898db292.png","fpBFr":"people-mob-2x.00899545.png","crApi":"people-tab.2ae2bc95.png","Xiv01":"people-tab-2x.e2a01e14.png","kbbIL":"people.ed4f2a0e.png","5QmMM":"people-2x.958f6639.png","2bNYR":"favorite-cocktails.f9c902b4.js","dcAXX":"favorite-cocktails.3955f48b.js"}')),r("kmKSM"),r("e1bJr");var a,c=r("cyIMT");a=new URL(r("kyEFX").resolve("3P3sM"),import.meta.url).toString();function l(){document.querySelectorAll("[data-add]").forEach((e=>{const n=e.closest(".item").dataset.id;JSON.parse(localStorage.getItem("coctailse")).map((({id:e})=>e)).some((e=>e===n))?null!=e.dataset.modal?e.textContent="Remove from favorite":e.innerHTML=`Remove\n    <svg class=""icon-hert-remove" width="17" height="15">\n     <use href="${t(a)+"#fullorrange"}"></use>\n   </svg>`:null!=e.dataset.modal?e.textContent="Add to favorite":e.innerHTML=`Add to\n   <svg class="icon-hert" width="17" height="15">\n     <use href="${t(a)+"#icon-black"}"></use>\n   </svg>`}))}localStorage.getItem("coctailse")||localStorage.setItem("coctailse",JSON.stringify([])),document.addEventListener("click",(e=>{if(null!=e.target.dataset.add){const t=JSON.parse(localStorage.getItem("coctailse")),n=e.target.closest(".item"),o=n.dataset.id,i=t.map((({id:e})=>e));if(i.every((e=>e!==o))||"[]"===localStorage.getItem("coctailse")){const e=n.querySelector(".image").src,i=n.querySelector(".name").textContent,r={id:o,name:i,src:e};t.push(r),localStorage.setItem("coctailse",JSON.stringify(t)),l()}else if(i.some((e=>e===o))){const e=t.filter((({id:e})=>e!==o));localStorage.setItem("coctailse",JSON.stringify(e)),l()}}}));const s=document.querySelector(".fore__wrapper"),d=document.querySelector(".back__wrapper"),u=document.querySelector(".pagination__list");function m(e,t){document.querySelector("li.pagination__item--active").classList.remove("pagination__item--active"),e.forEach((e=>{t===Number(e.textContent)&&e.classList.add("pagination__item--active")}))}function _(e,n,o){!function(e){let t=[];for(let n=0;n<e;n++){let e=n+1;t.push(e)}const n=t.map((e=>`<li class='pagination__item'>${e}</li>`));u.insertAdjacentHTML("beforeend",n.join(""))}(n),function(){const e=`<button class="backward" type="button">\n        <svg class="arrow__back" width="8" height="13">\n          <use href='${t(a)+"#icon-arrow-left"}'></use>\n        </svg>\n      </button>`,n=`<button class="forward" type="button">\n      <svg class="arrow__fore" width="8" height="13">\n        <use href="${t(a)+"#icon-arrow-right-black"}"></use>\n      </svg>\n    </button>`;s.insertAdjacentHTML("beforeend",n),d.insertAdjacentHTML("afterbegin",e)}();const i=document.querySelector(".forward"),r=document.querySelector(".backward"),c=document.querySelectorAll(".pagination__item");1===o&&(r.disabled=!0,i.disabled=!1),c.forEach((e=>{o===Number(e.textContent)&&e.classList.add("pagination__item--active")})),c.forEach((t=>{t.addEventListener("click",(a=>{let c=Number(a.target.textContent);var l;o=c,l=t,document.querySelector("li.pagination__item--active").classList.remove("pagination__item--active"),l.classList.add("pagination__item--active"),r.disabled=!0,i.disabled=!0,1!==o&&(r.disabled=!1),o!==n&&(i.disabled=!1),F(e,E,o)}))})),r.addEventListener("click",(function(){o--,F(e,E,o),m(c,o),i.disabled=!1,1===o&&(r.disabled=!0)})),i.addEventListener("click",(function(){o++,F(e,E,o),m(c,o),r.disabled=!1,o===n&&(i.disabled=!0)}))}const f=document.querySelector(".cocktail__list"),p=document.querySelector(".paginator"),v=document.querySelector(".pagination__list"),g=document.querySelector(".cocktail__section"),b=document.querySelector(".header-search-icon"),h=document.querySelector(".gallery__title"),y=document.querySelector(".fore__wrapper"),S=document.querySelector(".back__wrapper"),L=document.querySelector(".hero__list"),w=document.querySelector(".menu-search-icon");b.addEventListener("submit",M),w.addEventListener("submit",M);let k=[],H=1,E=0;async function q(e){e.preventDefault(),H=1,p.classList.add("visually-hidden"),h.classList.remove("visually-hidden");const t=e.target.dataset.letter;T(),e.target.classList.add("letter-active"),f.innerHTML="";const n=await(0,c.fetchCocktailByLetter)(t);if(null===n)return R(),void f.scrollIntoView({block:"end",behavior:"smooth"});F(n,E,H),n.length>E&&x(n),h.scrollIntoView({block:"start",behavior:"smooth"})}async function M(e){e.preventDefault(),p.classList.add("visually-hidden"),h.classList.remove("visually-hidden");const t=e.target.elements.searchQuery.value.trim().toLowerCase();T(),f.innerHTML="";const n=await(0,c.fetchCocktailByName)(t);if(null===n)return R(),void f.scrollIntoView({block:"end",behavior:"smooth"});F(n,E,H),n.length>E&&x(n),h.scrollIntoView({block:"start",behavior:"smooth"}),b.reset(),w.reset()}async function x(e){v.innerHTML="",S.innerHTML="",y.innerHTML="",p.classList.remove("visually-hidden"),H=1,totalPages=await Math.ceil(e.length/E),_(e,totalPages,H)}function A(e){if(null===e){const e="<p class='noresult__text'>Sorry, we didn't find any cocktail for you</p>\n                     <div class='noresult__box'></div>";return void(g.innerHTML=e)}const n=e.map((({strDrinkThumb:e,strDrink:n,idDrink:o})=>`<li class='cocktail__item item' data-id='${o}''>\n      <img class='cocktail__image image' src='${e}' alt='cocktail'/>\n      <h3 class='cocktail__title name'>${n}</h3>\n      <div class='cocktail__btn--box'>\n      <button class='learnmore__btn' type='button' data-cocktail='${o}'>Learn More</button>\n      <button class='add__btn' type='button' data-add>Add to\n     <svg class="icon-hert" width="17" height="15">\n            <use href="${t(a)+"#icon-black"}"></use>\n    </svg>\n     </button>\n      </div>\n      </li>`));f.insertAdjacentHTML("beforeend",n.join("")),l()}function F(e,t,n){n--,f.innerHTML="";const o=t*n,i=o+t;return A(e.slice(o,i))}function R(){return h.classList.add("visually-hidden"),v.innerHTML="",f.innerHTML="<div class='noresult__container'>\n                     <p class='noresult__text'>Sorry, we didn't find any cocktail for you</p>\n                     <div class='noresult__box'></div></div>"}function T(){Array.from(L.children).forEach((e=>{e.classList.contains("letter-active")&&e.classList.remove("letter-active")}))}E=function(){window.matchMedia("(min-width: 320px)").matches&&(E=3);window.matchMedia("(min-width: 768px)").matches&&(E=6);window.matchMedia("(min-width: 1200px)").matches&&(E=9);return E}(),async function(){h.classList.remove("visually-hidden"),p.classList.add("visually-hidden"),k=await(0,c.fetchRandomCoctails)(E),f.innerHTML="",A(k)}();new URL(r("kyEFX").resolve("4qnKo"),import.meta.url).toString();new URL(r("kyEFX").resolve("fpBFr"),import.meta.url).toString();new URL(r("kyEFX").resolve("crApi"),import.meta.url).toString();new URL(r("kyEFX").resolve("Xiv01"),import.meta.url).toString();new URL(r("kyEFX").resolve("kbbIL"),import.meta.url).toString();new URL(r("kyEFX").resolve("5QmMM"),import.meta.url).toString();const C=document.querySelector("#select"),I=document.querySelector(".hero__list"),j=document.querySelector(".select__input"),N=(document.querySelector(".gallery__title"),document.querySelector(".cocktail__list"),document.querySelector(".input-span")),X=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"];function $(){const e=`<div class="select__dropdown">\n      <ul class="select__list">\n      ${X.map((e=>`\n      <li class="select__item" data-letter="${e}">${e.toUpperCase()}</li>\n      `)).join("")}\n      </ul>\n      </div>`;C.insertAdjacentHTML("beforeend",e)}document.querySelector(".select__input");let O=document.querySelector(".gallery__title");I.addEventListener("click",q),j.addEventListener("click",(function(){if(O.classList.add("mob-open"),C.children.length>1)return O.classList.remove("mob-open"),void C.lastChild.remove();$(),C.lastChild.addEventListener("click",(e=>{q(e),N.textContent=e.target.dataset.letter.toUpperCase(),C.lastChild.remove(),O.classList.remove("mob-open")}))})),r("8FnLx"),r("c7hYd"),r("jxBsZ"),r("g43k3"),r("cyIMT"),r("7GzVo");
//# sourceMappingURL=index.c65c34b2.js.map
