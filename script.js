var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var button = document.getElementById("random");
//var bodyCss = getComputedStyle(body);

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setFirstColors(){
	color1.value = "#ff0000";
	color2.value = "#ffff00";
	setGradient();
}


function randomHEX(){
	var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
}

function setRandomBg(){
	color1.value = randomHEX();
	color2.value = randomHEX();
	setGradient();
}

setFirstColors();
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click",setRandomBg);
