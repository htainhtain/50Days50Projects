let textArea = document.querySelector("textarea");
let choiceArea = document.querySelector(".choice");
let text = [];


const displayChoice = (choices) => {
  text = choices.trim().split(",");
  text = text.filter(choice => choice !== '')
  text = text.map(txt => txt.trim())
  choiceArea.innerHTML = ''

  text.forEach(txt => {
    let choiceElement = document.createElement("span");
    choiceElement.innerHTML = txt
    choiceArea.appendChild(choiceElement)
  });
};

const randomChoice = () => {
  let choices = document.querySelectorAll('span')
  const chooseChoice = () => {
    const randomNum = Math.floor(Math.random() * text.length);
    choices.forEach( choice => choice.classList.remove('active'))
    choices[randomNum].classList.add('active')
    textArea.disabled = true
  }
  
  const myChoiceInterval = setInterval(chooseChoice, 100);
  setTimeout(() => {
    clearInterval(myChoiceInterval)
    textArea.disabled = false
  }, 3000)

  textArea.value = ''
}

textArea.addEventListener("keyup", (e) => {
  displayChoice(e.target.value);
  if (e.key === 'Enter') {
    randomChoice()
  }
});
