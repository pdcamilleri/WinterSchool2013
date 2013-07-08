function updateCssClass(field, classIndex) {
	var classSelector = "";
	if (classIndex === 1) {
		classSelector = "wrong";
	} else if (classIndex === 2){
		classSelector = "right";
	}
	
	document.getElementById(field).className = classSelector;
	return 1;
}

function checkValidMail(field) {
	// Write a function to check validity of the email
	// Hints:
	//		An email must have a length > 0
	// 		An email must have an @ symbol somewhere
	// 		An email must have a . symbol somewhere
	// If the email is invalid, you need to set the textbox CSS style to wrong.
	// If it is right, you need want to set the textbox CSS style to right. 
}

function checkValidLength(field) {
	// Write a function to check the length of an input
	// Hints:
	//		You need to check if the value of the input has a length > 0
}

function validateAll(output) {
	// Write a function which does all the checking in the form once the submit button is clicked
	// Hints:
	//		You should tell the user what went wrong in the output field
	//		You may need to do multiple checks for different fields
	var valid = 0;	
	
	// Your code should go here
	
	if (valid) {
		return 1;
	} else {
		return 0;
	}
}