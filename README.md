# vue-json-view-editor

> A vue component that format json

## Install

```bash
npm i -S vue-json-view-editor
```

## Example

![example](./example.png)

## Usage

```javascript
// main.js
// ...
import JsonViewEditor from 'vue-json-view-editor';
Vue.use(JsonViewEditor);
```

```javascript
// view.vue
export default {
  name: 'View',

  data () {
    return {
      testSrc: {
        dq: 'dgv',
        gbiowarr: [
          1,
          2.42,
          'btiuer',
          true,
          false,
          null,
          undefined,
          NaN
        ],
        inerr: {
          foiwe: {
            goriej: 'frj',
            vvwi: false,
            nupoy: {
              gnpoxdv: 321,
              tgoisnbv3: true,
              lasgtr: null
            },
            ieonv: new Date()
          }
        }
      },
      viewExpanded: true
    }
  },

  async mounted () {
    // test
    setTimeout(() => {
      this.testSrc = {
        ...this.testSrc,
        bvs: {
          gtis: 'gtrj'
        }
      }
    }, 2000)
  },

  methods: {
    addJsonRow (data) {

    },

    deleteJsonRow (data) {

    },

    editJsonRow (data) {

    }
  },
}
```


```html
<!-- view.vue -->
<template>
  <vue-json-view-editor
    :src="testSrc"
    :viewExpanded="viewExpanded"
    :indentWidth="4"
    :add="addJsonRow"
    :delete="deleteJsonRow"
    :edit="editJsonRow">
  </vue-json-view-editor>
</template>
```

### JsonViewEditor Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | --- | --- | ---- | ----- |
| src | 数据源 | Object, Array, Number, String, Boolean, Date, null, undefined, NaN | - | {} |
| viewExpanded | 是否展开视图 | Boolean | - | true |
| collapseString | 省略这个长度以外的字符，-1表示不省略 | Number | - | -1 |
| indentWidth | 缩进的长度 | Number | - | 4 |
| add | 添加属性后的回调 | Function/Boolean | - | false |
| delete | 删除属性后的回调 | Function/Boolean | - | false |
| edit | 修改属性后的回调 | Function/Boolean | - | false |

## RoadMap

1. 完善添加、修改、删除功能

## Preview Demo

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run demo
```

## Build Setup

``` bash
# install dependencies
npm install

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 使用方法

> 具体请查看 `/demo/App.vue`
