<template>
  <div class="json-var-array-row" v-mouseaction>
    <div class="row-start var-array-start">
      <i class="iconfont icon-down-arrow-normal i-pointer" v-if="showSubAttrs" @click="toggleExpand"></i>
      <i class="iconfont icon-right-arrow-normal i-pointer" v-else @click="toggleExpand"></i>
      <span v-if="this.varItem.key === undefined">"root"</span>
      <JsonItemKey v-else :itemKey="this.varItem.key"></JsonItemKey>
      <span class="bold-font white-space"> : </span>
      <span>[</span>
      <span v-show="!showSubAttrs">
        <JsonRowOmission></JsonRowOmission>
        <span>]</span>
      </span>
      <JsonTypeName typeName="array"></JsonTypeName>
      <object-size :target="varItem.value"></object-size>
      <JsonActions v-show="mouseInArea" :actionList="actionList" @action:copy="copyAction" @action:add="addAction" @action:delete="deleteAction" @action:edit="editAction"></JsonActions>
    </div>
    <JsonContainer v-show="showSubAttrs" :varItem="varItem" :isNumberTypeKey="true" :dataPath="calcDataPath()"></JsonContainer>
    <div v-show="showSubAttrs" class="row-end var-array-end">
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
import JsonActions from '@components/common/JsonActions'

import mouseActionMixin from '@mixins/mouse-action-mixin'

export default {
  name: 'JsonArray',
  components: {
    ObjectSize,
    JsonTypeName,
    JsonItemKey,
    JsonRowOmission,
    JsonActions
  },
  mixins: [
    mouseActionMixin
  ],
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
        return {}
      }
    },
    viewExpanded: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      showSubAttrs: true,
      actionList: ['copy', 'add', 'delete', 'edit']
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
    },
    copyAction () {
      console.log('copyAction')
    },
    addAction () {
      console.log('addAction')
    },
    deleteAction () {
      console.log('deleteAction')
    },
    editAction () {
      console.log('editAction')
    },
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
