let LeftButton = document.querySelector(".button.left");
let rightButton = document.querySelector(".button.right");
let currentIndex = 0;

let images = [
  "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const changeSlide = (btn) => {
  if (btn === "left") {
    currentIndex = currentIndex === 0 ? images.length-1 : currentIndex - 1;
  } else {
    currentIndex = currentIndex === images.length-1 ? 0 : currentIndex + 1;
  }
  document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
  document.querySelector('.image').style.backgroundImage = `url('${images[currentIndex]}')`;
};

LeftButton.addEventListener("click", (e) => {
  changeSlide("left");
});

rightButton.addEventListener("click", (e) => {
  changeSlide("right");
});
