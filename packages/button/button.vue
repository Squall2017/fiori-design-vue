<template>
  <button class="fi-button">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
// import { ref } from 'vue'
export default {
  name: 'FiButton',
  data() {
    return {
      color: 'red'
    }
  },
  setup() {
    // const color = ref('--sapButton_Hover_TextColor')
    // // computed(() => {
    // //   if ($props.design) {
    // //     color.value = '--sapButton_Hover_TextColor'
    // //   }
    // // })
    // return {
    //   color
    // }
  }
}
</script>

<style :vars="{ color }">
.fi-button {
  color: var(--color);
}
</style>
