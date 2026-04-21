var questionone = 0
var questiontwo = 0
var questionthree = 0
var questionfour = 0
var questionfive = 0
var questionsix = 0
var questionseven = 0
var score = 0

function OneOne() {
	QOne("One");
}

function OneTwo() {
	QOne("Two");
}

function OneThree() {
	QOne("Three");
}

function OneFour() {
	QOne("Four");
}

function QOne(value) {
	if (value == "One") {
		document.getElementById("one").innerHTML = "Your answer for question 1: BC Hydro";
		questionone = 1
	}
	else if (value == "Two") {
		document.getElementById("one").innerHTML = "Your answer for question 1: Urban Transport Development Corporation";
		questionone = 2
	}
	else if (value == "Three") {
		document.getElementById("one").innerHTML = "Your answer for question 1: BC Transit";
		questionone = 3
	}
	else if (value == "Four") {
		document.getElementById("one").innerHTML = "Your answer for question 1: BC Electric";
		questionone = 4
	}
}



function TwoOne() {
	QTwo("One");
}

function TwoTwo() {
	QTwo("Two");
}

function TwoThree() {
	QTwo("Three");
}

function TwoFour() {
	QTwo("Four");
}

function QTwo(value) {
	if (value == "One") {
		document.getElementById("two").innerHTML = "Your answer for question 2: One";
		questiontwo = 1
	}
	else if (value == "Two") {
		document.getElementById("two").innerHTML = "Your answer for question 2: Three";
		questiontwo = 2
	}
	else if (value == "Three") {
		document.getElementById("two").innerHTML = "Your answer for question 2: Six";
		questiontwo = 3
	}
	else if (value == "Four") {
		document.getElementById("two").innerHTML = "Your answer for question 2: Ten";
		questiontwo = 4
	}
	
}



function ThreeOne() {
	QThree("One");
}

function ThreeTwo() {
	QThree("Two");
}

function ThreeThree() {
	QThree("Three");
}

function ThreeFour() {
	QThree("Four");
}

function QThree(value) {
	if (value == "One") {
		document.getElementById("three").innerHTML = "Your answer for question 3: 95";
		questionthree = 1
	}
	else if (value == "Two") {
		document.getElementById("three").innerHTML = "Your answer for question 3: 96";
		questionthree = 2
	}
	else if (value == "Three") {
		document.getElementById("three").innerHTML = "Your answer for question 3: 98";
		questionthree = 3
	}
	else if (value == "Four") {
		document.getElementById("three").innerHTML = "Your answer for question 3: 99";
		questionthree = 4
	}
}



function FourOne() {
	QFour("One");
}

function FourTwo() {
	QFour("Two");
}

function FourThree() {
	QFour("Three");
}

function FourFour() {
	QFour("Four");
}

function QFour(value) {
	if (value == "One") {
		document.getElementById("four").innerHTML = "Your answer for question 4: Burnaby Transit Center";
		questionfour = 1
	}
	else if (value == "Two") {
		document.getElementById("four").innerHTML = "Your answer for question 4: Hamilton Transit Center";
		questionfour = 2
	}
	else if (value == "Three") {
		document.getElementById("four").innerHTML = "Your answer for question 4: Vancouver Transit Center";
		questionfour = 3
	}
	else if (value == "Four") {
		document.getElementById("four").innerHTML = "Your answer for question 4: Surrey Transit Center";
		questionfour = 4
	}
}



function FiveOne() {
	QFive("One");
}

function FiveTwo() {
	QFive("Two");
}

function FiveThree() {
	QFive("Three");
}

function FiveFour() {
	QFive("Four");
}

function QFive(value) {
	if (value == "One") {
		document.getElementById("five").innerHTML = "Your answer for question 5: Red and Yellow";
		questionfive = 1
	}
	else if (value == "Two") {
		document.getElementById("five").innerHTML = "Your answer for question 5: Red and Blue";
		questionfive = 2
	}
	else if (value == "Three") {
		document.getElementById("five").innerHTML = "Your answer for question 5: Blue and Green";
		questionfive = 3
	}
	else if (value == "Four") {
		document.getElementById("five").innerHTML = "Your answer for question 5: Blue and Yellow";
		questionfive = 4
	}
}



function SixOne() {
	QSix("One");
}

