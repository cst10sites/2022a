var score = 0; //score
var nClicks = 0; //n
var startTime, timeLeft;
var numberC;
var randomNum;
var highscore = 0;

function StartStop() {
  score = 0;
  changeColor();
  if (nClicks > 0) {
    nClicks = 0;
  }
  changeColor();
  if (nClicks == 0) {
    document.getElementById("Bstart").innerHTML = "STOP"; // orginal is STOP but changes because of score
    document.getElementById("scoreDisplay").innerHTML = 0;
    nClicks = nClicks + 1;
    startTime = new Date();
    // alert (nClicks);    // tells what nclicks is a
  }
}
function autoUpdateTime() {
  if (nClicks > 0) {
    var currentTime = new Date();
    timeLeft = 15 - (currentTime - startTime) / 1000;
    if (timeLeft < 0) {
      timeLeft = 0;
      document.getElementById("scoreDisplay").innerhtml = score;
      resetGame(); // need to define for inng game function
    }
    document.getElementById("timeDisplay").innerHTML = timeLeft.toFixed(2);
    //document.getElementById("Bstart").innerHTML = math.round(10)
    //document.getElementById("Bstart").innerHTML = score;                    // displays the score
  }
}
function changeColor() {
  randomNum = Math.random() * 4 + 1;
  randomNum = Math.trunc(randomNum);

  if (randomNum == 1) {
    document.getElementById("colorDisplay").innerHTML = "RED";
    document.getElementById("colorDisplay").style.color = "#ac2455";
    numberC = "Red";
  }
  if (randomNum == 2) {
    document.getElementById("colorDisplay").innerHTML = "GREEN";
    document.getElementById("colorDisplay").style.color = "#54863f";
    numberC = "Green";
  }
  if (randomNum == 3) {
    document.getElementById("colorDisplay").innerHTML = "BLUE";
    document.getElementById("colorDisplay").style.color = "#367baf";
    numberC = "Blue";
  }
  if (randomNum == 4) {
    document.getElementById("colorDisplay").innerHTML = "YELLOW";
    document.getElementById("colorDisplay").style.color = "#ffe34c";
    numberC = "Yellow";
  }
}

function clickColor(buttonColor) {
  if (timeLeft == 0.0) {
    document.getElementById("scoreDisplay").innerHTML = score;
    resetGame();
  } else if (numberC == buttonColor) {
    score = score + 3;
    document.getElementById("scoreDisplay").innerHTML = score;
    changeColor();
  } else {
    score = score - 1;
    document.getElementById("scoreDisplay").innerHTML = score;
    changeColor();
  }
}
function resetGame() {
  if (highscore < score) {
    highscore = score;
    document.getElementById("highscoreDisplay").innerHTML = highscore;
  }
}

setInterval(autoUpdateTime, 1);
