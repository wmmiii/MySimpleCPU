<template>
  <div>
    <h1>{{title}}</h1>
    <div class="container">
      <program />
      <registers />
      <memory />
    </div>
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
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  width: 100%;

  & > div {
    flex: 1;
  }
}
</style>