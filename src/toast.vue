<template>
  <div class="toast" ref="toast">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose()">
      {{closeButton.text}}
    </span>
  </div>
</template>

<script>
  export default {
    name: "VToast",
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 50
      },
      closeButton: {
        type: Object,
        default: () => {
          return {
            text: '知道了',
            callback: undefined
          };
        }
      },
      enableHtml: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.updateLineStyles();
      this.executeAutoClose();
    },
    methods: {
      updateLineStyles() {
        this.$nextTick(() => {
          this.$refs.line.style.height = this.$refs.toast.getBoundingClientRect().height + 'px';
        });
      },
      executeAutoClose() {
        if (this.autoClose) {
          setTimeout(() => {
            this.close();
          }, this.autoCloseDelay * 1000);
        }
      },
      close() {
        this.$el.remove();
        this.$destroy();
      },
      log() {
        console.log('测试');
      },
      onClickClose() {
        this.close();
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback(this);
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  $font-size: 14px;
  $toast-height: 40px;

  .toast {
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0,0,0,0.75);
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.50);
    color: white;
    font-size: $font-size;
    min-height: $toast-height;
    padding: 0 16px;
    border-radius: 4px;
    line-height: 1.8;
    .message {
      padding: 3px 0;
    }
    .line {
      height: 100%;
      border-left: 1px solid #666;
      margin-left: 16px;
    }
    .close {
      padding-left: 16px;
      flex-shrink: 0;
    }
  }
</style>