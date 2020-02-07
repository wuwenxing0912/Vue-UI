<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VTabsHead",
    inject: ['eventBus'],
    props: {

    },
    created() {

    }
  }
</script>

<style scoped lang="scss">
  .tabs-head {
    display: flex;
    height: 40px;
    border: 1px solid red;
    justify-content: flex-start;
    align-items: center;
    > .actions-wrapper {
      margin-left: auto;
    }
  }
</style>