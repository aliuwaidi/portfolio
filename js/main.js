// selecting DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBrand = document.querySelector('.menu-brand');
const navItems = document.querySelectorAll('.nav-item');


// set initial state of menu
let showMenu = false;

// adding event to menubtn
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBrand.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    //set menu state to true
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBrand.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // set menu state to false
    showMenu = false;
  }
}