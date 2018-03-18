<template>
  <span class="object-size">{{ `items: ${calcTargetSize}` }}</span>
</template>

<script>
export default {
  name: 'ObjectSize',
  props: {
    target: {
      type: [Object, Array],
      default () {
        return {}
      }
    }
  },
  data () {
    return {}
  },
  async created () {},
  async mounted () {

  },
  methods: {

  },
  computed: {
    calcTargetSize () {
      const keys = Object.keys(this.target)
      return keys.length
    }
  },
}
</script>

<style lang="less" scoped>
  .object-size {
    font-size: .9em;
    color: rgb(145, 144, 145);
    font-style: italic;
    margin-left: 8px;
    cursor: default;
  }
</style>
