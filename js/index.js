const buttons = document.querySelectorAll(".card__btn");
const car = document.querySelectorAll(".card__image");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseenter", () => {
    car[i].classList.toggle("shake");
  });
  buttons[i].addEventListener("mouseleave", () => {
    car[i].classList.toggle("shake");
  });
  buttons[i].addEventListener("click", () => {
    car[i].classList.toggle("move");
  });
}
