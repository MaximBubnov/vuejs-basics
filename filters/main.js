new Vue({
	el: "#app",
	data() {
		return {
			message: 'Maxim',
			students: [
				{
					name: "Alex",
					age: 21
				},
				{
					name: "Galina",
					age: 20
				},
				{
					name: "Nikolay",
					age: 61
				},
				{
					name: "Alice",
					age: 5
				}
			]
		}
	},
	filters: {
		uppercase(value) {
			return value.toUpperCase() || "";
		}
	},
	computed: {
		orderStudents() {
			return this.students.sort( (a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0) );
		}
	}
})