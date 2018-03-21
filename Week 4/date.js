var repeater
function getDate(){
	var d = new Date();
	document.getElementById("date").innerHTML = d.toUTCString();
	repeater = setTimeout(getDate,1000)
}