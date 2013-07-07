function changetext(id)
{
	var text = id.innerHTML;
	
	if (text === "Ooops!") {
		id.innerHTML="Click on this text!";
	} else {
		id.innerHTML="Ooops!";
	}
}

function mOver(obj)
{
	obj.innerHTML="Thank You"
}

function mOut(obj)
{
	obj.innerHTML="Mouse Over Me"
}

function changeColour(obj)
{
	var colour = obj.style.backgroundColor;
	var red = "rgb(217, 74, 56)";
	var blue = "rgb(58, 119, 217)";
	
	if (colour === red) {
		obj.style.backgroundColor = blue;
	} else {
		obj.style.backgroundColor = red;
	}
}