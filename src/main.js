// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 匯入 Bootstrap CSS 與 JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import './assets/main.css'  // 如有其他全域樣式也可以在此引入

createApp(App)
  .use(router)
  .mount('#app')
