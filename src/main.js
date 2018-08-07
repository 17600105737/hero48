import Vue from 'vue'
import App from './App.vue'

// 导入全局bootstrap包 和 index.css样式
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

import router from './routes/router';

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
