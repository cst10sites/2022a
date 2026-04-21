var attack = 0;
var panic = 0;
var aggressive = 0;
var defensive = 0;
var attackimmediately = 0;
var scopeoutarea = 0;
var imalwaysontop = 0;
var yesallthetime = 0;
var q1answer = 0;
var q2answer = 0;

function runatthem() {
	// the aggressive type
	if (runaway == 0) {
	document.getElementById("second").innerHTML = "After running at the enemies, would you Attack Immediately or Scope Out The Area first?";
	document.getElementById("second1").innerHTML = "Attack Immediately"; //even more aggressive
	document.getElementById("second2").innerHTML = "Scope Out The Area"; //the planner
	attack = 1;
	panic = 0;
	q1answer = 1;
	alert ("test");
	}
}

function runaway() {
	//the non-confident
	if (runatthem == 0) {
		document.getElementById("second").innerHTML = "which class do you prefer?";
		document.getElementById("second1").innerHTML = "aggressive"; //the super aggressor, Wraith, Octane, Ash, or Horizon.
		document.getElementById("second2").innerHTML = "defensive"; // planner, Gibby, fuze, bloodhound, caustic, rampart,
		panic = 1;
		attack = 0;
		q1answer = 1;
		alert ("test");
	}
}

function second1() {
		if (q1answer == 1) {
		if (panic == 1) { 
			document.getElementById("third").innerHTML = "Do you find yourself in hopeless situations where you ran in without a plan?";
			document.getElementById("third1").innerHTML = "yes all the time"; //overconfident probably horizon, Ash, bangalore, seer, valkyrie revenant
			document.getElementById("third2").innerHTML = "no, im always on top"; //confident and capable. wraith, Octane, pathfinder revenant
			aggressive = 1;
			defensive = 0;
			q2answer = 1;
			alert ("test");
		}		
		else if (attack == 1) {
			document.getElementById("third").innerHTML = "when in battle do you hang back, or carry your team?"; // wraith octane ash seer revenant pathfinder horizon
			document.getElementById("third1").innerHTML = "hang back"; // seer horizon ash revenant
			document.getElementById("third2").innerHTML = "im always the carry"; //wraith octane ash pathfinder
			q2answer = 1;
			attackimmediately = 1;
			scopeoutarea = 0;
			alert ("test");
		}
	}
}

function second2() {
	if (q1answer == 1) {
		if (panic == 1) {
			 document.getElementById("third").innerHTML = "do you help your team, or primarily yourself?"; // gibby fuze bloodhound caustic rampart crypto loba mirage lifeline wattson 
			 document.getElementById("third1").innerHTML = "my team"; // gibby rampart, loba, lifelin, wattson
			 document.getElementById("third2").innerHTML = "myself"; // fuze bloodhound caustic crypto mirage
			 aggressive = 0;
			 defensive = 1;
			 q2answer = 1;
			 alert ("test");
		 }
		 else if (attack == 1) {
			 document.getElementById("third").innerHTML = "are you likely to back off from a potentially hazardous battle?"; // gibby fuze rampart lifeline bloodhound
			 document.getElementById("third1").innerHTML = "yes"; // gibby lifeline rampart
			 document.getElementById("third2").innerHTML = "no"; // fuze lifeline bloodhound
			 scopeoutarea = 1;
			 attackimmediately = 0;
			 q2answer = 1;
			 alert ("test");
		 }
	 }
	
}

function third1() { //top third button
	if (q1answer == 1) {
		if (attack == 1) {
			if (q2answer == 1) {
				if (aggressive == 1) {
					legend = "horizon valkyrie or bangalore";
					alert (legend);
					document.getElementById("answer").innerHTML = "Your Legend should be" + legend;
				}
				if (defensive == 1) {
					legend = "loba or wattson";
					alert (legend);
					document.getElementById("answer").innerHTML = "Your Legend should be" + legend;
				}
			}
		}
		if (panic == 1) {
			if (q2answer == 1) {
				if (attackimmediately == 1) {
					legend = "revenent";
					alert (legend);
					document.getElementById("answer").innerHTML = "Your Legend should be" + legend;
				}
				if (scopeoutarea == 1) {
					legend = "gibby or lifeline (honestly interchangeable at this point)";
					alert (legend);
					document.getElementById("answer").innerHTML = "Your Legend should be" + legend;
				}
			}
			
		}
	}
}

function third2() { //bottom third button
		if (q1answer == 1) {
		if (attack == 1) {
			if (q2answer == 1) {
				if (aggressive == 1) {
					legend = "horizon valkyrie or bangalore";
					alert (legend);
					document.getElementById("answer").innerHTML = "Your Legend should be" + legend;
				}
				if (defensive == 1) {
					legend = "loba or wattson";
					alert (legend);
					document.getElementById("answer").innerHTML = "Your Legend should be" + legend;
				}
			}
		}
		if (panic == 1) {
			if (q2answer == 1) {
				if (attackimmediately == 1) {
					legend = "revenent";
					alert (legend);
					document.getElementById("answer").innerHTML = "Your Legend should be" + legend;
				}
				if (scopeoutarea == 1) {
					legend = "gibby or lifeline (honestly interchangeable at this point)";
					alert (legend);
					document.getElementById("answer").innerHTML = "Your Legend should be" + legend;
				}
			}
			
		}
	}
}

/*
function fourth1() {
	
	
}

function fourth2() {
	
	
}

function fourth3() {
	
	
}

function fourth4() {
	
	
	
}
*/

function reload() {
	document.getElementById("third").innerHTML = "";
	document.getElementById("third1").innerHTML = "";
	document.getElementById("third2").innerHTML = "";
	document.getElementById("second").innerHTML = "";
	document.getElementById("second1").innerHTML = "";
	document.getElementById("second2").innerHTML = "";
respond1 = 0;
respond2 = 0;
respond21 = 0;
respond22 = 0;
respond31 = 0;
respond32 = 0;
q1answer = 0;
q2answer = 0;
q3answer = 0;
}