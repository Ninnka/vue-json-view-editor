<template>
  <div class="json-var-number-row basic-row">
    <span v-if="this.varItem.key === undefined">"root"</span>
    <JsonItemKey v-else :itemKey="this.varItem.key"></JsonItemKey>
    <span class="bold-font white-space"> : </span>
    <span :class="calcClass">
      <JsonTypeName :typeName="convertingTypeName()" class="control-margin-right" :class="calcClass"></JsonTypeName>
      {{ this.varItem.value }}
    </span>
  </div>
</template>

<script>
import JsonTypeName from '@components/common/JsonTypeName'
import JsonItemKey from '@components/common/JsonItemKey'

export default {
  name: 'JsonNumber',
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
      type: [Object, Number],
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
  methods: {
    convertingTypeName () {
      return this.varItem.value % 1 === 0 ? 'int' : 'float'
    }
  },
  computed: {
    calcClass () {
      return this.varItem.value % 1 === 0 ? 'json-value-color-int' : 'json-value-color-float'
    }
  },
}
</script>

<style lang="less" scoped>
  .json-var-number-row {
    .control-margin-right {
      margin-right: 5px;
    }
    .json-value-color-int {
      color: rgb(163, 142, 103);
    }
    .json-value-color-float {
      color: rgb(20, 142, 63);
    }
  }
</style>
