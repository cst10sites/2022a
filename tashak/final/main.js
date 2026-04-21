function check() {

    var question1= document.quiz.question1.value;
    var question2= document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
      var question9 = document.quiz.question9.value;
    var correct= 0;

    if (question1 == "7") {
    correct++;
    }

    if (question2 =="Kayla Sanchez") {
      correct++;
    }

    if ( question3=="Butterfly and Freestyle") {
  correct++;
    }

    if ( question4=="150") {
  correct++;
}

if ( question5=="False") {
correct++;
}

if ( question6=="9") {
correct++;
}

if ( question7=="True") {
correct++;
}

if ( question8=="1") {
correct++;
}

if ( question9=="21") {
correct++;
}

if (correct<4) {
  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct. Better luck next time!";
 }


 else if  (correct<7) {
   document.getElementById("number_correct").innerHTML = "You got " + correct + " correct. Nice Try!";
  }

  else if  (correct<9) {
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct. Great Job!";
   }

     else  {
       document.getElementById("number_correct").innerHTML = "You got " + correct + " correct. Perfect Score!";
      }

  }
