let buttonDom = document.querySelector("button");

buttonDom.addEventListener("click", function (e) {
  let filterDom = document.createElement("div");
  filterDom.classList.add("filter");
  setTimeout(() => {
    filterDom.classList.add("click");
  }, 1);
  buttonDom.appendChild(filterDom);

  filterDom.style.left = e.clientX - e.target.offsetLeft + "px";
  filterDom.style.top = e.clientY - e.target.offsetTop + "px";

  setTimeout(() => {
    filterDom.remove();
  }, 500);
});
