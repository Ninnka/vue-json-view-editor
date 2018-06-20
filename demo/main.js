// DEMO
import Vue from 'vue'
import App from './App'

// * style
import '@/styles/common-style.less'
import '@/iconfont/iconfont.css'

// * import components
import JsonCompose from '@/components/JsonCompose'
import JsonContainer from '@/components/JsonContainer'

import JsonObject from '@/components/json-types/JsonObject'
import JsonArray from '@/components/json-types/JsonArray'
import JsonString from '@/components/json-types/JsonString'
import JsonNumber from '@/components/json-types/JsonNumber'
import JsonBoolean from '@/components/json-types/JsonBoolean'
import JsonDate from '@/components/json-types/JsonDate'
import JsonUndefined from '@/components/json-types/JsonUndefined'
import JsonNull from '@/components/json-types/JsonNull'
import JsonNaN from '@/components/json-types/JsonNaN'

// * set global vue-components
Vue.component('JsonCompose', JsonCompose)
Vue.component('JsonContainer', JsonContainer)

Vue.component('JsonObject', JsonObject)
Vue.component('JsonArray', JsonArray)
Vue.component('JsonString', JsonString)
Vue.component('JsonNumber', JsonNumber)
Vue.component('JsonBoolean', JsonBoolean)
Vue.component('JsonDate', JsonDate)
Vue.component('JsonUndefined', JsonUndefined)
Vue.component('JsonNull', JsonNull)
Vue.component('JsonNaN', JsonNaN)

// * mixins
Vue.mixin({
  methods: {
    $getJsType (target) {
      const typeOrigin = Object.prototype.toString.call(target)
      return typeOrigin.substring(8, typeOrigin.length - 1)
    }
  }
})

// * directive
Vue.directive('mouseaction', {
  bind (el, binding, vnode) {
    el.addEventListener('mouseenter', vnode.context.mouseenter)
    el.addEventListener('mouseleave', vnode.context.mouseleave)
  },
  unbind (el, binding, vnode) {
    el.removeEventListener('mouseenter', vnode.context.mouseenter)
    el.removeEventListener('mouseleave', vnode.context.mouseleave)
  }
})

// * env
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
