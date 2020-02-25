<template>
  <div>
    <h2>Registers</h2>
    <table>
      <tr><th>Register</th><th>Value</th></tr>
      <tr v-for="(register, index) in registers" v-bind:key="index">
        <th>{{index}}</th>
        <th>{{register}}</th>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import { reactive, computed, defineComponent } from '@vue/composition-api';

import systemState from './state';

export default defineComponent({
  name: 'registers',
  setup() {
    const state = reactive({
      registers: computed(() => systemState.state.registers),
    });

    return state;
  },
});
</script>
<style scoped>

</style>