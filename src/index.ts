import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import { VNode } from 'vue/types/umd';

import './app.scss';
import App from './App.vue';
import state from './state';

Vue.use(VueCompositionApi);

new Vue({
  el: '#app',
  store: state,
  render: (c): VNode => c(App),
});
