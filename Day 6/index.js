let contextBoxContainers = document.querySelectorAll('.content-box-container')

// animating selectedboxes
let boxOptions = {
  threshold: 0.5
}

let boxIntersecp = (entries, boxObserver) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.firstElementChild.classList.add('show')
    }
    else if (entry.boundingClientRect.top >= 0){
        entry.target.firstElementChild.classList.remove('show')
    }
  })
}

let boxObserver = new IntersectionObserver(boxIntersecp, boxOptions)
contextBoxContainers.forEach((contextBoxContainer) => {
  boxObserver.observe(contextBoxContainer)
})
