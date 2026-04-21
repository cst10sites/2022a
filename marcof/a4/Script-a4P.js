var timeleft;
var nClicks = 0;
var score;
var downloadTimer;
var Num;
var randomNum;
var myAudio = new Audio ('Jackson F. Smith - Cantina Rag.mp3');
var myAudioa = new Audio ('Correct-answer-ding-dong-and-applause.mp3');
var myAudiob = new Audio ('Wrong-answer-sound-effect.mp3');
var nnClicks = 1;
var highscore = 0;

function myColor() 
{

		randomNum = Math.random()*4;
		randomNum = Math.floor(randomNum);
	   
	   if(randomNum == 0)
	   {
		Num = "Yellow";
		document.getElementById("myColor").innerHTML = "YELLOW";
		document.getElementById("myColor").style.color = "#FDFD96";
	   }
	   
	   if (randomNum == 1) 
	   {       
            Num = "Red";
			document.getElementById("myColor").innerHTML = "RED";
			document.getElementById("myColor").style.color = "#ff6961";
        }
        else if (randomNum == 2) 
		{ 
			
			
            Num = "Green";
			document.getElementById("myColor").innerHTML = "GREEN";
			document.getElementById("myColor").style.color = "#bee5b0";
		}
		
		else if (randomNum == 3)
		{
			Num = "Blue";
			document.getElementById("myColor").innerHTML = "BLUE";
			document.getElementById("myColor").style.color = "#aec6cf";
		}
		else if (randomNum == 4)
		{
			document.getElementById("myColor").innerHTML = "Finished";
		}
}



function blue()
{
	if (randomNum == 4)
		{
			document.getElementById("myColor").innerHTML = "Finished";
			document.getElementById("myColor").style.color = "White";
			
		}
		
		
	else {
		if (Num == "Blue")	{
			score = score + 3;
			document.getElementById("Score").innerHTML = score;
			playDing();
		}
		else {
			score = score - 1;
			document.getElementById("Score").innerHTML = score;
			playWrong();
		}
		myColor();
	}
}
function red()
{
	 if (randomNum == 4)
		{
			document.getElementById("myColor").innerHTML = "Finished";
			document.getElementById("myColor").style.color = "White";
			
		}
		
	else {
		if (Num == "Red")	{
			score = score + 3;
			document.getElementById("Score").innerHTML = score;
			playDing();
		}
		else {
			score = score - 1;
			document.getElementById("Score").innerHTML = score;
			playWrong();
		}
		myColor();
	}
		
}
function green()
{
	if (randomNum == 4)
		{
			document.getElementById("myColor").innerHTML = "Finished";
			document.getElementById("myColor").style.color = "White";
		}
		
	else {
		if (Num == "Green")	{
			score = score + 3;
			document.getElementById("Score").innerHTML = score;
			playDing();
		}
		else {
			score = score - 1;
			document.getElementById("Score").innerHTML = score;
			playWrong();
		}
		myColor();
	}
		
}
function yellow()
{
	if (randomNum == 4)
		{
			document.getElementById("myColor").innerHTML = "Finished";
			document.getElementById("myColor").style.color = "White";
			
		}
		
	else {
		if (Num == "Yellow"){
			score = score + 3;
			document.getElementById("Score").innerHTML = score;
			playDing();
		}
		else {
			score = score - 1;
			document.getElementById("Score").innerHTML = score;
			playWrong();
		}
		myColor();
	}
}

function StartWatch()
{ 
	myColor();
	score = 0;
	nClicks++;
	if (nClicks == 1)
	{
		document.getElementById("start").innerHTML = "STOPS";
		var timeleft = 15;
		var downloadTimer = setInterval(function StartWatch()
		{
		
			if(timeleft <= 0)
			{
				if (highscore < score)
				{
					highscore = score;
					document.getElementById("Highscore").innerHTML = highscore;
				}
				clearInterval(downloadTimer);
				timeleft = 0;
				document.getElementById("countdown").innerHTML = "Press start to start";
				document.getElementById("start").innerHTML = "START";
				document.getElementById("myColor").innerHTML = "Finished";
				document.getElementById("myColor").style.color = "White";
				nClicks = 0;
				randomNum = 4;
			} 
			else if (nClicks == 2)
			{
				
				clearInterval (downloadTimer);
				document.getElementById("countdown").innerHTML = "Stopped";
				document.getElementById("start").innerHTML = "RESET";
				document.getElementById("myColor").innerHTML = "Stopped"
				document.getElementById("myColor").style.color = "White";
				document.getElementById("score").innerHTML = score;
			}
			else 
			{
				
				document.getElementById("countdown").innerHTML = timeleft;
				
			}timeleft -= 1;
		}, 1000);
			
	}
	
	if (nClicks == 3)
			{
				document.getElementById("countdown").innerHTML = "Press start to start";
				document.getElementById("start").innerHTML = "START";
				document.getElementById("Score").innerHTML = "-";
				document.getElementById("myColor").innerHTML = "Prepare";
				document.getElementById("myColor").style.color = "White";
				randomNum = 4;
				nClicks = 0;
			}
}

function playAudio() {
  myAudio.play();
}

function stopAudio(){
	myAudio.pause();
}

function playDing()
{
	myAudioa.play();
}
function playWrong()
{
	myAudiob.play();
}