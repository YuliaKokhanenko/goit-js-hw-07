const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Белый и черный длинный Меховой кот ",
  },
  {
    url: " https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 ",
    alt: " Оранжевый и Белая рыба кои рядом с желтой рыбой кои",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs = tinysrgb & dpr = 2 & h = 750 & w = 1260 ",
    alt: "Группа бегущих лошадей",
  },
];

const allImages = document.querySelector("#gallery");

allImages.style.listStyle = "none";
allImages.style.display = "flex";
allImages.style.flexWrap = "wrap";
allImages.style.justifyContent = "space-around";

const getMarkUp = images.map(setMarkUp).join("");
allImages.insertAdjacentHTML("beforeend", getMarkUp);

function setMarkUp({ url, alt }) {
  return `<li>
        <img src="${url}" alt="${alt}" width="400" height="225" /> 
      </li>`;
}
