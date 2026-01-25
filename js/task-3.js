let input = document.querySelector('#name-input');
//console.log(input);
let changeSpan = document.querySelector('#name-output');
//console.log(changeSpan);

function inputName(event) {
  const value = event.target.value.trim();

  let name = value === '' ? 'Anonymous' : value;

  changeSpan.textContent = name;
}

input.addEventListener('input', inputName);
