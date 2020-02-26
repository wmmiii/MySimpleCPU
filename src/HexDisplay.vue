<template>
  <div class="container">
    <span class="dull">0x</span> {{hexString}}
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs } from '@vue/composition-api';

import { useHexValue } from './hexvalue';

export default defineComponent({
  name: 'hex-display',
  props: {
    value: Number,
  },
  setup(props) {
    return {...toRefs(useHexValue(props))};
  },
});
</script>
<style lang="scss" scoped>
@import 'constants';

.container {
  background-color: $background-higher;
  padding: 0.5rem;
  border-radius: $border-radius;
  box-shadow: inset 0 $shadow-offset $shadow-width $shadow-color;
}

.dull {
  opacity: 0.5;
}
</style>