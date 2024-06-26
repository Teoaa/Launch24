const guess = document.getElementById("guess");
const report = document.getElementById("report")

let MINNUM = 0
let MAXNUM = 100
let secret;
let myGuess;
let difference;


var myConfetti = confetti.create(null, {
    resize: true,
    useWorker: true
});

function loadGame() {
    guess.max = MAXNUM;
    guess.min = MINNUM;

    secret = Math.random();
    let range = MAXNUM - MINNUM;
    secret = secret * range;
    secret = secret + MINNUM;
    secret = Math.floor(secret);
}

function makeGuess() {
     myGuess = parseInt(guess.value); // GET FROM DOCUMENT!

    if (myGuess == secret){
        report.innerHTML += `<br>${myGuess} is correct`
        document.body.style.backgroundColor = "yellow"
        myConfetti({
            particleCount: 100,
            spread: 160
        })
    } else if (myGuess < secret){
        report.innerHTML += `<br>${myGuess} is too small`
        hotCold(myGuess, secret)
    } else{
        report.innerHTML += `<br>${myGuess} is too large`
        hotCold(myGuess, secret)
    }   
}

function hotCold(){
    let red;
    let blue;
    difference = math.abs(myGuess-secret);
    difference = difference/MAXNUM;
    red = (1 - difference) * 255;
    blue = difference * 255;
    document.body.style.backgroundColor = `rgb(${red}, 0, ${blue})`
}



