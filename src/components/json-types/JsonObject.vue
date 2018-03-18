<template>
  <div class="json-var-object-row">
    <div class="var-object-start">
      <i class="iconfont icon-down-arrow-normal" v-if="showSubAttrs" @click="toggleExpand"></i>
      <i class="iconfont icon-right-arrow-normal" v-else @click="toggleExpand"></i>
      <span v-if="this.varItem.key === undefined">"root"</span>
      <span v-else>"{{ this.varItem.key }}"</span>
      <span class="bold-font white-space"> : </span>
      <span>{</span>
      <span class="white-space" v-if="!showSubAttrs">... }</span>
      <object-size :target="varItem.value"></object-size>
    </div>
    <JsonContainer v-if="showSubAttrs" :varItem="varItem" :dataPath="calcDataPath()"></JsonContainer>
    <div class="var-object-end">
      <span>}</span>
    </div>
  </div>
</template>

<script>
import ObjectSize from '@components/common/ObjectSize'

export default {
  name: 'JsonObject',
  components: {
    ObjectSize
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
  .json-var-object-row {

  }
</style>
