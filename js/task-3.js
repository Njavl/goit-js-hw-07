let input = document.querySelector("#name-input");
//console.log(input);
let changeSpan = document.querySelector("#name-output");
//console.log(changeSpan);

function inputName(event) {
  let name = "";
  if (event.target.value === "") {
    name = "Anonymous";
  } else {
    name = event.target.value;
  }
  changeSpan.textContent = name.trim();
}

input.addEventListener("input", inputName);
