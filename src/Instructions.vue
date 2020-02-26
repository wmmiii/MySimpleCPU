<template>
  <div>
    <h2>Instructions</h2>
    <table>
      <tr><th>Code</th><th>Arguments</th><th>Description</th></tr>
      <tr v-for="instruction of instructions" :key="instruction.opcode">
        <td>{{instruction.symbol}}</td>
        <td>{{instruction.arguments.join(' ')}}</td>
        <td>{{instruction.description}}</td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import { reactive, defineComponent, toRefs, computed } from '@vue/composition-api';

import { instructions } from './instructions';

export default defineComponent({
  name: 'instructions',
  setup() {
    const state = reactive({
      instructions: computed(() => instructions)
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>
<style lang="scss" scoped>
@import 'constants';

button {
  display: block;
}

.error {
  background-color: $background-inverse;
  border-radius: $border-radius;
  color: $background;
  padding: 0.5rem;
}
</style>