var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var gen = document.getElementById("generate");

function showInitial(){
	css.textContent ="linear-gradient(to right,"+ color1.value + ", "+ color2.value + ")";
}
showInitial();

function setGradient(){
	body.style.background = 
		"linear-gradient(to right,"
		+ color1.value 
		+ ", "
		+ color2.value 
		+ ")"; 

	gen.style.background = "linear-gradient(to left, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background +";";
}

function generateRandomHexColor() {
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	return randomColor;
}

function setRandomColor() {
	color1.value = "#" + generateRandomHexColor();
	color2.value = "#" + generateRandomHexColor();
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

gen.addEventListener("click",setRandomColor);
