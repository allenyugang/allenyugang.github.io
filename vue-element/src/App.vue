<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style>
body{
  padding:0;
  margin:0;
}
.content{
  background: none repeat scroll 0 0 #fff;
  position: absolute;
  left: 250px;
  right: 0;
  top: 70px;
  bottom:0;
  width: auto;
  padding:40px;
  box-sizing: border-box;
  overflow-y: scroll;
}
</style>
