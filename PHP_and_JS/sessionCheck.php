<?php

session_start();

page();

function page(){

	$first = $_SESSION['fName'];
	
	$last = $_SESSION['lName'];
	
	$hobbyOld = $_SESSION['hobby'];
	
	$hobbyNew = $_REQUEST['hobby'];
	
	$male = isset($_SESSION['maleCheck']);
	
	//Returns session id to propagate
	$SID = session_id();
	
	echo "
	<html>
	
		<body>
		
			<p> Your first name is $first <p>
			
			<p> Your last name is $last </p>
	";
	
	if($hobbyOld == $hobbyNew){
		echo "<p> You still like $hobbyOld</p>";
	} else {
		echo "<p> You used to like $hobbyOld but now like $hobbyNew </p>";
	}
	
	if($male == 1){
		echo "<p> You are male </p>";
	} else {
		echo "<p> You are female </p>";
	}
	
	echo "
	<a href = \"login.html\">Start Again</a>
	
		</body>
	
	</html>
	";
}

?>