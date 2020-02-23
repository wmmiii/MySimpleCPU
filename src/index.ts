import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import { VNode } from 'vue/types/umd';

import './app.scss';
import App from './app.vue';
import state from './state';

Vue.use(VueCompositionApi);

new Vue({
  el: '#app',
  store: state,
  render: (c): VNode => c(App),
});

setInterval(() => {
  const currentValue = state.state.registers[0];
  state.commit('setRegister', {index: 0, value: currentValue + 1})
}, 1000);
