import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import JS from '@/JS/script.js';
import 'animate.css';
createApp(App).use(store).use(router).mount('#app')

export default{
  mounted() {
  const js = new JS();
  js.init();

}
}