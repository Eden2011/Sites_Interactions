"use strict"

document.addEventListener('DOMContentLoaded', function () {
    //permet d'obtenir les references de l'icone du menu burger et du menu de nav
    const burgerIcon = document.getElementById('burger-icon');
    const menu = document.getElementById('menu');

    //ajoute un ecouteur d'evenement au clic sur le menu
    burgerIcon.addEventListener('click', function () {

        //bascule la classe active pour afficher/ masquer le menu nav
        menu.classList.toggle('active');
    });
});

/* on remet la meme chose qu'avec le darkmode de la page d'accueil */
let body = document.querySelector("body"); 
let btdm = document.querySelector("#darkmode");

let x = 0;

function darkmod() {
    if (x == 0) {
        body.style.background = "#333";
        body.style.color = "white"
        x = 1;
    } else {
        body.style.background = "white";
        body.style.color = "#333"
        x = 0
    }
}

btdm.addEventListener('click', darkmod);/* event click pour le darkmode */

