// DEFINIZIONE VARIABILI

//variabile icona hamburger menu
const hamburgerMenu = document.querySelector('.header-right > a');

//variabile div con classe "hamburger menu"
const hamburgerMenuList = document.querySelector('.hamburger-menu');

//variabile icona X di chiusura
const closeIcon = document.querySelector('.close');

console.log(hamburgerMenu);
console.log(hamburgerMenuList);
console.log(closeIcon);



//EVENTI

//al click dell'icona hamburger menu..
hamburgerMenu.addEventListener('click', function(){
  //..aggiungi la classe "active" al div con classe "hamburger-menu"
  hamburgerMenuList.classList.add('active')
});

//al click dell'icona X di chiusura..
closeIcon.addEventListener('click', function(){
  //..rimuovi la classe "active" al div con classe "hamburger-menu"
  hamburgerMenuList.classList.remove('active')
});


