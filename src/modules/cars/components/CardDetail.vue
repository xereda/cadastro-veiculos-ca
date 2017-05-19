<template>
  <div class="">
    <jmob-card-detail-header :beer="beer"></jmob-card-detail-header>
    <jmob-card-detail-body :beer="beer"></jmob-card-detail-body>
  </div>
</template>

<script>
import JmobCardDetailHeader from './CardDetailHeader.vue'
import JmobCardDetailBody from './CardDetailBody.vue'
export default {
  name: 'JmobCardDetail',
  props: [
    'beer'
  ],
  components: {
    JmobCardDetailHeader,
    JmobCardDetailBody
  }
}
</script>

<style lang="scss">

</style>
