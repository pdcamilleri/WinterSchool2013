<?php

$seconds = mktime(date("H"),date("i"),date("s"),date("m"),date("d"),date("Y"));

$time = date("d/m/Y H:i",$seconds);

//Explains where things are located and how they work
//Shows what 'static' vs 'dynamic' means
//Shows what the difference between clientside and serverside is...hopefully
echo "
<html> 
	<body> 
		<p>hey guys, i made this on 7/06/2013 8:30</p>
		<p>and now it is 7/06/2013 8:34 (HTML)</p>
		<p>and now it is <script type=\"text/javascript\"> 
		function dateToString(date) {
			var month = date.getMonth() + 1;
			var day = date.getDate();
			var dateOfString = ((\"\" + day).length < 2 ? \"0\" : \"\") + day + \"/\";
			dateOfString += ((\"\" + month).length < 2 ? \"0\" : \"\") + month + \"/\";
			dateOfString += date.getFullYear() + \" \";
			return dateOfString;
		}

		var currentdate = new Date();
		var datetime = \"\";
		datetime += dateToString(currentdate);
		datetime += + currentdate.getHours() + \":\"
            + currentdate.getMinutes(); 
			
		document.write(datetime);
		</script> (Javascript)</p>
		<p>and now it is $time (PHP)</p> 
	</body> 
</html>";



?>