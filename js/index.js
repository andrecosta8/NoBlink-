let randomChoice;
let baseColor;
let lightColor;
let score;
//const reactionTime;
//let circles = [circle(250, 250, 100), circle(550, 500, 100), circle(250, 500, 100), circle(550, 250, 100,)];
// let leftUp;
// let leftDown;
// let rightUp;
// let rightDown;
//let arrayOfEllipse;
/*
class Circles {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw() {
        fill(baseColor);
        circle(this.x, this.y, this.width, this.height);
        
    }
}
leftUp = new Circles(250, 250, 100, 100);
leftDown = new Circles(250, 500, 100, 100);
rightUp = new Circles(550, 250, 100, 100);
rightDown = new Circles(550, 500, 100, 100);
*/
//console.log(Circles);


function setup() {  
    baseColor = "white";
    lightColor = "blue";
    createCanvas(900, 900);
    //canvas.parent("game-board");

}

function draw() {
    background(50);
      
    /*
    leftUp.draw();
    leftDown.draw();
    rightUp.draw();
    rightDown.draw();
    */
    
    fill(baseColor);
    if (randomChoice === 0) {
        fill(lightColor);
    }
    circle(250, 250, 100)
    fill(baseColor);
    if (randomChoice === 1) {
        fill(lightColor);
    }
    circle(550, 500, 100)
    fill(baseColor);
    if (randomChoice === 2) {
        fill(lightColor);
    }
    circle(250, 500, 100)
    fill(baseColor);
    if (randomChoice === 3) {
        fill(lightColor);
    }
    circle(550, 250, 100)
    
}

function startGame() {

}

function mousePressed() {
   
  }

function randomEllipse() {
    return randomChoice = Math.floor(Math.random() * 4);
}

setInterval(randomEllipse, 1000);

/*
function colorChange(randomChoice) {
    if(randomChoice === 0){
     
    }
    if(randomChoice === 1){
        
        fill(lightColor);
    }
    if(randomChoice === 2){
        
        fill(lightColor);
    }
    if(randomChoice === 3){
        
        fill(lightColor);
    }

}
*/

/*
window.onload = () => {
    document.getElementById("start-button").onclick = () => {
        startGame();
    };
    document.getElementById("restart-button").onclick = () => {
        startGame();
    };
}
*/


