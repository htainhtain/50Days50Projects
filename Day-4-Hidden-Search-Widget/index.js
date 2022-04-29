var searchBarIcon = document.querySelector('.fa-magnifying-glass')
var inputBar = document.querySelector('input')

searchBarIcon.addEventListener('click', () => {
  inputBar.classList.toggle('hide')
  searchBarIcon.classList.toggle('hide')
})
