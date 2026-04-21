var score = 0;
var nclicks = 0;
var startTime, timeLeft;
var startclickable = true;
var intervalset = false;
var numberrange = 0
var highscore = 0
var alerthigh = "No rounds were played for this session, meaning there is not yet a high score."

function Blue() {
	clickColour("Blue")
}

function Red() {
	clickColour("Red")
}

function Green() {
	clickColour("Green")
}

function Yellow() {
	clickColour("Yellow")
}

function changeColour() {
	var number = Math.random();
	numberrange = number
	if (numberrange < 1/4) {
		var colourdisplay = numberrange ;
		document.getElementById("colour").innerHTML = "SIMON SAYS: PRESS BLUE" ;
	}
	else if (number < 2/4) {
		var colourdisplay = numberrange ;
		document.getElementById("colour").innerHTML = "SIMON SAYS: PRESS RED" ;
	}
	else if (number < 3/4) {
		var colourdisplay = numberrange ;
		document.getElementById("colour").innerHTML = "SIMON SAYS: PRESS GREEN" ;
	}
	else {
		var colourdisplay = numberrange ;
		document.getElementById("colour").innerHTML = "SIMON SAYS: PRESS YELLOW" ;
	}
}

function clickColour(value) {
	if (nclicks > 0) {
		var correct = new Audio('ding.mp3');
		var wrong = new Audio('wrong.mp3');
		if (value == "Blue") {
			if (numberrange < 1/4) {
				score = score + 2
				correct.play();
				document.getElementById("score").innerHTML = "Score: " + score;
				changeColour();
			}
			else {
				score = score - 3
				wrong.play();
				document.getElementById("score").innerHTML = "Score: " + score;
				changeColour();
			}
		}
		else if (value == "Red") {
			if (numberrange > 1/4) {
				if (numberrange < 2/4) {
					score = score + 2
					correct.play();
					document.getElementById("score").innerHTML = "Score: " + score;
					changeColour()
				}
				else {
					score = score - 3
					wrong.play();
					document.getElementById("score").innerHTML = "Score: " + score;
					changeColour()
				}
			}
			else {
				score = score - 3
				wrong.play();
				document.getElementById("score").innerHTML = "Score: " + score;
				changeColour()
			}
		}
		else if (value == "Green") {
			if (numberrange > 2/4) {
				if (numberrange < 3/4) {
					score = score + 2
					correct.play();
					document.getElementById("score").innerHTML = "Score: " + score;
					changeColour()
				}
				else {
					score = score - 3
					wrong.play();
					document.getElementById("score").innerHTML = "Score: " + score;
					changeColour()
				}
			}
			else {
				score = score - 3
				wrong.play();
				document.getElementById("score").innerHTML = "Score: " + score;
				changeColour()
			}
		}
		else if (value == "Yellow") {
			if (numberrange > 3/4) {
				score = score + 2
				correct.play();
				document.getElementById("score").innerHTML = "Score: " + score;
				changeColour()
			}
			else {
				score = score - 3
				wrong.play();
				document.getElementById("score").innerHTML = "Score: " + score;
				changeColour()
			}
		}
	}
}

function checkHigh() {
	alert(alerthigh);
}

function clickStartStop() {
	if (nclicks == 0) {
		document.getElementById("buttonstart").innerHTML = "Reset Timer" ;
		changeColour()
		startTime = new Date() ;
		nclicks = nclicks + 1;
	}
	else {
		alert("Game has reset. Your score was removed.");
		document.getElementById("buttonstart").innerHTML = "Start Timer" ;
		nclicks = 0 ;
		score = 0 ;
		document.getElementById("score").innerHTML = "Score: " + score;
		document.getElementById("timer").innerHTML = "Time Remaining: N/A" ;
		document.getElementById("colour").innerHTML = "SIMON SAYS: START THE TIMER" ;
	}
}

function update() {
	if (nclicks > 0) {
		var currentTime = new Date();
		timeLeft = 15 - (currentTime - startTime) / 1000;
		document.getElementById("timer").innerHTML = "Time Remaining: " + timeLeft + " Seconds";
		if (timeLeft <= 0) {
			nclicks = 0;
			timeLeft = 0 ; 
			document.getElementById("timer").innerHTML = "Time Remaining: " + timeLeft + " Seconds";
			alert("Time is up.");
			if (score > highscore) {
				var newhigh = prompt("New high score! Please enter your name here:")
				highscore = score
				alerthigh = "The high score is currently " + highscore + " by " + newhigh
			}
			score = 0
			document.getElementById("score").innerHTML = "Score: " + score;
			timeLeft = 0 ; 
			document.getElementById("timer").innerHTML = "Time Remaining: N/A";
			document.getElementById("buttonstart").innerHTML = "Start Timer" ;
			document.getElementById("colour").innerHTML = "SIMON SAYS: START THE TIMER" ;
		}
	}
}

setInterval(update, 1);