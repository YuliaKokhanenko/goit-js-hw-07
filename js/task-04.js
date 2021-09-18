const btnDecr = document.querySelector('[data-action="decrement"]');
const btnIncr = document.querySelector('[data-action="increment"]');
const spanVal = document.querySelector("#value");
let counterValue = 0;
const increment = () => (spanVal.textContent = counterValue += 1);
const decrement = () => {
  if (counterValue > 0) {
    spanVal.textContent = counterValue -= 1;
  }
};
btnDecr.addEventListener("click", decrement);
btnIncr.addEventListener("click", increment);
