const inputDoms = document.querySelectorAll("input");
const goodDom = document.querySelector("#good");
const cheapDom = document.querySelector("#cheap");
const fastDom = document.querySelector("#fast");

const validate = (currentCheck) => {
  if (currentCheck.target === goodDom) {
    cheapDom.checked = false;
  }
  if (currentCheck.target === cheapDom) {
    goodDom.checked = false;
  }
  if (currentCheck.target === fastDom) {
    cheapDom.checked = false;
  }
};

inputDoms.forEach((inputDom) =>
  inputDom.addEventListener(
    "change",
    (e) => goodDom.checked && cheapDom.checked && fastDom.checked && validate(e)
  )
);
