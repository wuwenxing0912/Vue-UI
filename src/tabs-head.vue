<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
    <div class="line" ref="line"></div>
  </div>
</template>

<script>
  export default {
    name: "VTabsHead",
    inject: ['eventBus'],
    props: {},
    mounted() {
      this.eventBus.$on('update:selected', (name, vm) => {
        let {width, height, top, left} = vm.$el.getBoundingClientRect();
        this.$refs.line.style.width = `${width}px`;
        this.$refs.line.style.left = (left + 0) - 20 + 'px';
      });
    }
  }
</script>

<style scoped lang="scss">
  .tabs-head {
    display: flex;
    height: 40px;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    border-bottom: 1px solid #ddd;
    > .actions-wrapper {
      margin-left: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1em;
    }

    .line {
      position: absolute;
      border-bottom: 1px solid blue;
      bottom: 0;
      transition: all 300ms;
    }
  }
</style>