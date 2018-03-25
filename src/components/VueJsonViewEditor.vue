<template>
  <div id="json-view-editor" class="json-view-editor">
    <JsonCompose :jsonVar="composeSrc" :isRoot="true" :dataPath="calcDataPath()" :viewExpanded="viewExpanded"></JsonCompose>
  </div>
</template>

<script>
export default {
  name: 'VueJsonViewEditor',
  components: {
  },
  props: {
    // * 数据源
    src: {
      type: [Object, Array, Number, String, Boolean, Date, null, undefined, NaN],
      default () {
        return {}
      }
    },
    // * 是否展开视图
    viewExpanded: {
      type: [Boolean, Function],
      default: true
    },
    // * 省略这个长度以外的字符
    collapseString: {
      type: [Number, Boolean],
      default: -1
    },
    // * 缩进
    indentWidth: {
      type: [Number],
      default: 4
    },
    // * 是否能添加元素（数组和对象）
    add: {
      type: [Function, Boolean],
      default () {
        return false
      }
    },
    // * 是否能删除元素
    delete: {
      type: [Function, Boolean],
      default () {
        return false
      }
    },
    // * 是否能编辑元素
    edit: {
      type: [Function, Boolean],
      default () {
        return false
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {
    composeSrc () {
      return {
        value: this.src,
        jsType: this.getJsType(this.src)
      }
    }
  },
  methods: {
    getJsType (target) {
      const typeOrigin = Object.prototype.toString.call(target)
      return typeOrigin.substring(8, typeOrigin.length - 1)
    },
    calcDataPath () {
      return []
    },
    // isBasicType (target) {
    //   const jsType = this.getJsType(this.src)
    //   return jsType === 'String' || jsType === 'Number' || jsType === 'Boolean'
    // }
  },
}
</script>

<style lang="less" scoped>
  .json-view-editor {
    height: 100%;
    width: 100%;
  }
</style>
