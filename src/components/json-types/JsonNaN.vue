<template>
  <div class="json-var-nan-row basic-row">
    <span v-if="this.varItem.key === undefined">"root"</span>
    <JsonItemKey v-else :itemKey="this.varItem.key"></JsonItemKey>
    <span class="bold-font white-space"> : </span>
    <span class="no-typename json-value-color">
      NaN
    </span>
  </div>
</template>

<script>
import JsonTypeName from '@/components/common/JsonTypeName'
import JsonItemKey from '@/components/common/JsonItemKey'

export default {
  name: 'JsonNaN',
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
  methods: {},
  computed: {},
}
</script>

<style lang="less" scoped>
  .json-var-nan-row {
    .control-margin-right {
      margin-right: 5px;
    }
    .json-value-color {
      color: rgb(255, 71, 72);
    }
    .no-typename {
      margin-left: 8px
    }
  }
</style>
