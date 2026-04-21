var score = 0;
var tl = 0;
var rColor = "";
var nClick = 0;
var n = nClick/2;
var startTime;
var currentTime;

document.getElementById("scoreDisplayed").innerHTML = "Score: " + score; 
document.getElementById("timeLeft").innerHTML = "Time left: 15";
document.getElementById("randomColor").innerHTML = "Simon says: " + rColor; 

document.getElementById("btnBlue").style.backgroundColor = 'Blue';
document.getElementById("btnRed").style.backgroundColor = 'Red';
document.getElementById("btnYellow").style.backgroundColor = 'Yellow';
document.getElementById("btnGreen").style.backgroundColor = 'Green';

function startGame() {
	
	startTime = new Date();
	if (nClick == 0) {
		document.getElementById("stop").innerHTML = "Stop";
		var randomN = Math.random();
		if (randomN < 1/4) {
			rColor = "Red";
		}
		else if (randomN < 2/4) {
			rColor = "Blue";
		}
		else if (randomN < 3/4) {
			rColor = "Yellow";
		}
		else {
			rColor = "Green";
		}
		document.getElementById("randomColor").innerHTML = "Simon says: " + rColor;	
		nClick = nClick + 1;
	}
	else if (nClick != 0) {
		nClick = 0;
		rColor = " ";
		score = 0;
		startTime = new Date();
		document.getElementById("stop").innerHTML = "Restart";
		document.getElementById("randomColor").innerHTML = "Simon says: " + rColor;
		document.getElementById("scoreDisplayed").innerHTML = "Score: " + score;
		document.getElementById("timeLeft").innerHTML = "Time left: 15";		
	}
}
var hscore = 0;
var name = "Simon";    

function showHscore() {
	alert("The current High Score is " + hscore + " by " + name + ".")
}
function autoTime() {
	currentTime = new Date();
	if (nClick != 0) {
		tl = 15 - (currentTime - startTime)/1000;
		document.getElementById("timeLeft").innerHTML = "Time left: " + Math.round(tl);
		if (tl < 0) {
			nClick = 0
			if (score > hscore){			
				name = prompt("Congrats! You beat the High Score! Enter your name to leave a record.");
				hscore = score;
			}	
			nClick = 0;
			rColor = " ";
			score = 0;
			startTime = new Date();
			document.getElementById("stop").innerHTML = "Restart";
			document.getElementById("randomColor").innerHTML = "Simon says: " + rColor;
			document.getElementById("scoreDisplayed").innerHTML = "Score: " + score;
			document.getElementById("timeLeft").innerHTML = "Time left: 15";	
		}
	}
}
setInterval(autoTime, 100)	
var audio = new Audio('correct.mp3');
var waudio = new Audio('wrong.mp3');
function checkBlue() {
	if (rColor == "Blue"){
		score = score + 3;
		audio.play();
	}
	else {
		score = score - 1;
		waudio.play();
	}
	document.getElementById("scoreDisplayed").innerHTML = "Score: " + score; 
	var randomN = Math.random();
	if (randomN < 1/4) {
		rColor = "Red";
	}
	else if (randomN < 2/4) {
		rColor = "Blue";
	}
	else if (randomN < 3/4) {
		rColor = "Yellow";
	}
	else {
		rColor = "Green";
	}
	document.getElementById("randomColor").innerHTML = "Simon says: " + rColor;
	
}
function checkRed() {
	
	if (rColor == "Red"){
		score = score + 3;
		audio.play();
	}
	else {
		score = score - 1;
		waudio.play();
	}
	document.getElementById("scoreDisplayed").innerHTML = "Score: " + score; 
	var randomN = Math.random();
	if (randomN < 1/4) {
		rColor = "Red";
	}
	else if (randomN < 2/4) {
		rColor = "Blue";
	}
	else if (randomN < 3/4) {
		rColor = "Yellow";
	}
	else {
		rColor = "Green";
	}
	document.getElementById("randomColor").innerHTML = "Simon says: " + rColor;
	
}
function checkYellow() {

	if (rColor == "Yellow"){
		score = score + 3;
		audio.play();
	}
	else {
		score = score - 1;
		waudio.play();
	}
	document.getElementById("scoreDisplayed").innerHTML = "Score: " + score; 
	var randomN = Math.random();
	if (randomN < 1/4) {
		rColor = "Red";
	}
	else if (randomN < 2/4) {
		rColor = "Blue";
	}
	else if (randomN < 3/4) {
		rColor = "Yellow";
	}
	else {
		rColor = "Green";
	}
	document.getElementById("randomColor").innerHTML = "Simon says: " + rColor;
	
}
function checkGreen() {

	if (rColor == "Green"){
		score = score + 3;
		audio.play();
	}
	else {
		score = score - 1;
		waudio.play();
	}
	document.getElementById("scoreDisplayed").innerHTML = "Score: " + score; 
	var randomN = Math.random();
	if (randomN < 1/4) {
		rColor = "Red";
	}
	else if (randomN < 2/4) {
		rColor = "Blue";
	}
	else if (randomN < 3/4) {
		rColor = "Yellow";
	}
	else {
		rColor = "Green";
	}
	document.getElementById("randomColor").innerHTML = "Simon says: " + rColor;
	
}