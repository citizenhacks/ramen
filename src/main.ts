import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
import './scss/styles.scss';
import 'vue-loading-overlay/dist/vue-loading.css';

library.add(faArrowRight);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(Loading);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
