let body = document.querySelector('body')
let key = document.querySelector('.key')
let eventKey = document.querySelector('.event-key')
let eventKeyCode = document.querySelector('.event-keycode')
let eventCode = document.querySelector('.event-code')
let intro = document.querySelector('.intro')

body.addEventListener('keypress', (event) => {
    intro.classList.add('hide')
    key.classList.remove('hide')
    eventKey.lastElementChild.innerHTML = event.key
    eventKeyCode.lastElementChild.innerHTML = event.keyCode
    eventCode.lastElementChild.innerHTML = event.code
})