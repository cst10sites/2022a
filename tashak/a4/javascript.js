var score=0;
var nClicks=0;
var startTime= 15;
var randomColor;
var timeLeft; 




function clickStartStop(){
	if (nClicks==0) {
		score=0;
		document.getElementById("buttonLabel").innerHTML="Stop"
		playNoise();
		startTime= new Date();
		nClicks= nClicks+1
		changeColor(); 
		
				}
	 else if (nClicks=1)  { 
		document.getElementById("buttonLabel").innerHTML="Restart"
		nClicks=0;
		
	 } 
	 else { 
			
		document.getElementById("buttonLabel").innerHTML="Stop"
		timeDisplay= 15;
		scoreDisplay= 0;
	 
		} 
	 
	 
	 
	
		
	  
}
function resetGame(){ 

location.reload()


} 


function autoUpdateTime() { 
	if (nClicks>0) {
			var currentTime = new Date(); 
			var timeLeft = 15-(currentTime-startTime) / 1000; 
		document.getElementById("scoreDisplay").innerHTML= score;
	document.getElementById("colorDisplay").innerHTML=randomColor;
		
		if  (timeLeft<0) { 
		timeLeft = 0 ;
		nClicks = 0;
		timeDisplay== 0;
		
	document.getElementById("buttonLabel").innerHTML= "Start";
	 
	 
	
	
	
		} 
		document.getElementById("timeDisplay").innerHTML= timeLeft;
		
		
	}


} 

setInterval(autoUpdateTime,100);  

function clickColor(aColor) {
	if (aColor == randomColor) {
		score = score + 3
		changeColor();
		playSound();
	}
	else { 
	score= score-1
	changeColor();
	playAudio();
	
	} 
}

function changeColor() {
	var randomNumber= Math.random() 
	if (randomNumber<0.25) { 
		randomColor="RED";
	}
	else if (randomNumber<0.50) { 
		randomColor="BLUE"; 
	} 
	else if (randomNumber<0.75) { 
		randomColor="GREEN";
	}
	else { 
		randomColor="YELLOW";
	} 
}


function playAudio() {
  var myAudio = new Audio('wronganswer.mp3');
  myAudio.play();
}


function playSound() {
  var myAudio = new Audio('rightanswer.mp3');
  myAudio.play();
  
}


function playNoise() {
  var myAudio = new Audio('backgroundmusic.mp3');
  myAudio.play();
}

 









