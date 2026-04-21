function answerOne() {
    var chosenDate = document.getElementById("inventedValue").value;

    
	
	if (chosenDate=="7000BCE") {
		document.getElementById("questionOneDisplay").innerHTML = "Pillows were invented in " + chosenDate +"!";
	
	}
	else if (chosenDate=="") {
	}
	
	else {
		document.getElementById("questionOneDisplay").innerHTML = "Pillows were not invented in " + chosenDate + ","  + "Try Again";
	}
}




function answerTwo() {
    var chosenTime = document.getElementById("oftenValue").value;

    
	
	if (chosenTime=="every 2 years") {
		document.getElementById("questionTwoDisplay").innerHTML = "You should replace your pillow " + chosenTime +"!";
	}
	
	else if (chosenTime=="") {
	}
	
	else {
		document.getElementById("questionTwoDisplay").innerHTML = "You should not replace your pillow " + chosenTime + ","  + "Try Again";
	}
}


function answerThree() {
    var chosenCheck = document.getElementById("downValue").value;

    
	
	if (chosenCheck==" check if its ethically sourced") {
		document.getElementById("questionThreeDisplay").innerHTML = "You should" + "" + chosenCheck +"!";
	}
	
	else if (chosenCheck=="") {
	}
	
	else {
		document.getElementById("questionThreeDisplay").innerHTML = "You dont need to " + chosenCheck + "," + "Try Again";
	}
}

function answerFour() {
    var chosenFill = document.getElementById("madeValue").value;

    
	
	if (chosenFill==" stone") {
		document.getElementById("questionFourDisplay").innerHTML = "They did fill it with" + "" + chosenFill +"!";
	}
	
	else if (chosenFill=="") {
	}
	
	else {
		document.getElementById("questionFourDisplay").innerHTML = "They did not fill it with" + chosenFill + "," + "Try Again";
	}
}


function answerFive() {
    var chosenCon = document.getElementById("cottonValue").value;

    
	
	if (chosenCon==" can become lumpy") {
		document.getElementById("questionFiveDisplay").innerHTML = "Cotton pillows" + "" + chosenCon +"!";
	}
	
	else if (chosenCon=="") {
	}
	
	else {
		document.getElementById("questionFiveDisplay").innerHTML = chosenCon + "" + "is not a con of cotton pillows" + "," + "Try Again";
	}
}



function answerSix() {
    var chosenToxic = document.getElementById("toxicValue").value;

    
	
	if (chosenToxic=="Polyurethane Foam ") {
		document.getElementById("questionSixDisplay").innerHTML = chosenToxic + " can possibly be toxic in latex pillows ";
	}
	
	else if (chosenToxic=="") {
	}
	
	else {
		document.getElementById("questionSixDisplay").innerHTML = chosenToxic + "is not toxic" + ","  + "Try Again";
	}
}




function answerSeven() {
    var chosenLump = document.getElementById("lumpyValue").value;

    
	
	if (chosenLump=="True") {
		document.getElementById("questionSevenDisplay").innerHTML = "Correct"; 
	}
	
	else if (chosenLump=="") {
	}
	
	else {
		document.getElementById("questionSevenDisplay").innerHTML = "Incorrect" + ","  + "Try Again";
	}
}

function answerEight() {
    var chosenPack = document.getElementById("backpackValue").value;

    
	
	if (chosenPack=="Memory Foam") {
		document.getElementById("questionEightDisplay").innerHTML = chosenPack + " is not a new type of backpacking pillow" + "!";
	}
	
	else if (chosenPack=="") {
	}
	
	else {
		document.getElementById("questionEightDisplay").innerHTML = chosenPack + " is a new type of backpacking pillow" + ","  + "Try Again";
	}
}





