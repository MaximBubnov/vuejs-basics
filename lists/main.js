new Vue({
	el: '#app',
	data() {
		return {
			cars: [
				{
					name: 'Nissan',
					status: false
				},
				{
					name: 'Mercedes',
					status: false
				},
				{
					name: 'BMW',
					status: false
				},
				{
					name: 'McLarren',
					status: true
				},
				{
					name: 'Tesla',
					status: false
				}

			]
		}
	}
})