<template>
  <marklist :options="options" @listenChild="listenMessage"></marklist>
</template>
<script>
import marklist from './markList.vue'
export default {
  data () {
    return {
      options: [{
        value: '1',
        label: '同意'
      }, {
        value: '2',
        label: '拒绝'
      }, {
        value: '3',
        label: '请选择'
      }]
    }
  },
  methods: {
    listenMessage (msg) {
      console.log(msg)
    }
  },
  components: {
    'marklist': marklist
  }
}
</script>
<style>
</style>
