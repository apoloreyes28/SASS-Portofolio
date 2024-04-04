// DOM, seleccionamos al elemento (etiqueta) mediante su .clase ó #id
const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item')
let showMenu = false;// el menu está cerrado (no muestra nada)

// agregamos un evento
menuBtn.addEventListener('click', toggleMenu);
// al escuchar el evento de dar Click, se va activar esta función

function toggleMenu() {
    if(!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');

        // usamos este bucle para recorrer los elementos para realizar 
        // la misma acción (repetida en cada uno) de añadir la clase 'open'
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;// menu abierto (muestra lo que contiene)
    }
    else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');

        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;// menu cerrado (no muestra lo que contiene)
    }
}



