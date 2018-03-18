<template>
  <div id="json-view-editor" class="json-view-editor">
    <JsonCompose :jsonVar="composeSrc" :isRoot="true" :dataPath="calcDataPath()" :viewExpanded="viewExpanded"></JsonCompose>
    <!-- <json-container v-else :varItem="composeSrc" :isRoot="true"></json-container> -->
  </div>
</template>

<script>
export default {
  name: 'VueJsonViewEditor',
  components: {
  },
  props: {
    src: {
      type: [Object, Array, Number, String, Boolean, null, undefined, NaN],
      default () {
        return {}
      }
    },
    viewExpanded: {
      type: [Boolean, Function],
      default: true
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
    }
    // isBasicType (target) {
    //   const jsType = this.getJsType(this.src)
    //   return jsType === 'String' || jsType === 'Number' || jsType === 'Boolean'
    // }
  }
}
</script>

<style lang="less" scoped>
  .json-view-editor {
    height: 100%;
    width: 100%;
  }
</style>
