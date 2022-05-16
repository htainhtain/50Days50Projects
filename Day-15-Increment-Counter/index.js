let number = document.querySelectorAll(".number");

const animationDuration = 2000;
const eachFrameDuration = 1000 / 60;
const totalFrames = Math.round(animationDuration / eachFrameDuration)
const easeEffect = t => t * (2 - t)

const animateNum = num => {
  
  let frame = 0;
  const number = parseInt(num.innerHTML, 10)
  
  const counter = setInterval(() => {
    frame++
    const progress = easeEffect(frame / totalFrames)
    const currentNum = Math.round(number * progress)
    
    if (parseInt(num.innerHTML, 10)  !== currentNum) {
      num.innerHTML = currentNum
    }

    if (frame === totalFrames) {
      clearInterval(counter)
    }
  }, eachFrameDuration)
}

number.forEach(animateNum)