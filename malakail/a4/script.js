var score = 0;
var nClicks = 0;
var ccolor;
var startTime;
var timeLeft = 0;
var start = false;

function Start() {
    if (nClicks == 0) {
        startTime = new Date ()
        start = true;
        document.getElementById("scoreDisplay").innerHTML = "0";
        document.getElementById("Bstart").innerHTML = "STOP";
        nClicks = nClicks + 1;
        score = 0;
        GameStart = true;
        pickColor()
        start = true;
    }

    else if (start == true) {
        start = false;
        document.getElementById("Bstart").innerHTML = "RESTART";
        nClicks = nClicks + 1;
        start = false;
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

function Click(pcolor) { //correct awnsweer
    if (pcolor == ccolor) {
        score = score + 3;
        startTime = new Date ()
        pickColor();
    }
    else {
        score = score - 1;
        pickColor();
    }
}

function autoupdateTime() {
    if (nClicks == 1) {
        var currentTime = new Date();
        var timeLeft = 15 - (currentTime - startTime) / 1000;
        if (timeLeft < 0) {
            document.getElementById("Bstart").innerHTML = "RESTART";
            timeLeft = 0;
        }
    
        document.getElementById("timeDisplay").innerHTML = (Math.round(timeLeft * 100) / 100).toFixed(2);
        document.getElementById("scoreDisplay").innerHTML = score;
    } 
    //else {
        //document.getElementById("timeDisplay").innerHTML = "";
        //document.getElementById("scoreDisplay").innerHTML = "";
    //}
}


function resetGame() {
   {
    }
    document.getElementById("Bstart").innerHTML = "START";
    nClicks = 0;
    GameStart = false;
    start = false;
    document.getElementById("timeDisplay").innerHTML = "";
    document.getElementById("scoreDisplay").innerHTML = "";
    document.getElementById("colorDisplay").innerHTML = "";
}



setInterval(autoupdateTime, 30);