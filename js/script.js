const loader = () => {
  document.querySelector(".loader-container").classList.add("fade-out");
  console.log("success");
};
const fadeOut = () => {
  setTimeout(() => {
    loader();
    console.log("fake");
  }, 1500);
};

window.onload = fadeOut;

let nav = document.querySelector(".right-side-holder");
let navBtn = document.querySelector("#responsive-btn");

if (!nav) {
  console.error("Error");
} else {
  navBtn.addEventListener("click", (e) => {
    console.log("success");
    nav.classList.toggle("responsive-style");
  });
}
window.onscroll = () => {
  nav.classList.remove("responsive-style");
};

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

let heartIcon = document.querySelectorAll(".heart");
let changedHeart;
heartIcon.forEach((heart) => {
  heart.addEventListener("click", () => {
    changedHeart = heart.classList.toggle("red-heart");
  });
});

const courasel = document.getElementById("courasel-img");
const arrowIcons = document.querySelectorAll(".arrow");
const firstImg = courasel.querySelector(".image-holder img");
const leftArrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");

let isDraggingStart = false,
  startPageX,
  startScrollLeft;
let firstImgWidth = firstImg.clientWidth + 16;

leftArrow.addEventListener("click", () => {
  courasel.scrollLeft -= firstImgWidth;
});
rightArrow.addEventListener("click", () => {
  courasel.scrollLeft += firstImgWidth;
});

const dragStart = (e) => {
  isDraggingStart = true;
  startPageX = e.pageX;
  startScrollLeft = courasel.scrollLeft;
  console.log("a");
};

const draggingMouse = (e) => {
  if (!isDraggingStart) return;
  e.preventDefault();
  let delta = startPageX - e.pageX;
  courasel.scrollLeft = startScrollLeft + delta;
  console.log("b");
};

const dragStop = () => {
  isDraggingStart = false;
  console.log("c");
};

courasel.addEventListener("mousedown", dragStart);
courasel.addEventListener("mousemove", draggingMouse);
courasel.addEventListener("mouseup", dragStop);
