// Sélection des éléments du DOM
const slide = document.querySelector(".banner-img");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");
const textContainer = document.querySelector("#banner p");
const slidesData = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Création des dots
for (i = 0; i < slidesData.length; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dotsContainer.appendChild(dot);
}

// Initialisation du carrousel
let currentIndex = 0;
displayCurrentSlide();

// Evénements au click
arrowLeft.addEventListener("click", () => {
  click(-1);
});
arrowRight.addEventListener("click", () => {
  click(1);
});

function click(step) {
  removeDotSelected();
  moveIndex(step);
  displayCurrentSlide();
}

function removeDotSelected() {
  const dotSelected = document.querySelector(".dot_selected");
  dotSelected.classList.remove("dot_selected");
}

function displayCurrentSlide() {
  const dots = document.querySelectorAll(".dot");
  dots[currentIndex].classList.add("dot_selected");
  slide.src = `./assets/images/slideshow/${slidesData[currentIndex].image}`;
  textContainer.innerHTML = slidesData[currentIndex].tagLine;
}

function moveIndex(step) {
  currentIndex += step;
  if (currentIndex === -1) {
    currentIndex = slidesData.length - 1;
  }
  if (currentIndex === slidesData.length) {
    currentIndex = 0;
  }
}
