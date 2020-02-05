import Toast from './toast';

let currentToast;
export  default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {
      if (currentToast) {
        currentToast.close();
      }
      currentToast = createToast({Vue,
        message,
        toastOptions,
        onClose: () => {
        currentToast = null;
        }
      });
    }
  }
}

function createToast({Vue, message, toastOptions, onClose}) {
  let Constructor = Vue.extend(Toast);
  let toast = new Constructor({
    propsData: toastOptions
  });
  toast.$slots.default = [message];
  toast.$mount();
  toast.$on('close', onClose);
  document.body.appendChild(toast.$el);
  return toast;
}
