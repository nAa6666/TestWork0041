/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');
window.Vue = require('vue');
import Vue from 'vue'
import App from './App.vue'
import { AlertPlugin } from 'bootstrap-vue'
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import axios from 'axios';
import Vuex from 'vuex';
import { routes } from './routes';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(AlertPlugin);
Vue.use(Vuex);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});

