<template>
  <div class="json-var-null-row basic-row">
    <span v-if="this.varItem.key === undefined">"root"</span>
    <JsonItemKey v-else :itemKey="this.varItem.key"></JsonItemKey>
    <span class="bold-font white-space"> : </span>
    <span class="json-value-color">
      <JsonTypeName typeName="null" class="control-margin-right json-value-color"></JsonTypeName>
      null
    </span>
  </div>
</template>

<script>
import JsonTypeName from '@components/common/JsonTypeName'
import JsonItemKey from '@components/common/JsonItemKey'

export default {
  name: 'JsonNull',
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
      type: [Object, null],
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
  .json-var-null-row {
    .control-margin-right {
      margin-right: 5px;
    }
    .json-value-color {
      color: rgb(106, 106, 0);
    }
  }
</style>
