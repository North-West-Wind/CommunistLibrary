function enableStylesheet(node) { node.disabled = false; }
function disableStylesheet(node) { node.disabled = true; }
var horizontal;

window.onresize = () => {
	var ratio = window.innerWidth / window.innerHeight;
	if (ratio < 1) {
		horizontal = false;
		enableStylesheet(document.getElementById("vertical"));
		disableStylesheet(document.getElementById("horizontal"));
	} else {
		horizontal = true;
		enableStylesheet(document.getElementById("horizontal"));
		disableStylesheet(document.getElementById("vertical"));
	}
}

window.onresize();