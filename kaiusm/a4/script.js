var startTime = 15;
var subTime = 1;
var startClick =0;
var color="Get ready!";
var score=0;
var restartGame=0;
//var hiscore=0;
//var name="";
var scoreTest=1;
var restartIt=0;
document.getElementById("colour").innerHTML = (color)
setInterval (scoreRefresh, 1);
document.getElementById("wrong").innerHTML = ("Press START to begin")
document.getElementById("timeDisplayed").innerHTML = "Time: " + startTime

function Timestart(){
	if(restartIt==1){
		/* startClick=0;
		startTime=16;
		color="Get ready!";
		score=0;
		scoreTest=1;
		restartIt=0;
		document.getElementById("startButtom").innerHTML = "Start"
		clearInterval(Mtimer,);
		clearInterval(ranColor,); */
		location.reload();
	}
	if (startClick == 0){
		startClick = 1;
		document.getElementById("wrong").innerHTML = ("Better start clicking!")
		backMusic()
		setInterval (Mtimer, 1000);
		setInterval (ranColor, 1000);
	}
	
	else{
								//restartGame=0;
								startClick=2;
								document.getElementById("score").innerHTML = score
								document.getElementById("startButtom").innerHTML = "Restart"
								clearInterval(Mtimer);
								clearInterval(ranColor);
								startTime=0;
								scoreTest=0;
								restartIt=1;
	}
	
	
}
function Mtimer(){
	/* /* 
	if (startClick==3){
						document.getElementById("startButtom").innerHTML = "Start"
						startClick=1;
						restartGame=0;
						startTime=16;
						score=0;
						document.getElementById("score").innerHTML = score
						color="Start";
						Mtimer
					}
	if (startClick==2){
								document.getElementById("startButtom").innerHTML = "Start"
								startClick=1;
								restartGame=0;
								startTime=16;
								score=0;
								document.getElementById("score").innerHTML = score
								color="Start";
								Mtimer
								startClick=3;
								restartGame=0;
								document.getElementById("score").innerHTML = score
								document.getElementById("startButtom").innerHTML = "Restart"
								clearInterval(Mtimer);
								clearInterval(ranColor);
				} */
	if (startClick == 1){
				/* if (restartGame==1){
								document.getElementById("startButtom").innerHTML = "Start"
								startClick=1;
								restartGame=0;
								startTime=16;
								score=0;
								document.getElementById("score").innerHTML = score
								color="Start";
								Mtimer
								/* startClick=2;
								restartGame=0;
								document.getElementById("score").innerHTML = score
								document.getElementById("startButtom").innerHTML = "Restart"
								clearInterval(Mtimer);
								clearInterval(ranColor); */ 
				if(startTime > 1){
					startTime = startTime - subTime
					document.getElementById("timeDisplayed").innerHTML = "Time: " + startTime
					document.getElementById("startButtom").innerHTML = "Stop"
					document.getElementById("score").innerHTML = score
					restartGame=1;
				}
				else{
					if (scoreTest==1){
						/* if(score > hiscore){
							hiscore=score;
							name = prompt("Enter you name:", "Anonymous");
							document.getElementById("hiscore").innerHTML = hiscore;
							document.getElementById("hiname").innerHTML = name;
						} */
					
					document.getElementById("timeDisplayed").innerHTML = ("Time's up!")
					startClick=2;
					document.getElementById("startButtom").innerHTML = "Restart"
					restartGame=1;
					restartIt=1;
				}
				/* if (restartIt==1){
					document.getElementById("startButtom").innerHTML = "Start"
					startClick=1;
					restartGame=0;
					startTime=16;
					score=0;
					document.getElementById("score").innerHTML = score
					color="Start";
					Mtimer
				} */
				}
		}
	}		



function ranColor(){
	if(startClick == 1){
		document.getElementById("b-blue").style.backgroundColor = "blue";
		document.getElementById("b-green").style.backgroundColor = "green";
		document.getElementById("b-yellow").style.backgroundColor = "yellow";
		document.getElementById("b-red").style.backgroundColor = "red";
		
		document.getElementById("b-blue").style.color = "lightgrey";
		document.getElementById("b-green").style.color = "lightgrey";
		document.getElementById("b-yellow").style.color = "DarkSlateGrey";
		document.getElementById("b-red").style.color = "lightgrey";
		var randomNumber = Math.random();
		if (randomNumber < 0.25) {
				color = "BLUE";
				document.getElementById("colour").style.color = "blue";
				document.getElementById("b-blue").style.backgroundColor = "Gray";
				document.getElementById("b-blue").style.color = "black";
		}
		else if (randomNumber < 0.50) {
				color = "GREEN";
				document.getElementById("colour").style.color = "green";
				document.getElementById("b-green").style.backgroundColor = "Gray";
				document.getElementById("b-green").style.color = "black";
		}
		else if (randomNumber < 0.75) {
				color = "YELLOW";
				document.getElementById("colour").style.color = "yellow";
				document.getElementById("b-yellow").style.backgroundColor = "Gray";
				document.getElementById("b-yellow").style.color = "black";
		}
		else if (randomNumber < 1) {
				color = "RED";
				document.getElementById("colour").style.color = "red";
				document.getElementById("b-red").style.backgroundColor = "Gray";
				document.getElementById("b-red").style.color = "black";
		}
	}
	document.getElementById("colour").innerHTML = (color)
}


function clickColor(aColor){
	if(startClick==1){
		var checkColor=aColor
		if (checkColor==color){
			score=score + 10;
			var myAudio = new Audio('soundfx.wav');
			myAudio.play();
			document.getElementById("score").innerHTML = score
			var randomMes = Math.random();
			if (randomMes < 0.25) {
					document.getElementById("wrong").innerHTML = ("Correct pick!")
			}
			else if (randomMes < 0.50) {
					document.getElementById("wrong").innerHTML = ("Keep it up!")
			}
			else if (randomMes < 0.75) {
					document.getElementById("wrong").innerHTML = ("Great job!")
			}
			else if (randomMes < 1) {
					document.getElementById("wrong").innerHTML = ("You are lightning fast!")
			}
		}
		else{
			score=score-5;
			var myAudio = new Audio('incorrect-edited.mp3');
			myAudio.play();
			document.getElementById("score").innerHTML = score
			var randomMes = Math.random();
			if (randomMes < 0.25) {
					document.getElementById("wrong").innerHTML = ("Incorrect pick!")
			}
			else if (randomMes < 0.50) {
					document.getElementById("wrong").innerHTML = ("You can do it!")
			}
			else if (randomMes < 0.75) {
					document.getElementById("wrong").innerHTML = ("Better luck next time!")
			}
			else if (randomMes < 1) {
					document.getElementById("wrong").innerHTML = ("Stay sharp!")
			}
		}
	}
}

function scoreRefresh(){
	document.getElementById("score").innerHTML = score
	//document.getElementById("hiscore").innerHTML = hiscore
	//document.getElementById("hiname").innerHTML = name;
}

/* function StopTicker(){
	StopEvent=1;
	StopTick=1;
	document.getElementById("startButtom").innerHTML = "Stop"
} */


function backMusic(){
	var myMusic = new Audio('bgmusic.mp3');
			myMusic.play();
}