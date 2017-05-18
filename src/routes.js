import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// import store from './store/store'
// import jump from 'jump.js'

import Beers from './modules/beers/route'
import About from './modules/about/route'

const routes = [
  ...Beers,
  ...About,
  { path: '*', redirect: '/beers' }
]

const router = new VueRouter({
  routes
})

// router.afterEach((to, from) => {
//   const states = store.state.states
//   console.log(states)
//   jump(states.view === 'small' ? states.scrollPosition.small : states.scrollPosition.large)
// })

export default router
