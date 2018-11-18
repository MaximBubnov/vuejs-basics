Vue.component('message', {
	template: '<input type="text" v-model="message" @keyup.enter="saveMessage">',
	data() {
		return {
			message: ''
		}
	},
	methods: {
		saveMessage(){
			this.$emit('message-saved', this.message)

			this.message = '';
		}
	}
})

new Vue({
	el: "#app",
	data() {
		return {
			messages: []
		}
	},
	methods: {
		handleMessage(message) {
			this.messages.push(message);
		}
	}
})