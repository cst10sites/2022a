var timeleft;
var nClicks = 0;
var score;
var downloadTimer;
var Num;
var randomNum;

function myColor()
{

randomNum =(Math.random()*4);
randomNum = Math.trunc(randomNum)
 
  if(randomNum == 0)
  {
Num = "Yellow";
document.getElementById("myColor").innerHTML = "YELLOW";
document.getElementById("myColor").style.color = "Yellow";
  }
 
  if (randomNum == 1)
  {      
            Num = "Red";
document.getElementById("myColor").innerHTML = "RED";
document.getElementById("myColor").style.color = "Red";
        }
        else if (randomNum == 2)
{


            Num = "Green";
document.getElementById("myColor").innerHTML = "GREEN";
document.getElementById("myColor").style.color = "Green";
}

else if (randomNum == 3)
{
Num = "Blue";
document.getElementById("myColor").innerHTML = "BLUE";
document.getElementById("myColor").style.color = "Blue";
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
document.getElementById("Score").innerHTML = "Finished";
}


else if (Num == "Blue")
{
score = score + 3;
document.getElementById("Score").innerHTML = score;
myColor();
}
else
{
score = score - 1;
document.getElementById("Score").innerHTML = score;
myColor();
}
}
function red()
{
if (randomNum == 4)
{
document.getElementById("myColor").innerHTML = "Finished";
document.getElementById("myColor").style.color = "White";
document.getElementById("Score").innerHTML = "Finished";
}

else if (Num == "Red"){
score = score + 3;
document.getElementById("Score").innerHTML = score;
myColor();
}
else
{
score = score - 1;
document.getElementById("Score").innerHTML = score;
myColor();
}
}
function green()
{
if (randomNum == 4)
{
document.getElementById("myColor").innerHTML = "Finished";
document.getElementById("myColor").style.color = "White";
document.getElementById("Score").innerHTML = "Finished";
}

else if (Num == "Green")
{
score = score + 3;
document.getElementById("Score").innerHTML = score;
myColor();
}
else
{
score = score - 1;
document.getElementById("Score").innerHTML = score;
myColor();
}
}
function yellow()
{
if (randomNum == 4)
{
document.getElementById("myColor").innerHTML = "Finished";
document.getElementById("myColor").style.color = "White";
document.getElementById("Score").innerHTML = "Finished";
}

else if (Num == "Yellow"){
score = score + 3;
document.getElementById("Score").innerHTML = score;
myColor();
}
else
{
score = score - 1;
document.getElementById("Score").innerHTML = score;
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
document.getElementById("start").innerHTML = "Stop";
var timeleft = 15;
var downloadTimer = setInterval(function StartWatch()
{

if(timeleft <= 0)
{
clearInterval(downloadTimer);
timeleft = 0;
document.getElementById("countdown").innerHTML = "Press start to start";
document.getElementById("start").innerHTML = "Start";
document.getElementById("myColor").innerHTML = "Finished!!!";
document.getElementById("myColor").style.color = "White";
nClicks = 0;
randomNum = 4;
}
else if (nClicks == 2)
{
clearInterval (downloadTimer);
document.getElementById("countdown").innerHTML = "Stopped";
document.getElementById("start").innerHTML = "Reset";
document.getElementById("myColor").innerHTML = "Stopped"
document.getElementById("myColor").style.color = "White";

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
document.getElementById("start").innerHTML = "Start";
document.getElementById("Score").innerHTML = "-";
document.getElementById("myColor").innerHTML = "Prepare";
document.getElementById("myColor").style.color = "White";
randomNum = 4;
nClicks = 0;
}
}