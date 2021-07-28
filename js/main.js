"use strict"

// this is on loading the page; calling it immediately doesn't work
window.onload = function(){
	var appA = new Vue({
		el: '#mainApp',
		data: {
			msg: 'Hello World!'
		}
	});
}