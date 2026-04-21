var startTime ;
var nClicks = 0;
var score= 0;
var randomColor;
function autoUpdateTime() {
    if(nClicks > 0) {
        var currentTime = new Date() 
        timeLeft = 15 - (currentTime - startTime) /1000;
        document.getElementById("timeLeft").innerHTML = timeLeft.toFixed(1);
        if(timeLeft <= 0 ){
            resetGame() 
        }
    }
}

setInterval(autoUpdateTime, 100) 


function clickStartStop() {
    if(nClicks > 0 ){
        resetGame() 
    }
    else {
       startGame()
    }
}

function startGame() {
    startTime = new Date();
    document.getElementById('stop').innerHTML = 'stop'
    nClicks = nClicks + 1 
    score = 0 
    document.getElementById('score').innerHTML = score
    makeRandomColor()
}

function makeRandomColor() {
    var random = Math.floor((Math.random() * 4 ) +1);
    if(random == 1){
        randomColor = 'BLUE' 
    }
    if(random ==2){
        randomColor = 'RED'
    }
    if(random == 3){
        randomColor = 'GREEN'
    }
    if(random == 4){
        randomColor = 'YELLOW'
    }
    document.getElementById('simeon').innerHTML = randomColor
}



function clickColor (color) {
    if(nClicks > 0){
       if(randomColor == color){
            score = score + 3
        }
        else{
            score = score - 1
        }
        makeRandomColor()
        document.getElementById('score').innerHTML = score
    }
}


function resetGame() {
    nClicks = 0 
    document.getElementById('stop').innerHTML = 'start'

}