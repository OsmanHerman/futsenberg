'use strict';

// V A R I A B L E S   G E N E R A L E S

const hero = document.getElementById('hero');



// P R E L O A D E R

window.addEventListener("load", function () {
    var onloadHTML = document.getElementById('onload');
    var bodyHTML = document.getElementById('bodyAr');
      
    onloadHTML.style.display = 'none';
    bodyHTML.classList.remove('hidden');
});



// S E C C I O N :   V E N T A J A S

const ventajasMobile = document.querySelector("#ventajas .ventaja-mobile p");
const ventajasIconos = document.querySelectorAll("#ventajas .icono");
const ventajasTextos = document.querySelectorAll("#ventajas .ventaja p");

ventajasIconos[0].classList.add('seleccionado');

ventajasIconos.forEach((icono, index) => {
    icono.addEventListener('click', ()=>{
        ventajasIconos.forEach(icono => icono.classList.remove('seleccionado'));
        ventajasIconos[index].classList.add('seleccionado');
        ventajasMobile.textContent = ventajasTextos[index].textContent;
    })
})



// H E A D E R

const header = document.querySelector('header');
const toggleBtn = document.querySelector('header .icons button');
const links = header.querySelectorAll("nav a");

let headerAbsolute = true;
let headerOpen = false;

function toggleHeader(boolean) {
    if (boolean) { // open
        header.classList.add('open');
        headerOpen = true;
    } else { // close
        header.classList.remove('open');
        headerOpen = false;
    }   
}

window.addEventListener('resize', () => {if (window.innerWidth > 600) toggleHeader(0);})

window.addEventListener('touchstart', (e) => {if (!e.target.closest('header')) toggleHeader(0)})

toggleBtn.addEventListener('click', () => {header.classList.toggle('open');})

links.forEach(link => link.addEventListener('click', () => {toggleHeader(0)}))

const heroObserver = new IntersectionObserver(
    entries => {
        const [entry] = entries;
        if(entry.isIntersecting) {
            header.classList.remove('not-hero');
        } else {
            header.classList.add('not-hero');
        }
    },
    {
        rootMargin: `-${header.getBoundingClientRect().height}px` 
    }
)

heroObserver.observe(hero);



// C A R G A R   C O N T E N I D O 

const precios = {
    'argentina': ["ARS", "6.500", "19.600", "32.600", "62.250"],
    'venezuela': ["USD", "10", "27,8", "43,7", "82"],
    'chile': ["CLP", "7.800", "22.100", "34.900", "65.900"],
    'uruguay': ["UYU", "580", "1.650", "2.600", "4.920"],
    'colombia': ["COP", "35.000", "99.700", "157.000", "297.500"],
    'mexico': ["MXN", "210", "599", "945", "1.785"]
}

const todasTarjetas = Array.from(document.querySelectorAll('#ofertas .tarjeta')).slice(0, 4);

function llenarTarjetas(pais) {
    const currencyCode = precios[pais][0];
    todasTarjetas.forEach((element, index) => {
        const currentPrice = precios[pais][index+1];
        element.children[4].textContent = `${currentPrice} ${currencyCode}`;
    })
}
