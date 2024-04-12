import Login from './Auth/Login.vue';
import './bootstrap';
import {createApp } from "vue";

const app =  createApp({});

app.component('login', Login);

app.mount('#app');