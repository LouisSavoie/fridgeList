let eventBus = new Vue();

Vue.component('index', {
    template: `
    <div>
        <button type="button" v-on:click="setState('fridge')">Fridge</button>
        <button type="button" v-on:click="setState('freezer')">Freezer</button>
        <button type="button" v-on:click="setState('pantry')">Pantry</button>
        <button type="button" v-on:click="setState('groceries')">Groceries</button>
    </div>
    `,
    methods: {
        setState(state) {
            eventBus.$emit('set-state', state);
        }
    }
});

Vue.component('fridge', {
    template: `
        <div>
            <button type="button" v-on:click="setState('index')">Back</button>
            <h2>Fridge</h2>
            <form v-on:submit.prevent="" v-on:submit="add(newItem)">
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
        },
        setState(state) {
            eventBus.$emit('set-state', state);
        }
    }
});

Vue.component('freezer', {
    template: `
        <div>
            <button type="button" v-on:click="setState('index')">Back</button>
            <h2>Freezer</h2>
            <form v-on:submit.prevent="" v-on:submit="add(newItem)">
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
            list: ["Burgers", "Kompot", "Broccoli"],
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
        },
        setState(state) {
            eventBus.$emit('set-state', state);
        }
    }
});

Vue.component('pantry', {
    template: `
        <div>
            <button type="button" v-on:click="setState('index')">Back</button>
            <h2>Pantry</h2>
            <form v-on:submit.prevent="" v-on:submit="add(newItem)">
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
            list: ["Bread", "Tomatoes", "Onions"],
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
        },
        setState(state) {
            eventBus.$emit('set-state', state);
        }
    }
});

Vue.component('groceries', {
    template: `
        <div>
            <button type="button" v-on:click="setState('index')">Back</button>
            <h2>Groceries</h2>
            <form v-on:submit.prevent="" v-on:submit="add(newItem)">
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
            list: ["Kvass", "Semechki", "Butter"],
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
        },
        setState(state) {
            eventBus.$emit('set-state', state);
        }
    }
});

let app = new Vue({
    el: '#app',
    data: {
        title: 'Fridge List',
        state: 'index'
    },
    methods: {
        
    },
    mounted() {
        eventBus.$on('set-state', state => {
            this.state = state;
        });
    }
});