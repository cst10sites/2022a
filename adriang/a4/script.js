// 1. Code below controls the two buttons in index.html
var score = 0;
var nClicks = 0;
var startTime, randomColor; // to be assigned later
var randomColor;


function clickStartStop() {
	if (nClicks == 0) {
		document.getElementById("Stop") .innerHTML = "Stop"
		startTime = new Date();
		changeColor();
		nClicks = nClicks + 1;
	}
	else{
	resetGame();
		
		
		
			
	}	
}

function autoUpdateTime(){
	if (nClicks > 0) {
		var currentTime = new Date();
		timeLeft = 15 - (currentTime - startTime)/1000;
		if (timeLeft <= 0){
			timeLeft = 0;
			nClicks = 0
			document.getElementById("scoreDisplay").innerHTML = score;
			document.getElementById("Stop") .innerHTML = "Start";
		}			
		document.getElementById("timeDisplay").innerHTML = timeLeft.toFixed(2);	
		
		
	}	
	
}

function changeColor() {
	
	 var rNumber = Math.random();  // decimal btwn 0 and 1
        
        if (rNumber < 1/4) {          // red if btwn 0 and 0.33
            randomColor = "Red";
        }
        else if (rNumber < 1/2) {     // green if btwn 0.33 and 0.67
            randomColor = "Green";
        }
        else if (rNumber < 3/4){                          // black otherwise
            randomColor = "Yellow";
        }	
		else if (rNumber < 1){
			randomColor = "Blue"
		}
	
	document.getElementById("colorDisplay").innerHTML = randomColor;
	
	
	
}

function resetGame() {
	nClicks = nClicks + 1
}

function clickColor(aColor) {
	if (randomColor == aColor) {
		score = score + 3
	}
	else {
		score = score - 1
		
	}
	changeColor() ;
}
	
function pickFavoriteColor() {

	alert("Red is my favorite color.");
	prompt("What is your favorite color?", "Red") // prompt -> string

	var secondFavoriteColor = prompt("That is also a great color! If you guess my second favorite color I will give you 5 bonus points,if you get in wrong I will take away 3 points. (Capitalize the first letter of the color and make sure the spelling is done correctly)!")
	if (secondFavoriteColor == "Turquoise") {
		alert("You got it right! 5 bonus points for you!");
		score = score + 5;
	}
	else {
		alert("Sorry, but that wasn't right better luck next time!")
		score = score - 3;
	}
	document.getElementById("scoreDisplay").innerHTML = score;
	
}



function playAudio() {
  var myAudio = new Audio('soundfx.mp3');
  myAudio.play();
}


	





setInterval(autoUpdateTime, 100); // repeat function every 500 ms (0.5 s)