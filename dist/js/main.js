// DOM, seleccionamos al elemento (etiqueta) mediante su .clase ó #id
const menuBtn = document.querySelector('.menu-btn');

const hamburger = document.querySelector('.menu-btn__burger');

let showMenu = false;// el menu está cerrado (no muestra nada)

// agregamos un evento
menuBtn.addEventListener('click', toggleMenu);
// al escuchar el evento de dar Click, se va activar esta función

function toggleMenu() {
    if(!showMenu) {
        hamburger.classList.add('open');

        showMenu = true;// menu abierto (muestra lo que contiene)
    }
    else {
        hamburger.classList.remove('open');

        showMenu = false;// menu cerrado (no muestra lo que contiene)
    }
}



