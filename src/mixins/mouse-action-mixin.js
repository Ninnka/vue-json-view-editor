export default {
  data () {
    return {
      mouseInArea: false
    }
  },
  methods: {
    mouseenter (event) {
      this.mouseInArea = true
    },
    mouseleave (event) {
      this.mouseInArea = false
    }
  },
  watch: {
    mouseInArea (newVal, oldVal) {
      // const logData = {
      //   componentName: this.$options._componentTag,
      //   newVal,
      //   oldVal
      // }
      // console.table(logData)
    }
  }
}
