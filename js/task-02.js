const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// Находим нужный элемент DOM по id.
const ingredientsRef = document.querySelector("#ingredients");
console.log(ingredientsRef);
//Map перезаписываю каждый элемент массива через MAP создаю каждому элементу массива li и записываю текст контент в этот li.
const addIngredient = (array) =>
  array.map((element) => {
    const itemOfListEl = document.createElement("li");
    itemOfListEl.textContent = element;
    return itemOfListEl;
  });

ingredientsRef.append(...addIngredient(ingredients));
