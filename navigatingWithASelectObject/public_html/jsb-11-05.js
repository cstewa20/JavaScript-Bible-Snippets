/* 
 * JavaScript: jsb-11-05.js
 * 
 * initialize when the page has loaded
 */
// initialize when the page has loaded
addEvent(window, 'load', initialize);

var oList;		// select list (global)



// apply behaviors when document has loaded
function initialize() {
	// do this only if the browser can handle DOM methods
	if (document.getElementById) {
		// point to crucial elements
		oList = document.getElementById('urlList');
		oButton = document.getElementById('submit-button');

			// if they exist
			if (oList && oButton) {
				// make the list dynamic
				addEvent(oList, 'change', goThere);

				// make the submit button disapper when JavaScript is running
				oButton.style.display = 'none';
			}
	}
}

// direct the browser to the selected URL
function goThere() {
	location.href = oList.options[oList.selectedIndex].value;
}

function identify() {
	if (this.tagName) {
		alert('My tagName is ' + this.tagName);
	}
}