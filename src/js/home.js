const toggleMenu = document.querySelector('.toggle-menu');
const navUl = document.querySelector('nav ul')
const icons = document.querySelector('#icons')

function change() {
  navUl.classList.toggle('show')
  if (icons.id === `icons`) {
    icons.src = '/assets/shared/icon-close.svg';
    icons.id = `close`;
  } else {
    icons.src = '/assets/shared/icon-hamburger.svg';
    icons.id = `icons`;
  }
}

toggleMenu.addEventListener('click', change)