var imgNum=1
var myAudio = new Audio('../assets/pro-click.mp3');

function nextimg(){
	if (imgNum==1){
		myAudio.play();
		document.getElementById("img1").src = "../assets/image-g2.jfif";
		document.getElementById("img2").src = "../assets/image-g2-a.jfif";
		document.getElementById("img3").src = "../assets/image-g2-b.jfif";
		document.getElementById("img4").src = "../assets/image-g2-c.jfif";
		document.getElementById("img5").src = "../assets/image-g2-d.jfif";
		document.getElementById("img6").src = "../assets/image-g2-e.jfif";
		
		document.getElementById("button1").src = "../assets/circle-g.png";
		document.getElementById("button2").src = "../assets/circle-y.png";
		document.getElementById("button3").src = "../assets/circle-g.png";
		document.getElementById("button4").src = "../assets/circle-g.png";
		imgNum=imgNum+1;
		
		/* document.getElementById("cap1").innerHTML = ""
		document.getElementById("cap2").innerHTML = ""
		document.getElementById("cap3").innerHTML = ""
		document.getElementById("cap4").innerHTML = "" */
		
		return;
	}
	if (imgNum==2){
		myAudio.play();
		document.getElementById("img1").src = "../assets/image-g3.jfif";
		document.getElementById("img2").src = "../assets/image-g3-a.jfif";
		document.getElementById("img3").src = "../assets/image-g3-b.jfif";
		document.getElementById("img4").src = "../assets/image-g3-c.jfif";
		document.getElementById("img5").src = "../assets/image-g3-d.jfif";
		document.getElementById("img6").src = "../assets/image-g3-e.jfif";
		
		document.getElementById("button1").src = "../assets/circle-g.png";
		document.getElementById("button2").src = "../assets/circle-g.png";
		document.getElementById("button3").src = "../assets/circle-y.png";
		document.getElementById("button4").src = "../assets/circle-g.png";
		imgNum=imgNum+1;
		
		/* document.getElementById("cap1").innerHTML = ""
		document.getElementById("cap2").innerHTML = ""
		document.getElementById("cap3").innerHTML = ""
		document.getElementById("cap4").innerHTML = "" */
		
		return;
	}
	if (imgNum==3){
		myAudio.play();
		document.getElementById("img1").src = "../assets/image-g4.jfif";
		document.getElementById("img2").src = "../assets/image-g4-a.jfif";
		document.getElementById("img3").src = "../assets/image-g4-b.jfif";
		document.getElementById("img4").src = "../assets/image-g4-c.jfif";
		document.getElementById("img5").src = "../assets/image-g4-d.jfif";
		document.getElementById("img6").src = "../assets/image-g4-e.jfif";
		
		document.getElementById("button1").src = "../assets/circle-g.png";
		document.getElementById("button2").src = "../assets/circle-g.png";
		document.getElementById("button3").src = "../assets/circle-g.png";
		document.getElementById("button4").src = "../assets/circle-y.png";
		imgNum=imgNum+1;
		
		/* document.getElementById("cap1").innerHTML = "Cap1"
		document.getElementById("cap2").innerHTML = "Cap2"
		document.getElementById("cap3").innerHTML = "Cap3"
		document.getElementById("cap4").innerHTML = "Cap4" */
		return;
	}
	if(imgNum==4){
		myAudio.play();
		document.getElementById("img1").src = "../assets/image-g1.jfif"; 
		document.getElementById("img2").src = "../assets/image-g1-a.jfif"; 
		document.getElementById("img3").src = "../assets/image-g1-b.jfif";
		document.getElementById("img4").src = "../assets/image-g1-c.jfif";
		document.getElementById("img5").src = "../assets/image-g1-d.jfif";
		document.getElementById("img6").src = "../assets/image-g1-e.jfif";
		
		document.getElementById("button1").src = "../assets/circle-y.png";
		document.getElementById("button2").src = "../assets/circle-g.png";
		document.getElementById("button3").src = "../assets/circle-g.png";
		document.getElementById("button4").src = "../assets/circle-g.png";
		imgNum=1;
		
		/* document.getElementById("cap1").innerHTML = ""
		document.getElementById("cap2").innerHTML = ""
		document.getElementById("cap3").innerHTML = ""
		document.getElementById("cap4").innerHTML = "" */
		
		return;
	}
	
}
