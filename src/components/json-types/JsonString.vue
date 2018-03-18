<template>
  <div class="json-var-string-row">
    <span v-if="this.varItem.key === undefined">"root"</span>
    <span v-else>"{{ this.varItem.key }}"</span>
    <span class="bold-font"> : </span>
    <span>"{{ this.varItem.value }}"</span>
  </div>
</template>

<script>
export default {
  name: 'JsonString',
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
      showKeyName: true
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
  .json-var-string-row {

  }
</style>
