
require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

import router from './routers'
import App from './App.vue'

const app = new Vue({
    el: '#app',
    render: h=>h(App),
    router,
});
