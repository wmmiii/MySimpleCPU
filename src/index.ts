import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import { VNode } from 'vue/types/umd';

import './app.scss';
import App from './app.vue';

Vue.use(VueCompositionApi);

new Vue({
  el: '#app',
  render: (c): VNode => c(App),
});
