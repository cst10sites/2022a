//variables
var startTime;
var nClicks = 0;
var score = 0;
var timeLeft;
var randomColor;
var score=0;

//time counting down from 15 
function autoUpdateTime() {
	if (nClicks > 0 ) {
		var currentTime = new Date ();
		var timeLeft = 15 - (currentTime - startTime)/1000;
		document.getElementById("timeDisplay").innerHTML =timeLeft;
		document.getElementById("colorDisplay").innerHTML = randomColor;
		document.getElementById("scoreDisplay").innerHTML = score;
		
		if (timeLeft <=0)  {
			timeLeft = 0;
			nClicks = 0;
		}
		
	}
}


//timer	
setInterval (autoUpdateTime, 100)

	

//startbutton
function clickStartStop() {
	if (nClicks == 0) {
	document.getElementById("buttonDisplay").innerHTML="Stop"
	startTime= new Date();
	nClicks=nClicks+1;
	changeColor();
	}
	else {
		resetGame();
	}
}


//resetting the game
function resetGame() {
	nClicks = 0;
	document.getElementById("buttonDisplay").innerHTML = "Restart";
	score = 0;
	}






//picking a random color
function changeColor() {
		var randomNumber = Math.random(); 
		 
		if (randomNumber < 0.25 ) {
			randomColor= "RED";    
		}
		if (randomNumber < 0.5) {
			randomColor = "BLUE";   
		}
		
		else if (randomNumber < 0.75) {
			randomColor = "GREEN"; 
		}
		
		else {
			randomColor = "YELLOW";
		}
		
		
		
}






//functions for the color buttons

function clickColor(aColor) {
	if (randomColor == aColor) {
		score = score + 3
		changeColor();
	}
	else {
		score = score - 1
		changeColor();
		}

}




/*
function clickBlue() {
	if (randomColor = "BLUE"){
		score = score + 3
			changeColor();
	}
	else {
		score = score - 1
		changeColor();
	}
}


function clickRed() {
	if (randomColor = "RED"){
		score = score + 3
		changeColor();
	}
	else {
		score = score - 1
		changeColor();
	}
}



function clickGreen(){
	if (randomColor = "GREEN"){
		score = score + 3
		changeColor();
	}
	else {
		score = score - 1
		changeColor();
	}
}



function clickYellow() {
	if (randomColor = "YELLOW"){
		score = score + 3
		changeColor();
	}
	else {
		score = score - 1
		changeColor();
	}
}
*/









