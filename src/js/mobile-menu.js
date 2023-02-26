let closed = 'menu is-hidden', opened = 'menu'
let btnIcon = document.querySelectorAll('.menu-btn__icon-wrap')
let mobileMenu = document.querySelector('.menu');
let header = document.querySelector('.header')
let links = document.querySelectorAll('.menu__button-link')
const body = document.querySelector('body')


let openBtn = document.querySelectorAll('.menu-btn')

openBtn.forEach((a) => { a.addEventListener('click', openCloseMenu) })
links.forEach((a) => { a.addEventListener('click', openCloseMenu); console.log(a); })

function openCloseMenu() {
  if (mobileMenu.dataset.menuClosed == 1) {
    mobileMenu.style = 'height: 100vh'
    mobileMenu.className = opened;
    mobileMenu.dataset.menuClosed = 0;
    btnIcon[0].className = 'menu-btn__icon-wrap visually-hidden'
    btnIcon[1].className = 'menu-btn__icon-wrap'
    header.className = 'header fixed'
    body.classList.add('no-scroll');
  } else {
    mobileMenu.className = closed;
    mobileMenu.dataset.menuClosed = 1;
    btnIcon[1].className = 'menu-btn__icon-wrap visually-hidden'
    btnIcon[0].className = 'menu-btn__icon-wrap'
    header.className = 'header'
    setTimeout(() => { mobileMenu.style = 'height: 1px' }, 255)
    body.classList.remove('no-scroll');
  }
}
