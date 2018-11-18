 Vue.component('v-dialog', {
            template: '#dialog-template',
            data: function() {
                return {
                    active: false
                }
            },
            props: ['btnText'],
            methods: {
                open: function() {
                    this.active = true
                },
                close: function() {
                    this.active = false
                },
                onCancel: function() {
                    this.close();
                },
                onConfirm: function() {
                    this.close();
                }
            }
        })
 
new Vue({
    el: "#app"
})