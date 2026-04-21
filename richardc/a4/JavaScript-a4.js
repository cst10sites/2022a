var timeLeft = 15;
var b = "Blue";
var r = "Red";
var g = "Green";
var y = "Yellow";
var nClicks = 0;
var colorPress;
var colorClicks = 0;
var points = 0;
var cp = 1;
var colors;
var dClicks = 0;
var highpoints = 0;
var about;
var audioa = new Audio('bgmusic.mp3');
var audiob = new Audio('losepoints.mp3');
var audioc = new Audio('getpoints.mp3');
var beep = new Audio('beep.mp3');

function darkmode()
{
    dClicks++;
	if(dClicks == 1)
    {
        // alert(dClicks);
        document.getElementById('bluebutton').style.backgroundColor = 'Aqua';
        document.getElementById('redbutton').style.backgroundColor = 'Crimson';
        document.getElementById('greenbutton').style.backgroundColor = 'Chartreuse';
        document.getElementById('yellowbutton').style.backgroundColor = 'Gold';
        document.getElementById('body').style.backgroundColor = 'Black';
        document.getElementById('pp1').style.color = "White";
        document.getElementById('pp2').style.color = "White";
        document.getElementById('pp3').style.color = "White";
        document.getElementById('pp4').style.color = "White";
		document.getElementById('pp5').style.color = "White";
        document.getElementById('S1').style.color = "Black";
        document.getElementById('S2').style.color = "Black";
        document.getElementById('S3').style.color = "Black";
        document.getElementById('S4').style.color = "Black";
        document.getElementById('S5').style.color = "Black";
        document.getElementById('S6').style.color = "Black";
		document.getElementById('S7').style.color = "Black";
        document.getElementById('starter').style.backgroundColor = 'White';
        document.getElementById('darkmode').style.backgroundColor = 'White';
		document.getElementById('darkmode').innerHTML = "LIGHTMODE";
		document.getElementById("SS").style.color = "White";
		document.getElementById("SS").style.color = colors; 
		
        // alert(dClicks);
     }
    if(dClicks == 2)
    {
        // alert(dClicks);
        document.getElementById('bluebutton').style.backgroundColor = 'Blue';
        document.getElementById('redbutton').style.backgroundColor = 'Red';
        document.getElementById('greenbutton').style.backgroundColor = 'Green';
        document.getElementById('yellowbutton').style.backgroundColor = 'Yellow';
        document.getElementById('body').style.backgroundColor = 'White';
        document.getElementById('pp1').style.color = "Black";
        document.getElementById('pp2').style.color = "Black";
        document.getElementById('pp3').style.color = "Black";
        document.getElementById('pp4').style.color = "Black";
		document.getElementById('pp5').style.color = "Black";
        document.getElementById('S1').style.color = "White";
        document.getElementById('S2').style.color = "White";
        document.getElementById('S3').style.color = "White";
        document.getElementById('S4').style.color = "White";
        document.getElementById('S5').style.color = "White";
        document.getElementById('S6').style.color = "White";
		document.getElementById('S7').style.color = "White";
        document.getElementById('starter').style.backgroundColor = 'Lightgrey';
        document.getElementById('darkmode').style.backgroundColor = 'Lightgrey';
		document.getElementById('darkmode').innerHTML = "DARKMODE";
		document.getElementById("SS").style.color = "Black";
		document.getElementById("SS").style.color = colors; 
        // alert(dClicks)
        dClicks = 0;
    }
}

function blue()
{
	colorPress = "Blue";
	colorClicks++;
	//alert("h1");
}

function red()
{
	colorPress = "Red";
	colorClicks++;
}

function green()
{
	colorPress = "Green";
	colorClicks++;
}

function yellow()
{
	colorPress = "Yellow";
	colorClicks++;
}       


function startGame()
{
    nClicks++;
	
	
	
    
    if(nClicks == 1)
    {
        
        timeLeft = 15;
		
        
        audioa.play();
        
        colors = window['brgy'.charAt(Math.floor(Math.random()*4))];
        document.getElementById("SS").style.color = colors;
		document.getElementById("SS").innerHTML = colors;
		
        document.getElementById("starter").innerHTML = "STOP";
		
         
		
        var Timer = setInterval(function()
        {
            if(timeLeft <= 0)
            {
                clearInterval(Timer);
                document.getElementById("countdown").innerHTML = "Time's UP!!!";
                document.getElementById("starter").innerHTML = "RESET";
                nClicks = 2;
                // alert(nClicks);
                audioa.pause();
                beep.play();
                
            }
            else if(nClicks == 2)
            {
                audioa.pause();
                beep.play();
                clearInterval(Timer);
                document.getElementById("countdown").innerHTML = "Stopped";
            }
            else
			{
                document.getElementById("countdown").innerHTML = timeLeft;
				
				/* alert(colorPress + "c0");
				alert(cp + "c0");
				alert(colorClicks + "c0");
				alert(colors + " c0"); */
				
				if(colorClicks == cp && colorPress == colors)
				{
					/*alert(colorPress + "c1");
					alert(cp + "c1");
					alert(colorClicks + "c1"); */
					points +=  3;
                    audioc.play();
					document.getElementById("score").innerHTML = points;
					colors = window['brgy'.charAt(Math.floor(Math.random()*4))];
					document.getElementById("SS").style.color = colors; 
					document.getElementById("SS").innerHTML = colors;
					//alert(colors + " c1");
					cp++;
					
				}
				
				if(colorClicks == cp && colorPress !== colors)
				{
					/*alert(colorPress + "c2");
					alert(colors);
					alert(cp + "c2");    
					alert(colorClicks + "c2");*/
					points--;
                    audiob.play();
					document.getElementById("score").innerHTML = points;
					colors = window['brgy'.charAt(Math.floor(Math.random()*4))];
					document.getElementById("SS").style.color = colors; 
					document.getElementById("SS").innerHTML = colors;
					//alert(colors + " c2");
					cp++;
					
				}
				
				
            }
            timeLeft -= 1;
			
        }, 1000);
        
    }
    
    
    if(nClicks == 2)
    {
        
        document.getElementById("starter").innerHTML = "RESET";
    }
    
    if(nClicks == 3)
    {
		if(points > highpoints)
		{
			alert(points);
			document.getElementById("HS").innerHTML = points;
			highpoints = points;
		}
        document.getElementById("starter").innerHTML = "START";
        document.getElementById("countdown").innerHTML = "15";
		if(dClicks == 1)
		{
			document.getElementById("SS").style.color = "White";
		}
		else
		{
			document.getElementById("SS").style.color = "Black";
		}
		
		
        document.getElementById("SS").innerHTML = "Nothing";
		document.getElementById("score").innerHTML = "0";
        nClicks = 0;
		points = 0;
		colorClicks = 0;
		cp = 1;
    }
    

}

