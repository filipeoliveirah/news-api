import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/index.css'
import router from './router'
import store from './store/news'

createApp(App).use(store).use(router).mount('#app')
