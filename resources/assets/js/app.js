require('./bootstrap');

window.Vue = require('vue');

Vue.component('Articles', require('./components/Articles'));
Vue.component('Navbar', require('./components/Navbar'));

const app = new Vue({
    el: '#app'
});
