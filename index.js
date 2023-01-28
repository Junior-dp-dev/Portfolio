/* Navbar script */
const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  navMenu.classList.toggle("active");
});

/* Logo Config */
const mouseEnterHandle = (event) => {
  if (event.target.closest("p")) {
    event.target
      .closest("p")
      .querySelectorAll("span")
      .forEach((el) => {
        el.style.width = el.scrollWidth + "px";
      });
  }
};
const mouseOutHandle = (event) => {
  if (event.target.closest("p")) {
    event.target
      .closest("p")
      .querySelectorAll("span")
      .forEach((el) => {
        el.style.width = 0;
      });
  }
};
document.addEventListener("mouseover", (event) => mouseEnterHandle(event));
document.addEventListener("mouseout", (event) => mouseOutHandle(event));
document.removeEventListener("mouseover", (event) => mouseEnterHandle(event));
document.removeEventListener("mouseout", (event) => mouseOutHandle(event));
