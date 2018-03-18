<template>
  <div id="app-index" class="app-index">
    <vue-json-view-editor :src="testSrc" :viewExpanded="viewExpanded"></vue-json-view-editor>
  </div>
</template>

<script>
import VueJsonViewEditor from '@components/VueJsonViewEditor'

export default {
  name: 'Index',
  components: {
    VueJsonViewEditor
  },
  data () {
    return {
      // testSrc: {
      //   string: 'this is a string text',
      //   integer: 42,
      //   array: [1, 2, 3, 'array-stringtest', NaN],
      //   float: 3.14159,
      //   undefined: undefined,
      //   object: {
      //     'first-child': true,
      //     'second-child': false,
      //     'last-child': null
      //   },
      //   'string-number': '12345',
      //   date: new Date().toString()
      // }
      testSrc: {
        inner: {
          string: 'test string'
        },
        inerr: {
          foiwe: {
            goriej: 'frj'
          }
        }
      },
      viewExpanded: true
    }
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
  .app-index {
    height: 100%;
    overflow: auto;
  }
</style>
