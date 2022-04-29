let soundBoards = document.querySelectorAll('.soundboard')
let threeBar = document.querySelectorAll('.bar')
let audios = document.querySelectorAll('audio');

soundBoards.forEach(soundBoard => {
    soundBoard.addEventListener('click', (event) => {
        audios.forEach(audio => {
            audio.pause();
            audio.currentTime = 0
        })
        // threeBar.forEach(bar => {
        //     bar.classList.add('active')
        // })
        if (event.target.classList.contains('violin')) {
            audios[0].play()
        } else if (event.target.classList.contains('dejavu')) {
            audios[1].play()
        } else if (event.target.classList.contains('wrud')) {
            audios[2].play()
        } else if (event.target.classList.contains('run')) {
            audios[3].play()
        } else if (event.target.classList.contains('coffin')) {
            audios[4].play()
        } else {
            audios[5].play()
        }

    })
})

audios.forEach(audio => {
    audio.addEventListener('playing', () => {
        threeBar.forEach(bar => {
            bar.classList.add('active')
        })
    })
    audio.addEventListener('pause', () => {
        threeBar.forEach(bar => {
            bar.classList.remove('active')
        })
    })

})

