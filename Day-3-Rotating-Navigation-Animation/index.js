let humbergerButton = document.querySelector('.humberger')
let xmarkButton = document.querySelector('.xmark')
let circle = document.querySelector('.circle')
let description = document.querySelector('.description')
let navLi = document.querySelectorAll('nav li')
humbergerButton.addEventListener('click', () => {
  circle.classList.add('go-up')
  description.classList.add('go-up')
  navLi.forEach(li => {
    li.classList.add('go-up')
  })

  // xmarkButton.classList.add('go-up')
})


xmarkButton.addEventListener('click', () => {
  circle.classList.remove('go-up')
  description.classList.remove('go-up')
  navLi.forEach(li => {
    li.classList.remove('go-up')
  })
  // xmarkButton.classList.add('go-up')
})
