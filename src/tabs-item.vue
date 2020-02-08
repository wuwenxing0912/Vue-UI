<template>
  <div class="tabs-item" @click="activeTabItem()" :class="itemClasses" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "VTabsItem",
    inject: ['eventBus'],
    data() {
      return {
        active: false
      }
    },
    props: {
      name: {
        type: String,
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      itemClasses() {
        return {
          active: this.active,
          disabled: this.disabled
        };
      }
    },
    created() {
      if (this.eventBus) {
        this.eventBus.$on('update:selected', (name) => {
          this.active = this.name === name;
        });
      }
    },
    methods: {
      activeTabItem() {
        if (this.disabled) {
          return
        }
        this.eventBus && this.eventBus.$emit('update:selected', this.name, this);
        // this.$emit('click', this);
      }
    }
  }
</script>

<style scoped lang="scss">
  .tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;

    &.active {
      color: blue;
      /*font-weight: bold;*/
    }

    &.disabled {
      color: grey;
      cursor: not-allowed;
    }
  }
</style>