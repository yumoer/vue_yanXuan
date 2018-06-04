<template>
  <!--内容区域-->
  <div class="home_container">
    <!-- 网易自营品牌 -->
    <div class="home_fool">
      <div class="fool_slideWarp">
        <div class="slideWarp_container swiper-container" ref="fool">
          <ul class="slideWarp_wrapper swiper-wrapper">
            <li class="slideWarp_slide swiper-slide" v-for="(focus,index) in home.focusList" :key="index">
              <img :src="focus.picUrl" alt="">
            </li>
          </ul>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="fool_policy">
        <ul class="policy_grow">
          <li class="policy_item">
            <a v-for="(policy,index) in home.policyDescList" :key="index">
              <i class="iconfont icon-checkmark"></i>
              <span class="item_text">{{policy.desc}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 品牌制造商 -->
    <div class="home_content_one">
      <header class="one_title">
        <a href="#" class="title_name">
          <span class="name_left">品牌制造商直供</span>
          <i class="iconfont icon-jiantou3"></i>
        </a>
      </header>
      <div class="one_container">
        <ul class="container_list" >
          <li class="list_item_left" v-for="(tag,index) in home.tagList" :key="index" v-if="index<=3">
            <a class="itme_main">
              <div class="main_title">
                <div class="title_company">{{tag.name}}</div>
                <div class="title_price">{{tag.floorPrice}}元起</div>
              </div>
              <img :src="tag.picUrl" style="opacity: 1">
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 新品首发 -->
    <div class="home_content_two">
      <header class="two_title">
        <div href="" class="title_name">
          <span class="name_top">新品首发</span>
          <div class="name_bottom">
            <span class="bottom_main">
              <span class="main_all">查看全部</span>
              <i class="iconfont icon-jiantou1"></i>
            </span>
          </div>
        </div>
      </header>

      <div class="two_container" >
        <div class="container_inner swiper-container"  ref="inner_top" >
          <ul class="inner_list swiper-wrapper"  >
            <li class="list_item swiper-slide" v-for="(newItem,index) in home.newItemList" :key="index">
              <div href="" class="item_router">
                <div class="router_image">
                  <img :src="newItem.listPicUrl" alt="">
                </div>
                <div class="router_tag" v-if="newItem.promTag">
                  <p class="tag_title">{{newItem.promTag}}</p>
                </div>
                <div class="router_name">
                  <span>{{newItem.name}}</span>
                </div>
                <div class="router_desc">{{newItem.simpleDesc}}</div>
                <div class="router_price">
                  <span>￥{{newItem.retailPrice}}</span>
                </div>
              </div>
            </li>
            <li class="list_item_all " >
              <div href="" class="item_router_all">
                <span class="router_all">查看全部</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 人气推荐 -->
    <div class="home_content_two_1 ">
      <header class="two_title">
        <div href="" class="title_name">
          <span class="name_top ">人气推荐 好物精选</span>
          <div class="name_bottom">
            <span class="bottom_main">
              <span class="main_all">查看全部</span>
              <i class="iconfont icon-jiantou1"></i>
            </span>
          </div>
        </div>
      </header>
      <div class="two_container" >
        <div class="container_inner swiper-container"  ref="inner_bottom" >
          <ul class="inner_list swiper-wrapper">
            <li class="list_item swiper-slide" v-for="(newItem,index) in home.newItemList" :key="index">
              <div href="" class="item_router">
                <div class="router_image">
                  <img :src="newItem.listPicUrl" alt="">
                </div>
                <div class="router_tag" v-if="newItem.promTag">
                  <p class="tag_title">{{newItem.promTag}}</p>
                </div>
                <div class="router_name">
                  <span>{{newItem.name}}</span>
                </div>
                <div class="router_desc">{{newItem.simpleDesc}}</div>
                <div class="router_price">
                  <span>￥{{newItem.retailPrice}}</span>
                </div>
              </div>
            </li>
            <li class="list_item_all " >
              <div href="" class="item_router_all">
                <span class="router_all">查看全部</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 限时购 -->
    <div class="home_content_three">
      <a href="" class="three_router">
        <div class="router_container">
          <div class="container_left">
            <div class="left_title">严选限时购</div>
            <div class="left_count">
              <span class="count_hours">00</span>
              <span class="count_colon">:</span>
              <span class="count_mins">00</span>
              <span class="count_colon">:</span>
              <span class="count_secs">00</span>
            </div>
            <div class="left_next">
              <span class="next_main">
                <span>下一场</span>
                <span>14：00</span>
                <span>开始</span>
              </span>
            </div>
          </div>
          <div class="container_right">
            <div class="right_image">
              <img src="http://yanxuan.nosdn.127.net/191be005f37aecfef781d567042954cd.png?imageView&quality=85&thumbnail=330x330" alt="">
            </div>
            <div class="right_price">
              <div class="price_top">
                <span>￥</span>
                <span>36</span>
              </div>
              <div class="price_bottom">
                <span>￥</span>
                <span class="price">39</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>

    <!-- 福利社 -->
    <div class="home_content_four">
      <a href="" class="four_router"></a>
    </div>

    <!-- 专题精选-->
    <div class="home_content_five">
      <header class="five_title">
        <a href="#" class="title_name">
          <span class="name_left">专题精选</span>
          <i class="iconfont icon-jiantou3"></i>
        </a>
      </header>
      <div class="five_slide">
        <div class="slide_inner swiper-container" ref="slide">
          <ul class="inner_list swiper-wrapper">
            <li class="list_item swiper-slide" v-for="(topic,index) in home.topicList" :key="index">
              <div href="" class="item_imgWarp">
                <img :src="topic.itemPicUrl" alt="">
              </div>
              <div class="item_title">
                <h4 class="title_name">{{topic.title}}</h4>
                <span class="title_price">
                  <span>{{topic.priceInfo}}</span>
                  <span>元起</span>
                </span>
              </div>
              <div class="item_info">{{topic.subtitle}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 好物 -->
    <div class="home_content_six">
      <div class="six_container" v-for="(cates,index) in home.cateList" :key="index">
        <h3 class="container_title">{{cates.name}}好物</h3>
        <div class="container_goods" >
          <ul class="goods_list">
            <li class="list_item_left" v-for="(cate,index) in cates.itemList" :key="index" v-if="index<=6">
              <a href="" class="item_router">
                <div class="router_imgWrap">
                  <div class="imgWrap_img">
                    <img :src="cate.listPicUrl" alt="">
                  </div>
                  <div class="imgWrap_desc">{{cate.simpleDesc}}</div>
                </div>
                <div class="router_name">
                  <span>{{cate.name}}</span>
                </div>
                <div class="router_price">
                  <span class="price_left">￥</span>
                  <span class="price_right">{{cate.retailPrice}}</span>
                </div>
              </a>
            </li>
            <li class="list_item_right">
              <a href="" class="item_router">
                <div class="router_imgWrap">
                  <div class="imgWrap_img">
                    <p class="img_title">更多{{cates.name}}好物</p>
                    <i class="iconfont icon-yq-jt-r"></i>
                  </div>
                </div>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  export default {
    computed:{
      ...mapState(['home'])
    },
    mounted(){

      /*this.$nextTick(()=>{  //一旦完成界面更新，立即调用(此条语句要写在数据更新之后)
        //创建一个Swiper实例对象，来实现轮播

      })*/

      this.$nextTick(() => {
        console.log(this, this.$refs.fool)
        setTimeout(() => {
          new Swiper (this.$refs.fool ,{
            autoplay:true,
            click:true,
            loop: true,
            width:750,
            grabCursor : true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination'
            }
          })
          new Swiper(this.$refs.slide, {
            centeredSlides: true,
            onInit: function (swiper) {
              swiper.slides[1].className = 'swiper-slide swiper-slide-active'
            },
            spaceBetween: 30,
            width:575,
          })

          new Swiper(this.$refs.inner_top, {
            centeredSlides: true,
            onInit: function (swiper) {
              swiper.slides[1].className = 'swiper-slide swiper-slide-active'
            },
            width:295
          })

          new Swiper(this.$refs.inner_bottom, {
            centeredSlides: true,
            onInit: function (swiper) {
              swiper.slides[1].className = 'swiper-slide swiper-slide-active'
            },
            width:295
            /*click: true,
            scrollX: true,
            eventPassthrough: 'vertical'*/
          })

        },120)
      })

      /*this.$store.dispatch('getHome',()=>{
          if(!this.scroll){
            this.scroll = new BScroll(this.$refs.inner_top, {
              scrollX:true,
              eventPassthrough: 'vertical'
            })

            this.scroll = new BScroll(this.$refs.inner_bottom, {
              scrollX: true,
              width:280,
              eventPassthrough: 'vertical'
            })
          }
      })*/


    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .home_container
    .home_fool
      bottom -148px
      position relative
      margin-bottom .26667rem
      background-color #fff
      .fool_slideWarp
        background-color antiquewhite
        height: 5.33333rem;
        position: relative;
        box-sizing border-box
        .slideWarp_container
          .slideWarp_wrapper
            .slideWarp_slide
              img
                width 100%
                height 400px

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
            flex-direction column
            float left
            justify-content space-around
            height: 0.48rem;
            margin auto
            a
              vertical-align middle
              height .42667rem
              font-size 22px
              display: inline-block;
              margin-left: 30px;
              margin-top: -56px;
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
    .home_content_one  //品牌制造商
      width 100%
      height 586px
      margin-bottom .266667rem
      background-color white
      margin-top: 165px;
      .one_title
        display flex
        flex-flow row nowrap
        -webkit-box-align center
        align-items center
        -webkit-box-pack center
        justify-content center
        height 1.466667rem
        font-style .42667rem
        .title_name
          font-size .42667rem
          display flex
          -webkit-box-align center
          align-items center
          flex-flow row nowrap
          color #333333
          height 48px
          .name_left
            color #333333
          .icon-jiantou3
            display: inline-block;
            vertical-align: middle;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: .4rem;
            height: .4rem;
            color black
            font-size 30px
            padding-left 10px
            box-sizing border-box
      .one_container
        padding-bottom .10667rem
        height 476px
        box-sizing border-box
        .container_list
          position relative
          margin 0 .21333rem
          height 6.24rem
          flex-wrap wrap
          display inline-block
          width 100%
          box-sizing border-box
          overflow hidden
          .list_item_left
            display inline-block
            position relative
            margin-bottom .10667rem
            width 4.73333rem
            height 3.14667rem
            overflow hidden
            background-color #F4F4F4
            margin-right: .08667rem;
            .itme_main
              width 100%
              height 100%
              .main_title
                position absolute
                left 0
                top 0
                padding .26667rem 0 0 .26667rem
                width 100%
                z-index 4
                font-size 28px
                box-sizing border-box
                .title_company
                  text-overflow ellipsis
                  white-space nowrap
                  overflow hidden
                  color #333333
                  font-style: .37333rem
                  line-height .45333rem
                  margin-bottom .08rem
                .title_price
                  line-height .45433rem
              img
                width 100%
                height 100%
          .list_item_right
            display inline-block
            position relative
            margin-bottom .10667rem
            width 4.73333rem
            height 3.14667rem
            overflow hidden
            background-color #F4F4F4
            .itme_main
              width 100%
              height 100%
              .main_title
                position absolute
                left 0
                top 0
                padding .26667rem 0 0 .26667rem
                width 100%
                z-index 4
                font-size 28px
                box-sizing border-box
                .title_company
                  text-overflow ellipsis
                  white-space nowrap
                  overflow hidden
                  color #333333
                  font-style: .37333rem
                  line-height .45333rem
                  margin-bottom .08rem
                .title_price
                  line-height .45433rem
    .home_content_two  //新品首发
      width 100%
      background-color #fff
      margin-bottom .3rem
      .two_title
        background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png")
        background-size 10rem 3.46667rem
        height 3.46667rem
        margin-bottom .426667rem
        position relative
        .title_name
          display block
          text-align center
          font-size .48rem
          color #8BA0B6
          width 240px
          height 126px
          padding 80px 250px
          .name_top
            box-sizing border-box

          .name_bottom
            position absolute
            margin .21333rem auto 0
            width 3.2rem
            height .74667rem
            font-size .37333rem
            line-height .74667rem
            background #D8E5F1
            .bottom_main
              width 1.70667rem
              display inline-block
              text-align left
              .main_all
                box-sizing border-box
              .icon-jiantou1
                position absolute
                background-size .13333rem .29333rem
                display inline-block
                height .29333rem
                width .13333rem
                font-size 22px
      .two_container
        height 6.4rem
        background-color white
        .container_inner
          height: 6.4rem;
          .inner_list
            overflow: visible;
            float: left;
            display: flex;
            .list_item
              padding 0!important
              margin-left .4rem
              width 3.73333rem
              overflow: hidden;
              background-color: #fff;
              float: left;
              position: relative;

              .item_router
                display block
                width 100%
                .router_image
                  border-radius .05333rem
                  position relative
                  margin-bottom .26667rem
                  padding-bottom: 100%;
                  width 100%
                  img
                    display: block;
                    background-color #f4f4f4
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: .05333rem .05333rem 0 0;
                    position: absolute;

                .router_tag
                  width 100%
                  z-index 1
                  margin 0 0 .21333rem
                  height .4rem
                  overflow hidden
                  .tag_title
                    margin-left .16rem
                    background-color #f48f18
                    height: .4rem;
                    padding .06667rem .21333rem
                    line-height .26667rem
                    text-align center
                    color #fff
                    font-size .26667rem
                    border-radius .02667rem
                    display inline-block
                    vertical-align middle
                    box-sizing border-box
                .router_name
                  margin-bottom .13333rem
                  padding 0 .13333rem
                  font-size .37333rem
                  line-height .45333rem
                  span
                    display inline-block
                    width 100%
                    font-size .34333rem
                    line-height .45333rem
                    overflow hidden
                    white-space nowrap
                    color #333
                .router_desc
                  display block
                  margin-bottom .18667rem
                  font-size .32rem
                  color #7f7f7f
                  line-height .4rem
                  white-space nowrap
                  text-overflow ellipsis
                  overflow hidden
                  padding 0 .13333rem
                .router_price
                  padding 0 .13333rem
                  font-size .31333rem
                  color #b4282d
            .list_item_all
              display: block;
              border: .10667rem solid #F4F4F4;
              width: 3.73333rem;
              height: 3.73333rem;
              margin: 0 .4rem;
              line-height: 3.73333rem;
              text-align: center;
              .item_router_all
                display: block;
                width: 3.73333rem;
                height: 3.73333rem;
                .router_all
                  font-size: .37333rem;
                  color: #666;
    .home_content_two_1  //人气推荐
      width 100%
      background-color #fff
      margin-bottom .3rem
      .two_title
        background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap2-d626e0b52a.png)
        background-size 10rem 3.46667rem
        height 3.46667rem
        margin-bottom .426667rem
        position relative
        .title_name
          display block
          text-align center
          font-size .48rem
          width 240px
          height 126px
          padding 80px 250px
          color: #B4A078;

          .name_top
            box-sizing border-box
            white-space nowrap
            margin-left -25px
            text-align: center;
            font-size: .48rem;
            color: #B4A078;
          .name_bottom
            position absolute
            margin .21333rem auto 0
            width 3.2rem
            height .74667rem
            font-size .37333rem
            line-height .74667rem
            background #D8E5F1
            .bottom_main
              width 1.70667rem
              display inline-block
              text-align left
              .main_all
                box-sizing border-box
              .icon-jiantou1
                position absolute
                background-size .13333rem .29333rem
                display inline-block
                height .29333rem
                width .13333rem
                font-size 22px
      .two_container
        height 6.4rem
        background-color white
        .container_inner
          width 100%
          height 100%
          overflow hidden
          box-sizing border-box
          .inner_list
            height 460px
            font-size 20px
            display flex
            flex-flow row nowrap
            float: left;
            .list_item
              padding 0!important
              margin-left .4rem
              width 3.73333rem
              .item_router
                display block
                width 100%
                .router_image
                  border-radius .05333rem
                  position relative
                  z-index 0
                  margin-bottom .26667rem
                  img
                    background-color #f4f4f4
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;

                .router_tag
                  width 100%
                  z-index 1
                  margin 0 0 .21333rem
                  height .4rem
                  overflow hidden
                  .tag_title
                    margin-left .16rem
                    background-color #f48f18
                    height: .4rem;
                    padding .06667rem .21333rem
                    line-height .26667rem
                    text-align center
                    color #fff
                    font-size .26667rem
                    border-radius .02667rem
                    display inline-block
                    vertical-align middle
                    box-sizing border-box
                .router_name
                  margin-bottom .13333rem
                  padding 0 .13333rem
                  font-size .37333rem
                  line-height .45333rem
                  span
                    display inline-block
                    width 100%
                    font-size .34333rem
                    line-height .45333rem
                    overflow hidden
                    white-space nowrap
                    color #333
                .router_desc
                  display block
                  margin-bottom .18667rem
                  font-size .32rem
                  color #7f7f7f
                  line-height .4rem
                  white-space nowrap
                  text-overflow ellipsis
                  overflow hidden
                  padding 0 .13333rem
                .router_price
                  padding 0 .13333rem
                  font-size .31333rem
                  color #b4282d
            .list_item_all
                display: block;
                border: .10667rem solid #F4F4F4;
                width: 3.73333rem;
                height: 3.73333rem;
                margin: 0 .4rem;
                line-height: 3.73333rem;
                text-align: center;
                .item_router_all
                  display: block;
                  width: 3.73333rem;
                  height: 3.73333rem;
                  .router_all
                    font-size: .37333rem;
                    color: #666;
    .home_content_three //限时购
      height 380px
      background-color papayawhip
      margin-bottom .3rem
      .three_router
        text-decoration none
        outline 0
        .router_container
          padding: .4rem .53333rem .4rem .74667rem;
          margin-bottom: .26667rem;
          height: 4.26667rem;
          background: #fff;
          display: -moz-flex;
          display: flex;
          .container_left
            display flex
            -webkit-box-flex 1
            flex 1
            -webkit-box-direction normal
            -webkit-box-orient vertical
            flex-direction column
            padding-top 1.06667rem
            height 320px
            box-sizing border-box
            .left_title
              font-size .48rem
              line-height .48rem
              margin-bottom .32rem
              color #333
              letter-spacing .16rem
            .left_count
              display inline
              margin-top: -20px;
              .count_hours
                display: inline-block;
                line-height: .74667rem;
                text-align: center;
                width: .82667rem;
                height: .74667rem;
                font-size: .42667rem;
                color: #fff;
                border-radius: .05333rem;
                background: #444;
              .count_colon
                color: #333;
                font-size: .4rem;
                width: .26667rem;
                display: inline-block;
                text-align: center;
                font-weight: 700;
                margin-left: -20px;
              .count_mins
                display: inline-block;
                line-height: .74667rem;
                text-align: center;
                width: .82667rem;
                height: .74667rem;
                font-size: .42667rem;
                color: #fff;
                border-radius: .05333rem;
                background: #444;
                margin-left: -20px;
              .count_colon
                color: #333;
                font-size: .4rem;
                width: .26667rem;
                display: inline-block;
                text-align: center;
                font-weight: 700;
              .count_secs
                display: inline-block;
                line-height: .74667rem;
                text-align: center;
                width: .82667rem;
                height: .74667rem;
                font-size: .42667rem;
                color: #fff;
                border-radius: .05333rem;
                background: #444;
                margin-left: -20px;
            .left_next
              margin-top: 0.63333rem;
              color: #333;
              font-size: .32rem;
              line-height: .32rem;
              height: .32rem;
              .next_main
                margin-top: .53333rem;
                color: #333;
                font-size: .32rem;
                line-height: .32rem;
          .container_right
            background: #fff;
            width: 4.26667rem;
            height: 4.26667rem;
            position: relative;
            .right_image
              width 100%
              img
                display inline
                width 100%
                height 100%
            .right_price
              height: 1.28rem;
              width: 1.28rem;
              position: absolute;
              right: .26667rem;
              bottom: .48rem;
              background-color: rgba(244,143,24,.95);
              border-radius: 100%;
              color: #fff;
              text-align: center;
              display: flex;
              -webkit-box-direction: normal;
              -webkit-box-orient: vertical;
              flex-direction: column;
              -webkit-box-pack: center;
              justify-content: center;
              .price_top
                font-size: .37333rem;
                line-height: .37333rem;
                height: .37333rem;
                span
                  font-size: .32rem;
              .price_bottom
                font-size: .37333rem;
                line-height: .37333rem;
                height: .37333rem;
                span
                  font-size: .26667rem;
                .price
                  position: relative;
                  color: #fff;
                  font-size: .30333rem;
    .home_content_four  // 福利社
      width: 10rem;
      height: 4rem;
      margin-bottom: .26667rem;
      background-color palegoldenrod
      .four_router
        background-image: url(http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg);
        -webkit-background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        display: block;
    .home_content_five  //专题精选
      margin-bottom: .26667rem;
      background-color: #fff;
      height 563px
      .five_title
        display flex
        flex-flow row nowrap
        -webkit-box-align center
        align-items center
        -webkit-box-pack center
        justify-content center
        height 1.466667rem
        font-style .42667rem
        .title_name
          font-size .42667rem
          display flex
          -webkit-box-align center
          align-items center
          flex-flow row nowrap
          color #333333
          height 48px
          .name_left
            color #333333
          .icon-jiantou3
            display: inline-block;
            vertical-align: middle;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: .4rem;
            height: .4rem;
            color black
            font-size 30px
            padding-left 10px
            box-sizing border-box

      .five_slide
        padding: 0 .4rem .48rem;
        overflow: hidden;
        .slide_inner
          overflow: visible;
          .inner_list
            height: 417px;
            transition-duration: 0ms;
            transform: translate3d(0px, 0px, 0px);
            display flex
            float left
            .list_item
              width: 7.66667rem;
              margin-right: 20.8333px;
              line-height: 1.5;
              .item_imgWarp
                display: block;
                width: 7.66667rem;
                height: 4.29333rem;
                margin-bottom: .21333rem;
                border-radius: 8px;
                overflow: hidden;
                img
                  width: 100%;
                  height: auto;
                  position: relative;
              .item_title
                height: .54667rem;
                margin-bottom: .02667rem;
                zoom: 1;
                .title_name
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  width: 5.46667rem;
                  float: left;
                  font-size: .37333rem;
                .title_price
                  float: right;
                  font-size: .37333rem;
                  color: #b4282d;
              .item_info
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 7.66667rem;
                font-size: .32rem;
                color: #7F7F7F;
    .home_content_six
      margin-bottom: .26667rem;
      background-color: #fff;
      .six_container
        background-color: #f4f4f4;
        .container_title
          line-height: 1.6rem;
          text-align: center;
          font-size: .37333rem;
          color: #333;
          background-color: #fff;
        .container_goods
          background-color white
          .goods_list
            position: relative;
            z-index: 0;
            overflow: hidden;
            width 100%
            .list_item_left
              z-index: 7;
              padding: 0 0.13333333333333333rem 0.44rem 0.26666666666666666rem;
              float: left;
              position: relative;
              width: 50%;
              overflow: hidden;
              background-color: #fff;
              box-sizing border-box
              .item_router
                width 100%
                .router_imgWrap
                  border-radius: .05333rem;
                  position: relative;
                  z-index: 0;
                  background-color: #f4f4f4;
                  .imgWrap_img
                    position: relative;
                    padding-bottom: 120%;
                    img
                      position: absolute;
                      display: block;
                      width: 100%;
                      height: 4.6rem;
                      border-radius: .05333rem .05333rem 0 0;
                      background-color: #f4f4f4;
                  .imgWrap_desc
                    position: absolute;
                    bottom: 0;
                    width: 94%;
                    background: #F1ECE2;
                    border-radius: 0 0 .05333rem .05333rem;
                    font-size: .32rem;
                    color: #9F8A60;
                    letter-spacing: 0;
                    line-height: .38667rem;
                    padding: .26667rem .13333rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;

                .router_name
                  margin-top: .13333rem;
                  padding: 0 .13333rem;
                  line-height: .64rem;
                  text-align: left;
                  font-size: .37333rem;
                  overflow: hidden;
                  white-space: nowrap;
                  color: #333;
                .router_price
                  line-height: 1;
                  font-size: .42667rem;
                  text-align: left;
                  color: #b4282d;
                  padding: 0 .13333rem;
                  margin-left -5px
                  .price_left
                    font-size .36667rem
                  .price_right
                    margin-left -15px
                    font-size .38667rem

            .list_item_right
              z-index: 7;
              padding: 0 0.26666666666666666rem 0.44rem 0.13333333333333333rem
              float: left;
              position: relative;
              width: 50%;
              overflow: hidden;
              box-sizing border-box
              .item_router
                width 100%
                height 100%
                .router_imgWrap
                  border-radius: .05333rem;
                  position: relative;
                  z-index: 0;
                  background-color: #f4f4f4;
                  .imgWrap_img
                    position: relative;
                    padding-bottom: 35%;
                    padding-left 1rem
                    padding-top 1.6rem
                    .img_title
                      color: #333;
                      font-size: .42667rem;
                      line-height: 1;
                      margin-bottom: .8rem;
                    .icon-yq-jt-r
                      display: inline-block;
                      vertical-align: middle;
                      background-repeat: no-repeat;
                      background-size: 100% 100%;
                      width: .89333rem;
                      height: .89333rem;
                      font-size: 66.6px;
                      color #999
                      margin-left .75rem

</style>
