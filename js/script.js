// Script for search categories
const select = document.getElementById("select");
const list = document.getElementById("list");
const selectedCategory = document.getElementById("selectedCategory");

select.addEventListener("click", () => {
  list.classList.toggle("open");
});

const categories = document.querySelectorAll(".category");

categories.forEach((category) => {
  category.addEventListener("click", () => {
    selectedCategory.innerText = category.innerText;
  });
});
// Heart changing color
let heartIcon = document.querySelectorAll(".heart");
let changedHeart;
heartIcon.forEach((heart) => {
  heart.addEventListener("click", () => {
    changedHeart = heart.classList.toggle("red-heart");
  });
});

// Dodajte JavaScript logiku za prikazivanje/skrivanje navigacije na mobilnim uređajima
const navToggle = document.querySelector(".responsive-nav");
const linkHolder = document.querySelector(".link-holder ul");

navToggle.addEventListener("click", () => {
  linkHolder.classList.toggle("show-links");
});

// Courasel

const courasel = document.querySelector(".slider");

let isDragingStart = false,
  prevPageX,
  prevScrollLeft;

const dragStart = (e) => {
  isDragingStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = courasel.scrollLeft;
};

const draggingMouse = (e) => {
  if (!isDragingStart) return;
  e.preventDefault();
  let positon = e.pageX - e.prevPageX;
  courasel.scrollLeft = prevScrollLeft - positon;
};

const dragStop = () => {
  isDragingStart = false;
};

courasel.addEventListener("mousedown", dragStart);
courasel.addEventListener("mousemove", draggingMouse);
courasel.addEventListener("mouseup", dragStop);
