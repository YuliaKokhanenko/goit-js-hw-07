const inputArea = document.querySelector("#validation-input");
const inputLength = inputArea.dataset.length;
const text = inputArea.value;
console.log(inputArea);
console.log(inputLength);
console.log(text);
inputArea.addEventListener("blur", borderColor);
function borderColor() {
  if (inputArea.value.length === Number(inputLength)) {
    inputArea.classList.remove("invalid");
    inputArea.classList.add("valid");
  } else {
    inputArea.classList.remove("valid");
    inputArea.classList.add("invalid");
  }
}
