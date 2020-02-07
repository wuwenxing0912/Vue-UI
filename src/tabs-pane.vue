<template>
  <div class="tabs-pane" :class="paneClasses" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "VTabsPane",
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
      }
    },
    computed: {
      paneClasses() {
        return {
          active: this.active
        };
      }
    },
    created() {
      this.eventBus.$on('update:selected', (name) => {
        this.active = this.name === name;
      });
    }
  }
</script>

<style scoped lang="scss">
  .tabs-pane {
    &.active {
      background: red;
    }
  }
</style>