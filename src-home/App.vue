<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide/>
  </div>
</template>

<script>
  import FooterGuide from './compoments/FooterGuide/FooterGuide'
  export default {
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    width 100%
    margin-right auto
    margin-left auto
    background #F4F4F4
    overflow-x hidden
</style>
