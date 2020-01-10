import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group'

Vue.component('v-button', Button);
Vue.component('v-icon', Icon);
Vue.component('v-button-group', ButtonGroup);

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true
  }
})