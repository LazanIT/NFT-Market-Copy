// console.log(123);
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
