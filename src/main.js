import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';

import './assets/main.css'

const app = createApp(App);


app.use(PrimeVue);
app.component('pv-input-text', InputText)
app.component('pv-drop-down', Dropdown )

app.mount('#app')