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
	// Change this to switch colours of the object
	// Things you may need
	// 		obj.style.backgroundColor - get's the current colour of the object in rbg(r, g, b) format
	//		red is rgb(217, 74, 56)
	//		you can use any other colour you want
}