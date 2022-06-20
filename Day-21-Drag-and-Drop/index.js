let boxesDom = document.querySelectorAll(".box");

const dragElement = (elmnt) => {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  
  let divWithCurrentImage;
  let backgroundImageElemt = document.createElement("div");
  backgroundImageElemt.classList.add("background-image");

  const dragMouseDown = (e) => {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    divWithCurrentImage = document.querySelector(".image");
    if (e.target.classList.contains("image")) {
      document.onmouseup = closeDragElement;
      document.ontouchend = closeDragElement;
      document.onmousemove = elementDrag;
      document.ontouchmove  = elementDrag;
    }
  };

  const closeDragElement = (e) => {
    document.onmouseup = null;
    document.onmousemove = null;
    backgroundImageElemt.remove();
    checkBoxes2(e.clientX, e.clientY, "image");
    if (!document.querySelector(".image")) { 
      divWithCurrentImage.classList.add('image')
    }
    document.body.style.cursor = "default";
  };

  const elementDrag = (e) => {
    e = e || window.event;
    e.preventDefault();
    document.body.appendChild(backgroundImageElemt);
    elmnt.classList.remove("image");
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    checkBoxes1(e.clientX, e.clientY, "mouseover");
    backgroundImageElemt.style.top = elmnt.offsetTop - pos2 + "px";
    backgroundImageElemt.style.left = elmnt.offsetLeft - pos1 + "px";
  };

  const checkBoxes1 = (x, y, className) => {
    for (let i = 0; i < boxesDom.length; i++) { 
      boxesDom[i].classList.remove("mouseover");
      document.body.style.cursor = "not-allowed";
      if (
        x > boxesDom[i].offsetLeft &&
        x < boxesDom[i].offsetLeft + boxesDom[i].offsetWidth &&
        y > boxesDom[i].offsetTop &&
        y < boxesDom[i].offsetTop + boxesDom[i].offsetHeight
      ) {
        document.body.style.cursor = "pointer";
        boxesDom[i].classList.add(className);
        return;
      }
    }
  };

  const checkBoxes2 = (x, y, className) => {
    for (let i = 0; i < boxesDom.length; i++) { 
      boxesDom[i].classList.remove("mouseover");
      if (
        x > boxesDom[i].offsetLeft &&
        x < boxesDom[i].offsetLeft + boxesDom[i].offsetWidth &&
        y > boxesDom[i].offsetTop &&
        y < boxesDom[i].offsetTop + boxesDom[i].offsetHeight
      ) {
        boxesDom[i].classList.add(className);
      } else {
        boxesDom[i].classList.remove(className);
      }
    }
  };

  elmnt.onmousedown = dragMouseDown;
  elmnt.ontouchstart = dragMouseDown;
};

boxesDom.forEach((box) => {
  dragElement(box);
});
