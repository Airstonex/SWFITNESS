const homeButton = document.querySelector(".home-button");

window.onscroll = function () {
  toggleHomeButton();
};

function toggleHomeButton() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    toggleOn();
  } else {
    toggleOff();
  }
}

function toggleOn() {
  homeButton.style.visibility = "visible";
  homeButton.style.opacity = "0.7";
}

function toggleOff() {
  homeButton.style.visibility = "hidden";
  homeButton.style.opacity = "0";
}

homeButton.addEventListener("click", () => {
  scrollTop();
});

function scrollTop() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Firefox, Chrome, Opera
}
