<template>
  <div class="v-group-button">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    mounted() {
      for (let node of this.$el.children) {
        if (node.nodeName.toLowerCase() !== 'button') {
          console.warn('v-button-group的子元素应都是v-button')
        }
      }
    }
  }
</script>

<style lang="scss">
  .v-group-button {
    display: inline-flex;
    vertical-align: middle;
    > .v-button {
      border-radius: 0;
      &:not(:first-child) {
        margin-left: -1px;
      }
      &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius)
      }
      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius)
      }
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>
