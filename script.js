var option = "X"

function toggleOption(){
	if (option == "X"){
		option = "O"
		return;
	}
	option = "X"
}



function mark(event) {
	var target = event.target;

	if (target.textContent == "") {
		console.log("posso mudar");
		target.textContent = option;
		toggleOption();
	}
}

function gameOver(){

	var a1 = document.getElementyById("a1").getOption("posso mudar");
	var a2 = document.getElementyById("a2").getOption("posso mudar");
	var a3 = document.getElementyById("a3").getOption("posso mudar");

	var b1 = document.getElementyById("b1").getOption("posso mudar");
	var b2 = document.getElementyById("b2").getOption("posso mudar");
	var b3 = document.getElementyById("b3").getOption("posso mudar");

	var c1 = document.getElementyById("c1").getOption("posso mudar");
	var c2 = document.getElementyById("c2").getOption("posso mudar");
	var c3 = document.getElementyById("c3").getOption("posso mudar");

	var winner = "";

	if((a1 == b1 && a1 == c1 && a1 != "") || (a1 == a2 && a1 == a3 && a1 != "") || (a1 == b2 && a1 == c3 && a1 != ""))
    winner = a1;

	else if((b2 == b1 && b2 == b3 && b2 !="") || (b2 == a2 && b2 == c2 && b2 != "") || (b2 == a3 && b2 == c1 && b2 != ""))

	winner = b2;
	else if((c3 == c2 && c3 == c1 && c3 != "") || (c3 == a3 && c3 == b3 && c3 != "")) 

	winner = c3;
}

if (winner != "") {
	gameOver = true
	alert("O gahador foi o:'" + winner + "")
}