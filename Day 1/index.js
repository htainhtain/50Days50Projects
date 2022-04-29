const images = document.querySelectorAll('.cards-img');
console.log(images)

images.forEach((img) => {
  img.addEventListener('click',  (e) => {
    console.log(document.querySelector('div.active'))
    if(document.querySelector('div.active')){
      document.querySelector('.active').classList.remove('active')
    }

    console.log(e.target)
    console.log(img.firstElementChild)
    if(e.target === img.firstElementChild){
      e.target.parentNode.classList.add('active')
    } else {
      e.target.classList.add('active')
    }
  })
})
