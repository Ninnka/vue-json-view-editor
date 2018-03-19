<template>
  <div class="json-item-compose">
    <JsonObject v-if="jsonVar && jsonVar.jsType === 'Object'" :varItem="getVarItem()" :dataPath="dataPath" :viewExpanded="$attrs.viewExpanded"></JsonObject>
    <JsonArray v-else-if="jsonVar && jsonVar.jsType === 'Array'" :varItem="getVarItem()" :dataPath="dataPath" :viewExpanded="$attrs.viewExpanded"></JsonArray>
    <JsonString v-else-if="jsonVar && jsonVar.jsType === 'String'" :varItem="getVarItem()" :dataPath="dataPath"></JsonString>
    <JsonNumber v-else-if="jsonVar && jsonVar.jsType === 'Number' && !isNaN(jsonVar.value)" :varItem="getVarItem()" :dataPath="dataPath"></JsonNumber>
    <JsonBoolean v-else-if="jsonVar && jsonVar.jsType === 'Boolean'" :varItem="getVarItem()" :dataPath="dataPath"></JsonBoolean>
    <JsonDate v-else-if="jsonVar && jsonVar.jsType === 'Date'" :varItem="getVarItem()" :dataPath="dataPath"></JsonDate>
    <JsonUndefined v-else-if="jsonVar && jsonVar.jsType === 'Undefined'" :varItem="getVarItem()" :dataPath="dataPath"></JsonUndefined>
    <JsonNull v-else-if="jsonVar && jsonVar.jsType === 'Null'" :varItem="getVarItem()" :dataPath="dataPath"></JsonNull>
    <JsonNaN v-else-if="jsonVar && isNaN(jsonVar.value)" :varItem="getVarItem()" :dataPath="dataPath"></JsonNaN>
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
      type: [Object, Array, Number, String, Boolean, Date, null, undefined, NaN],
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
