import '@/assets/layout/index.scss';
import { createApp } from 'vue';
import App from './App.vue';
import components from '@/components/UI';
import router from './router/index';
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';
import store from '@/store'; // Import your Vuex store module

const app = createApp(App);

components.forEach(component => {
  app.component(component.name, component);
});

app
  .use(router)
  .use(bootstrap)
  .use(store) // Register your Vuex store module
  .mount('#app');
