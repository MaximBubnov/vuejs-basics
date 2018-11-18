new Vue({
	el: "#app",
	data(){
		return {
			currentVal: 'square'
		}
	},
	components: {
		square: {
			template: "#square-temp"
		},
		triangle: {
			template: "#triangle-temp"
		},
		or: {
			template: "#or-temp"
		},
		egg: {
			template: "#egg-temp"
		}
	},
	methods: {
		switchView(view) {
			this.currentVal = view;
		}
	}
})