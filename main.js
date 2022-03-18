document.getElementById("product").addEventListener("keypress", (e) => {
	if (e.key === "Enter" && document.getElementById("product").value) {
		document.getElementById("container").style.display = "none";
		document.getElementById("task").innerText = document.getElementById("product").value;
	}
});

var clickcount = 0;

document.getElementById("yes").addEventListener("click", () => {
	var audio = new Audio("click.mp3");
	audio.play();
	if (clickcount == 10) {
		document.getElementById("task").style.display = "none";
		document.body.classList.add("shake-hard", "shake-constant", "rainbow-hard");
		setTimeout(() => {
			var audio2 = new Audio("just_do_it.mp3");
			audio2.play();
			setTimeout(() => {
				window.close();
			}, 4500);
		}, 1000);
		clickcount++;
	} else {
		clickcount++; 
	}
});