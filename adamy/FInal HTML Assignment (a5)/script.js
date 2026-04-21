function check() {
    var correct = 0;

    var q1 = document.getElementsByName('question1');
    for(var i = 0; i < q1.length; i++) { 
        if(q1[i].checked){
            if(i == 0) {
                correct++;
            }
        }
    }

    var q2 = document.getElementsByName('question2');
    for(var i = 0; i < q2.length; i++) { 
        if(q2[i].checked){
            if(i == 2) {
                correct++;
            }
        }
    }

    var q3 = document.getElementsByName('question3');
    for(var i = 0; i < q3.length; i++) { 
        if(q3[i].checked){
            if(i == 1) {
                correct++;
            }
        }
    }

    var q4 = document.getElementsByName('question4');
    for(var i = 0; i < q4.length; i++) { 
        if(q4[i].checked){
            if(i == 2) {
                correct++;
            }
        }
    }

    var q5 = document.getElementsByName('question5');
    for(var i = 0; i < q5.length; i++) { 
        if(q5[i].checked){
            if(i == 0) {
                correct++;
            }
        }
    }

    document.getElementById("results").innerHTML = "You got " + correct + "/5 questions right. <br>";

    if(correct > 3) {
        document.getElementById("message").innerHTML = "Good Job!";
    }
    else{
        document.getElementById("message").innerHTML = "Better Luck next time!";
    }
}