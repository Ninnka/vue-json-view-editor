<template>
  <span class="white-space json-type-name">{{ typeName }}</span>
</template>

<script>
export default {
  name: 'JsonTypeName',
  props: {
    typeName: {
      type: String,
      default: ''
    },
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
  },
}
</script>

<style lang="less" scoped>
  .json-type-name {
    color: rgb(145, 144, 145);
    font-size: .9em;
    font-style: italic;
    margin-left: 8px;
    cursor: default;
  }
</style>
