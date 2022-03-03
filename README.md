NoBlink
Description
NoBlink is a game where players can train theirs reflexes and improve theirs reaction time. They can use mouse to click on the circle is blue lighted.
The lighted circles start to appear in different spots and how much faster the players reacts more points their get. A percentage of that points will be add to your time. The timer is counting down until is 0. The percentage of points that pass to the timer will be shorter as the score is higher.
The game ends when timer as reach 0 seconds. After that players are able to see theirs scores and the top5 scores.  

MVP (DOM - CANVAS)
Game has 4 circles inside canvas
Just one of the circle lights different of the others randomly
The Mouse only press the lighted circle
When pressed scores based on reaction time 
Time counts down to 0 set the end of the game
Score increment time

Backlog
Set green light to confirm score and block multiple score
Increasing dificulty based on score levels
Add scoreboard

Data Structure
index.js
class Circles {
    display()
    change()
    colidesWithPoint()
    colidesWithMouse()
}
preload()
setup()
draw()
randomCircle()
mousePressed()
getTheReactionTime()
updateTheScore()
printTheScore()
gameOver()
startGame()

States y States Transitions
Definition of the different states and their transition (transition functions)

splashScreen
gameScreen
gameOverScreen

Git
REPO - https://github.com/andrecosta8/NoBlink-.git
PAGE - https://andrecosta8.github.io/NoBlink-/


Slides
https://docs.google.com/presentation/d/1KCxQu55plkOEiiruF7-v-bzTihp8kNlKC7PfvZs96EY/edit?usp=sharing