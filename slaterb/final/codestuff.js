/* toggle responsive */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  var pos = 0;
  var correct = 0;
  var test, test_status, question, choice, choices, chA, chB, chC;

  var questions = [
    {
        question: "what makes siege better than most other games?",
        a: "it is complex and tactical",
        b: "it has an amazing, inclusive, supportive community",
        c: "joe biden",
        answer: "A"
      },
    {
        question: "why are hackers a bad thing in siege?",
        a: "it ruins the fun for everyone else and inhibits ranking up",
        b: "they dont",
        c: "they can infect my computer and hack into all of my accounts",
        answer: "A"
      },
    {
        question: "why cant the siege devs just fix the game already",
        a: "they want it to fail",
        b: "they love watching people in pain",
        c: "who knows man",
        answer: "C"
      },
    {
        question: "which one of these is false",
        a: "rainbow six siege is an amazing, fun, and rewarding game",
        b: "rainbow six siege have a big cheater problem on console",
        c: "rainbow six siege was the 2nd most popular game in 2020",
        answer: "B"
      },
    {
        question: "what was one of the bugs/explotis that kept reappearing",
        a: "the invisibility glitch",
        b5: "being able to fall through the map",
        c: "the shield glitch",
        answer: "A"
      }
    ];

function get(x){
  return document.getElementById(x);
}

function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("test_status").innerHTML = "Test completed";
    pos = 0;
    correct = 0;
    return false;
  }
  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  test.innerHTML = "<h3>"+question+"</h3>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer(){
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  if(choice == questions[pos].answer){
    correct++;
  }
  pos++;
  renderQuestion();
}

window.addEventListener("load", renderQuestion);