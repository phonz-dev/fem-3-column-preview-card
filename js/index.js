const buttons = document.querySelectorAll(".card__btn");
const car = document.querySelectorAll(".card__image");

buttons[0].addEventListener("mouseenter", () => {
  car[0].classList.toggle("shake");
});

buttons[0].addEventListener("mouseleave", () => {
  car[0].classList.toggle("shake");
});

buttons[1].addEventListener("mouseenter", () => {
  car[1].classList.toggle("shake");
});

buttons[1].addEventListener("mouseleave", () => {
  car[1].classList.toggle("shake");
});

buttons[2].addEventListener("mouseenter", () => {
  car[2].classList.toggle("shake");
});

buttons[2].addEventListener("mouseleave", () => {
  car[2].classList.toggle("shake");
});
