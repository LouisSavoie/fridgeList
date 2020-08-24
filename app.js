let app = new Vue({
    el: '#app',
    data: {
        title: 'Fridge List',
        list: ["Beef", "Carrots", "Bay Leaves"]
    },
    methods: {
        add(item) {
            this.list.push(item);
        },
        remove(item) {
            let index = this.list.indexOf(item);
            this.list.splice(index, 1);
        }
    }
});