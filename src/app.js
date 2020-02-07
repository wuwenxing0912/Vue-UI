import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input';
import Row from './row';
import Col from './col';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Sider from './sider';
import Toast from './toast';
import plugin from './plugin';
import Tabs from './tabs';
import TabsHead from './tabs-head';
import TabsBody from './tabs-body';
import TabsItem from './tabs-item';
import TabsPane from './tabs-pane';

Vue.component('v-button', Button);
Vue.component('v-icon', Icon);
Vue.component('v-button-group', ButtonGroup);
Vue.component('v-input', Input);
Vue.component('v-row', Row);
Vue.component('v-col', Col);
Vue.component('v-layout', Layout);
Vue.component('v-header', Header);
Vue.component('v-content', Content);
Vue.component('v-footer', Footer);
Vue.component('v-sider', Sider);
Vue.component('v-toast', Toast);
Vue.use(plugin);
Vue.component('v-tabs', Tabs);
Vue.component('v-tabs-head', TabsHead);
Vue.component('v-tabs-body', TabsBody);
Vue.component('v-tabs-item', TabsItem);
Vue.component('v-tabs-pane', TabsPane);

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    message: '测试',
    selectedTab: 'tab1'
  },
  methods: {
    inputChange(e) {
      console.log(e);
    },
    showMessage() {
      this.$toast('提示框', {
        closeButton: {
          text: '好的',
          callback: function(toast) {
            toast.log();
          }
        },
        position: 'bottom'
      });
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