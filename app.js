Vue.component('fridge', {
    template: `
        <div>
            <h2>Fridge</h2>
            <form v-on:submit.prevent="onSubmit" v-on:submit="add(newItem)">
                <p>{{ error }}</p>
                <input type="text" v-model="newItem" placeholder="New Item">
                <!-- <button type="button" v-on:click="add(newItem)">Add</button> -->
            </form>
            <ul>
                <li v-for="item in list">
                    <span>{{ item }}</span>
                    <span v-on:click="remove(item)">    X</span>
                </li>
            </ul>
        </div>
    `,
    data() {
        return {
            list: ["Beef", "Carrots", "Bay Leaves"],
            newItem: null,
            error: null
        }
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

let app = new Vue({
    el: '#app',
    data: {
        title: 'Fridge List',
        state: 0
    },
    methods: {
        setState(index) {
            this.state = index;
        }
    }
});