<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "VTabsPane",
    props: {
      name: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .tabs-pane {}
</style>