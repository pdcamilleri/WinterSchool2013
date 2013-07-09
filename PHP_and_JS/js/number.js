var numberToGuess = Math.floor(Math.random()*100);

//Function to help you debug
function showNumberToGuess() {
	if (document.getElementById("cheat").checked) {
		document.getElementById("numberToGuess").value = numberToGuess;
		document.getElementById("cheatShow").style.display = "inline";
	} else {
		document.getElementById("numberToGuess").value = "";
		document.getElementById("cheatShow").style.display = "none";
	}
}

//New game button!
function newGame() {
	numberToGuess = Math.floor(Math.random()*100);
	showNumberToGuess();
}

function guess() {
	//Write a function which checks if the inputted number matches the number to guess
}