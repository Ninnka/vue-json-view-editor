<template>
  <span class="json-actions">
    <span
      v-for="action in actionList"
      :key="action"
      class="json-action-icon iconfont"
      :class="getActionIcon(action)"
      @click="actionClick(action)">
    </span>
  </span>
</template>

<script>
export default {
  name: 'JsonActions',
  props: {
    actionList: {
      type: [Array],
      default () {
        return []
      }
    },
  },
  data () {
    return {}
  },
  async created () {},
  async mounted () {},
  methods: {
    getActionIcon (action) {
      switch (action) {
        case 'copy':
          return 'icon-qunfengfuzhi'
        case 'add':
          return 'icon-jia'
        case 'delete':
          return 'icon-shanchu'
        case 'edit':
          return 'icon-bianji'
        default:
          return ''
      }
    },
    actionClick (action) {
      this.$emit(`action:${action}`);
    }
  },
  computed: {}
}
</script>

<style lang="less" scoped>
  .json-actions {
    margin-left: 6px;
    .json-action-icon {
      margin-right: 4px;
      &:last-child {
        margin-right: 0;
      }
    }
    .icon-qunfengfuzhi {
      color: rgb(163, 142, 103);
    }
    .icon-shanchu {
      color: rgb(180, 104, 29);
    }
    .icon-jia {
      color: rgb(153, 54, 130);
    }
    .icon-bianji {
      color: rgb(153, 54, 130);
    }
  }
</style>
