var Vue = require('vue')
var hello = require('./component/Hello.vue')

new Vue({
	el:'#app',
	components: {
		hello: hello
	}
})