<template>
  <button class="v-button" v-bind:class="{[`icon-${iconPosition}`]: true}" v-on:click="$emit('click')">
    <v-icon v-bind:icon-name="icon" v-if="icon && !loading" class="icon"/>
    <v-icon class="loading icon" v-if="loading" icon-name="loading"/>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default {
    props: {
      icon: {
        type: String
      },
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          return !(value !== 'left' && value !== 'right');
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .v-button {
    @keyframes loading {
      0% {transform: rotate(0deg);}
      100% {transform: rotate(360deg);}
    }
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);

    > .icon {
      order: 1;
      margin-right: 0.4em;
      margin-left: 0;
    }

    > .content {
      order: 2;
    }

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }

    &.icon-right {
      > .icon {
        order: 2;
        margin-left: 0.4em;
        margin-right: 0;
      }

      > .content {
        order: 1;
      }
    }
    .loading {
      animation: loading 1s infinite linear;
    }
  }
</style>