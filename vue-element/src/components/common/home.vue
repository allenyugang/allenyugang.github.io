<template>
  <div>
    <v-header></v-header>
    <v-slide></v-slide>
    <div class="content">
      <router-view></router-view>
    </div>    
  </div>
</template>
<script>
import header from './header.vue'
import slide from './slide.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    'v-header': header,
    'v-slide': slide
  }
}
</script>
<style>

</style>
