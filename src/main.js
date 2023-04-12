import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';

import './assets/main.css'

const app = createApp(App);
app.use(PrimeVue);
app.component('pv-input-text', InputText)

createApp(App).mount('#app')