/**
 * 
 */

function greeting() {

	var nameVal=document.getElementById("name").value;
	
	var greeting = document.getElementById("greeting");
	greeting.innerHTML = "KAIXO "+nameVal+"!!!";

	var request = document.getElementById("request");
	request.setAttribute("style","display:none;");
//	request.style.display="none";
}