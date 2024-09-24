function footToMeter() {
	let toMeter = document.getElementById("foot").value;

	document.getElementById(
		"footToMeter"
	).innerHTML = `${toMeter} feets = ${Math.round(toMeter * 0.305)} meters`;

	document.getElementById("meter").value = Math.round(toMeter * 0.305);
}

function meterToFoot() {
	let toFooter = document.getElementById("meter").value;
	document.getElementById("foot").value = Math.round(toFooter * 3.279);
}
