<template>
  <div class="json-var-undefined-row basic-row">
    <span v-if="this.varItem.key === undefined">"root"</span>
    <JsonItemKey v-else :itemKey="this.varItem.key"></JsonItemKey>
    <span class="bold-font white-space"> : </span>
    <span class="json-value-color">
      <JsonTypeName typeName="undefined" class="control-margin-right json-value-color"></JsonTypeName>
      undefined
    </span>
  </div>
</template>

<script>
import JsonTypeName from '@/components/common/JsonTypeName'
import JsonItemKey from '@/components/common/JsonItemKey'

export default {
  name: 'JsonUndefined',
  components: {
    JsonTypeName,
    JsonItemKey
  },
  props: {
    dataPath: {
      type: Array,
      default () {
        return []
      }
    },
    varItem: {
      type: [Object, undefined],
      default () {
        return {}
      }
    }
  },
  data () {
    return {}
  },
  async created () {

  },
  async mounted () {

  },
  methods: {},
  computed: {},
}
</script>

<style lang="less" scoped>
  .json-var-undefined-row {
    .control-margin-right {
      margin-right: 5px;
    }
    .json-value-color {
      color: rgb(110, 109, 110);
      background-color: rgb(225, 235, 230);
    }
  }
</style>
