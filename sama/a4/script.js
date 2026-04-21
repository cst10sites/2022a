var nClicks= 0;
var startTime;
var start;
var simon;
var currentScore;
var highScore=0;
document.getElementById('color') .innerHTML= 'Press Start'
document.getElementById('timeDisplayed') .innerHTML = '10.0'
document.getElementById('high') .innerHTML = ' 0'
document.getElementById('score') .innerHTML = "0"

function updateStopWatch() {
    document.getElementById("stop") .innerHTML = "Stop";
    '<p onclick="stopStopWatch()"></p>'
    if (nClicks == 0) {
        currentScore = 0;
        startTime = new Date();
        nClicks = nClicks + 1;
        changeColor();
        document.getElementById('score') .innerHTML = currentScore;
    } 
    else{
        currentScore = 0;
        nClicks = 0;
        document.getElementById('color') .innerHTML= 'Press Start';
        document.getElementById('timeDisplayed') .innerHTML = '10.0';
        document.getElementById('stop') .innerHTML ='Start';
        document.getElementById('score') .innerHTML = currentScore;
    }
}

function autoStopWatch() {
    if (nClicks == 1){
        var currentTime = new Date()
        var timeLeft = 10 - (currentTime - startTime) / 1000 ;
        document.getElementById("timeDisplayed") .innerHTML = (Math.floor(timeLeft*10)/10);
        document.getElementById('score') .innerHTML = currentScore;    
    } 
    if (timeLeft < 0){
        nClicks = 0
        document.getElementById("timeDisplayed") .innerHTML = '0.0';
        document.getElementById('stop') .innerHTML ="Start";
        document.getElementById('color') .innerHTML ="Times Up!";
        if (currentScore > highScore){
            highScore = currentScore;
            document.getElementById('high') .innerHTML = highScore;
            
        }

    }
}

function blue(){
    if (nClicks == 1){
        if (simon ==1){
            currentScore = (currentScore + 10);
            changeColor();
        }    
        else{
            currentScore = 0
            nClicks = 0
            document.getElementById('color') .innerHTML= 'Press Start'
            document.getElementById('stop') .innerHTML ='Start'
            document.getElementById('color') .innerHTML ="Game Over"
        }
    } 
}   

function red(){
    if (nClicks == 1){
        if (simon ==0){
            currentScore = (currentScore + 10);
            changeColor();
        }    
        else{
            currentScore = 0
            nClicks = 0
            document.getElementById('color') .innerHTML= 'Press Start'
            document.getElementById('stop') .innerHTML ='Start'
            document.getElementById('color') .innerHTML ="Game Over"
        }
    } 
}   

function green(){
    if (nClicks == 1){
        if (simon ==2){
            currentScore = (currentScore + 10);
            changeColor();
        }
        else{
            currentScore = 0
            nClicks = 0
            document.getElementById('color') .innerHTML= 'Press Start'
            document.getElementById('stop') .innerHTML ='Start'
            document.getElementById('color') .innerHTML ="Game Over"
        }    
    } 
}   

function yellow(){
    if (nClicks == 1){
        if (simon ==3){
            currentScore = (currentScore + 10);
            changeColor();
        }
        else{
            currentScore = 0
            nClicks = 0
            document.getElementById('color') .innerHTML= 'Press Start'
            document.getElementById('stop') .innerHTML ='Start'
            document.getElementById('color') .innerHTML ="Game Over"
        }     
    } 
}   

function changeColor() {
    simon = Math.floor(Math.random()*4);
    if (nClicks == 1){
        if (simon == 0){
            document.getElementById('color').innerHTML = "Simon says red"
        }
        if (simon == 1){
            document.getElementById('color').innerHTML = "Simon says blue"
        }
        if (simon == 2){
            document.getElementById('color').innerHTML = "Simon says green"
        }
        if (simon == 3){
            document.getElementById('color').innerHTML = "Simon says yellow"
        }
    }
}
setInterval(autoStopWatch, 100);