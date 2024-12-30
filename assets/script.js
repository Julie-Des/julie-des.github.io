// Sélection des éléments du DOM
const slides = document.querySelectorAll(".banner-img");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot");
const textContainer = document.querySelector("#banner p");
const slidesText = [
  "Impressions tous formats <span>en boutique et en ligne</span>",
  "Qualité professionnelle <span>et service sur mesure</span>",
  "Des tarifs compétitifs <span>et un service rapide</span>",
  "Une équipe à votre écoute <span>pour tous vos projets</span>",
];


// Initialisation du carrousel
let currentIndex = 0;

for (let i = 1; i < slides.length; i++) {
  slides[i].style.opacity = 0;
}

// Evénements au click 
arrowLeft.addEventListener("click", clickLeft);
arrowRight.addEventListener("click", clickRight);


function clickLeft() {
  removeCurrentSlide();
  moveIndexToLeft();
  displayCurrentSlide();
}

function clickRight() {
  removeCurrentSlide();
  moveIndexToRight();
  displayCurrentSlide();
}

function removeCurrentSlide() {
  dots[currentIndex].classList.remove("dot_selected");
  slides[currentIndex].style.opacity = 0;
}

function displayCurrentSlide() {
  dots[currentIndex].classList.add("dot_selected");
  slides[currentIndex].style.opacity = 1;
  textContainer.innerHTML = slidesText[currentIndex];
}

function moveIndexToLeft() {
  currentIndex -= 1;
  if (currentIndex == -1) {
    currentIndex = slides.length - 1;
  }
}

function moveIndexToRight() {
  currentIndex += 1;
  if (currentIndex == slides.length) {
    currentIndex = 0;
  }
}