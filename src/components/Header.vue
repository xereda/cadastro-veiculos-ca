<template>
  <div class="container">
    <nav class="nav is-medium">
      <div class="nav-left">
        <a class="nav-item" @click="goTo('cars')">
          <img :src="config.images.logo.header" class="logo-header" alt="Cars">
        </a>
      </div>

      <div class="nav-center is-hidden-tablet-only">
        <a class="nav-item is-hidden-mobile" :href="config.urls.facebook">
          <span class="icon">
            <i class="fa fa-facebook"></i>
          </span>
        </a>
        <a class="nav-item" :href="config.urls.github">
          <span class="icon">
            <i class="fa fa-github"></i>
          </span>
        </a>
        <a class="nav-item is-hidden-mobile" :href="config.urls.twitter">
          <span class="icon">
            <i class="fa fa-twitter"></i>
          </span>
        </a>
        <a class="nav-item" :href="config.urls.linkedin">
          <span class="icon">
            <i class="fa fa-linkedin"></i>
          </span>
        </a>
      </div>

      <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
      <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
      <span :class="{ 'nav-toggle': true, 'is-active': isActiveSideMenu }" @click="setActiveMenu()">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <!-- This "nav-menu" is hidden on mobile -->
      <!-- Add the modifier "is-active" to display it on mobile -->
      <div id="side-menu" :class="{ 'nav-right': true, 'nav-menu': true, 'is-active': isActiveSideMenu, 'animated': true, 'slideInRight': true, 'slideOutRight': slideOut, }">
        <a class="nav-item" @click="goToBySideMenu('cars')">
          Cars List
        </a>
        <span class="nav-item">
          <a class="button is-primary" @click="goToBySideMenu('about')">
            <span class="icon is-small">
              <i class="fa fa-user-circle"></i>
            </span>
            <span>About The Developer</span>
          </a>
        </span>
      </div>
    </nav>
  </div>
</template>

<script>
import { computedMixins, methodsMixins } from '@/mixins/main'

export default {
  name: 'Header',
  mixins: [
    computedMixins,
    methodsMixins
  ],
  data () {
    return {
      isActiveSideMenu: false,
      slideOut: false
    }
  },
  methods: {
    goToBySideMenu (route) {
      setTimeout(() => {
        this.setActiveMenu()
      }, 50)
      this.goTo(route)
    },
    sideBarClose () {
      this.setActiveMenu()
    },
    setActiveMenu () {
      if (this.isActiveSideMenu === true) this.slideOut = true
      setTimeout(() => {
        this.isActiveSideMenu = !this.isActiveSideMenu
        this.slideOut = false
      }, 200)
    }
  }
}
</script>

<style lang="scss">
  @import '~animate.css';
  @import '../scss/config.scss';

  #side-menu {
    animation-duration: $sidemenu-animation-duration;
    animation-delay: $sidemenu-animation-delay;
  }

</style>
