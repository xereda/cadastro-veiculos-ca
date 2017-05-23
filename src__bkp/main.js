import 'es6-promise/auto'
import Vue from 'vue'
import App from './App'
import router from './routes'
import store from './store/store'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  name: 'CAFleetSystem',
  router,
  store,
  template: '<App/>',
  components: { App }
})
