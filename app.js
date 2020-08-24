let app = new Vue({
    el: '#app',
    data: {
        title: 'Fridge List',
        list: ["Beef", "Carrots", "Bay Leaves"],
        newItem: null,
        error: null
    },
    methods: {
        add(item) {
            if (this.newItem) {
                this.list.push(item);
                this.newItem = null;
                this.error = null;
            }
            else {
                this.error = "New Item is empty!";
            }
        },
        remove(item) {
            let index = this.list.indexOf(item);
            this.list.splice(index, 1);
        }
    }
});