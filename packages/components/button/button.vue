<template>
  <button
    ref="root"
    class="fi-button fi-button-default"
    v-click-outside="onClickOutside"
  >
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
import {} from 'vue'
export default {
  name: 'FiButton',
  props: {},
  setup() {
    function onClickOutside() {}
    return { onClickOutside }
  }
}
</script>
