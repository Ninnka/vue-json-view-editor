<template>
  <div class="json-var-array-row">
    <div class="row-start var-array-start">
      <i class="iconfont icon-down-arrow-normal i-pointer" v-if="showSubAttrs" @click="toggleExpand"></i>
      <i class="iconfont icon-right-arrow-normal i-pointer" v-else @click="toggleExpand"></i>
      <span v-if="this.varItem.key === undefined">"root"</span>
      <JsonItemKey v-else :itemKey="this.varItem.key"></JsonItemKey>
      <span class="bold-font white-space"> : </span>
      <span>[</span>
      <span v-if="!showSubAttrs">
        <JsonRowOmission></JsonRowOmission>
        <span>]</span>
      </span>
      <JsonTypeName typeName="array"></JsonTypeName>
      <object-size :target="varItem.value"></object-size>
    </div>
    <JsonContainer v-show="showSubAttrs" :varItem="varItem" :isNumberTypeKey="true" :dataPath="calcDataPath()"></JsonContainer>
    <div v-if="showSubAttrs" class="row-end var-array-end">
      <span :style="{
        marginLeft: '.4em'
      }">]</span>
    </div>
  </div>
</template>

<script>
import ObjectSize from '@components/common/ObjectSize'
import JsonTypeName from '@components/common/JsonTypeName'
import JsonItemKey from '@components/common/JsonItemKey'
import JsonRowOmission from '@components/common/JsonRowOmission'

export default {
  name: 'JsonArray',
  components: {
    ObjectSize,
    JsonTypeName,
    JsonItemKey,
    JsonRowOmission
  },
  props: {
    dataPath: {
      type: Array,
      default () {
        return []
      }
    },
    varItem: {
      type: [Object],
      default () {
        return []
      }
    },
    viewExpanded: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      showSubAttrs: true
    }
  },
  async created () {
    console.log('varItem', this.varItem)
    this.showSubAttrs = this.viewExpanded
  },
  computed: {
  },
  methods: {
    toggleExpand () {
      this.showSubAttrs = !this.showSubAttrs
    },
    calcDataPath () {
      return this.varItem.key ? this.dataPath.concat([this.varItem.key]) : this.dataPath
    }
  },
  watch: {
    viewExpanded (newVal, oldVal) {
      this.showSubAttrs = newVal
    }
  }
}
</script>

<style lang="less" scoped>
  .json-var-array-row {

  }
</style>
