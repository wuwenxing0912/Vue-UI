<template>
  <div class="tabs-item">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "VTabsItem",
    props: {
      name: {
        type: String,
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="scss">
  .tabs-item {}
</style>