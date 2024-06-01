import {words} from './words.js'

// choosing a random word
const wordsList = words.split('\n').map(word => word.trim()).filter(word => word.length > 0);
const word = wordsList[Math.floor(Math.random() * wordsList.length)]
const guessWord = document.getElementById('guess-word')
const guessWordDisplay = document.getElementById('guess-word-display')

// getting html elements
const hangmanImg = document.getElementById('hangman-img')
const usedLetters = document.getElementById('used-letters')

const guessWordArray = word.split('')


let score = 0
let usedLettersArray = []
let secretWord = '-'.repeat(word.length);


function gameOver() {
    if(score === 7){
        alert(`Game is over😓 Word was: ${word}`)
        location.reload()
    }
}

guessWord.innerHTML = word
guessWordDisplay.innerHTML = secretWord

document.addEventListener("keydown", (event) => {
    const key = event.code.slice(3,4).toLowerCase()
    if (usedLettersArray.indexOf(key) === -1) {
        usedLettersArray.push(key)
        const usedLettersStr = usedLettersArray.join(', ')
        usedLetters.innerHTML = usedLettersStr
    }
    if (guessWordArray.indexOf(key) === -1) {
        score++
        hangmanImg.setAttribute("src", `./images/hangMan-images/hang-${score}.png`)
        gameOver()
    }
    else {
        let letterIndexes = []
        for (let i = 0; i < guessWordArray.length; i++) {
            if (guessWordArray[i] === key)
                letterIndexes.push(i)
        }
        for (const num of letterIndexes) {
            const newSecretWord = secretWord.slice(0, num) + guessWordArray[num] + secretWord.slice(num + 1, secretWord.length)
            secretWord = newSecretWord
            guessWordDisplay.innerHTML = secretWord
        }
    }
    setTimeout(() => {
        if (secretWord === word){
            alert(`Congratulations! You've guessed the word '${word}'`)
        }
    }, 100)
    
    

})
