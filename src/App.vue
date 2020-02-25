<template>
  <div>
    <h1>{{title}}</h1>
    <program />
    <registers />
    <memory />
  </div>
</template>
<script lang="ts">
import { reactive, defineComponent } from '@vue/composition-api';

import memory from './Memory.vue';
import program from './Program.vue';
import registers from './Registers.vue';

export default defineComponent({
  name: 'app',
  setup() {
    const state = reactive({
      title: 'My Simple CPU'
    });

    return state;
  },
  components: {
    registers,
    program,
    memory,
  }
});
</script>
<style scoped>

</style>