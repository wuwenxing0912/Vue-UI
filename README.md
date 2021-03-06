## 一个Vue UI组件库
[![Build Status](https://travis-ci.org/wuwenxing0912/Vue-UI.svg?branch=master)](https://travis-ci.org/wuwenxing0912/Vue-UI)

## 介绍

## 安装
## 开始使用

1. 添加 CSS 样式
  使用本框架前，请在 CSS 中开启 border-box

  ```
  *,*::before,*::after{box-sizing: border-box;}
  ```
  IE 8 及以上浏览器都支持此样式。

  你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
  ```
  html {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
  }
  ```
  IE 15 及以上浏览器都支持此样式。

2. 安装 vue-ui-temporary
  ```
  npm i --save vue-ui-temporary
  ```
3. 引入 vue-ui-temporary
  ```
  import {Button, ButtonGroup, Icon} from 'vue-ui-temporary'
  import 'vue-ui-temporary/dist/index.css'
使用本框架前，请在 CSS 中开启 border-box
  export default {
    name: 'app',
    components: {
      'g-button': Button,
      'g-icon': Icon
    }
  }
  ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码