<template>
  <div id="app">
    <!--<header class="index_header">
      <div class="header_main">
        <div class="main_content">
          <div class="main_top">
            <a class="top_title"></a>
            <div class="top_input">
              <i></i>
              <span class="input_search">搜索商品, 共9878款好物</span>
            </div>
          </div>
        </div>
        <nav class="header_bottom">

        </nav>
      </div>
    </header>-->
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
    height 100%
    margin-right auto
    margin-left auto
    background #F4F4F4
    /*.index_header
      height 245px
      width 100%
      .header_main
        position fixed!important
        left 0
        top 0
        width: 100%
        height 245px
        .main_content
          background-color #fff
          position relative
          height 100%
          .main_top
            display flex
            padding .21333rem .4rem
            flex-flow row nowrap
            -webkit-box-align center
            height 145.85px
            box-sizing border-box

            .top_title
              width 1.84rem
              height .53333rem
              background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png)
              display inline-block
              margin-right .26667rem
              background-size cover
              background-position center
              top 0
              bottom 0
              margin auto 0
            .top_input
              -webkit-box-flex: 1;
              flex-grow: 1;
              width 881.86px
              height 92.83px
              background-color #EDEDED
              position relative
              box-sizing border-box
              border-radius 5px
              .input_search
                width 505.3px
                height 69.6px
                color #666
                font-size .37333rem
                margin-bottom .5rem
                position absolute
                left 0
                right 0
                bottom 0
                top 0
                margin auto
                line-height 69.6px*/
</style>
