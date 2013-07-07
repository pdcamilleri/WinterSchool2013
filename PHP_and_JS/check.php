<?php

//Main function up here

//Starts the session
session_start();

//Checks both the fields are set
if(isEmpty($_REQUEST['fName']) || isEmpty($_REQUEST['lName'])){
	
	failure();

} else {
	
	//Store requested variables into the session
	$_SESSION = $_REQUEST;
	
	//Write variables to file
	$fp = fopen('Details.csv','w');
	
	//Prepare the CSV headers and data
	$headers = array('First Name','Last Name','Hobby','Male?');
	$details = array($_REQUEST['fName'],$_REQUEST['lName'],$_REQUEST['hobby'],$_REQUEST['maleCheck']);
	
	//Write as CSV file
	fputcsv($fp,$headers);
	fputcsv($fp,$details);
	
	//Close the file once done with it
	fclose($fp);
	
	success();

}

function success(){

	$first = $_REQUEST['fName'];
	
	$last = $_REQUEST['lName'];
	
	$hobby = $_REQUEST['hobby'];
	
	$male = isset($_REQUEST['maleCheck']);
	
	//Returns session id to propagate
	$SID = session_id();
	
	echo "
	<html>
	
		<body>
		
			<p> Your first name is $first <p>
			
			<p> Your last name is $last </p>
			
			<p> You like $hobby </p>
			
			<form action = \"sessionCheck.php?$SID\" method=\"GET\">
			<div>
					Change of Hobby:
					<select name=\"hobby\">
						<option value=\"Reading\">Reading</option>
						<option value=\"Cricket\">Cricket</option>
						<option value=\"PC\">PC Games</option>
					</select>
					
					
			</div>
			
			
	";
	
	if($male == 1){
		echo "<p> You are male </p>";
	} else {
		echo "<p> You are female </p>";
	}
	
	echo "
		<input type=\"submit\" name=\"submit\">
		</form>
	
		<a href = \"login.html\">Back</a>
	
		</body>
	
	</html>
	";
}

function failure(){

echo "<html>

	<body>";


	//Checks if the username field is empty
	if(isEmpty($_REQUEST['fName'])){
		echo "<p> The first name field is empty </p>";
	}

	//Checks if the password field is empty
	if(isEmpty($_REQUEST['lName'])){
		echo "<p> The last name field is empty </p>";
	}

	

echo "<a href = \"login.html\">Try Again</a>
	</body> 

	</html>";

}

//Checks if the string is empty
function isEmpty($string){
	
	$result = 0;
	
	if($string == ""){
		$result = 1;
	}
	
	return $result;

}

?>