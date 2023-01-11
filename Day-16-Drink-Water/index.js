let smallBottles = document.querySelectorAll(".small-bottle-bottle");
let activeBottles;
let drankAmount = document.querySelector(".drank-amount");
let remainedAmount = document.querySelector(".remained-amount");
// let

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

const bigCupFill = () => {
  drankAmount.style.height = `${activeBottles.length * 50}px`;
  document.querySelector(".remained-amount .amount").innerHTML = `${
    2 - (activeBottles.length * 250) / 1000
  }L`;
  document.querySelector(".drank-amount .amount").innerHTML = `${
    (activeBottles.length / 8) * 100
  }%`;

  if (drankAmount.style.height === "" || drankAmount.style.height === "0px") {
    drankAmount.style.display = "none";
  } else {
    drankAmount.style.display = "flex";
  }

  remainedAmount.style.height = `${400 - activeBottles.length * 50}px`;
  if (
    remainedAmount.style.height === "" ||
    remainedAmount.style.height === "0px"
  ) {
    remainedAmount.style.visibility = "hidden";
  } else {
    remainedAmount.style.visibility = "visible";
  }
  console.log(`${activeBottles.length * 50}px`);
};

smallBottles.forEach((smallBottle, index) => {
  smallBottle.addEventListener("click", (e) => {
    bottleChange(index);
    bigCupFill();
  });
});
