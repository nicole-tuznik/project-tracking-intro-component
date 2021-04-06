const hamburger = document.querySelector(".nav__hamburger");
const nav = document.querySelector(".nav__ul");

hamburger.addEventListener("click", function () {
  if (nav.style.display === "none") {
    nav.style.display = "block";
    hamburger.src = "/images/icon-close.svg";
  } else {
    nav.style.display = "none";
    hamburger.src = "/images/icon-hamburger.svg";
  }
});
