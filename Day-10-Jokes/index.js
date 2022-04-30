let button = document.querySelector('button');
let jokeArea = document.querySelector('.joke-text');

const configApi = {
    headers: {
        Accept: 'text/plain',
    }
}

const generateJoke = async () => {
    let response = await fetch('https://icanhazdadjoke.com/', configApi)
    let joke = await response.text()

    console.log("joke: ", joke)
    jokeArea.innerHTML = joke
}

button.addEventListener('click', () => {
    generateJoke()
})

generateJoke()