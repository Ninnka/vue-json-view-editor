<template>
  <div class="json-var-string-row basic-row">
    <span v-if="this.varItem.key === undefined">"root"</span>
    <JsonItemKey v-else :itemKey="this.varItem.key"></JsonItemKey>
    <span class="bold-font white-space"> : </span>
    <span class="json-value-color">
      <JsonTypeName typeName="string" class="control-margin-right json-value-color"></JsonTypeName>
      "{{ this.varItem.value }}"
    </span>
  </div>
</template>

<script>
import JsonTypeName from '@/components/common/JsonTypeName'
import JsonItemKey from '@/components/common/JsonItemKey'

export default {
  name: 'JsonString',
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
      type: [Object, String],
      default: ''
    }
  },
  data () {
    return {
    }
  },
  async created () {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  .json-var-string-row {
    .control-margin-right {
      margin-right: 5px;
    }
    .json-value-color {
      color: rgb(180, 104, 29);
    }
  }
</style>
