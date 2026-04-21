var nClicks = 0;
var startTime; // to be assigned later
function updateStopWatch() {
    
    if (nClicks == 0) {
        // =  means to assign value
        // == means to equality between values (True/False)
        startTime = new Date();
        nClicks = nClicks + 1;
    }
    
    
}
var points = 0;
function start()	{
	autoStopWatch();
	updateStopWatch();
	choosecolor();
	points = 0;
	document.getElementById("points").innerHTML = points;
		choosecolor();
}

function resetStopWatch() {
    /*
    document.getElementById("lap").innerHTML = "Start";
    document.getElementById("timeElapsed").innerHTML = "";
    document.getElementById("timeDisplayed").innerHTML = "";
    nClicks = 0;
    */
    location.reload(); 
}

// 2. Code below controls automatic update of Stop Watch once Start button is pressed.
function autoStopWatch() {
    if (nClicks > 0) {
        var currentTime = new Date();
        var elapsedTime = (currentTime - startTime) / 1000;
        
        var myColor = "purple";
        
        
		newtime = elapsedTime;
		
		if (newtime >= num) {
			newtime =  num
			nClicks = 0
			fontchange()
			
			
		}
        document.getElementById("timeDisplayed").innerHTML = Math.round (newtime);
            
        
    }
}
var newtime

function fontchange()	{
	document.getElementById("timeDisplayed").style.color = "red";
	setTimeout(fontchangeback, 100);
}

function fontchangeback()	{
	document.getElementById("timeDisplayed").style.color = "black";
	
}

setInterval(autoStopWatch, 100); // repeat function every 100 ms (0.1 s)
var num = 15;


	document.getElementById("mode").innerHTML = num;
	
	

function up()	{
	 num +=1;
	document.getElementById("mode").innerHTML = num;
}
function upup()	{
	 num +=10;
	document.getElementById("mode").innerHTML = num;
}

function down()	{
	 num -= 1;
	 if (num < 0) 
		 num = 1
	document.getElementById("mode").innerHTML = num;
}

function downdown()	{
	 num -= 10;
	 if (num < 0) 
		 num = 1

	document.getElementById("mode").innerHTML = num;
}

if (newtime => num)	{
	document.getElementById("max").innerHTML = "";
	
} else	{
	document.getElementById("max").innerHTML = "Max time not reached";
}

function choosecolor()	{
	var randomNum = Math.random();  // decimal btwn 0 and 1
	
	if (randomNum < 1/4) {          // red if btwn 0 and 0.33
		myColor = "Red";
		document.getElementById("color").innerHTML = myColor;
		document.getElementById("color").style.color = "red";
	}
	else if (randomNum < 2/4) {     // green if btwn 0.33 and 0.67
		myColor = "Green";
		document.getElementById("color").innerHTML = myColor;
		document.getElementById("color").style.color = "#39FF14";
	}
	else if (randomNum < 3/4){       // black otherwise
		myColor = "Blue";
		document.getElementById("color").innerHTML = myColor;
		document.getElementById("color").style.color = "blue";
	}
	 else {                          // yellow otherwise
		myColor = "Yellow";
		document.getElementById("color").innerHTML = myColor;
		document.getElementById("color").style.color = "yellow";
	}
}
	
	
	
function buttonred()	{
	if (myColor == "Red" && newtime < num)	{
		if ( newtime < num)	{
		points ++ ;
		document.getElementById("points").innerHTML = points;
		choosecolor();
		}
	} 
}
	
function buttonblue()	{
	if (myColor == "Blue" && newtime < num)	{
		if ( newtime < num)	{
		points ++ ;
		document.getElementById("points").innerHTML = points;
		choosecolor();
		}
	}
}

function buttongreen()	{
	if (myColor == "Green" && newtime < num)	{
		if ( newtime < num)	{
		points ++ ;
		document.getElementById("points").innerHTML = points;
		choosecolor();
		}
	} 
}

function buttonyellow()	{
	if (myColor == "Yellow" && newtime < num)	{
		if ( newtime < num)	{
		points ++ ;
		document.getElementById("points").innerHTML = points;
		choosecolor();
		}
	}
}