<template>
  <div class="col" :class="colClasses" :style="colStyle">
    <div style="border: 1px solid green; height: 50px;">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VCol",
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      }
    },
    data() {
      return {
        gutter: 0
      }
    },
    computed: {
      colClasses() {
        return [this.span && `col-${this.span}`, this.offset && `offset-${this.offset}`];
      },
      colStyle() {
        return {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px'
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .col {
    height: 50px;
    width: 50%;
  }

  $class: col-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: $n / 24 * 100%;
    }
  }

  $class: offset-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      margin-left: $n / 24 * 100%;
    }
  }
</style>