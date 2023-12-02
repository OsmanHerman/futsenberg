'use strict';

// P R E L O A D E R

window.addEventListener("load", function () {
    var onloadHTML = document.getElementById('onload');
    var bodyHTML = document.getElementById('bodyAr');
      
    onloadHTML.style.display = 'none';
    bodyHTML.classList.remove('hidden');
});



// SECCION: VENTAJAS

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

toggleBtn.addEventListener('click', () => {
    header.classList.toggle('open');
    document.getElementById('one').classList.toggle('oneClick')
    document.getElementById('two').classList.toggle('twoClick')
    document.getElementById('trhee').classList.toggle('trheeClick')
})

/*document.querySelector(".hamb").addEventListener('click', function(e) {
    document.getElementById('one').classList.toggle('oneClick')
    document.getElementById('two').classList.toggle('twoClick')
    document.getElementById('trhee').classList.toggle('trheeClick')
    document.querySelector('.menu').classList.toggle('menuClick')
    document.querySelector('.navBar').classList.toggle('navBar-background')
  })*/










































// Panel de redes
/* document.addEventListener("DOMContentLoaded", function() {
    var anchoRedes = document.querySelector(".redes").offsetWidth;
    var altoRedes = (document.querySelector(".redes").offsetHeight)/2;
    var anchoScroll = (document.body.scrollWidth - window.innerWidth)*(-1);
    document.querySelector(".redes").style.transform = `translate(calc(100vw - ${anchoRedes + anchoScroll}px), calc(50vh - ${altoRedes}px)`;
})

window.addEventListener('resize', () => {
    var anchoRedes = document.querySelector(".redes").offsetWidth;
    var altoRedes = (document.querySelector(".redes").offsetHeight)/2;
    var anchoScroll = (document.body.scrollWidth - window.innerWidth)*(-1);
    document.querySelector(".redes").style.transform = `translate(calc(100vw - ${anchoRedes + anchoScroll}px), calc(50vh - ${altoRedes}px)`;
})
 */


/*window.addEventListener("load", function () {
    var onloadSelectorHTML = document.getElementById('onload');
    var bodySelectorHTML = document.getElementById('bodyAr');
      
    onloadSelectorHTML.style.display = 'none';
    bodySelectorHTML.classList.remove('hidden');
});*/

/*window.onload = function() {
    var onloadHTML = document.getElementById('onload');
    var bodyHTML = document.getElementById('bodyAr');
      
    onloadHTML.style.display = 'none';
    bodyHTML.classList.remove('hidden');
};*/

/*window.onload = function() {
    var onloadHTML = document.getElementById('onloadSelector');
    var bodyHTML = document.getElementById('bodySelector');
      
    onloadHTML.style.display = 'none';
    bodyHTML.classList.remove('hiddenSelector');
}*/