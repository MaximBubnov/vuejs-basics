new Vue({
	el: "#app",
	data() {
		return {
			message: ""
		}
	},
	methods: {
		sayHi(){
			console.log('I am working')
		},
		yourName(){
			console.log(this.message)
		}
	}
})