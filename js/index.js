let circles = [];
let baseColor = "red";
let lightColor = "blue";
let randomChoice;
let one;
let two;
let three;
let four;
let startTime;
let score = 0;
let doesItScore = true;
let timeUntilNewCircle = 1000;
let counterMisses = 1;
let timeCountDown = 10;
let startInterval;
let scoreboard =[0,0,0,0,0];
const gameIntroElement = document.querySelector(".game-intro");
const gameOverElement = document.querySelector(".game-over");
const gameBoardElement = document.getElementById("game-board");
const playerScore = document.querySelector(".player-score");
const scoreBoardGame = document.querySelector(".scores");

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
    img = loadImage('/images/noblinksample3.png');
    
}

function setup() {
    const canvas = createCanvas(900, 900);
    canvas.parent("game-board");
   circles[0] = new Circles(300, 250, 100, 100);
    circles[1] = new Circles(300, 500, 100, 100);
     circles[2] = new Circles(600, 250, 100, 100);
    circles[3] = new Circles(600, 500, 100, 100);

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
    text(`Time: ${timeCountDown}`, 675, 100);
    image(img, -30, 500, 900, 450);

}

function randomCircle() {
    timeCountDown -= 1;
    randomChoice = Math.floor(Math.random() * circles.length);
    startTime = Date.now();
    if (doesItScore = true) {
        lightColor = "blue";
    } if (timeCountDown === 0) {
        gameOver();
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
    if (score <= 1000) {
        timeCountDown += Math.round(react / 600);
    } else if (score > 1000) {
        timeCountDown += Math.round(react / 700);
    } else if (score > 2000) {
        timeCountDown += Math.round(react / 800);
    } else if (score > 3000) {
        timeCountDown += Math.round(react / 900);
    } else if (score > 4000) {
        timeCountDown += Math.round(react / 1000);
    }
    return score;
}
    function printTheScore(points){
        for(let i = 0; i < scoreboard.length; i++) { 
        if (points > scoreboard[i]){
            scoreboard.splice(i, 0, points);
            scoreboard.length = Math.min(scoreboard.length, 5); 
            break;
    }
}
}
    
    window.onload = () => {
        gameIntroElement.style.display = "block";
        gameBoardElement.style.display = "none";
        gameOverElement.style.display = "none";
        document.getElementById("start-button").onclick = () => {
            startGame();

        };
        document.getElementById("restart-button").onclick = () => {
            gameIntroElement.style.display = "block";
            gameBoardElement.style.display = "none";
            gameOverElement.style.display = "none";
        };
    }

    function gameOver() {
        clearInterval(startInterval);
        printTheScore(score);
        scoreBoardGame.innerHTML =`Top Scores:
        <ul><li>${scoreboard[0]}</li><li>${scoreboard[1]}</li><li>${scoreboard[2]}</li><li>${scoreboard[3]}</li><li>${scoreboard[4]}</li> </ul>`;
        playerScore.innerText =`Your score: ${score}` ;
        score = 0;
        timeCountDown = 10;
        gameIntroElement.style.display = "none";
        gameBoardElement.style.display = "none";
        gameOverElement.style.display = "block"; 


        
    }

    function startGame() {
        gameIntroElement.style.display = "none";
        gameBoardElement.style.display = "block";
        gameOverElement.style.display = "none";
        startInterval = setInterval(randomCircle, timeUntilNewCircle);
    }

