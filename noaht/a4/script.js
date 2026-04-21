//alert('test');

var score = 0;
var time = 15;

var startcount = 0;

var colour;

document.getElementById("score") .innerHTML = "Score: " + score;
document.getElementById("time") .innerHTML = "Time remaining: " + time + "s";
document.getElementById("simon") .innerHTML = "Simon Says: START";


function start() {
	if (startcount == 0) {
		document.getElementById("mainbtn") .innerHTML = "stop";
		time = 16;
		simon();
	}
	if (startcount == 1) {
		document.getElementById("mainbtn") .innerHTML = "restart";
	}
	if (startcount == 2) {
		location.reload();
	}
		startcount = startcount + 1;
}



function simon() {
	var rng = Math.random();
	if (rng < 1 / 4) {
		colour = 1;
		document.getElementById("simon") .innerHTML = "Simon Says pick the color: RED";
	}
	else if (rng < 1 / 2) {
		colour = 2;
		document.getElementById("simon") .innerHTML = "Simon Says pick the color: YELLOW";
	}
	else if (rng < 3 / 4) {
		colour = 3;
		document.getElementById("simon") .innerHTML = "Simon Says pick the color: GREEN";
	}
	else {
		colour = 4;
		document.getElementById("simon") .innerHTML = "Simon Says pick the color: BLUE";
	} 
}

function red() {
	if (startcount == 1) {
		if (colour == 1) {
			score = score + 3;
			simon();
		}
		else {
			score = score - 1;
			simon();
		}
	}
}

function yellow() {
	if (startcount == 1) {
		if (colour == 2) {
			score = score + 3;
			simon();
		}
		else {
			score = score - 1;
			simon();
		}
	}
}

function green() {
	if (startcount == 1) {
		if (colour == 3) {
			score = score + 3;
			simon();
		}
		else {
			score = score - 1;
			simon();
		}
	}
}

function blue() {
	if (startcount == 1) {
		if (colour == 4) {
			score = score + 3;
			simon();
		}
		else {
			score = score - 1;
			simon();
		}
	}
}

function countdown() {
	if (startcount == 1) {
		if (time == 0) {
			start()
		}
		else
			time = time - 1;
			document.getElementById("time") .innerHTML = "Time remaining: " + time + "s";
		}
	}


function repeat() {
	document.getElementById("score") .innerHTML = "Score: " + score;
	
}

setInterval(repeat, 10);

setInterval(countdown, 1000);


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
