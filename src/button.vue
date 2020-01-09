<template>
  <button class="v-button" v-bind:class="{[`icon-${iconPosition}`]: true}">
    <v-icon v-bind:icon-name="icon"  v-if="icon" class="icon"></v-icon>
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
      iconPosition: {
        type: String,
        default: 'left',
        validator (value) {
          return value !== 'left' && value !== 'right' ? false : true;
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .v-button {
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
  }
</style>