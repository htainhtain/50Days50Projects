const imagesDom = document.querySelectorAll("img");
const contentCardDescriptionTextLoader = document.querySelectorAll(
  ".content-card-description-text-loader"
);
const avatarDescriptionLoader = document.querySelectorAll(
  ".avatar-description-loader"
);

const contentImgLoader = document.querySelector(".content-card-img-loader");
const avatarImgLoader = document.querySelector(".avatar-img-loader");
const h3 = document.querySelector("h3");
const p = document.querySelector("p");
const h5 = document.querySelector("h5");
const span = document.querySelector("span");

const fullyLoaded = false;
let counter = 0;

h3.style.visibility = "hidden";
p.style.visibility = "hidden";
h5.style.visibility = "hidden";
span.style.visibility = "hidden";

const checkAllLoaded = () => {
  counter++;
  if (counter === imagesDom.length) {
    contentImgLoader.classList.remove("load");
    avatarImgLoader.classList.remove("load");
    contentCardDescriptionTextLoader.forEach((loader) => {
      loader.classList.remove("load");
      h3.style.visibility = "visible";
      p.style.visibility = "visible";
    });
    imagesDom.forEach((imageDom) => {
      imageDom.style.visibility = "visible";
    });
    avatarDescriptionLoader.forEach((avatar) => {
      avatar.classList.remove("load");
      h5.style.visibility = "visible";
      span.style.visibility = "visible";
    });
  }
};

imagesDom.forEach((imageDom) => {
  imageDom.style.visibility = "hidden";
  imageDom.addEventListener("load", () => {
    checkAllLoaded();
  });
});
