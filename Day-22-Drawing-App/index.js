const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const pixelButtons = document.querySelectorAll(".pixel-button");
const pixelValueDom = document.querySelector(".pixel-value");
let pixel = 5;
let selectedColor = '#000000';

//canvas variable decleration
let coord = {
  x: 0,
  y: 0,
};

let restButtonDom = document.querySelector(".rest-button");
restButtonDom.addEventListener("click", (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

const colorPickerDom = document.getElementById("color");
colorPickerDom.addEventListener("change", (e) => {
  selectedColor = e.target.value;
});

pixelButtons.forEach((pixelButton) => {
  pixelButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("pixel-button-minus")) {
      pixel = pixel == 5 ? pixel : pixel - 5;
      pixelValueDom.innerHTML = `${pixel}`;
    } else {
      pixel = pixel == 50 ? pixel : pixel + 5;
      pixelValueDom.innerHTML = `${pixel}`;
    }
  });
});

//canvas drawing part
const reposition = (e) => {
  coord.x = e.clientX - canvas.offsetLeft;
  coord.y = e.clientY - canvas.offsetTop;
};

const draw = (e) => {
  ctx.beginPath();
  ctx.lineWidth = pixel;
  ctx.lineCap = "round";
  ctx.strokeStyle = selectedColor;
  ctx.moveTo(coord.x, coord.y);
  reposition(e);
  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
};

const start = (e) => {
  reposition(e);
  canvas.addEventListener("mousemove", draw);
};

const stop = (e) => {
  canvas.removeEventListener("mousemove", draw);
};

canvas.addEventListener("mousedown", start);
canvas.addEventListener("mouseup", stop);
