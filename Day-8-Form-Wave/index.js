let inputBoxes = document.querySelectorAll('input')

inputBoxes.forEach(inputBox => {
  inputBox.addEventListener('focusin', (event) =>{
    console.log(typeof(event.target.parentNode.firstElementChild.children))
    event.target.classList.add('focus')
    Array.prototype.forEach.call(event.target.parentNode.firstElementChild.children, child => {
      child.classList.add('focus')
    })

  })
  inputBox.addEventListener('focusout', (event) =>{

    if(!event.target.value){
      event.target.classList.remove('focus')
      Array.prototype.forEach.call(event.target.parentNode.firstElementChild.children, child => {
        child.classList.remove('focus')
      })
    }

  })
})
