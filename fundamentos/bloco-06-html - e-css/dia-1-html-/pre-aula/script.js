// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener("click",click);
INPUT_CHECKBOX.addEventListener("click",click);
INPUT_TEXT.addEventListener("keypress",click);

function click(event) {
  event.preventDefault();
  
}