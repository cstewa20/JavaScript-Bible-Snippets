/* 
 *  JavaScript: jsb-08-01.js
 *  
 *  initialize when the page has loaded
 */
addEvent(window, 'load', initialize);

function initialize() {
	// do this only if the browser can hande DOM methods
	if (document.getElementById) {
		// point to critical elemnents
		var oInputA = document.getElementById('inputA');
		var oInputB = document.getElementById('inputB');
		var oButton = document.getElementById('add');
		var oOutput = document.getElementById('output');

			// if they all exist ...
			if (oInputA && oInputB && oButton && oOutput) {
				// apply behaviors
				addEvent(oButton, 'click', addIt);
			}
	}
}

// add two input numbers and display result
function addIt() {
	var value1 = document.getElementById("inputA").value;
	var value2 = document.getElementById("inputB").value;

	document.getElementById("output").value = parseInt(value1) + parseInt(value2);
} 


