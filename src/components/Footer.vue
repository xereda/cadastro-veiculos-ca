<template>
  <div class="">
    <footer class="footer">
      <nav class="level">
        <div class="level-item">
          <img :src="config.images.logo.footer" class="footer-image-logo">
        </div>
      </nav>
    </footer>
  </div>
</template>

<script>
import { computedMixins } from '@/mixins/main'

export default {
  name: 'JmobFooter',
  mixins: [
    computedMixins
  ]
}
</script>

<style lang="scss">
  .footer-image-logo {
    width: 300px;
  }
  .custom-nav-center {
    background-color: rgba(255, 255, 255, 0) !important;
    height: 300px;
  }
</style>
