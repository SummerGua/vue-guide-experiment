import { createApp } from 'vue';
import '@/style/index.css';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import { tourPlugin } from './tour';
import { tourConf } from './tourConf';

const app = createApp(App);

app.use(store).use(router).use(tourPlugin, tourConf);
app.mount('#app');
