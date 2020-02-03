<template>
  <div class="col" :class="[`col-${span}`]">
  <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "VCol",
    props: {
      span: {
        type: [Number, String]
      }
    }
  }
</script>

<style scoped lang="scss">
  .col {
    height: 100px;
    width: 50%;
    background-color: grey;
    border: 1px solid red;
  }

  $class: col-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: $n / 24 * 100%;
    }
  }
</style>