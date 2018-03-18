<template>
  <div class="json-item-compose">
    <div v-if="jsonVar && jsonVar.jsType === 'Object'">
      <JsonObject :varItem="getVarItem()" :dataPath="dataPath" :viewExpanded="$attrs.viewExpanded"></JsonObject>
    </div>
    <div v-else-if="jsonVar && jsonVar.jsType === 'Array'"></div>
    <div v-else-if="jsonVar && jsonVar.jsType === 'String'">
      <JsonString :varItem="getVarItem()" :dataPath="dataPath"></JsonString>
    </div>
    <div v-else-if="jsonVar && jsonVar.jsType === 'Number'"></div>
    <div v-else-if="jsonVar && jsonVar.jsType === 'Boolean'"></div>
    <div v-else-if="jsonVar && jsonVar.jsType === 'Undefined'"></div>
    <div v-else-if="jsonVar && jsonVar.jsType === 'Null'"></div>
    <div v-else>无对应类型</div>
  </div>
</template>

<script>
export default {
  name: 'JsonCompose',
  components: {
  },
  props: {
    isRoot: false,
    dataPath: {
      type: Array,
      default () {
        return []
      }
    },
    jsonVar: {
      type: [Object, Array, Number, String, Boolean, null, undefined, NaN],
      default: ''
    }
  },
  data () {
    return {

    }
  },
  methods: {
    getVarItem () {
      if (this.isRoot) {
        return this.jsonVar
      }
      return {
        jsType: this.jsonVar.jsType,
        key: this.jsonVar.key,
        value: this.jsonVar.value,
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .json-item-compose {
    width: 100%;
    height: 100%;
  }
</style>
