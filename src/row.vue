<template>
  <div class="row" :style="rowStyle" :class="rowClasses">
  <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "VRow",
    props: {
      gutter: {
        type: [Number, String]
      },
      align: {
        type: String,
        validator(value){
          return ['left', 'center', 'right'].includes(value);
        }
      }
    },
    mounted() {
      this.$children.forEach(vm => {
        vm.gutter = this.gutter
      })
    },
    computed: {
      rowStyle() {
        return {
          marginLeft: -this.gutter / 2 + 'px',
          marginRight: -this.gutter / 2 + 'px'
        }
      },
      rowClasses() {
        return [this.align && `align-${this.align}`]
      }
    }
  }
</script>

<style scoped lang="scss">
  .row {
    display: flex;
    margin-bottom: 10px;
    &.align-left {
      justify-content: flex-start;
    }
    &.align-right {
      justify-content: flex-end;
    }
    &.align-center {
      justify-content: center;
    }
  }
</style>