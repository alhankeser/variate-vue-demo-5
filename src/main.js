import Vue from 'vue'
import App from './App.vue'

import config from '../variate.json';
import Variate from '@variate/vue';

Vue.use(Variate, {
    debug: true,
    tracking: {
      enabled: true, // Global tracking switch, optional, default to true
      default: true, // Variate tracking switch, optional, default to true
      reporter: async () => true // Same as before, but now support async/Promises
    },
    config,
});

Vue.config.productionTip = false

import router from './router'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

