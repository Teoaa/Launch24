let error = 0;

function errorpercent(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
    }
class Paddle {
    constructor(x, y, l, w, c) {
        this.x = x;
        this.y = y;
        this.l = l;
        this.w = w;
        this.c = c;
        this.vy = 0;
    }

    

    draw(ctx) {
        ctx.fillStyle = this.c;
        ctx.strokeStyle = "black";
        ctx.fillRect(this.x, this.y, this.w, this.l);
        ctx.strokeRect(this.x, this.y, this.w, this.l);
    }

    move() {
        let newY = this.y + this.vy;
        if (newY < 0) return;
        if (newY + this.l > boardHeight) return;

        this.y = newY;
    }



    
    moveCPU(ball) {
        error = errorpercent(1, 100)
        console.log(error)
        if (error <= 3){
            if (ball.y > this.vy && ball.vy > this.vy){
                this.vy = ball.vy - 5
            } else if(ball.y > this.vy && ball.vy < this.vy ){
                this.vy = ball.vy + 5
            }
        }else{
            if (ball.y > this.vy && ball.vy > this.vy){
                this.vy = ball.vy + 5
            } else if(ball.y > this.vy && ball.vy < this.vy ){
                this.vy = ball.vy - 5
            }
        }
    
    
        


        


        
        // this.vy = 0; // Modify this line to add your own code

        // Finally, call move to move the paddle normally
        this.move();
    }
}
