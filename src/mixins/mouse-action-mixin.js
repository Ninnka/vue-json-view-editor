export default {
  data () {
    return {
      mouseInArea: false
    }
  },
  methods: {
    mouseenter (event) {
      this.mouseInArea = true
      event.stopPropagation()
    },
    mouseleave (event) {
      this.mouseInArea = false
      event.stopPropagation()
    }
  }
}
