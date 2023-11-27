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
