<template>
  <!-- 头部区域 -->
  <div class="home_header">
    <div></div>
    <header class="header_main">
      <div class="main_top">
        <div class="top_title"></div>
        <div class="top_input top_search">
          <i class="iconfont icon-sousuo1"></i>
          <span class="search_name">搜索商品, 共9770款好物</span>
        </div>
      </div>
      <nav class="main_bottom" ref="nav_scroll">
        <ul class="bottom_title" >
          <li class="title_name tuijian" @click="goto('/home')" :class="{active: isCurrent('/home')}">推荐</li>
          <li class="title_name jujia" @click="goto('/jujia')" :class="{active: isCurrent('/jujia')}">居家</li>
          <li class="title_name peijian" @click="goto('/peijian')" :class="{active: isCurrent('/peijian')}">配件</li>
          <li class="title_name fuzhuang" @click="goto('/fuzhuang')" :class="{active: isCurrent('/fuzhuang')}">服装</li>
          <li class="title_name dianqi" @click="goto('/dianqi')" :class="{active: isCurrent('/dianqi')}">电器</li>
          <li class="title_name xihu" @click="goto('/xihu')" :class="{active: isCurrent('/xihu')}">洗护</li>
          <li class="title_name yinshi" @click="goto('/yinshi')" :class="{active: isCurrent('/yinshi')}">饮食</li>
          <li class="title_name canchu" @click="goto('/canchu')" :class="{active: isCurrent('/canchu')}">餐厨</li>
          <li class="title_name yintong" @click="goto('/yintong')" :class="{active: isCurrent('/yintong')}">婴童</li>
          <li class="title_name wenti" @click="goto('/wenti')" :class="{active: isCurrent('/wenti')}">文体</li>
          <li class="title_name tesequ" @click="goto('/tesequ')" :class="{active: isCurrent('/tesequ')}">特色区</li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    methods: {
      goto(path) {
        this.$router.push(path)
      },
      isCurrent(path) {
        // console.log(this.$route.path)
        return this.$route.path === path
      }
    },
    mounted(){
      new BScroll(this.$refs.nav_scroll, {
        click: true,
        scrollX:true
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .home_header
    width 100%
    height 148px
    z-index: 5
    position fixed!important
    .header_main
      .main_top
        display flex
        flex-flow row nowrap
        -webkit-box-align center
        align-items: center;
        padding: .21333rem .4rem
        background-color white
        .top_title
          width 1.84rem
          height .53333rem
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png)
          display inline-block
          margin-right .26667rem
          background-size cover
          background-position center
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
      .main_bottom
        height 60px
        width 100%
        line-height: 1.5;
        color: #333;
        outline: 0;
        font-family: PingFangSC-Light,helvetica,'Heiti SC';
        background-color white
        .bottom_title
          width 1550px
          float left
          font-size 28px
          display flex
          flex-flow row nowrap
          flex-shrink 0
          height 100%
          position: relative
          text-align center

          &.active
            color #b4282d

          .title_name
            height 100%
            flex-shrink 0
            align-content center
            margin-left:.6rem
            padding 10px 16px
            box-sizing border-box
            &::after
              content: ' ';
              position: absolute;
              left: 44.5px;
              bottom: 0;
              width: 5.864%;
              height: .05333rem;
              background-color: #b4282d;
</style>
