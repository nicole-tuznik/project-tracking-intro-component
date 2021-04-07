const hamburger = document.querySelector(".nav__hamburger");
const nav = document.querySelector(".nav__ul");

hamburger.addEventListener("click", function () {
  nav.classList.toggle("show-menu");

  if ((hamburger.src = "/images/icon-hamburger.svg")) {
    hamburger.src = "/images/icon-close.svg";
  } else {
    hamburger.src = "/images/icon-hamburger.svg";
  }
});
