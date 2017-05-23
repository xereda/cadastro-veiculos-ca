<template>
  <div class="">
    <el-checkbox v-model="checked" @change="$emit('input', $event.target.checked)">{{ label }}</el-checkbox>
  </div>
</template>

<script>
import Vue from 'vue'
import { Checkbox } from 'element-ui'
Vue.use(Checkbox)

export default {
  name: 'GridCheckbox',
  data () {
    return {
      checked: false
    }
  },
  watch: {
    value (val) {
      this.checked = val
    }
  },
  props: [
    'value',
    'label'
  ]
}
</script>

<style lang="css" scoped>
  @import '~element-ui/lib/theme-default/index.css';
</style>
