<template>
  <div class="json-item-compose">
    <JsonObject v-if="varItem && varItem.jsType === 'Object'" :varItem="varItem" :dataPath="dataPath" :viewExpanded="$attrs.viewExpanded"></JsonObject>
    <JsonArray v-else-if="varItem && varItem.jsType === 'Array'" :varItem="varItem" :dataPath="dataPath" :viewExpanded="$attrs.viewExpanded"></JsonArray>
    <JsonString v-else-if="varItem && varItem.jsType === 'String'" :varItem="varItem" :dataPath="dataPath"></JsonString>
    <JsonNumber v-else-if="varItem && varItem.jsType === 'Number' && !isNaN(varItem.value)" :varItem="varItem" :dataPath="dataPath"></JsonNumber>
    <JsonBoolean v-else-if="varItem && varItem.jsType === 'Boolean'" :varItem="varItem" :dataPath="dataPath"></JsonBoolean>
    <JsonDate v-else-if="varItem && varItem.jsType === 'Date'" :varItem="varItem" :dataPath="dataPath"></JsonDate>
    <JsonUndefined v-else-if="varItem && varItem.jsType === 'Undefined'" :varItem="varItem" :dataPath="dataPath"></JsonUndefined>
    <JsonNull v-else-if="varItem && varItem.jsType === 'Null'" :varItem="varItem" :dataPath="dataPath"></JsonNull>
    <JsonNaN v-else-if="varItem && isNaN(varItem.value)" :varItem="varItem" :dataPath="dataPath"></JsonNaN>
    <div v-else>无对应类型</div>
  </div>
</template>

<script>
import _isEqual from 'lodash.isequal'

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
      type: Object
    }
  },
  data () {
    return {
      varItem: {}
    }
  },
  created () {
    this.varItem = this.setVarItem(this.jsonVar)
  },
  methods: {
    // getVarItem () {
    //   if (this.isRoot) {
    //     return this.jsonVar
    //   }
    //   return {
    //     jsType: this.jsonVar.jsType,
    //     key: this.jsonVar.key,
    //     value: this.jsonVar.value,
    //   }
    // },
    setVarItem (val) {
      if (this.isRoot) {
        return val
      }
      return {
        jsType: val.jsType,
        key: val.key,
        value: val.value,
      }
    },
    isNone () {
      return this.jsonVar.jsType !== 'Object' && this.jsonVar.jsType !== 'Array' && this.jsonVar.jsType !== 'String' && this.jsonVar.jsType !== 'Number' && this.jsonVar.jsType !== 'Boolean' && this.jsonVar.jsType !== 'Date' && this.jsonVar.jsType !== 'Undefined' && this.jsonVar.jsType !== 'Null'
    }
  },
  watch: {
    jsonVar (newVal, oldVal) {
      if (!_isEqual(newVal, oldVal)) {
        this.varItem = this.setVarItem(newVal)
        console.log('is not equal')
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
