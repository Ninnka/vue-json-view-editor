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
          gtiu: 'test string',
          fr: 1,
          yhirrew: undefined,
        },
        gbiowarr: [
          1,
          2.42,
          'btiuer',
          true,
          false,
          null,
          undefined,
          NaN
        ],
        inerr: {
          foiwe: {
            goriej: 'frj',
            vvwi: false,
            nupoy: {
              gnpoxdv: 321,
              tgoisnbv3: true,
              lasgtr: null
            },
            ieonv: new Date()
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
