const inputDom = document.querySelector("#speed-select input");
const formDom = document.querySelector("#speed-select");
const h1Dom = document.querySelector("h1");
let interval = 300 / inputDom.value;
let index = 1;

const text = [
  "I",
  "l",
  "o",
  "v",
  "e",
  "p",
  "r",
  "o",
  "g",
  "r",
  "a",
  "m",
  "m",
  "i",
  "n",
  "g",
];

inputDom.addEventListener("input", (e) => {
  interval = 300 / parseInt(e.target.value);
});

const animateText = () => {
  if (index === text.length) {
    index = 0;
    h1Dom.innerHTML = "";
  }
  h1Dom.innerHTML += text[index];
  index++;

  setTimeout(animateText, interval);
};

animateText();
