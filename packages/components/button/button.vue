<template>
  <button v-click-attr class="fi-button fi-button-default">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
import {} from 'vue'
export default {
  name: 'FiButton',
  props: {},
  setup() {
    return {}
  }
}
</script>
