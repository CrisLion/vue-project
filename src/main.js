import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';
import Button from "primevue/button";
import Panel from 'primevue/panel';
import RadioButton from 'primevue/radiobutton';
import Textarea from 'primevue/textarea';
import Checkbox from 'primevue/checkbox';
import  i18n from '../src/locales/i18n'

import './assets/main.css'

const app = createApp(App);
app.use(PrimeVue);
app.component('pv-input-text', InputText)
app.component('pv-input-mask', InputMask)
app.component('pv-input-number', InputNumber)
app.component('pv-calendar', Calendar)
app.component('pv-button', Button)
app.component('pv-panel', Panel)
app.component('pv-radio-button', RadioButton)
app.component('pv-text-area', Textarea)
app.component('pv-checkbox', Checkbox)
app.use(i18n);

app.mount('#app')