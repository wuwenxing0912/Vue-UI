<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "VTabs",
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator (value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    data() {
      return {
        eventBus: new Vue()
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      };
    },
    mounted() {
      this.$children.forEach((vm)=> {
        if (vm.$options.name === 'VTabsHead') {
          vm.$children.forEach((item)=> {
            if (item.$options.name === 'VTabsItem' && item.name === this.selected) {
              this.eventBus.$emit('update:selected', this.selected, item);
            }
          })
        }
      });
    }

  }
</script>

<style scoped lang="scss">
  .tabs {}
</style>