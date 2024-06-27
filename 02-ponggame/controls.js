<<<<<<< HEAD
const UPARROW = 38;
const DOWNARROW = 40;
const WKEY = 87;
const SKEY = 83;

let paddleVelocity = 5;

function keyDown(event) {
    const key = event.keyCode;
    //console.log(`KEYDOWN: ${key}`);
    switch (key) {
        case (UPARROW):
            paddleR.vy = -paddleVelocity;
            break;
        case (DOWNARROW):
            paddleR.vy = paddleVelocity;
            break;
        case (WKEY):
            paddleL.vy = -paddleVelocity;
            break;
        case (SKEY):
            paddleL.vy = paddleVelocity;
            break;
        default:
    }
}
window.addEventListener("keydown", keyDown);

function keyUp(event) {
    const key = event.keyCode;
    //console.log(`KEYUP: ${key}`);
    switch (key) {
        case (UPARROW):
        case (DOWNARROW):
            paddleR.vy = 0;
            break;
        case (WKEY):
        case (SKEY):
            paddleL.vy = 0;
            break;
        default:
    }
}
=======
const UPARROW = 38;
const DOWNARROW = 40;
const WKEY = 87;
const SKEY = 83;

let paddleVelocity = 5;

function keyDown(event) {
    const key = event.keyCode;
    //console.log(`KEYDOWN: ${key}`);
    switch (key) {
        case (UPARROW):
            paddleR.vy = -paddleVelocity;
            break;
        case (DOWNARROW):
            paddleR.vy = paddleVelocity;
            break;
        case (WKEY):
            paddleL.vy = -paddleVelocity;
            break;
        case (SKEY):
            paddleL.vy = paddleVelocity;
            break;
        default:
    }
}
window.addEventListener("keydown", keyDown);

function keyUp(event) {
    const key = event.keyCode;
    //console.log(`KEYUP: ${key}`);
    switch (key) {
        case (UPARROW):
        case (DOWNARROW):
            paddleR.vy = 0;
            break;
        case (WKEY):
        case (SKEY):
            paddleL.vy = 0;
            break;
        default:
    }
}
>>>>>>> 9f261fa9a9f80d9ded57c6c0d0a076ddb7aaf1de
window.addEventListener("keyup", keyUp);