const button = document.querySelector("button");
const timer = document.querySelector(".timer");
const timerItems = document.querySelectorAll(".timer__countdown-item");
const action = document.querySelector(".action");

button.addEventListener("click", () => {
  console.log("button is clicked");
  timer.style.webkitAnimation = "none";
  timerItems.forEach(item => {
    item.style.webkitAnimation = "none";
  })
  action.style.webkitAnimation = "none";
  setTimeout(() => {
    timer.style.webkitAnimation = "";
    timerItems.forEach(item => {
      item.style.webkitAnimation = "";
    })
    action.style.webkitAnimation = "";
  }, 10);
});
