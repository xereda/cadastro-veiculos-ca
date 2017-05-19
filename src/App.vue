<template>
  <div>
    <div id="top"></div>
    <ca-header></ca-header>
    <ca-hero></ca-hero>
    <ca-body></ca-body>
    <ca-footer></ca-footer>
  </div>
</template>

<script>
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)

import CaHeader from './components/Header.vue'
import CaHero from './components/Hero.vue'
import CaBody from './components/Body.vue'
import CaFooter from './components/Footer.vue'

export default {
  name: 'Main',
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    CaHeader,
    CaHero,
    CaBody,
    CaFooter
  }
}
</script>

<style lang="scss">
  $fa-font-path: "~font-awesome/fonts/";
  @import '~font-awesome/scss/font-awesome.scss';
  @import './scss/config';
  @import '~bulma';

  .logo-header {
    width: $logo-header-width;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity $transition-time
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
