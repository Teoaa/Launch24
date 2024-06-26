const gameboard = document.getElementById("gameboard");
const cpucheck = document.getElementById("cpucheck");
const ctx = gameboard.getContext("2d");

let boardWidth = 500;
let boardHeight = 500;
let paddleSpin = 1.5; // >= 0.0
let paddleForce = 1.1; // >= 1.0
let paddleWidth = 25;
let paddleLength = 100;
let ballRadius = 12.5;

let ball;
let paddleL;
let paddleR;
let scoreL = 0;
let scoreR = 0;
let winsL = 0;
let winsR = 0;
let ballvx = 0;
let ballvy = 0;
let freeze = false;
let color = ""
let ballc;



function resetGame() {
    clearInterval(intervalID);
    gameboard.width = boardWidth;
    gameboard.height = boardHeight;

    scoreL = 0;
    scoreR = 0;
    ballColor(color);
    updateScore();
    resetPaddles();
    resetBall();
    nextTick();
}

function ballColor(color, ballc){
    ballc = color;
}

function randBallColor(){
    
}

function resetPaddles() {
    paddleL = new Paddle(0, 0, paddleLength, paddleWidth, "red");
    paddleR = new Paddle(boardWidth-paddleWidth, 0, paddleLength, paddleWidth, "blue");
}

function resetBall() {
    ballvx = Math.round(Math.random()) * 2 - 1;
    ballvx = ballvx * 3;
    ballvy = Math.round(Math.random()) * 2 - 1;
    ballvy = ballvy * 3;
    ball = new Ball(boardWidth/2, boardHeight/2, ballvx, ballvy, ballRadius, ballc);
}

function clearBoard() {
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, boardWidth, boardHeight);
}

function draw() {
    clearBoard();
    ball.draw(ctx);
    paddleL.draw(ctx);
    paddleR.draw(ctx);

}

let intervalID;
function pause(){
    freeze = true
}
function resume(){
    freeze = false
}
function nextTick() {
    if (freeze == false){
        intervalID = setTimeout(
            () => {
                paddleL.move();
                if (cpucheck.checked) {
                    paddleR.moveCPU(ball);
                } else {
                    paddleR.move();
                }
                ball.bounceWall();
                if (ball.bouncePaddleL(paddleL)) score("right");
                if (ball.bouncePaddleR(paddleR)) score("left");
                if (scoreL >= 11 || scoreR >= 11) return
                ball.move();
                draw();
                nextTick();
            }, 10
        );
    } else{
        intervalID = setTimeout(
            () => {
                nextTick();
            }, 10
        );
    }

}

function score(player) {
    if (player == "left" && scoreL < 11 && scoreR < 11) scoreL++;
    if (player == "right" && scoreL < 11 && scoreR < 11) scoreR++;

    updateScore();
    resetBall();
}

function updateScore() {
    const scoreboard = document.getElementById("scoreboard");
    
    if (scoreL == 11){
        scoreboard.innerHTML = `Left Side Wins!`;
        winsL ++;
        winboard.innerHTML =`${winsL} : ${winsR}`
        clearInterval(intervalID)
        // setTimeout(resetGame(), 1000);
    } else if (scoreR == 11){
        scoreboard.innerHTML = `Right Side Wins`;
        winsR ++;
        winboard.innerHTML = `${winsL} : ${winsR}`;
        clearInterval(intervalID)
        // setTimeout(resetGame(), 1000);
    }else{
        scoreboard.innerHTML = `${scoreL} : ${scoreR}`;
        

    }
    
}