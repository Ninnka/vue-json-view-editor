<template>
  <div class="json-container">
    <JsonCompose v-for="(entry) in objectEntries" :key="entry[0]" :dataPath="dataPath" :jsonVar="{
      jsType: getJsType(entry[1]),
      key: $attrs.isNumberTypeKey ? setNumberTypeKey(entry[0]) : entry[0],
      value: entry[1]
    }" :style="{
      padding: `2px 0 2px 1.25em`
    }">
    </JsonCompose>
  </div>
</template>

<script>
// import _isEqual from 'lodash.isequal'

export default {
  name: 'JsonContainer',
  inheritAttrs: false,
  components: {
  },
  props: {
    isRoot: false,
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
  },
  data () {
    return {
      // objectEntries: []
    }
  },
  async created () {
    // this.objectEntries = this.getEntries(this.varItem)
  },
  async mounted () {
  },
  computed: {
    objectEntries () {
      const entries = this.varItem && this.varItem.value ? Object.entries(this.varItem.value) : []
      // console.log('JsonContainer entries', entries)
      return entries
    },
  },
  methods: {
    getJsType (target) {
      const typeOrigin = Object.prototype.toString.call(target)
      return typeOrigin.substring(8, typeOrigin.length - 1)
    },
    setNumberTypeKey (key) {
      const numberKey = Number(key)
      return isNaN(numberKey) ? key : numberKey
    },
    getEntries (origin) {
      return origin && origin.value ? Object.entries(origin.value) : []
    }
  },
}
</script>

<style lang="less" scoped>
  .json-container {

  }
</style>
