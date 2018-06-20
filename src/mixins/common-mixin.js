export default {
  methods: {
    $getJsType (target) {
      const typeOrigin = Object.prototype.toString.call(target)
      return typeOrigin.substring(8, typeOrigin.length - 1)
    }
  }
};
