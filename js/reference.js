"use strict"

Vue.component('list-item', {
	props: ['item'],
	template: '<li> {{ item.text}} </li>'
});

var appA;
// this is on loading the page; calling it immediately doesn't work
window.onload = function(){
	appA = new Vue({
		el: '#app',
		data: {
			msg: 'Hello World!',
			msg2: 'This is a mouse event generated on ' + new Date().toLocaleString() + '!',
			isActive: true,
		},
		updated: function(){
			// update due to testMethod() being called
			console.log('!!' + this.msg);
		},
		computed: {
			// advantage of using a computedProperty is it only runs on a change to the data
			computedPropertyExample() {
				return this.msg.length;
			}
		}
	});
	var appB = new Vue({
		el:'#fortest',
		data: {
			items: [
				{ key: 0, text: 'alfa', title:'AAAA', azdjkej: 'test'},
				{ key: 1, text: 'beta', title:'BBBB'},
				{ key: 2, text: 'gamma', title:'CCCC'}
			]
		}
	})
	var appC = new Vue({
		el: "#methodApp",
		methods: {
			// can't seem to call a function directly, this indirection is apparently necessary
			// could use the standard onclick but the point here is to use Vue, so I won't
			testMethod: function(){
				// probably best to use this to pass any relevant data as parameters
				testMethod();
			}
		}
	})
}

function testMethod(){
	appA.msg = appA.msg + '!';
}