new Vue({
	el: "#app",
	data(){
		return {
			text: ""
		}
	},
	computed: {
		count() {
			return this.text.length;
		}
	}
})