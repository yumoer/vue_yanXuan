<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item " @click="goto('/home')" :class="{active: isCurrent('/home')}">
      <i class="iconfont icon-U" style="background-image:url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s73fb615cb3-195f39fd2b.png)"></i>
      <div class="icon_name">首页</div>
    </a>

    <a href="javascript:;" class="guide_item" @click="goto('/shiwu')" :class="{active: isCurrent('/shiwu')}">
      <i class="iconfont icon-all icon-shiwu" style="background-image:url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s73fb615cb3-195f39fd2b.png)"></i>
      <div class="icon_name">识物</div>
    </a>

    <a href="javascript:;" class="guide_item" @click="goto('/fenlei')" :class="{active: isCurrent('/fenlei')}">
      <i class="iconfont icon-all icon-dingdan1" style="background-image:url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s73fb615cb3-195f39fd2b.png)"></i>
      <span class="icon_name">分类</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/gouwuche')" :class="{active: isCurrent('/gouwuche')}">
      <i class="iconfont icon-all icon-gouwuche" style="background-image:url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s73fb615cb3-195f39fd2b.png)"></i>
      <span class="icon_name">购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/geren')" :class="{active: isCurrent('/geren')}">
      <i class="iconfont icon-all icon-wode" style="background-image:url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s73fb615cb3-195f39fd2b.png)"></i>
      <span class="icon_name">个人</span>
    </a>
  </footer>
</template>

<script>
  export default {
    data:({
      img_url:'yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s73fb615cb3-195f39fd2b.png'
    }),
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
    height 2.09067rem
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
      margin-top .6rem
      &.active
        color red

      .iconfont
        display inline-block
        width .66667rem
        height .66667rem
        background-size 100%
        background-repeat no-repeat
        vertical-align middle
        &.icon-all
          display inline-block
          vertical-align middle
          background-repeat: no-repeat
          width .85333rem
          height .85333rem

        &.icon-U
          display inline-block
          vertical-align middle
          background-repeat: no-repeat
          width .85333rem
          height .85333rem
          background-position 0.03rem -4.30rem  // 4.30  red  2.15  1.0
        &.icon-shiwu
          background-position 0.03rem -7.45rem  // 6.45  red
        &.icon-dingdan1
          background-position 0.03rem -3.15rem  // 2.15  red
        &.icon-gouwuche
          background-position 0.03rem -1.00rem  // 0.00  red
        &.icon-wode
          background-position 0.03rem -9.60rem  // 8.60  red
      .icon_name
        display: inline-block;
        margin-top: .09333rem;
        font-size: .512rem;
        line-height: 1;
</style>
