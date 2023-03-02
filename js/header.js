const hamburger = document.querySelector(".hamburger");
// const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const navlist = document.querySelector(".nav__list");
const navlink = document.querySelectorAll(".nav__link");

hamburger.addEventListener("click", () => {
  if (navlist.style.display !== "flex") {
    openNav();
  } else {
    closeNav();
  }
});

function openNav() {
  navlist.style.display = "flex";
  header.style.height = "320px";
}

function closeNav() {
  navlist.style.display = "none";
  header.style.height = "110px";
}

for (var i = 0; i < navlink.length; i++) {
  navlink[i].addEventListener("click", () => {
    closeNav();
  });
}
