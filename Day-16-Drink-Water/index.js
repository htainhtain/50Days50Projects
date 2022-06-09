let smallBottles = document.querySelectorAll(".small-bottle-bottle");
let activeBottles;

const addActive = (Num) => {
  for (let i = 0; i <= Num; i++) {
    smallBottles[i].classList.add("active");
  }
};

const bottleChange = (bottleNum) => {
  activeBottles = document.querySelectorAll(".small-bottle-bottle.active");
  smallBottles.forEach((smallBottle) => {
    smallBottle.classList.remove("active");
    if (activeBottles.length - 1 === bottleNum) {
      addActive(bottleNum - 1);
    } else {
        addActive(bottleNum);
    }
  });
  activeBottles = document.querySelectorAll(".small-bottle-bottle.active");
};

smallBottles.forEach((smallBottle, index) => {
  smallBottle.addEventListener("click", (e) => {
    bottleChange(index);
  });
});
