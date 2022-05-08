let faqBoxes = document.querySelectorAll('.faq-box')


faqBoxes.forEach(faqBox => {
    faqBox.addEventListener('click', event => {
        if (event.target.classList.contains('fa-chevron-down')) {
            event.target.classList.replace('fa-chevron-down', 'fa-circle-xmark')
            faqBox.classList.add('open')
            faqBox.lastElementChild.classList.add('open')
        } else if(event.target.classList.contains('fa-circle-xmark')){
            event.target.classList.replace('fa-circle-xmark', 'fa-chevron-down')
            faqBox.classList.remove('open')
            faqBox.lastElementChild.classList.remove('open')
        }
    })
})