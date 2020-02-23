<template>
  <div>
    <h1>{{title}}</h1>
    <registers />
  </div>
</template>
<script lang="ts">
import { reactive, defineComponent } from '@vue/composition-api';
import registers from './registers.vue';

export default defineComponent({
  name: 'app',
  setup() {
    const state = reactive({
      title: 'My Simple CPU'
    });

    return state;
  },
  components: {registers }
});
</script>
<style scoped>

</style>