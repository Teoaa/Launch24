const guess = document.getElementById("guess");

var myConfetti = confetti.create(null, {
    resize: true,
    useWorker: true
});

function loadGame() {
    guess.max = 0;
}

function makeGuess() {
    let myGuess = 0; // GET FROM DOCUMENT!
}