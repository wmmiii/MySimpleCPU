<template>
  <div>
    <h2>Memory</h2>
    <table>
      <tr><th>Address</th><th>Value</th></tr>
      <tr v-for="(value, address) in memory" v-bind:key="address">
        <th>{{address}}</th>
        <th>{{value}}</th>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import { reactive, computed, defineComponent } from '@vue/composition-api';

import systemState from './state';

export default defineComponent({
  name: 'memory',
  setup() {
    const state = reactive({
      memory: computed(() => systemState.state.memory),
    });

    return state;
  },
});
</script>
<style scoped>

</style>