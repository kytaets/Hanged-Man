import {words} from './words.js'

const wordsList = words.split('\n').map(word => word.trim()).filter(word => word.length > 0);
const word = wordsList[Math.floor(Math.random() * wordsList.length)]

let score = 0

const guess_word = document.getElementById('guess-word')
guess_word.innerHTML = word

