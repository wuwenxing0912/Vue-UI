<template>
  <svg class="v-icon">
    <use v-bind:xlink:href="`#icon-${iconName}`"></use>
  </svg>
</template>

<script>
  import './svg'
  export default {
    props: ['iconName']
  }
</script>

<style scoped lang="scss">
  .v-icon {
    width: 1em;
    height: 1em;
  }
</style>