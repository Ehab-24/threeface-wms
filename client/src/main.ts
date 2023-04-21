import { createApp } from 'vue';
import './style.css';
import router from './router';
import App from './App.vue';
import { globalCookiesConfig } from 'vue3-cookies';

globalCookiesConfig({
  secure: true,
  sameSite: 'Strict',
  expireTimes: '12h'
});

createApp(App).use(router).mount('#app');
