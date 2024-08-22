import { createApp } from 'vue';
import App from '@/App.vue';
import AccordionPage from '@/views/AccordionPage.vue';

const app = createApp(App);

app.component('AccordionPage', AccordionPage);
app.mount('#app');