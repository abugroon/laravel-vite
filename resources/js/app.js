import Vue from 'vue/dist/vue.esm.js';
import MainApp from "./Pages/MainApp.vue";
import axios  from "axios";
window.axios = axios;


Vue.component('main-app', MainApp)
new Vue({
    el:'#app',
})
