let buttons = document.querySelectorAll('button')
let allProgress = document.querySelectorAll('.each-num')
let lines = document.querySelectorAll('.line')

let makeButtonDisable = (btnNo) => {
  buttons[btnNo].disabled = true;
  buttons[btnNo].classList.add('btn-disabled')
}

buttons.forEach(btn => {
  btn.addEventListener('click', event => {
    if (event.target.innerHTML === 'Next') {
      for (let i = 0; i < allProgress.length; i++) {
        console.log("progress: ", i)
        if (!allProgress[i].classList.contains('active')) {
          allProgress[i].classList.add('active')
          break;
        }
      }

      for(let j=0; j<lines.length; j++){
        console.log("line: ", j)
        if (!lines[j].classList.contains('active')) {
          lines[j].classList.add('active')
          break;
        }
      }

    }

    if(event.target.innerHTML === 'Prev'){
      console.log('prev')
      for (let x = allProgress.length-1; x >= 0; x--) {
        if (allProgress[x].classList.contains('active')) {
          allProgress[x].classList.remove('active')
          break;
        }
      }

      for(let y = lines.length-1; y>= 0; y--){
        if (lines[y].classList.contains('active')) {
          lines[y].classList.remove('active')
          break;
        }
      }
    }

    if(!allProgress[1].classList.contains('active') && !allProgress[2].classList.contains('active') && !allProgress[3].classList.contains('active')
    ) {
      makeButtonDisable(0)
    } else if (allProgress[0].classList.contains('active') && allProgress[1].classList.contains('active')
    && allProgress[2].classList.contains('active') && allProgress[3].classList.contains('active')) {
      makeButtonDisable(1)
    } else {
      buttons.forEach(button => {
        button.disabled = false;
        button.classList.remove('btn-disabled')
      })
    }

    // if()
  })
})
