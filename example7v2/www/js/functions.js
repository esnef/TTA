/**
 * 
 */

function greeting() {
	var nameVal=$("#name").val();
	
	var greeting = $("#greeting");
	greeting.text("KAIXO "+nameVal+"!!!");
		
	$("#request").hide();
}