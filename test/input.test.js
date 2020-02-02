import Button from "../src/button";

const expect = chai.expect;
import Vue from 'vue';
import Input from '../src/input';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.be.ok;
  });
});

describe('props', () => {
  it('接收 value', () => {
    const Constructor = Vue.extend(Input);
    const vm = new Constructor({
      propsData: {
        value: 'AA'
      }
    }).$mount();
    const inputElement = vm.$el.querySelector('input');
    expect(inputElement.value).to.equal('AA');
    vm.$destroy()
  });

  it('接收 disabled', () => {
    const Constructor = Vue.extend(Input);
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount();
    const inputElement = vm.$el.querySelector('input');
    expect(inputElement.disabled).to.equal(true);
    vm.$destroy()
  });

  it('接收 readonly', () => {
    const Constructor = Vue.extend(Input);
    const vm = new Constructor({
      propsData: {
        readonly: true
      }
    }).$mount();
    const inputElement = vm.$el.querySelector('input');
    expect(inputElement.readOnly).to.equal(true);
    vm.$destroy()
  });

  it('接收 error', () => {
    const Constructor = Vue.extend(Input);
    const vm = new Constructor({
      propsData: {
        error: 'error'
      }
    }).$mount();
    const useElements = vm.$el.querySelectorAll('use');
    expect(useElements[0].getAttribute('xlink:href')).to.equal('#icon-error');
    const spanElement = vm.$el.querySelector('.error-message');
    expect(spanElement.innerHTML).to.equal('error');
    vm.$destroy()
  });
});

describe('事件', () => {
  it('支持change 事件', () => {
    const Constructor = Vue.extend(Input);
    const vm = new Constructor({
      propsData: {
        error: 'error'
      }
    }).$mount();
    const callback = sinon.fake();
    vm.$on('change', callback);
    const changeEvent = new Event('change');
    Object.defineProperty(
      changeEvent, 'target', {
        value: {value: 'hi'}, enumerable: true
      }
    );
    const inputElement = vm.$el.querySelector('input');
    inputElement.dispatchEvent(changeEvent);
    expect(callback).to.have.been.calledWith('hi');
  });

  it('支持 input 事件', () => {
    const Constructor = Vue.extend(Input);
    const vm = new Constructor({
      propsData: {
        error: 'error'
      }
    }).$mount();
    const callback = sinon.fake();
    vm.$on('input', callback);
    const inputEvent = new Event('input');
    Object.defineProperty(
      inputEvent, 'target', {
        value: {value: 'hi'}, enumerable: true
      }
    );
    const inputElement = vm.$el.querySelector('input');
    inputElement.dispatchEvent(inputEvent);
    expect(callback).to.have.been.calledWith('hi');
  });

  it('支持 focus 事件', () => {
    const Constructor = Vue.extend(Input);
    const vm = new Constructor({
      propsData: {
        error: 'error'
      }
    }).$mount();
    const callback = sinon.fake();
    vm.$on('focus', callback);
    const focusEvent = new Event('focus');
    Object.defineProperty(
      focusEvent, 'target', {
        value: {value: 'hi'}, enumerable: true
      }
    );
    const inputElement = vm.$el.querySelector('input');
    inputElement.dispatchEvent(focusEvent);
    expect(callback).to.have.been.calledWith('hi');
  });

  it('支持 blur 事件', () => {
    const Constructor = Vue.extend(Input);
    const vm = new Constructor({
      propsData: {
        error: 'error'
      }
    }).$mount();
    const callback = sinon.fake();
    vm.$on('blur', callback);
    const blurEvent = new Event('blur');
    Object.defineProperty(
      blurEvent, 'target', {
        value: {value: 'hi'}, enumerable: true
      }
    );
    const inputElement = vm.$el.querySelector('input');
    inputElement.dispatchEvent(blurEvent);
    expect(callback).to.have.been.calledWith('hi');
  });

});