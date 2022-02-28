let circles = [];
let baseColor = "orange";
let lightColor = "blue";
let randomChoice;
let one;
let two;
let three;
let four;

class Circles {
    constructor(x, y, width, heigth) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.heigth = heigth;
    }
    display() {
        fill(baseColor);
        ellipse(this.x, this.y, this.width, this.heigth);
    }
    change() {
        fill(lightColor);
        ellipse(this.x, this.y, this.width, this.heigth);
    }
}

function setup() {
    createCanvas(900, 900);
    //canvas.parent("game-board");
    one = circles[0] = new Circles(250, 250, 100, 100);
    two = circles[1] = new Circles(250, 500, 100, 100);
    three = circles[2] = new Circles(550, 250, 100, 100);
    four = circles[3] = new Circles(550, 500, 100, 100);

}
function draw() {
    background(50);
    for (let i = 0; i < circles.length; i++) {
        if (randomChoice === i) {
            circles[i].change();
        } else {
            circles[i].display();
        }
    }
}

function randomCircle() {
    return randomChoice = Math.floor(Math.random() * circles.length);
}

function startGame() {

}

function mousePressed() {

}


//setInterval(randomCircle, 1000);

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

