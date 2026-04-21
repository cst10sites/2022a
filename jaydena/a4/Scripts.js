var selectedColor = 0;
var startTime;
var playerScore = 0;
var nClicks = 0;

function Dingaling() {
    var myAudio = new Audio('Dingaling.mp3');
    myAudio.play();
}

function playAudio() {
    var myAudio = new Audio('beep.mp3');
    myAudio.play();
}

function startGame(){
    if (nClicks > 0){
        location.reload()
        nClicks = 0
    }
    if (nClicks == 0){
        document.getElementById('start').innerHTML = "Stop";
        document.getElementById('score').innerHTML = playerScore
        selectedColor=Math.floor(Math.random() * 4)
        nClicks = (nClicks + 1)
        startTime = new Date()
      
        if (selectedColor == 0){
        document.getElementById('Simon').innerHTML = "Simon Says red"
        }
        else if (selectedColor == 1){
        document.getElementById('Simon').innerHTML = "Simon Says green"
        }
        else if (selectedColor == 2){
        document.getElementById('Simon').innerHTML = "Simon Says blue"
        }
        else if (selectedColor == 3){
        document.getElementById('Simon').innerHTML = "Simon Says yellow"
        }
    }
}
function timeDisplayed(){
    if (nClicks == 1){
        var currentTime = new Date()
        var timeLeft = 15.1 - (currentTime - startTime)/1000
        document.getElementById('timeDisplayed').innerHTML = (Math.floor(timeLeft * 10) / 10)
        if (timeLeft <= 0){
            nClicks = 0
            document.getElementById('timeDisplayed').innerHTML = "0"
            document.getElementById('start').innerHTML = "Start"
            document.getElementById('Simon').innerHTML = "Simon Says Stop"
            playerScore = 0
        }       
    }
}
function red(){
    if (nClicks > 0){
    if (selectedColor == 0){
        Dingaling()
    playerScore=(playerScore + 15)
        selectedColor=Math.floor(Math.random() * 4)
        document.getElementById('score').innerHTML = playerScore

        if (selectedColor == 0){
            document.getElementById('Simon').innerHTML = "Simon Says red"
            }  
        else if (selectedColor == 1){
            document.getElementById('Simon').innerHTML = "Simon Says green"
            }  
        else if (selectedColor == 2){
            document.getElementById('Simon').innerHTML = "Simon Says blue"
            }   
        else if (selectedColor == 3){
            document.getElementById('Simon').innerHTML = "Simon Says yellow"
            }
    }
    else{
        playerScore=(playerScore - 20)
        playAudio()
        selectedColor=Math.floor(Math.random() * 4)
        document.getElementById('score').innerHTML = playerScore

        if (selectedColor == 0){
            document.getElementById('Simon').innerHTML = "Simon Says red"
            } 
        else if (selectedColor == 1){
            document.getElementById('Simon').innerHTML = "Simon Says green"
            }  
        else if (selectedColor == 2){
            document.getElementById('Simon').innerHTML = "Simon Says blue"
            }   
        else if (selectedColor == 3){
            document.getElementById('Simon').innerHTML = "Simon Says yellow"   
            }
    }
}
}
function green(){
        if (nClicks > 0){
        if (selectedColor == 1){
            Dingaling()
        playerScore=(playerScore + 15)
            selectedColor=Math.floor(Math.random() * 4)
            document.getElementById('score').innerHTML = playerScore

            if (selectedColor == 0){
                document.getElementById('Simon').innerHTML = "Simon Says red"
                }       
            else if (selectedColor == 1){
                document.getElementById('Simon').innerHTML = "Simon Says green"
                }        
            else if (selectedColor == 2){
                document.getElementById('Simon').innerHTML = "Simon Says blue"
                }        
            else if (selectedColor == 3){
                document.getElementById('Simon').innerHTML = "Simon Says yellow"                      
                }
        }
        else{
            playerScore=(playerScore - 20)
            playAudio()
            selectedColor=Math.floor(Math.random() * 4)
            document.getElementById('score').innerHTML = playerScore

            if (selectedColor == 0){
                document.getElementById('Simon').innerHTML = "Simon Says red"
                }       
            else if (selectedColor == 1){
                document.getElementById('Simon').innerHTML = "Simon Says green"
                }        
            else if (selectedColor == 2){
                document.getElementById('Simon').innerHTML = "Simon Says blue"
                }        
            else if (selectedColor == 3){
                document.getElementById('Simon').innerHTML = "Simon Says yellow"                   
                }
        }
    }
}
function blue(){
        if (nClicks > 0){
        if (selectedColor == 2){
            Dingaling()
            playerScore=(playerScore + 15)
            selectedColor=Math.floor(Math.random() * 4)
            document.getElementById('score').innerHTML = playerScore

            if (selectedColor == 0){
                document.getElementById('Simon').innerHTML = "Simon Says red"
                }        
            else if (selectedColor == 1){
                document.getElementById('Simon').innerHTML = "Simon Says green"
                }       
            else if (selectedColor == 2){
                document.getElementById('Simon').innerHTML = "Simon Says blue"
                }        
            else if (selectedColor == 3){
                document.getElementById('Simon').innerHTML = "Simon Says yellow"                       
                }
        }
        else{
            playerScore=(playerScore - 20)
            playAudio()
            selectedColor=Math.floor(Math.random() * 4)
            document.getElementById('score').innerHTML = playerScore

            if (selectedColor == 0){
                document.getElementById('Simon').innerHTML = "Simon Says red"
                }        
            else if (selectedColor == 1){
                document.getElementById('Simon').innerHTML = "Simon Says green"
                }       
            else if (selectedColor == 2){
                document.getElementById('Simon').innerHTML = "Simon Says blue"
                }        
            else if (selectedColor == 3){
                document.getElementById('Simon').innerHTML = "Simon Says yellow"                    
                }
        }
    }
}
function yellow(){
    if (nClicks > 0){
        if (selectedColor == 3){
            Dingaling()
            playerScore=(playerScore + 15)
            selectedColor=Math.floor(Math.random() * 4)
            document.getElementById('score').innerHTML = playerScore

            if (selectedColor == 0){
                document.getElementById('Simon').innerHTML = "Simon Says red"
                }        
            else if (selectedColor == 1){
                document.getElementById('Simon').innerHTML = "Simon Says green"
                }        
            else if (selectedColor == 2){
                document.getElementById('Simon').innerHTML = "Simon Says blue"
                }        
            else if (selectedColor == 3){
                document.getElementById('Simon').innerHTML = "Simon Says yellow"            
                }
        }
        else{
            playerScore=(playerScore - 20)
            playAudio()
            selectedColor=Math.floor(Math.random() * 4)
            document.getElementById('score').innerHTML = playerScore

            if (selectedColor == 0){
                document.getElementById('Simon').innerHTML = "Simon Says red"
                }        
            else if (selectedColor == 1){
                document.getElementById('Simon').innerHTML = "Simon Says green"
                }       
            else if (selectedColor == 2){
                document.getElementById('Simon').innerHTML = "Simon Says blue"
                }       
            else if (selectedColor == 3){
                document.getElementById('Simon').innerHTML = "Simon Says yellow"     
                }
        }
    }
}
setInterval(timeDisplayed, 10)