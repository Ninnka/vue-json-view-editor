<template>
  <div id="app-index" class="app-index">
    <vue-json-view-editor
      :src="testSrc"
      :viewExpanded="viewExpanded"
      :indentWidth="4"
      :add="addJsonRow"
      :delete="deleteJsonRow"
      :edit="editJsonRow">
    </vue-json-view-editor>
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
      // testSrc: [
      //   1,
      //   2.42,
      //   'btiuer',
      //   true,
      //   false,
      //   null,
      //   undefined,
      //   NaN
      // ],
      testSrc: {
        dq: 'dgv',
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
        // inerr: {
        //   foiwe: {
        //     goriej: 'frj',
        //     vvwi: false,
        //     nupoy: {
        //       gnpoxdv: 321,
        //       tgoisnbv3: true,
        //       lasgtr: null
        //     },
        //     ieonv: new Date()
        //   }
        // }
      },
      viewExpanded: true
    }
  },
  async created () {

  },
  async mounted () {
    // ! test
    setTimeout(() => {
      this.testSrc = {
        ...this.testSrc,
        bvs: {
          gtis: 'gtrj'
        }
      }
    }, 2000)
  },
  methods: {
    addJsonRow (data) {

    },
    deleteJsonRow (data) {

    },
    editJsonRow (data) {

    }
  },
  computed: {},
}
</script>

<style lang="less" scoped>
  .app-index {
    height: 100%;
    overflow: auto;
  }
</style>
