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

let body = document.querySelector("body"); //on selectionne le body dans notre html
let btdm = document.querySelector("#darkmode"); //on créé un bouton pour lui appliquer la fonction "darkmode" donc assombrir l'écran

let x = 0;// de base x=0, lorsqu'on cliquera x sera égal à 1

function darkmod() {// mise en place de la fonction darkmode
    if (x == 0) {
        body.style.background = "#333";
        body.style.color = "white"
        x = 1;
    } else {
        body.style.background = "white";
        body.style.color = "#333"
        x = 0
    }//tant que x=0 le fond est blanc, lors d'un clic x=1 le fond devient sombre, autre clic x=0, etc..
}
btdm.addEventListener('click', darkmod);//ajout de l'evenement clic


const btL = document.getElementById("slideL");
const btR = document.getElementById("slideR");//ajout d'une constante pour laisser les boutons du slider visibles
const swiperContainer = document.getElementById("swipe")//on récupère les éléments du slider
let i = 0

btL.addEventListener("click", () => {//ajout de l'évènement clic pour le bouton gauche
    if (i === -100) {
        btL.style.opacity = '0'
        console.log('aled')
    }//si je suis en -100 (donc avant la page 1) le bouton gauche est invisible
    if (i >= -300) {
        btR.style.opacity = '1'
    }//en -300 le bouton gauche devient visible 
    if (i < 0) {
        i = i + 100
        console.log(i)
        swiperContainer.style.transform = `translate(${i}vw)`;
        console.log('clicked left')// on vérifie le clic

    }
})

btR.addEventListener("click", () => {//ajout d'evenement pour la flèche de droite, event click de souris
    if (i <= 0) { 
        btL.style.opacity = '1'
    }// si je suis au niveau de page inférieur ou égal à 0 (1e page= 0, 2e page= -100) le bouton gauche apparait

    if (i === -200) {
        btR.style.opacity = '0'
        console.log('aled')
    }// si je suis en -200 le bouton droit disparait (on arrive en fin de slide)
    if (i > -300) {
        i = i - 100
        console.log(i)
        swiperContainer.style.transform = `translate(${i}vw)`;
        console.log('clicked right');
    }// tant que je suis en -300 (donc 4e page) je suis dans le slider et donc je peux cliquer à droite
})


function tourneImageBmth() {//mise en place de la fonction pour faire un carousel
    let monImageBmth = document.getElementById("bmth").getAttribute('src');//on laisse le code aller chercher les sources des images
    console.log(monImageBmth);//permet de vérifier que le code fonctionne bien (faire attention a bien le placer)
    //monImage a qui on affecte l'attribut src de mon id carousel
    switch (monImageBmth) {//switch pour changer les images 
        case 'img/bmth count your blessings.jpg':
            document.getElementById('bmth').src = "img/bmth there is a hell.jpg";//l'image 1 sera changer par l'image 2 apres un clic, ce sera pareil en bas (img2 par img3, img3 par img4, etc..)
            break;
        case 'img/bmth there is a hell.jpg':
            document.getElementById('bmth').src = "img/bmth suicide season.png";//attention aux formats des images (png, jpg..)
            break;
        case 'img/bmth suicide season.png':
            document.getElementById('bmth').src = "img/bmth sempiternal.jpg";
            break;
        case 'img/bmth sempiternal.jpg':
            document.getElementById('bmth').src = "img/bmth that's the spirit.jpg";
            break;
        case "img/bmth that's the spirit.jpg":
            document.getElementById('bmth').src = "img/bmth amo.jpg";
            break;
        case 'img/bmth amo.jpg':
            document.getElementById('bmth').src = "img/bmth PHSH.jpg";
            break;
        case 'img/bmth PHSH.jpg':
            document.getElementById('bmth').src = "img/bmth PHNG.jpg";
            break;
        case 'img/bmth PHNG.jpg':
            document.getElementById('bmth').src = "img/bmth count your blessings.jpg";//on retourne au début du carousel (img8 par img1)
            break;
    }
};


let btb = document.getElementById('bmth');//permet de retrouver les images utilisées 
btb.addEventListener('click', tourneImageBmth);//en cliquant, on active la fonction tourneImage et active donc le carousel (pas automatique) 




// on refait un autre carousel de la meme manière qu'au dessus
function tourneImageArch() {
    let monImageArch = document.getElementById("architects").getAttribute('src');
    console.log(monImageArch);
    switch (monImageArch) {
        case 'img/arch_aoghau.jpg':
            document.getElementById('architects').src = "img/arch_daybreaker.jpg";
            break;
        case 'img/arch_daybreaker.jpg':
            document.getElementById('architects').src = "img/arch_fttwte.jpg";
            break;
        case 'img/arch_fttwte.jpg':
            document.getElementById('architects').src = "img/arch_hollow_crown.jpg";
            break;
        case 'img/arch_hollow_crown.jpg':
            document.getElementById('architects').src = "img/arch_holy_hell.jpg";
            break;
        case "img/arch_holy_hell.jpg":
            document.getElementById('architects').src = "img/arch_lflt.jpg";
            break;
        case 'img/arch_lflt.jpg':
            document.getElementById('architects').src = "img/arch_nightmares.jpg";
            break;
        case 'img/arch_nightmares.jpg':
            document.getElementById('architects').src = "img/arch_ruin.jpg";
            break;
        case 'img/arch_ruin.jpg':
            document.getElementById('architects').src = "img/arch_tcsoabs.jpeg";
            break;
        case 'img/arch_tcsoabs.jpeg':
            document.getElementById('architects').src = "img/arch_than.jpg";
            break;
        case 'img/arch_than.jpg':
            document.getElementById('architects').src = "img/arch_aoghau.jpg";
            break;
    };
};


let bta = document.getElementById('architects');
bta.addEventListener('click', tourneImageArch); 

//3e carousel
function tourneImageRb() {
    let monImageRb = document.getElementById("royalblood").getAttribute('src');
    console.log(monImageRb);
    switch (monImageRb) {
        case 'img/RB_bttwb.jpg':
            document.getElementById('royalblood').src = "img/RB_hdwgsd.jpg";
            break;
        case 'img/RB_hdwgsd.jpg':
            document.getElementById('royalblood').src = "img/RB_rb.jpg";
            break;
        case 'img/RB_rb.jpg':
            document.getElementById('royalblood').src = "img/RB_typhoons.jpg";
            break;
        case 'img/RB_typhoons.jpg':
            document.getElementById('royalblood').src = "img/RB_bttwb.jpg";
            break;
    };
};


let btr = document.getElementById('royalblood');
btr.addEventListener('click', tourneImageRb); 

//dernier carousel
function tourneImageW() {
    let monImageW = document.getElementById("waterparks").getAttribute('src');
    console.log(monImageW);
    switch (monImageW) {
        case 'img/waterparks_double_dare.png':
            document.getElementById('waterparks').src = "img/waterparks_entertainment.jpg";
            break;
        case 'img/waterparks_entertainment.jpg':
            document.getElementById('waterparks').src = "img/waterparks_fandom.jpg";
            break;
        case 'img/waterparks_fandom.jpg':
            document.getElementById('waterparks').src = "img/waterparks_greatest_hits.jpg";
            break;
        case 'img/waterparks_greatest_hits.jpg':
            document.getElementById('waterparks').src = "img/waterparks_intellectual_property.jpg";
            break;
        case 'img/waterparks_intellectual_property.jpg':
            document.getElementById('waterparks').src = "img/waterparks_double_dare.png";
            break;
    };
};


let btw = document.getElementById('waterparks');
btw.addEventListener('click', tourneImageW); // on a tout nos carousels!!