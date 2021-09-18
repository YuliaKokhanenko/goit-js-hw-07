const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
console.dir(input);
console.log(text);
console.log(`Стартовое значение ${(input.value = 20)} px`);
input.addEventListener(
  "input",
  (changeValue) => (
    (text.style.fontSize = `${changeValue.currentTarget.value}.px`),
    console.log(changeValue.currentTarget.value)
  )
);
