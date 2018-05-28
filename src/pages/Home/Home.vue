<template>
  <div id="homeContainer">
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
        <nav class="main-bottom"></nav>
      </header>
    </div>
    <div class="home_fool">
      <div class="fool_slideWarp">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/e6434443defc9a226336695702c29f5b.jpg?imageView&thumbnail=750x0&quality=75" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/645f3d7b9d89b2dec7e6ab2c80a9abeb.jpg?imageView&thumbnail=750x0&quality=75" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/6ae7de247351fecffd3fd3593d58bac7.jpg?imageView&thumbnail=750x0&quality=75" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/65b047d86dbca73dbf7f3e4c14c7b6f3.jpg?imageView&thumbnail=750x0&quality=75" alt="">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="fool_policy">
        <ul class="policy_grow">
          <li class="policy_item">
            <a>
              <i class="iconfont icon-checkmark"></i>
              <span class="item_text">网易自营品牌</span>
            </a>
          </li>
          <li class="policy_item">
            <a>
              <i class="iconfont icon-checkmark"></i>
              <span class="item_text">30天无忧退货</span>
            </a>
          </li>
          <li class="policy_item">
            <a>
              <i class="iconfont icon-checkmark"></i>
              <span class="item_text">48小时快速退款</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import '../../../static/dist/css/swiper.css'
  export default {
   mounted(){
     new Swiper ('.swiper-container', {
       autoplay:true,
       loop: true,
       // 如果需要分页器
       pagination: {
         el: '.swiper-pagination'
       },
     })
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#homeContainer
  width 100%
  height 100%
  background-color #EDEDED
  .home_header
    width 100%
    height 148px
    .header_main
      width 100%
      height 148px
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
      .main-bottom
        width 100%
        height 60px
        line-height: 1.5;
        color: #333;
        outline: 0;
        font-family: PingFangSC-Light,helvetica,'Heiti SC';
        font-size 24px
        background-color pink

  .home_fool
    margin-bottom .26667rem
    background-color #fff

    .fool_slideWarp
      background-color antiquewhite
      height: 5.33333rem;
      position: relative;
    .fool_policy
      height .96rem
      .policy_grow
        width 92%
        height .96rem
        padding 0 .4rem
        display flex
        flex-flow row nowrap
        -webkit-box-align center
        align-content center
        zoom 1
        .policy_item
          -webkit-box-flex 1
          flex 1
          float left
          justify-content space-around
          height: 0.48rem;
          margin auto
          a
            display inline-block
            vertical-align middle
            height .42667rem
            font-size 22px
            display flex
            .icon-checkmark
              display inline-block
              vertical-align middle
              background-repeat no-repeat
              background-size 100% 100%
              width .42667rem
              height .42667rem
              color #B52D32
              font-size 30px
            .item_text
              color black
              margin-left .08667rem
              line-height .42667rem
              display inline-block
              vertical-align middle
</style>
