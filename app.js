
const navMenu = document.querySelector('.menu');
const navClose = document.querySelector('.menu__close');
const sideBar = document.querySelector('.side-bar');


sideBar.onclick = () => {
  navMenu.classList.add('active');
}

navClose.onclick = () => {
  navMenu.classList.remove('active');
}

