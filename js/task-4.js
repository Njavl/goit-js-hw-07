const form = document.querySelector(".login-form");

form.addEventListener("submit", authorization);
/**
 * @param {Event} event
 */

function authorization(event) {
  event.preventDefault();
  const formData = {};
  const form = event.currentTarget;

  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === "" || password === "") {
    alert(`All form fields must be filled in`);
    return;
  }
  formData[form.elements.email.name] = email;
  formData[form.elements.password.name] = password;
  console.log(formData);
  form.reset();

  //   const formData = Object.fromEntries(new FormData(form));
  //   console.log(formData);
}
