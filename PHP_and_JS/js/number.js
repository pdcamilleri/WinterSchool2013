var numberToGuess = Math.floor(Math.random()*100);
var previousDifference = Number.MAX_VALUE;

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
	var guessVal = document.getElementById("guess").value;
	
	if (guessVal == numberToGuess) {
		document.getElementById("output").innerHTML = "You guessed right!";
	} else {
		var output = "Incorrect! ";
		
		var difference = Math.abs(numberToGuess - guessVal);
		
		if (difference < previousDifference) {
			output += "but getting warmer";
		} else {
			output += "and getting colder";
		}
		
		previousDifference = difference;
		document.getElementById("output").innerHTML = output;
		document.getElementsByTagName("body")[0].style.backgroundColor = "rgba(" + Math.min(255, Math.round(255/difference + 1)) + ",0," + Math.min(255, Math.round(difference/2)) + ",0.5)";
	}
}