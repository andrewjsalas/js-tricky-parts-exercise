function guessingGame() {
    const secretNum = Math.floor(Math.random() * 100);
    let gameOver = false;
    let numGuesses = 0;

    return function guess(num) {
        if (gameOver) {
            return "The game is over, you already won!";
        }

        numGuesses++;
    
        if (num === secretNum) {
            gameOver = true;
            return `You win! You found ${num} in ${numGuesses} guesses!)`;
        } else if (num < secretNum) {
            return `${num} is too low!`;
        } else {
            return `${num} is too high!`;
        }
    }
}

module.exports = { guessingGame };
