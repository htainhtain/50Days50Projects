const buttonDoms = document.querySelectorAll("button");
const descriptionContainer = document.querySelector(
  ".slider-container-description-container"
);
const containerGallery = document.querySelector(".slider-container-gallery");
let index = 0;

const updateCounter = (counter) => {
  if (counter === 1) {
    index++;
    if (index === 5) {
      index = 0;
    }
  } else {
    index--;
    if (index === -1) {
      index = 4;
    }
  }
  descriptionContainer.style.top = `${-400 + index * 100}vh`;
  containerGallery.style.bottom = `${0 + index * 100}vh`;
};

buttonDoms.forEach((buttonDom) => {
  buttonDom.addEventListener("click", () => {
    if (buttonDom.classList.contains("up-arrow")) {
      updateCounter(1);
    } else {
      updateCounter(0);
    }
  });
});
