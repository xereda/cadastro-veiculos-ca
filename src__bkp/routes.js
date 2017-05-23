import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Cars from './modules/cars/route'
import About from './modules/about/route'

const routes = [
  ...Cars,
  ...About,
  { path: '*', redirect: '/cars' }
]

const router = new VueRouter({
  routes
})

export default router
