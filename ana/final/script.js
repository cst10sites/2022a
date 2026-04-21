var ana = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  ana++;
  if (ana > x.length) {ana = 1}
  x[ana-1].style.display = "block";
  setTimeout(carousel, 2500);
}


function result()
{
	var score=0;
	if(document.getElementById('correct1').checked)
		{	score++;
		}
	if(document.getElementById('correct2').checked)
		{	score++;
		}
	if(document.getElementById('correct3').checked)
		{	score++;
		}
    if(document.getElementById('correct4').checked)
  		{	score++;
  		}
      if(document.getElementById('correct5').checked)
    		{	score++;
    		}
			 if(document.getElementById('correct6').checked)
    		{	score++;
    		}
			 if(document.getElementById('correct7').checked)
    		{	score++;
    		}
			 if(document.getElementById('correct8').checked)
    		{	score++;
    		}
			 if(document.getElementById('correct9').checked)
    		{	score++;
    		}
			 if(document.getElementById('correct10').checked)
    		{	score++;
    		}
 alert("Your score is:"+score);
 // to print on browser
 // document.write("Your score is:"+score);
}
