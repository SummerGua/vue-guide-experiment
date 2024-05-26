import { createApp } from 'vue';
import '@/style/index.css';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import { createTour } from './tour';
import { tourConf } from './tourConf';

const app = createApp(App);

createTour(tourConf);

app.use(store).use(router);
app.mount('#app');
