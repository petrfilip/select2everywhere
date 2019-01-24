$(document).ready(function() {
	var selectElements = document.getElementsByTagName("select");
	for (i = 0; i < selectElements.length; i++) {
  		$(selectElements[i]).select2();
	}
});