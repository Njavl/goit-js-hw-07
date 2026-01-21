function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", changeColor);

function changeColor(event) {
  const color = getRandomHexColor();
  const spanClr = document.querySelector(".color");
  document.body.style.backgroundColor = color;
  spanClr.textContent = color;
}
