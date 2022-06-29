const imagesDom = document.querySelectorAll("img");
const hiddenContentDoms = document.querySelectorAll(".hidden-content");
const loaderDoms = document.querySelectorAll(".loader");
let counter = 0;

const checkAllLoaded = () => {
  counter++;
  if (counter === imagesDom.length) {
    hiddenContentDoms.forEach((hiddenContentDom) => {
      hiddenContentDom.classList.remove("hidden-content");
    });
    loaderDoms.forEach((loaderDom) => {
      loaderDom.classList.remove("load");
    });
  }
};

imagesDom.forEach((imageDom) => {
  imageDom.addEventListener("load", () => {
    checkAllLoaded();
  });
});
