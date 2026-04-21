var nClicks1 = 0;
var nClicks2 = 0;
var nClicks3 = 0;
var nClicks4 = 0;
var nClicks5 = 0;
var nClicks6 = 0;
var nClicks7 = 0;
var nClicks8 = 0;
var nClicks9 = 0;
var nClicks10 = 0;
var score = 0;

function yes1()
{

	nClicks1++;
    if (nClicks1 == 1)
    {
        document.getElementById("yes1").style.color = "#0000FF";
        score++;
    }
    else if (nClicks1 == 2)
    {
        document.getElementById("yes1").style.color = "#000000";
        nClicks1 = 0;
        score = score - 1;
    }
}
function no1()
{
	nClicks2 = nClicks2 + 1;
    if (nClicks2 == 1)
    {
        document.getElementById("no1").style.color = "#0000FF";
		nClicks = 1;
    }
    else if (nClicks2 == 2)
    {
	   document.getElementById("no1").style.color = "#000000";
        nClicks1 = 0;
    }
}
function no2()
{

	nClicks3++;
    if (nClicks3 == 1)
    {
        document.getElementById("no2").style.color = "#0000FF";
        score++;
    }
    else if (nClicks3 == 2)
    {
        document.getElementById("no2").style.color = "#000000";
        nClicks1 = 0;
        score = score - 1;
    }
}
function yes2()
{
	nClicks4 = nClicks4 + 1;
    if (nClicks4 == 1)
    {
        document.getElementById("yes2").style.color = "#0000FF";
		nClicks4 = 1;
    }
    else if (nClicks4 == 2)
    {
	   document.getElementById("yes2").style.color = "#000000";
        nClicks4 = 0;
    }
}
function no3()
{

	nClicks5++;
    if (nClicks5 == 1)
    {
        document.getElementById("no3").style.color = "#0000FF";
        score++;
    }
    else if (nClicks5 == 2)
    {
        document.getElementById("no2").style.color = "#000000";
        nClicks5 = 0;
        score = score - 1;
    }
}
function yes3()
{
	nClicks6 = nClicks6 + 1;
    if (nClicks6 == 1)
    {
        document.getElementById("yes2").style.color = "#0000FF";
		nClicks6 = 1;
    }
    else if (nClicks6 == 2)
    {
	   document.getElementById("yes2").style.color = "#000000";
        nClicks6 = 0;
    }
}
function yes4()
{

	nClicks7++;
    if (nClicks7 == 1)
    {
        document.getElementById("yes4").style.color = "#0000FF";
        score++;
    }
    else if (nClicks7 == 2)
    {
        document.getElementById("yes4").style.color = "#000000";
        nClicks7 = 0;
        score = score - 1;
    }
}
function no4()
{
	nClicks8 = nClicks8 + 1;
    if (nClicks8 == 1)
    {
        document.getElementById("no4").style.color = "#0000FF";
		nClicks8 = 1;
    }
    else if (nClicks8 == 2)
    {
	   document.getElementById("no4").style.color = "#000000";
        nClicks8 = 0;
    }
}
function no5()
{

	nClicks9++;
    if (nClicks9 == 1)
    {
        document.getElementById("no5").style.color = "#0000FF";
        score++;
    }
    else if (nClicks9 == 2)
    {
        document.getElementById("no5").style.color = "#000000";
        nClicks9 = 0;
        score = score - 1;
    }
}
function yes5()
{
	nClicks10 = nClicks10 + 1;
    if (nClicks10 == 1)
    {
        document.getElementById("yes5").style.color = "#0000FF";
		nClicks10 = 1;
    }
    else if (nClicks10 == 2)
    {
	   document.getElementById("yes5").style.color = "#000000";
        nClicks10 = 0;
    }
}
function reset1()
{
	document.getElementById("yes1").style.color = "#000000";
	nClicks1 = 0;
	document.getElementById("no1").style.color = "#000000";
	nClicks2 = 0;
	document.getElementById("yes2").style.color = "#000000";
	nClicks3 = 0;
	document.getElementById("no2").style.color = "#000000";
	nClicks4 = 0;
	document.getElementById("yes3").style.color = "#000000";
	nClicks5 = 0;
	document.getElementById("no3").style.color = "#000000";
	nClicks6 = 0;
	document.getElementById("yes4").style.color = "#000000";
	nClicks7 = 0;
	document.getElementById("no4").style.color = "#000000";
	nClicks8 = 0;
	document.getElementById("yes5").style.color = "#000000";
	nClicks9 = 0;
	document.getElementById("no5").style.color = "#000000";
	nClicks10 = 0;
	score=0;
}
function checkans()
{
    if (score == 0)
    {
        document.getElementById("ans").innerHTML = "0% correct"
    }
    else if (score == 1)
    {
        document.getElementById("ans").innerHTML = "20% correct"
    }
    else if (score == 2)
    {
        document.getElementById("ans").innerHTML = "40% correct"
    }
    else if (score == 3)
    {
        document.getElementById("ans").innerHTML = "60% correct"
    }
    else if (score == 4)
    {
        document.getElementById("ans").innerHTML = "80% correct"
    }
    else if (score == 5)
    {
        document.getElementById("ans").innerHTML = "100% correct"
    }

}