<template>
  <div class="header_main">
    <div class="top_input top_search">
      <i class="iconfont icon-sousuo1"></i>
      <span class="search_name">搜索商品, 共9770款好物</span>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header_main
    display flex
    flex-flow row nowrap
    -webkit-box-align center
    align-items: center;
    padding: .21333rem .4rem
    background-color white
    position fixed
    z-index 10
    width 690px
    .top_search
      -webkit-box-flex 1
      flex-grow 1
      &.top_input
        display flex
        flex-flow row nowrap
        align-items center
        -webkit-box-pack center
        justify-content center
        height .74667rem
        font-size .37333rem
        background-color #ededed
        border-radius .10667rem
        color #666
        margin auto 0
        .icon-sousuo1
          display inline-block
          vertical-align middle
          background-repeat no-repeat
          background-size 100% 100%
          width .37333rem
          height .37333rem
          margin-right .13333rem
          font-size 32px
        .search_name
          -webkit-tap-highlight-color: transparent;
          font-size .36633rem
</style>
