var score = 0;
var nClicks = 0;
var ccolor;
var startTime;
var timeLeft = 0;
var audio = new Audio('https://cdn.upload.systems/uploads/gMaW1yo0.mp3');
var yes = new Audio('https://cdn.upload.systems/uploads/GMo0hAWO.mp3');
var no = new Audio('https://cdn.upload.systems/uploads/DwkTRZ1r.mp3');

function Start() {
    if (nClicks == 0) {
        startTime = new Date ()
        document.getElementById("scoreDisplay").innerHTML = "0";
        document.getElementById("Bstart").innerHTML = "STOP";
        nClicks = nClicks + 1;
        score = 0;
        GameStart = true;
        pickColor()
    }

    else {
        resetGame();
    }

}

function pickColor() {
    if (GameStart == true) {
        var randomNum = Math.random();  // decimal btwn 0 and 1
        
        if (randomNum < 1/4) {          // red if btwn 0 and 0.33
            ccolor = "BLUE";
        }
        else if (randomNum < 2/4) {     // green if btwn 0.33 and 0.67
            ccolor = "RED";
        }
        else if (randomNum < 3/4) {                          // black otherwise
            ccolor = "GREEN";
        }
        else {
            ccolor = "YELLOW";
        }
    document.getElementById("colorDisplay").innerHTML = ccolor;
    }
}

function Click(pcolor) {
    if (pcolor == ccolor) {
        score = score + 3;
        pickColor();
        yes.play();
    }
    else {
        no.play();
    }
}

function autoupdateTime() {
    if (nClicks > 0) {
        var currentTime = new Date();
        var timeLeft = 15 - (currentTime - startTime) / 1000;
        if (timeLeft < 0) {
            timeLeft = 0;
            resetGame();
        }
        document.getElementById("timeDisplay").innerHTML = (Math.round(timeLeft * 100) / 100).toFixed(2);
        document.getElementById("scoreDisplay").innerHTML = score;
    }
}

function resetGame() {
    if (score >= 69) {
        audio.play();
    }
    document.getElementById("timeDisplay").innerHTML = timeLeft;
    document.getElementById("Bstart").innerHTML = "START";
    nClicks = 0;
    GameStart = false;
}


setInterval(autoupdateTime, 30);