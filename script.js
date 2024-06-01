import {words} from './words.js'

// choosing a random word
const wordsList = words.split('\n').map(word => word.trim()).filter(word => word.length > 0);
const word = wordsList[Math.floor(Math.random() * wordsList.length)]
const guessWord = document.getElementById('guess-word')
const hangmanImg = document.querySelector('#hangman-img')

let score = 0

guessWord.innerHTML = word
hangmanImg.setAttribute("src", `./images/hangMan-images/hang-${score}.png`)

