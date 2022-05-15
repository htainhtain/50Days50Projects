let navUl = document.querySelector('.container nav ul')
let containerLis = document.querySelectorAll('.container nav ul li')
let button = document.querySelector('button')
let xmarkLine1 = document.querySelector('.x-mark .line.line1')
let xmarkLine2 = document.querySelector('.x-mark .line.line2')

button.addEventListener('click', e => {
    navUl.classList.toggle('close')
    button.classList.toggle('close')
    xmarkLine1.classList.toggle('close')
    xmarkLine2.classList.toggle('close')
    containerLis.forEach(containerLi => {
        containerLi.classList.toggle('close')
    })
})