<template>
  <div id="app">
    <div id="app-index" class="app-index">
      <json-view-editor
        :src="testSrc"
        :viewExpanded="viewExpanded"
        :indentWidth="4"
        :add="addJsonRow"
        :delete="deleteJsonRow"
        :edit="editJsonRow">
      </json-view-editor>
    </div>
  </div>
</template>

<script>
import JsonViewEditor from '@/components/VueJsonViewEditor'

export default {
  name: 'Index',
  components: {
    JsonViewEditor
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

<style lang="less">
  #app {
    font-family: "PingFangSC-Regular","PingFang SC","Helvetica Neue",Helvetica,"Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 1000;
    -moz-perspective: 1000;
    -ms-perspective: 1000;
    perspective: 1000;
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
    transform: translateZ(0);
    margin: 0 auto;
    width: 100%;
    height: 100%;
    max-width: 800px;
    display: block;
    background: #eeeeee;
    overflow: hidden;
    font-size: 0.12rem;
    position: relative;
  }

  .app-index {
    height: 100%;
    overflow: auto;
  }
</style>
