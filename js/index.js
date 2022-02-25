

function setup() {
    createCanvas(900, 900);
    
}

function draw() {
    background(50);
    ellipse(250, 250, 100, 100);
    /*
    ellipse(550, 500, 100, 100);
    ellipse(250, 500, 100, 100);
    ellipse(550, 250, 100, 100);
    */
}

function mouseClicked() {

}

window.onload = () => {
    document.getElementById("start-button").onclick = () => {
        startGame();
    };
    document.getElementById("restart-button").onclick = () => {
        startGame();
    };
}