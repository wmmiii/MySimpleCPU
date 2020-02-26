<template>
  <div>
    <h2>Memory</h2>
    <table>
      <tr><th>Address</th><th>Value</th></tr>
      <tr v-for="(value, address) in memory"
          v-bind:key="address"
          :class="programCounter == address ? 'pc' : ''">
        <td>{{address.toString(16).toUpperCase()}}</td>
        <td>
          <hexdisplay :value="value" />
        </td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import { reactive, computed, defineComponent, toRefs } from '@vue/composition-api';

import hexdisplay from './HexDisplay.vue';
import systemState from './state';

export default defineComponent({
  name: 'memory',
  setup() {
    const state = reactive({
      memory: computed(() => systemState.state.memory),
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

.pc {
  background-color: $background-highlight;
}
</style>