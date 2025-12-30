// header and navbar
const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 45) {
    navbar.classList.add("diff");
  } else {
    navbar.classList.remove("diff");
  };
});

const openM = document.getElementById("open"),
  closeM = document.getElementById("close"),
  divs = document.querySelector(".divs"),
  nav = document.querySelector("nav");

divs.addEventListener("click", () => {
  openM.classList.toggle("hidden");
  closeM.classList.toggle("hidden");
  nav.classList.toggle("translate-x-72");
});


// scroll behaviour of testimonials
const slides = document.getElementById("slides")

function next() {
  slides.scrollBy({ left: slides.clientWidth, behavior: "smooth" })
}

function prev() {
  slides.scrollBy({ left: -slides.clientWidth, behavior: "smooth" })
}

