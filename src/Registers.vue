<template>
  <div>
    <h2>Registers</h2>
    <table>
      <tr><th>Register</th><th>Value</th></tr>
      <tr v-for="(register, index) in registers" v-bind:key="index">
        <td>{{index.toString(16).toUpperCase()}}</td>
        <td><hexdisplay :value="register" /></td>
      </tr>
      <tr>
        <td>PC</td>
        <td><hexdisplay :value="programCounter" /></td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import { reactive, computed, defineComponent, toRefs } from '@vue/composition-api';

import hexdisplay from './HexDisplay.vue';
import systemState from './state';

export default defineComponent({
  name: 'registers',
  setup() {
    const state = reactive({
      registers: computed(() => systemState.state.registers),
      programCounter: computed(() => systemState.state.programCounter),
    });

    return {
      ...toRefs(state),
    };
  },
  components: {
    hexdisplay,
  },
});
</script>
<style lang="scss" scoped>
@import 'constants';

td {
  padding: 0.2rem;

  &:first-child {
    text-align: right;
    text-shadow: 0 0 $shadow-width $shadow-color;
  }
}
</style>