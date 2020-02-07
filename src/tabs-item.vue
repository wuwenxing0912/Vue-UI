<template>
  <div class="tabs-item" @click="activeTabItem()" :class="itemClasses">
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
          active: this.active
        };
      }
    },
    created() {
      this.eventBus.$on('update:selected', (name) => {
        this.active = this.name === name;
      });
    },
    methods: {
      activeTabItem() {
        this.eventBus.$emit('update:selected', this.name);
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
    &.active {
      background: red;
    }
  }
</style>