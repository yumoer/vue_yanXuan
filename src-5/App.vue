<template>
  <div id="app">
    <router-view></router-view>
    <!-- 回到顶部 -->
    <GoTop/>
    <FooterGuide />
  </div>
</template>

<script>
  import GoTop from './compoments/goTop/goTop'
  import FooterGuide from './compoments/FooterGuide/FooterGuide'
  export default {
    components:{
      FooterGuide,
      GoTop
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
