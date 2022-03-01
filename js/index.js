let circles = [];
let baseColor = "orange";
let lightColor = "blue";
let randomChoice;
let one;
let two;
let three;
let four;
let startTime;
let score = 0;
let misses;
let doesItScore = true;
let timeUntilNewCircle = 1000;
const gameIntroElement = document.querySelector(".game-intro");
const gameOverElement = document.querySelector(".game-over");




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

    colidesWithPoint(pointX, pointY) {
        let d = dist(pointX, pointY, this.x, this.y);
        if (d < this.width) {
            return true;
        }
        return false;
    }
    colidesWithMouse() {
        return this.colidesWithPoint(mouseX, mouseY);

    }
}
function preload() {
    
}

function setup() {
    const canvas = createCanvas(900, 900);
    canvas.parent("game-board");
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
    fill(255);
    textSize(40);
    text(`Score: ${score}`, 50, 100);
    fill("red");
    text(`Misses: ${counterMisses}`, 675, 100);
   
}

function randomCircle() {
    randomChoice = Math.floor(Math.random() * circles.length);
    startTime = Date.now();
    if(doesItScore = true){
    lightColor = "blue";
    }
}

function mousePressed() {
    colide = circles[randomChoice].colidesWithMouse();
    if (colide === true) {
        if (doesItScore) {
            lightColor = color(0, 255, 0);
            doesItScore = false;
            updateTheScore(getTheReactionTime(startTime, Date.now()));
        }
    } 
}

function getTheReactionTime(start, end) {
    let result = (end - start);
    return result;
}

function updateTheScore(react) {
    let timeScore = Math.max(timeUntilNewCircle - react, 0);
    score = Math.round(score + (timeScore) / 10);
}

function setTheDificult() { 
if (score > 1000) {
    return timeUntilNewCircle = 5000;
}
if (score > 2000) {
    return timeUntilNewCircle = 1100;
}
if (score > 3000) {
   return timeUntilNewCircle = 1000;
}
if (score > 4000) {
    return timeUntilNewCircle = 1000;
}
if (score > 5000){
    return timeUntilNewCircle = 900;
}
if (score > 6000){
    return timeUntilNewCircle = 850;
}
}


let counterMisses = 3;
function missCircle(){
    return counterMisses --;
}

window.onload = () => {
    document.getElementById("start-button").onclick = () => {
        startGame();
    };
    document.getElementById("restart-button").onclick = () => {
        startGame();
    };
}

function toggleGameOver() {
    
    noLoop();
}

function startGame() {
    gameIntroElement.style.display = "none";
    gameOverElement.style.display = "none";
    canvas.style.display = "flex";
    setInterval(randomCircle, timeUntilNewCircle);
    loop();
  }


