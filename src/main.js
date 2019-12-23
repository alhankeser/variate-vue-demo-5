import Vue from 'vue'
import App from './App.vue'

import config from '../variate.json';
import Variate from '@variate/vue';

Vue.use(Variate, {
    debug: true,
    tracking: true,
    config,
});

Vue.config.productionTip = false

import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

