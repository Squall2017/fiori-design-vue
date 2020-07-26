<template>
  <button class="fi-button">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'FiButton',
  props: {},
  setup($props, context) {
    console.log('props', $props)
    console.log('procontextps', context.slots.default)
  }
}
</script>
