document.addEventListener('DOMContentLoaded', (event) => {

  document.querySelector('.navbar__menu__button').addEventListener('click', event => {
    document.querySelector('.overlay-menu').style.width = "100vw";
  })

  document.querySelector('.overlay-menu__button').addEventListener('click', event => {
    document.querySelector('.overlay-menu').style.width = "0vw";
  })
});