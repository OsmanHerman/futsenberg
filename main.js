'use strict';

const ventajasMobile = document.querySelector("#ventajas .ventaja-mobile p");
const ventajasIconos = document.querySelectorAll("#ventajas .icono");
const ventajasTextos = document.querySelectorAll("#ventajas .ventaja p");

// Caso inicial
ventajasIconos[0].classList.add('seleccionado');

// Agregado de evento a todos los iconos
ventajasIconos.forEach((icono, index) => {
    icono.addEventListener('click', ()=>{
        ventajasIconos.forEach(icono => icono.classList.remove('seleccionado'));
        ventajasIconos[index].classList.add('seleccionado');
        ventajasMobile.textContent = ventajasTextos[index].textContent;
    })
})

// Header 
const header = document.querySelector('header');
const navDropdown = document.getElementById('nav-dropdown');
const background = header.querySelector('.background');

let headerOpen = false;

console.log(background)

function toggleHeader(boolean) {
    if (boolean) { // open
        header.classList.add('open');
        headerOpen = true;
        // console.log('open')
    } else { // close
        header.classList.remove('open');
        headerOpen = false;
        // console.log('close')
    }   
}

navDropdown.addEventListener('click', () => {
    if (headerOpen) toggleHeader(false);
    else toggleHeader(true);
})

window.addEventListener('resize', () => {
    if(window.innerWidth > 600) toggleHeader(0);
})

window.addEventListener('touchstart', (e) => {
    if(!e.target.closest('header')) toggleHeader(0)
})