<template>
  <span class="json-item-key">
    <span v-if="$getJsType(itemKey) !== 'Number'">"{{ itemKey }}"</span>
    <span v-else class="json-key-color">{{ itemKey }}</span>
  </span>
</template>

<script>
export default {
  name: 'ObjectSize',
  props: {
    itemKey: {
      type: [Number, String],
      default: ''
    }
  },
  data () {
    return {}
  },
  async created () {},
  async mounted () {},
  methods: {

  },
  computed: {
  },
}
</script>

<style lang="less" scoped>
  .json-item-key {
    .json-key-color {
      color: rgb(0, 169, 149);
    }
  }
</style>
