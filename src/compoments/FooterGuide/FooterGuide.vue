<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item " @click="goto('/home')" :class="{active: isCurrent('/home')}">
      <i class="iconfont icon-all icon-shouye2" ></i>
      <div class="icon_name">首页</div>
    </a>

    <a href="javascript:;" class="guide_item" @click="goto('/shiwu')" :class="{active: isCurrent('/shiwu')}">
      <i class="iconfont icon-all icon-hui"></i>
      <div class="icon_name">识物</div>
    </a>

    <a href="javascript:;" class="guide_item" @click="goto('/fenlei')" :class="{active: isCurrent('/fenlei')}">
      <i class="iconfont icon-all icon-fenlei" ></i>
      <span class="icon_name">分类</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/gouwuche')" :class="{active: isCurrent('/gouwuche')}">
      <i class="iconfont icon-all icon-gouwuche1" ></i>
      <span class="icon_name">购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/geren')" :class="{active: isCurrent('/geren')}" >
      <i class="iconfont icon-all icon-geren1" ></i>
      <span class="icon_name">个人</span>
    </a>
  </footer>
</template>

<script>
  export default {
    methods: {
      goto(path) {
        this.$router.replace(path)
      },
      isCurrent(path) {
        // console.log(this.$route.path)
        return this.$route.path === path
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 1.2935rem
    display flex
    border-top 1px solid #d9d9d9
    flex-flow row nowrap
    align-items center
    justify-content space-around
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      height 100%
      box-sizing border-box
      margin-top 0.3rem
      &.active
        color #B4282D
      .icon-all
        font-family: "iconfont" !important;
        font-size 39.8px
        line-height 39px
        font-style normal
        -webkit-font-smoothing: antialiased;
        background-size 100%
        display inline-block
        vertical-align middle
        background-repeat: no-repeat
        &.icon-fenlei
          font-size 33px
        &.icon-gouwuche1
          font-size 37px
      .icon_name
        display: inline-block;
        margin-top: .09333rem;
        font-size: 0.32rem
        line-height: 1;
</style>
