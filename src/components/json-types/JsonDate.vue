<template>
  <div class="json-var-date-row basic-row">
    <span v-if="this.varItem.key === undefined">"root"</span>
    <JsonItemKey v-else :itemKey="this.varItem.key"></JsonItemKey>
    <span class="bold-font"> : </span>
    <span class="json-value-color">
      <JsonTypeName typeName="date" class="control-margin-right json-value-color"></JsonTypeName>
      {{ this.varItem.value.toUTCString() }}
    </span>
  </div>
</template>

<script>
import JsonTypeName from '@components/common/JsonTypeName'
import JsonItemKey from '@components/common/JsonItemKey'

export default {
  name: 'JsonDate',
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
      type: [Object, Date],
      default () {
        return {}
      }
    }
  },
  data () {
    return {
    }
  },
  async created () {
    console.log('varItem', this.varItem)
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  .json-var-date-row {
    .control-margin-right {
      margin-right: 5px;
    }
    .json-value-color {
      color: rgb(117, 130, 255);
    }
  }
</style>
