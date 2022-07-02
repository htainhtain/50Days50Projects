const contentDom = document.querySelector(".content");
const headerDom = document.querySelector("header");

const boxOptions = {
  threshold: 0.5,
};

const boxIntersecp = (entry, boxObserver) => {
  if (entry[0].isIntersecting) {
    console.log("Its intersecting");
    headerDom.classList.add("change-color");
  } else {
    console.log("Its not intersecting");
    headerDom.classList.remove("change-color");
  }
};

const boxObserver = new IntersectionObserver(boxIntersecp, boxOptions);
boxObserver.observe(contentDom);
