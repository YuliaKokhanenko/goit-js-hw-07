const fromOutPut = document.querySelector("#name-output");
const fromInPut = document.querySelector("#name-input");
fromInPut.addEventListener("input", inputValue);
function inputValue(event) {
  let value = fromInPut.value;
  if (value === "") {
    fromOutPut.textContent = "незнакомец";
  } else {
    fromOutPut.textContent = value;
    console.log(`${value}`);
  }
}
