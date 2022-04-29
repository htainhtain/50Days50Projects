let container = document.querySelector('.container')
let paragraph = document.querySelector('p')

var filter;
var blurness;
var percentage;

function percentageIncrement() {
   filter = window.getComputedStyle(container).filter
   blurness = parseInt(filter.substring(filter.indexOf('(')+1, filter.indexOf('px')))
   percentage = Math.floor((1 - blurness/30)*100)
   paragraph.innerHTML = `${percentage}%`
   if(blurness === 0){
     clearInterval(refreshIntervalId);
   }
}
var refreshIntervalId = setInterval(percentageIncrement, 100);
