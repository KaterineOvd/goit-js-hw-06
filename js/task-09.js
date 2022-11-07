// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const btnRef = document.querySelector('button.change-color');
const resultRef = document.querySelector('span.color');

btnRef.addEventListener("click", (event) => {
  let randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;

  resultRef.textContent = randomColor;
});
