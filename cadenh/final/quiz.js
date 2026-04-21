var quiz = {
  // (A) PROPERTIES
  // (A1) QUESTIONS & ANSWERS
  // Q = QUESTION, O = OPTIONS, A = CORRECT ANSWER
  data: [
  {
    q : "When did Rolando Win the Euros?",
    o : [
      "2012",
      "2016",
      "2018",
      "2002"
    ],
    a : 1 
  },
  {
    q : "How many goals did rolando score for Real Madrid?",
    o : [
      "242",
      "2004",
      "632",
      "450"
    ],
    a : 3
  },
  {
    q : "How many international hat-tricks has Rolando scored?",
    o : [
      "31",
      "10",
      "4",
      "19"
    ],
    a : 1
  },
  {
    q : "How many childern does Rolando have",
    o : [
      "4",
      "2",
      "0",
      "5"
    ],
    a : 0
  },
  {
    q : "How many international goals has Rolando scored?",
    o : [
      "80",
      "237",
      "100",
      "115"
    ],
    a : 3
  }
  ],

 
  hWrap: null,
  hQn: null, 
  hAns: null, 

  
  now: 0,
  score: 0,

  
  init: () => {
    
    quiz.hWrap = document.getElementById("quizWrap");

    
    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);

    
    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);

    
    quiz.draw();
  },

  
  draw: () => {
    
    quiz.hQn.innerHTML = quiz.data[quiz.now].q;

    
    quiz.hAns.innerHTML = "";
    for (let i in quiz.data[quiz.now].o) {
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "quiz";
      radio.id = "quizo" + i;
      quiz.hAns.appendChild(radio);
      let label = document.createElement("label");
      label.innerHTML = quiz.data[quiz.now].o[i];
      label.setAttribute("for", "quizo" + i);
      label.dataset.idx = i;
      label.addEventListener("click", () => { quiz.select(label); });
      quiz.hAns.appendChild(label);
    }
  },

  
  select: (option) => {
    
    let all = quiz.hAns.getElementsByTagName("label");
    for (let label of all) {
      label.removeEventListener("click", quiz.select);
    }

    
    let correct = option.dataset.idx == quiz.data[quiz.now].a;
    if (correct) {
      quiz.score++;
      option.classList.add("correct");
    } else {
      option.classList.add("wrong");
    }

   
    quiz.now++;
    setTimeout(() => {
      if (quiz.now < quiz.data.length) { quiz.draw(); }
      else {
        quiz.hQn.innerHTML = `You have answered ${quiz.score} of ${quiz.data.length} correctly.`;
        quiz.hAns.innerHTML = "";
      }
    }, 1000);
  },

  
  reset : () => {
    quiz.now = 0;
    quiz.score = 0;
    quiz.draw();
  }
};
window.addEventListener("load", quiz.init);
