var bottomdiv = document.getElementsByClassName("downdiv");
var iframe = document.getElementsByClassName("mainframe");
var imagediv = document.getElementsByClassName("imagediv");
var activatorbtn = null;

function onReleasebtnClick() {
	bottomdiv[0].style.display = bottomdiv[0].style.display;
	if(bottomdiv[0].style.display === "block" && activatorbtn == 0) {
		iframe[0].src = "none";
		bottomdiv[0].style.display = "none";
		imagediv[0].style.filter = "none";
	} else {
		activatorbtn = 0;
		iframe[0].src = "releasesframe.html";
		bottomdiv[0].style.display = "block";
		imagediv[0].style.filter = "blur(4px)";
	}
}

function onGuidesbtnClick() {
	bottomdiv[0].style.display = bottomdiv[0].style.display;
	if(bottomdiv[0].style.display === "block" && activatorbtn == 1) {
		iframe[0].src = "none";
		bottomdiv[0].style.display = "none";
		imagediv[0].style.filter = "none";
	} else {
		activatorbtn = 1;
		iframe[0].src = "guidesframe.html";
		bottomdiv[0].style.display = "block";
		imagediv[0].style.filter = "blur(4px)";
	}
}