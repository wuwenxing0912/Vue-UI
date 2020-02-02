import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input'

Vue.component('v-button', Button);
Vue.component('v-icon', Icon);
Vue.component('v-button-group', ButtonGroup);
Vue.component('v-input', Input);

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    message: '测试'
  },
  methods: {
    inputChange(e) {
      console.log(e);
    }
  }
});

import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies);

const expect = chai.expect;

{
  const constructor = Vue.extend(Button);
  const vm = new constructor({
    propsData: {
      icon: 'settings'
    }
  });
  vm.$mount();
  let useElement = vm.$el.querySelector('use');
  let href = useElement.getAttribute('xlink:href');
  expect(href).to.eq('#icon-settings');
  vm.$el.remove();
  vm.$destroy();
}

{
  const constructor = Vue.extend(Button);
  const vm = new constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  });
  vm.$mount();
  let useElement = vm.$el.querySelector('use');
  let href = useElement.getAttribute('xlink:href');
  expect(href).to.eq('#icon-loading');
  vm.$el.remove();
  vm.$destroy();
}

{
  const div = document.createElement('div');
  document.body.appendChild(div);
  const constructor = Vue.extend(Button);
  const vm = new constructor({
    propsData: {
      icon: 'settings'
    }
  });
  vm.$mount(div);
  let svg = vm.$el.querySelector('svg');
  let {order} = window.getComputedStyle(svg);
  expect(order).to.eq('1');
  vm.$el.remove();
  vm.$destroy();
}

{
  const div = document.createElement('div');
  document.body.appendChild(div);
  const constructor = Vue.extend(Button);
  const vm = new constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  });
  vm.$mount(div);
  let svg = vm.$el.querySelector('svg');
  let {order} = window.getComputedStyle(svg);
  expect(order).to.eq('2');
  vm.$el.remove();
  vm.$destroy();
}

{
  const constructor = Vue.extend(Button);
  const vm = new constructor({
    propsData: {
      icon: 'settings'
    }
  });
  vm.$mount();
  let spy = chai.spy(function() {});
  vm.$on('click', spy);

  let button = vm.$el;
  button.click();
  expect(spy).to.have.been.called();
  vm.$el.remove();
  vm.$destroy();
}