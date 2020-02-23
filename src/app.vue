<template>
  <h1>{{title}}</h1>
</template>
<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const state = reactive({
      title: 'My Simple CPU'
    });

    return state;
  }
});
</script>
<style scoped>

</style>