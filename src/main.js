// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '@styles/common-style.less'
import '@iconfont/iconfont.css'

import JsonObject from '@components/json-types/JsonObject'
import JsonString from '@components/json-types/JsonString'
import JsonCompose from '@components/JsonCompose'
import JsonContainer from '@components/JsonContainer'

Vue.component('JsonCompose', JsonCompose)
Vue.component('JsonContainer', JsonContainer)
Vue.component('JsonObject', JsonObject)
Vue.component('JsonString', JsonString)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
