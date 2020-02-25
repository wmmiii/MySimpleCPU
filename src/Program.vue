<template>
  <div>
    <h2>Program</h2>
    <textarea v-model="programText"></textarea>
    <button @click="execute">Execute</button>
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
    });

    function execute() {
      console.log(state.programText);
      const binary = assemble(state.programText);
      console.log(binary);
      loadProgram(binary);
    }

    return {
      ...toRefs(state),
      execute
    };
  },
});
</script>
<style scoped>

</style>