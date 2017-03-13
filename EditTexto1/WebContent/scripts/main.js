/**
 * 
 */

function loadData() {
	var sessionDataHTML = sessionStorage["sDataHTML"];

	if (sessionDataHTML != null) {
		document.getElementById("textBox").textContent = sessionDataHTML;
	}
}

function initDoc() {
	  oDoc = document.getElementById("textBox");
	  sDefTxt = oDoc.innerHTML;
	  if (document.compForm.switchMode.checked) { setDocMode(true); }
	}
