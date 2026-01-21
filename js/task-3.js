let input = document.querySelector("#name-input");
//console.log(input);
let changeSpan = document.querySelector("#name-output");
//console.log(changeSpan);

function inputName(event) {
  const elem = event.target;
  changeSpan.textContent = elem.value.trim();
}

input.addEventListener("input", inputName);
