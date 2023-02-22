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

/* Configuração do Card das Habilidades*/
const cards = document.querySelectorAll(".card-skill");
const cardHidden = document.querySelector(".card-hidden");
const cardHiddenTitle = cardHidden.querySelector(".title");
const cardHiddenText = cardHidden.querySelector(".text");
const cardHiddenImage = cardHidden.querySelector(".image");
const technologies = [
  { title: "HTML", text: "É uma linguagem de marcação usada para criar a estrutura e o conteúdo das páginas da web." },
  { title: "CSS", text: "É uma linguagem usada para estilizar e formatar a apresentação do conteúdo em páginas web." },
  { title: "JavaScript", text: "É uma linguagem de programação versátil usada para criar aplicativos, interagir com páginas da web e muito mais." },
  { title: "Node", text: "É uma plataforma de tempo de execução do JavaScript usada para construir aplicativos web escaláveis do lado do servidor." },
  { title: "C#", text: "É uma linguagem de programação orientada a objetos usada principalmente para desenvolver aplicativos do Windows e jogos." },
  { title: "Unity", text: "É um motor de jogo multiplataforma usado para criar jogos 2D e 3D, com ferramentas poderosas." },
];

cards.forEach((card) => {
  card.addEventListener("click", () => {
    technologies.forEach((result) => {
      if (result.title === card.querySelector("img").alt) {
        cardHiddenTitle.textContent = result.title;
        cardHiddenText.textContent = result.text;
        cardHiddenImage.src = card.querySelector("img").src;
        cardHidden.style.display = "flex";
      }
    });
  });
});

cardHidden.addEventListener("click", () => {
  cardHidden.style.display = "none";
});

//Slider
const slider = document.querySelectorAll(".slider");
const btnPrev = document.getElementById("prev-button");
const btnNext = document.getElementById("next-button");

let currentSlide = 0;

function hideSlider() {
  slider.forEach((item) => item.classList.remove("on"));
}

function showSlider() {
  slider[currentSlide].classList.add("on");
}

function nextSlider() {
  hideSlider();
  if (currentSlide === slider.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlider();
}

function prevSlider() {
  hideSlider();
  if (currentSlide === 0) {
    currentSlide = slider.length - 1;
  } else {
    currentSlide--;
  }
  showSlider();
}

btnNext.addEventListener("click", nextSlider);
btnPrev.addEventListener("click", prevSlider);
