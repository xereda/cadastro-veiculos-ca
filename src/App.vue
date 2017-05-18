<template>
  <div>
    <div id="top"></div>
    <jmob-header></jmob-header>
    <jmob-hero v-show="showHero"></jmob-hero>
    <jmob-body></jmob-body>
    <jmob-footer></jmob-footer>
  </div>
</template>

<script>
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)

import 'bulma'
import 'font-awesome/scss/font-awesome.scss'
import JmobHeader from './components/Header.vue'
import JmobHero from './components/Hero.vue'
import JmobBody from './components/Body.vue'
import JmobFooter from './components/Footer.vue'

export default {
  name: 'Main',
  data () {
    return {
      showHero: false
    }
  },
  mounted () {
    console.log('app.vue ---')
    this.showHero = true
  },
  methods: {
  },
  components: {
    JmobHeader,
    JmobHero,
    JmobBody,
    JmobFooter
  }
}
</script>

<style lang="scss">
  @import './scss/config';

  .logo-header {
    width: 125px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity $transition-time
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
</style>
