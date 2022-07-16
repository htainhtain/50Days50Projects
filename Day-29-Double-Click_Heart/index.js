const imageContainerDom = document.querySelector(".image-container");
const heartContainerDom = document.querySelector(".heart-container");
const counterNumberDom = document.querySelector(".counter-number");
let counter = 0;

const counterUp = () => {
  counter++;
  counterNumberDom.innerHTML = `${counter}`;
};

imageContainerDom.addEventListener("dblclick", (e) => {
  heartContainerDom.style.top = `${e.clientY - imageContainerDom.offsetTop}px`;
  heartContainerDom.style.left = `${
    e.clientX - imageContainerDom.offsetLeft
  }px`;
  heartContainerDom.classList.add("animate");
  counterUp();
  setTimeout(() => {
    heartContainerDom.classList.remove("animate");
  }, 1000);
});