function SixTwo() {
	QSix("Two");
}

function SixThree() {
	QSix("Three");
}

function SixFour() {
	QSix("Four");
}

function QSix(value) {
	if (value == "One") {
		document.getElementById("six").innerHTML = "Your answer for question 6: Millennium Line";
		questionsix = 1
	}
	else if (value == "Two") {
		document.getElementById("six").innerHTML = "Your answer for question 6: Olympic Line";
		questionsix = 2
	}
	else if (value == "Three") {
		document.getElementById("six").innerHTML = "Your answer for question 6: Canada Line";
		questionsix = 3
	}
	else if (value == "Four") {
		document.getElementById("six").innerHTML = "Your answer for question 6: Expo Line";
		questionsix = 4
	}
}



function SevenOne() {
	QSeven("One");
}

function SevenTwo() {
	QSeven("Two");
}

function SevenThree() {
	QSeven("Three");
}

function SevenFour() {
	QSeven("Four");
}

function QSeven(value) {
	if (value == "One") {
		document.getElementById("seven").innerHTML = "Your answer for question 7: Three";
		questionseven = 1
	}
	else if (value == "Two") {
		document.getElementById("seven").innerHTML = "Your answer for question 7: Five";
		questionseven = 2
	}
	else if (value == "Three") {
		document.getElementById("seven").innerHTML = "Your answer for question 7: Seven";
		questionseven = 3
	}
	else if (value == "Four") {
		document.getElementById("seven").innerHTML = "Your answer for question 7: Nine";
		questionseven = 4
	}
}

function Submit() {
	score = 0
	if (questionone == 3) {
		document.getElementById("oneanswer").innerHTML = "Correct! It is BC Transit!";
		document.getElementById("oneanswer").style.color = "lime";
		score = (score + 1)
	}
	else {
		document.getElementById("oneanswer").innerHTML = "Incorrect. Try again.";
		document.getElementById("oneanswer").style.color = "red";
	}
	if (questiontwo == 2) {
		document.getElementById("twoanswer").innerHTML = "Correct! It is three!";
		document.getElementById("twoanswer").style.color = "lime";
		score = (score + 1)
	}
	else {
		document.getElementById("twoanswer").innerHTML = "Incorrect. Try again.";
		document.getElementById("twoanswer").style.color = "red";
	}
	if (questionthree == 4) {
		document.getElementById("threeanswer").innerHTML = "Correct! It is the 99 B-Line!";
		document.getElementById("threeanswer").style.color = "lime";
		score = (score + 1)
	}
	else {
		document.getElementById("threeanswer").innerHTML = "Incorrect. Try again.";
		document.getElementById("threeanswer").style.color = "red";
	}
	if (questionfour == 3) {
		document.getElementById("fouranswer").innerHTML = "Correct! It is Vancouver Transit Center!";
		document.getElementById("fouranswer").style.color = "lime";
		score = (score + 1)
	}
	else {
		document.getElementById("fouranswer").innerHTML = "Incorrect. Try again.";
		document.getElementById("fouranswer").style.color = "red";
	}
	if (questionfive == 2) {
		document.getElementById("fiveanswer").innerHTML = "Correct! It is Red and Blue!";
		document.getElementById("fiveanswer").style.color = "lime";
		score = (score + 1)
	}
	else {
		document.getElementById("fiveanswer").innerHTML = "Incorrect. Try again.";
		document.getElementById("fiveanswer").style.color = "red";
	}
	if (questionsix == 1) {
		document.getElementById("sixanswer").innerHTML = "Correct! The Olympic Line no longer exists!";
		document.getElementById("sixanswer").style.color = "lime";
		score = (score + 1)
	}
	else {
		document.getElementById("sixanswer").innerHTML = "Incorrect. Try again.";
		document.getElementById("sixanswer").style.color = "red";
	}
	if (questionseven == 2) {
		document.getElementById("sevenanswer").innerHTML = "Correct! It is 5!";
		document.getElementById("sevenanswer").style.color = "lime";
		score = (score + 1)
	}
	else {
		document.getElementById("sevenanswer").innerHTML = "Incorrect. Try again.";
		document.getElementById("sevenanswer").style.color = "red";
	}
	document.getElementById("totalanswer").innerHTML = "Your score is " + score + " out of 7."
}