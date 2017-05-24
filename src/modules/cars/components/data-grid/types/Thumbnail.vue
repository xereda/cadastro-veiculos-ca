<template>
  <span>
    <a :disabled="value === null" class="button is-link custom-link" @click="modalOpen()">{{ linkLabel }}</a>
    <transition name="fade">
      <image-modal v-if="modalControl" :src="value" @modal-close="modalClose()"></image-modal>
    </transition>
  </span>
</template>

<script>
import ImageModal from '@/components/ImageModal.vue'

export default {
  name: 'GridThumbnail',
  data () {
    return {
      modalControl: false
    }
  },
  methods: {
    modalOpen () {
      if (this.value === null) return false
      this.modalControl = true
    },
    modalClose () {
      this.modalControl = false
    }
  },
  computed: {
    linkLabel () {
      return this.value === null ? this.linkNullLabel : this.linkOpenLabel
    }
  },
  components: {
    ImageModal
  },
  props: [
    'value',
    'linkOpenLabel',
    'linkNullLabel'
  ]
}
</script>

<style lang="scss">
  .custom-link {
    font-size: 1em;
  }
</style>
