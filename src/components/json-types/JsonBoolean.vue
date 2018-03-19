<template>
  <div class="json-var-boolean-row basic-row">
    <span v-if="this.varItem.key === undefined">"root"</span>
    <JsonItemKey v-else :itemKey="this.varItem.key"></JsonItemKey>
    <span class="bold-font white-space"> : </span>
    <span class="json-value-color">
      <JsonTypeName typeName="boolean" class="control-margin-right json-value-color"></JsonTypeName>
      {{ this.varItem.value }}
    </span>
  </div>
</template>

<script>
import JsonTypeName from '@components/common/JsonTypeName'
import JsonItemKey from '@components/common/JsonItemKey'

export default {
  name: 'JsonBoolean',
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
      type: [Object, Boolean],
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
  .json-var-boolean-row {
    .control-margin-right {
      margin-right: 5px;
    }
    .json-value-color {
      color: rgb(153, 54, 130);
    }
  }
</style>
