const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('v-tabs', Tabs);
Vue.component('v-tabs-head', TabsHead);
Vue.component('v-tabs-body', TabsBody);
Vue.component('v-tabs-item', TabsItem);
Vue.component('v-tabs-pane', TabsPane);

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Tabs', () => {

  it('存在.', () => {
    expect(Tabs).to.exist
  });

  it('接受 selected 属性', (done) => {

    const div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = `
      <v-tabs selected='tab2'>
      <v-tabs-head>
        <v-tabs-item name="tab1">Tab 1</v-tabs-item>
        <v-tabs-item name="tab2">Tab 2</v-tabs-item>
        <v-tabs-item name="tab3">Tab 3</v-tabs-item>
      </v-tabs-head>
      <v-tabs-body>
        <v-tabs-pane name="tab1">Tab 1 文字文字</v-tabs-pane>
        <v-tabs-pane name="tab2">Tab 2 文字文字</v-tabs-pane>
        <v-tabs-pane name="tab3">Tab 3 文字文字</v-tabs-pane>
      </v-tabs-body>
    </v-tabs>
    `;
    let vm = new Vue({
      el: div
    });
    vm.$nextTick(() => {
      let x = vm.$el.querySelector(`.tabs-item[data-name="tab2"]`);
      expect(x.classList.contains('active')).to.be.true;
      done()
    })
  });

  it('可以接受 direction prop', () => {

  })

});