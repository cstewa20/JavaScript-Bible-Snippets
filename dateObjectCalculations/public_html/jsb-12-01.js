/* 
 * JavaScript: jsb-12-01.js
 */

// run script when the page has loaded
addEvent(window, 'load', calcDates);

// calculate dates and plug into document
function calcDates() {
	var dTodaysDate = new Date();

	// plug in today
	var oToday = document.getElementById('today');
		if (oToday) {
			oToday.value = dTodaysDate;
		}

	// plug in next week
	var oNextWeek = document.getElementById('nextWeek');
		if (oNextWeek) {
			// today in milliseconds
			var msToday  = dTodaysDate.getTime();

			// one week = 1000 milliseconds * 60 seconds * 60 seconds
			//		   * 24 hours * 7 days
			var msOneWeek = 1000 * 60 * 60 * 24 * 7;

			// next week in milliseconds
			var msNextWeek = msToday + msOneWeek;

			// next week as date object
			var dAWeekFromNow = new Date(msNextWeek);

			// plug in string value
			oNextWeek.value = dAWeekFromNow;
		}
}


