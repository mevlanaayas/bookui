import Vue from 'vue';
import App from './App';
import router from './router'
import store from './store'

import HeyUI from 'heyui';
import './css/index.less';

Vue.use(HeyUI);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
