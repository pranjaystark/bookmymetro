$("input[name='expiry-data']").mask("00 / 00");

function price(){
	if(document.getElementById("from").value != "" && document.getElementById("to").value != "") document.getElementById("fare").value = "40";
}