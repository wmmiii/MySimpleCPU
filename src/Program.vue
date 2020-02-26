<template>
  <div>
    <h2>Program</h2>
    <textarea v-model="programText"></textarea>
    <div v-if="error" class="error">{{error}}</div>
    <button @click="load">Load</button>
  </div>
</template>
<script lang="ts">
import { reactive, defineComponent, toRefs } from '@vue/composition-api';

import { assemble } from './assembler';
import { loadProgram } from './cpu';

export default defineComponent({
  name: 'program',
  setup() {
    const state = reactive({
      programText: 'LD 0 1',
      error: undefined,
    });

    function load() {
      try {
        loadProgram(assemble(state.programText));
        state.error = undefined;
      } catch (error) {
        state.error = error;
      }
    }

    return {
      ...toRefs(state),
      load
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