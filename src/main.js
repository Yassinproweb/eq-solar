// header and navbar
const openM = document.getElementById("open"),
  closeM = document.getElementById("close"),
  divs = document.querySelector(".divs"),
  nav = document.querySelector("nav");

divs.addEventListener("click", () => {
  openM.classList.toggle("hidden");
  closeM.classList.toggle("hidden");
  nav.classList.toggle("translate-x-72");
});
