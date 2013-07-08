function checkValidMail(field) {
	var email = document.getElementById(field).value;
	
	var isValid = 0;
	
	if (email.indexOf('@') >= 1) {
		var emailDomain = email.substr(email.indexOf('@') + 1);
		if (emailDomain.indexOf('@') === -1) {
			if (emailDomain.indexOf('.') >= 1) {
				var emailDomainExt = emailDomain.substr(emailDomain.indexOf('.') + 1);
				if (emailDomainExt.length >= 1) {
					isValid = 1;
				}
			}
		}
	}
	
	if (isValid) {
		updateCssClass(field, 2);
		return 1;
	} else {
		updateCssClass(field, 1);
		return 0;
	}
}

function checkValidLength(field) {
	var fieldLength = document.getElementById(field).value.length;
	if (fieldLength >= 1) {
		updateCssClass(field, 2);
		return 1;
	} else {
		updateCssClass(field, 1);
		return 0;
	}
}

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

function validateAll(output) {
	var t1 = checkValidLength("fName");
	var t2 = checkValidLength("lName");
	var t3 = checkValidMail("email");
	
	errorList = "";

	if (t1 === 0) {
		errorList += "First name is too short<br />";
	}
	if (t2 === 0) {
		errorList += "Last name is too short<br />";
	}
	if (t3 === 0) {
		errorList += "Email is not valid<br />";
	}
	
	if (errorList !== "") {
		document.getElementById(output).innerHTML = errorList;
		return false;
	}
	
	return true;
}