<?php

//Start session
session_start();

//If number is being passed from number.html
if(isset($_REQUEST['num'])){
	$_SESSION['num'] = $_REQUEST['num'];
}

//If guess present, guessPage or else startPage
if(isset($_REQUEST['guess'])){
	guessPage($_REQUEST['guess']);
} else {
	startPage();
}

function startPage(){

$SID = session_id();

echo 
"
<html>

	<body>
	
		<form action=\"guess.php?$SID\" method=\"GET\">
			<div>
				Guess:
				<input type=\"number\" name=\"guess\">
			</div>
			<input type=\"submit\" name=\"submit\">
		</form>
		
	</body>
</html>
";

}

function guessPage($guess){

$SID = session_id();

echo 
"
<html>

	<body>
	
		<form action=\"guess.php?$SID\" method=\"GET\">
			<div>
				Guess:
				<input type=\"number\" name=\"guess\">
			</div>
			<input type=\"submit\" name=\"submit\">
		</form>

";

if ($guess == $_SESSION['num']){
	echo "<p> Correct guess well done :) </p>";
} else {
	echo "<p> Incorrect guess :(";
}

echo
"
	</body>
</html>
";



}