import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';
import Button from "primevue/button";
import Panel from 'primevue/panel';

import './assets/main.css'

const app = createApp(App);
app.use(PrimeVue);
app.component('pv-input-text', InputText)
app.component('pv-input-mask', InputMask)
app.component('pv-input-number', InputNumber)
app.component('pv-calendar', Calendar)
app.component('pv-button', Button)
app.component('pv-panel', Panel)

app.mount('#app')