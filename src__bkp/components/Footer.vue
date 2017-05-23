<template>
  <div class="">
    <footer class="footer custom-heigh-footer">
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
  name: 'Footer',
  mixins: [
    computedMixins
  ]
}
</script>

<style lang="scss">
  .footer-image-logo {
    width: 300px;
  }
</style>
