let buttonSubmit = document.querySelector("#button-submit");
let textArea = document.querySelector("#text-area");
let email = document.querySelector("#emaill");
let form = document.querySelector("form");
let buttonClearEmail = document.createElement("buttom");
buttonClearEmail.innerHTML = "Limpar";
form.appendChild(buttonClearEmail);


buttonSubmit.addEventListener("click",getInformations);
buttonClearEmail.addEventListener("click", clearEmail)

function getInformations(event) {
  event.preventDefault();
  console.log(textArea.value);
}

function clearEmail() {
  email.value = "";
}