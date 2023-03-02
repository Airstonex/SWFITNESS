const themeIcon = document.querySelector(".theme-icon");
let darkTheme = localStorage.getItem("darkTheme");

function enableDarkTheme() {
  document.body.classList.add("dark-theme");
  localStorage.setItem("darkTheme", "enabled");
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");
}

function disableDarkTheme() {
  document.body.classList.remove("dark-theme");
  localStorage.setItem("darkTheme", "disabled");
  themeIcon.classList.remove("fa-sun");
  themeIcon.classList.add("fa-moon");
}

if (darkTheme === "enabled") {
  enableDarkTheme();
}

themeIcon.addEventListener("click", () => {
  darkTheme = localStorage.getItem("darkTheme");
  if (darkTheme !== "enabled") {
    enableDarkTheme();
  } else {
    disableDarkTheme();
  }
});
