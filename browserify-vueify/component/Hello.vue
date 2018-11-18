<template>
	<h1> {{ greeting }}</h1>
</template>

<script>
	var hello = {
		data() {
			return {
				greeting: 'Hello Vueify'
			}
		}
	}

	module.exports = hello
</script>

<style>
	h1 {
		font-family: sans-serif;
		color: green;
	}
</style>