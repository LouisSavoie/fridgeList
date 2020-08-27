let eventBus = new Vue();

Vue.component('index', {
    template: `
    <div>
        <div id="pantry-area" type="button" v-on:click="setState('pantry')"></div>
        <div id="freezer-area" type="button" v-on:click="setState('freezer')"><p id="cold-boy">Cold Boy</p></div>
        <div id="fridge-area" type="button" v-on:click="setState('fridge')">
            <div id="groceries-area" type="button" v-on:click.stop="setState('groceries')"></div>
        </div>
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
        <div class="component-container">
            
            <i class="fas fa-reply" type="button" v-on:click="setState('index')"></i>
            <h2>Fridge</h2>
            
            <form v-on:submit.prevent="" v-on:submit="add(newItem)">
                <p>{{ error }}</p>
                <input type="text" v-model="newItem" placeholder="New Item">
            </form>
            <ul>
                <li v-for="item in list">
                    {{ item }}
                    <i class="fas fa-trash-alt" v-on:click="remove(item)"></i>
                </li>
            </ul>
        </div>
    `,
    data() {
        return {
            list: ["Beef", "Carrots", "Bay Leaves", "Beef", "Carrots", "Bay Leaves", "Carrots", "Bay Leaves", "Beef", "Carrots", "Bay Leaves", "Carrots", "Bay Leaves", "Beef", "Carrots", "Bay Leaves", "Carrots", "Bay Leaves", "Beef", "Carrots", "Bay Leaves"],
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
        <div class="component-container">

            <i class="fas fa-reply" type="button" v-on:click="setState('index')"></i>
            <h2>Freezer</h2>

            <form v-on:submit.prevent="" v-on:submit="add(newItem)">
                <p>{{ error }}</p>
                <input type="text" v-model="newItem" placeholder="New Item">
            </form>

            <ul>
                <li v-for="item in list">
                    {{ item }}
                    <i class="fas fa-trash-alt" v-on:click="remove(item)"></i>
                </li>
            </ul>

        </div>
    `,
    data() {
        return {
            list: ["Beef", "Carrots", "Bay Leaves", "Beef", "Carrots", "Bay Leaves", "Carrots", "Bay Leaves", "Beef", "Carrots", "Bay Leaves", "Carrots", "Bay Leaves", "Beef", "Carrots", "Bay Leaves", "Carrots", "Bay Leaves", "Beef", "Carrots", "Bay Leaves"],
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
        <div class="component-container">

            <i class="fas fa-reply" type="button" v-on:click="setState('index')"></i>
            <h2>Pantry</h2>

            <form v-on:submit.prevent="" v-on:submit="add(newItem)">
                <p>{{ error }}</p>
                <input type="text" v-model="newItem" placeholder="New Item">
            </form>

            <ul>
                <li v-for="item in list">
                    {{ item }}
                    <i class="fas fa-trash-alt" v-on:click="remove(item)"></i>
                </li>
            </ul>

        </div>
    `,
    data() {
        return {
            list: ["Beef", "Carrots", "Bay Leaves", "Beef", "Carrots", "Bay Leaves", "Carrots", "Bay Leaves", "Beef", "Carrots", "Bay Leaves", "Carrots", "Bay Leaves", "Beef", "Carrots", "Bay Leaves", "Carrots", "Bay Leaves", "Beef", "Carrots", "Bay Leaves"],
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
        <div class="component-container">

            <i class="fas fa-reply" type="button" v-on:click="setState('index')"></i>
            <h2>Groceries</h2>

            <form v-on:submit.prevent="" v-on:submit="add(newItem)">
                <p>{{ error }}</p>
                <input type="text" v-model="newItem" placeholder="New Item">
            </form>

            <ul>
                <li v-for="item in list">
                    {{ item }}
                    <i class="fas fa-trash-alt" v-on:click="remove(item)"></i>
                </li>
            </ul>

        </div>
    `,
    data() {
        return {
            list: ["Beef", "Carrots", "Bay Leaves", "Beef", "Carrots", "Bay Leaves", "Carrots", "Bay Leaves", "Beef", "Carrots", "Bay Leaves", "Carrots", "Bay Leaves", "Beef", "Carrots", "Bay Leaves", "Carrots", "Bay Leaves", "Beef", "Carrots", "Bay Leaves"],
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