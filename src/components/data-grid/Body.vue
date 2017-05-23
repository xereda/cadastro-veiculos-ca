<template>
  <tbody>
    <tr v-for="doc in paginatedData">
      <td></td>
      <td v-for="column in columns">
        <text-value v-if="schema[column].type === 'text'"
                    :value="doc[column]"></text-value>
        <image-brand v-if="schema[column].type === 'image-brand'"
                     :value="doc[column]"></image-brand>
        <thumbnail v-if="schema[column].type === 'thumbnail'"
                   :value="doc[column]"
                   :link-open-label="schema[column].link.labels.open"
                   :link-null-label="schema[column].link.labels.null"></thumbnail>
        <monetary v-if="schema[column].type === 'monetary'"
                  :value="doc[column]"></monetary>
      </td>
      <td class="zoom-column">
        <a class="button is-small" @click="openDetail(111)">
          <span class="icon is-small">
            <i class="fa fa-search"></i>
          </span>
        </a>
      </td>
    </tr>
  </tbody>
</template>

<script>
import TextValue from './types/TextValue.vue'
import ImageBrand from './types/ImageBrand.vue'
import Thumbnail from './types/Thumbnail.vue'
import Monetary from './types/Monetary.vue'

export default {
  name: 'GridBody',
  computed: {
    columns () {
      return Object.keys(this.schema)
    },
    paginatedData () {
      return this.data.slice((this.currentPag - 1) * this.pageLimite, this.currentPag * this.pageLimite)
    }
  },
  components: {
    ImageBrand,
    TextValue,
    Thumbnail,
    Monetary
  },
  props: [
    'schema',
    'data',
    'current-pag',
    'page-limite'
  ]
}
</script>

<style lang="css">
</style>
