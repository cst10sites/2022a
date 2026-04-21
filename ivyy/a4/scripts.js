var score = 0;
var subTime = 0;
var nClicks = 0;
var randomcolor;
var randomNumber = Math.random();
var name;
var elapsedTime;
var audio;

document.getElementById("cD").innerHTML = "Press the start button to start the game";

function StartWatch() {
	if (nClicks == 0) {
		nClicks = nClicks + 1;
		audio = new Audio('start.mp3');
			audio.play();
		document.getElementById("Sc").innerHTML = score;
		document.getElementById("cD").innerHTML = "";
		document.getElementById("buttonDisplay").innerHTML = "Stop";
		}
	if (elapsedTime > 0 && nClicks > 0) {
		audio = new Audio('end.mp3');
			audio.play();
		alert(score)
		name = prompt("Your name?", "") 
		alert(name + "'s score is " + score);
		nClicks = 0;
		elapsedTime = 0;
		subTime = 0;
		score = 0;
		document.getElementById("buttonDisplay").innerHTML = "Restart";
		document.getElementById("Sc").innerHTML = score;
		document.getElementById("tD").innerHTML = elapsedTime;
		document.getElementById("cD").innerHTML = "Press the restart button to retry the game";
		document.getElementById("de").innerHTML = "";
	}
}

function auto() {
	if(nClicks > 0) {
	subTime = subTime + 1;
	elapsedTime = 15 - (subTime);
	document.getElementById("tD").innerHTML = elapsedTime;
	}
	
	if (elapsedTime < 0) {
		audio = new Audio('end.mp3');
			audio.play();
		alert(score)
		name = prompt("Your name?", "") 
		alert(name + "'s score is " + score);
		nClicks = 0;
		elapsedTime = 0;
		subTime = 0;
		score = 0;
		document.getElementById("buttonDisplay").innerHTML = "Restart";
		document.getElementById("Sc").innerHTML = score;
		document.getElementById("tD").innerHTML = elapsedTime;
		document.getElementById("cD").innerHTML = "Press the restart button to retry the game";
		document.getElementById("de").innerHTML = "";
	}
}

function rd() {
	if (nClicks > 0) {
		if (randomNumber < 1/4) {
		randomcolor = "red";
		document.getElementById("cD").innerHTML = randomcolor;
		}
			
		else if (randomNumber < 1/2) {
		randomcolor = "blue";
		document.getElementById("cD").innerHTML = randomcolor;
		}

		else if (randomNumber < 3/4) {
		randomcolor = "green";
		document.getElementById("cD").innerHTML = randomcolor;
		}
			
		else if (randomNumber < 1) {
		randomcolor = "yellow";
		document.getElementById("cD").innerHTML = randomcolor;
		}
	}
}

function blue() {
	if (nClicks > 0) {
		if (randomcolor == "blue") {
			subTime = subTime - 3;
			score = score + 3;
			document.getElementById("Sc").innerHTML = score;
			document.getElementById("de").innerHTML = "You are doing great!";
			audio = new Audio('point.mp3');
				audio.play();
			randomNumber = Math.random();
		}
		else {
			subTime = subTime + 3;
			score = score - 1;
			audio = new Audio('wrong.mp3');
			audio.play();
			document.getElementById("Sc").innerHTML = score;
			document.getElementById("de").innerHTML = ":(((";
			randomNumber = Math.random();
		}
	}
}

function red() {
	if (nClicks > 0) {
		if (randomcolor == "red") {
		subTime = subTime - 3;
		score = score + 3;
		document.getElementById("Sc").innerHTML = score;
		document.getElementById("de").innerHTML = "Outstanding!";		
		audio = new Audio('point.mp3');
				audio.play();
		randomNumber = Math.random();
		}
		else {
			subTime = subTime + 3;
			score = score - 1;
			audio = new Audio('wrong.mp3');
			audio.play();
			document.getElementById("Sc").innerHTML = score;
			document.getElementById("de").innerHTML = ":(((";
			randomNumber = Math.random();
		}
	}
}

function yellow() {
	if (nClicks > 0) {
		if (randomcolor == "yellow") {
			subTime = subTime - 3;
			score = score + 3;
			document.getElementById("Sc").innerHTML = score;	
			document.getElementById("de").innerHTML = "Amazing!";
			audio = new Audio('point.mp3');
				audio.play();
			randomNumber = Math.random();
		}
		else {
			subTime = subTime + 3;
			score = score - 1;
			audio = new Audio('wrong.mp3');
			audio.play();
			document.getElementById("Sc").innerHTML = score;
			document.getElementById("de").innerHTML = ":(((";
			randomNumber = Math.random();
			}
	}
}

function green() {
	if (nClicks > 0) {
		if (randomcolor == "green") {
			subTime = subTime - 3;
			score = score + 3;
			document.getElementById("Sc").innerHTML = score;
			document.getElementById("de").innerHTML = "Excellent!";
			audio = new Audio('point.mp3');
				audio.play();
			randomNumber = Math.random();
		}
		else {
			subTime = subTime + 3;
			score = score - 1;
			audio
			audio = new Audio('wrong.mp3');
			audio.play();
			document.getElementById("Sc").innerHTML = score;
			document.getElementById("de").innerHTML = ":(((";
			randomNumber = Math.random();
		}
	}
}

setInterval(auto, 1000);
setInterval(rd, 100);