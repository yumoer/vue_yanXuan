<template>
  <div id="shiwuContainer">
    <div class="container">
      <!-- 头部 -->
      <header class="container_header">
        <a  href="" class="header_left" @click="$router.replace('/home')"></a>
        <a  class="header_title">
          <i class="title_logo"></i>
        </a>
        <div class="header_right">
          <a  class="header_search" @click="$router.replace('/home')"></a>
          <a  class="header_gouwuche" @click="$router.replace('/gouwuche')"></a>
        </div>
      </header>
      <!-- 内容区 -->
      <div class="container_main">
        <!-- 轮播图 -->
        <div class="main_wrap">
          <div class="wrap_banner" >
            <div class=" swiper-container"  ref="bannerWarp">
              <ul class=" swiper-wrapper"  >
                <li class=" swiper-slide" v-for="(item,index) in shiwu.banner" :key="index">
                  <img :src="item.picUrl" alt="">
                  <div class="item_info">
                    <div class="info_line1">{{item.subTitle}}</div>
                    <div class="info_line2">{{item.title}}</div>
                    <div class="info_line3">{{item.desc}}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div></div>
        </div>
        <!-- 文章块 -->
        <div class="container_main">
          <div class="main_channels " ref="channel">
            <ul class="mode_list " >
              <!-- 一个块 -->
              <li  class="list_item " v-for="(item,index) in shiwu.column" :key="index">
                <div class="item_image">
                  <img :src="item.picUrl" alt="">
                </div>
                <div class="item_icon">
                  <div class="icon_num">{{item.articleCount}}</div>
                </div>
                <div class="item_title">{{item.title}}</div>
              </li>

            </ul>
          </div>
        </div>

        <!-- 为你推荐 -->
        <div class="main_tuijian">
          <div class="tuijian_content" v-if="shiwu.recommendOne">
            <div class="content_title">{{shiwu.recommendOne.nickname}}</div>
            <a href="" class="content_top">
              <div class="top_image">
                <div class="image_icon">{{shiwu.recommendOne.typeName}}</div>
              </div>
              <div class="top_title">
                <div class="title_top">
                  <div class="top_name">{{shiwu.recommendOne.title}}</div>
                  <div class="top_price">{{shiwu.recommendOne.priceInfo}}元起</div>
                </div>
                <div class="title_bottom">{{shiwu.recommendOne.subTitle}}</div>
              </div>
            </a>
            <li  class="content_bottom" >
              <div class="bottom_left" v-if="shiwu.recommendTwo">
                <div class="left_line1">
                  <div class="line_info" >
                    <div class="info_avatar">
                      <img :src="shiwu.recommendTwo.avatar" alt="">
                    </div>
                    <div class="info_name">{{shiwu.recommendTwo.nickname}}</div>
                  </div>
                </div>
                <div class="left_line2">
                  <div class="line2_title">{{shiwu.recommendTwo.title}}</div>
                </div>
                <div class="left_line3">
                  <div class="line3_title">{{shiwu.recommendTwo.subTitle}}</div>
                </div>
              </div>
              <div class="bottom_right">
                <div class="right_image">
                  <img :src="shiwu.recommendTwo.picUrl">
                  <div class="image_icon">
                    <div class="icon_text"></div>
                  </div>
                </div>
              </div>
            </li>
            <li  class="content_bottom" >
              <div class="bottom_left" v-if="shiwu.recommendThree">
                <div class="left_line1" >
                  <div class="line_info" >
                    <div class="info_avatar">
                      <img :src="shiwu.recommendThree.avatar" alt="">
                    </div>
                    <div class="info_name">myumo</div>
                  </div>
                </div>
                <div class="left_line2">
                  <div class="line2_title">{{shiwu.recommendThree.title}}</div>
                </div>
                <div class="left_line3">
                  <div class="line3_title">{{shiwu.recommendThree.subTitle}}</div>
                </div>
              </div>
              <div class="bottom_right">
                <div class="right_image">
                  <img :src="shiwu.recommendThree.picUrl">
                  <div class="image_icon">
                    <div class="icon_text"></div>
                  </div>
                </div>
              </div>
            </li>
          </div>
        </div>
        <!-- 十点一刻 -->
        <div class="main_tenfifteen">
          <div class="tenfifteen_wrap">
            <div class="wrap_title">十点一刻</div>
            <div class="wrap_wrap " ref="tenwrap">
              <ul class="wrap_list ">
                <li  class="list_item " v-for="(item,index) in shiwu.tenfifteen" :key="index">
                  <div class="item_title">
                    <span class="title_name">今日话题</span>
                  </div>
                  <div class="item_name">{{item.title}}</div>
                  <div class="item_info">{{item.desc}}</div>
                  <div class="item_joininfo">
                    <div class="joininfo_inner">
                      <ul class="inner_avatars">
                        <li class="avatar" v-for="(li,index) in item.participantAvatar" :key="index">
                          <img :src="li" alt="">
                        </li>
                      </ul>
                      <div class="inner_join">
                        <span>{{item.participantNum}}人参与话题</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <!-- 严选甄品 -->
        <div class="main_zhenpin">
          <div class="tuijian_content" v-if="shiwu.zhenOne">
            <div class="content_title">严选甄品</div>
            <li  class="content_top" >
              <div class="top_image">
                <div class="image_icon">{{shiwu.zhenOne.nickname}}</div>
              </div>
              <div class="top_title">
                <div class="title_top">
                  <div class="top_name">{{shiwu.zhenOne.title}}</div>
                </div>
                <div class="title_bottom">{{shiwu.zhenOne.subTitle}}</div>
              </div>
            </li>
            <li class="content_bottom" v-if="shiwu.zhenTwo">
              <div class="bottom_left">
                <div class="left_line2">
                  <div class="line2_title">{{shiwu.zhenTwo.title}}</div>
                </div>
                <div class="left_line3">
                  <div class="line3_title">{{shiwu.zhenTwo.subTitle}}</div>
                </div>
              </div>
              <div class="bottom_right">
                <div class="right_image" >
                  <img :src="shiwu.zhenTwo.picUrl" alt="">
                  <div class="image_icon">
                    <div class="icon_text"></div>
                  </div>
                </div>
              </div>
            </li>
            <li class="content_bottom" v-if="shiwu.zhenThree">
              <div class="bottom_left">
                <div class="left_line2">
                  <div class="line2_title">{{shiwu.zhenThree.title}}</div>
                </div>
                <div class="left_line3">
                  <div class="line3_title">{{shiwu.zhenThree.subTitle}}</div>
                </div>
              </div>
              <div class="bottom_right">
                <div class="right_image">
                  <img :src="shiwu.zhenThree.picUrl" alt="">
                  <div class="image_icon">
                    <div class="icon_text"></div>
                  </div>
                </div>
              </div>
            </li>
          </div>
        </div>
        <!-- 严选LOOK -->
        <div class="main_look" v-if="shiwu.yxLook">
          <div class="look_title">严选LOOK</div>
          <li  class="look_content">
            <img :src="shiwu.yxLook.picUrl" alt="">
            <div class="content_main">
              <div class="main_author">
                <div class="author_info">
                  <div class="info_avatar">
                    <img :src="shiwu.yxLook.avatar" alt="">
                  </div>
                  <div class="info_name">{{shiwu.yxLook.nickname}}</div>
                </div>
              </div>
              <div class="main_info">{{shiwu.yxLook.content}}</div>
            </div>
            <div class="content_tag">
              <div class="tag_center"></div>
            </div>
          </li>
        </div>
        <!-- 更多精彩 -->
        <div class="main_more">
          <div class="more_title">
            <div class="title_name">更多精彩</div>
          </div>
          <div class="more_content">
            <ul class="content_list">
              <li class="list_item" v-for="(more,index) in shiwu.findMore" :key="index">
                <div class="item_image">
                  <img :src="more.itemPicUrl" alt="">
                </div>
                <div class="item_info">{{more.subTitle}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  export default {
    created () {
      this.resetTop()
    },
    methods: {
      resetTop () {
        window.scrollTo(0, 0)
      }
    },
    computed:{
      ...mapState(['shiwu'])
    },
    mounted(){

      this.$nextTick(() => {
        console.log(this, this.$refs.fool)
        setTimeout(() => {
          new Swiper(this.$refs.bannerWarp, {
            slidesPerView: 1.04,  // 自动填充下一页部分内容
            centeredSlides: true,
            onInit: function (swiper) {
              swiper.slides[1].className = 'swiper-slide swiper-slide-active'
            },
            loop: true,
            spaceBetween: 20,
            autoplay: {
              delay:3000
            },
            width:690
          })
        },120)
      })

      this.$store.dispatch('getShiwu',()=>{
        this.$nextTick(()=>{
          setTimeout(()=>{
            new BScroll(this.$refs.channel,{
              scrollX:true,
              eventPassthrough: 'vertical'  //阻止上下滑动,
            })

            new BScroll(this.$refs.tenwrap,{
              scrollX:true,
              scrollY:false,
              eventPassthrough: 'vertical'  //阻止上下滑动
            })
          },20)
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #shiwuContainer
    width 10rem
    .container
      width 100%
      .container_header
        bottom-border-1px(#999)
        width 100%
        height 1.17333rem
        background-color white
        padding 0 .21333rem 0 .32rem
        margin auto
        position relative
        box-sizing border-box
        .header_left
          width: .64rem;
          height: .58667rem;
          background-position: 0 -.98667rem;
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png);
          background-repeat: no-repeat;
          background-size: 2.29333rem 5.30667rem;
        .header_title
          .title_logo
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            margin: auto;
            width: 2.29333rem;
            height: .72rem;
            background-position: 0 -1.70667rem;
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png);
            background-repeat: no-repeat;
            background-size: 2.29333rem 5.30667rem;
        .header_right
          margin-left: auto;
          margin-right: .06667rem;
          float right
          .header_search
            margin-left: auto;
            margin-right: -0.16667rem;
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png);
            background-repeat: no-repeat;
            background-size: 2.29333rem 5.30667rem;
            width: .85333rem;
            height: .85333rem;
            background-position: 0 -4.45333rem;
            position: relative;
            bottom: 0;
          .header_gouwuche
            position: relative;
            width: .85333rem;
            height: .85333rem;
            background-position: 0 0;
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png);
            background-repeat: no-repeat;
            background-size: 2.29333rem 5.30667rem;
      .container_main
        background-color: #f4f4f4;
        line-height: 1.2;
        /*轮播图*/
        .main_wrap
          background-color: #fff;
          overflow: hidden;
          .wrap_banner
            padding: .32rem 0;
            width: 9.2rem;
            margin: auto;
            position: relative;
            background-color: #fff;
            flex-direction row
            line-height: 1.2;
            .swiper-container
              margin-left: auto;
              margin-right: auto;
              position: relative;
              overflow: visible!important;
              z-index: 1;
              .swiper-wrapper
                width 100%
                .swiper-slide
                  position: relative;
                  img
                    display: block;
                    width:100%
                    height: 5.13333rem;
                    border-radius: .10667rem
                  .item_info
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    margin: auto;
                    flex-direction: column;
                    width: 6.21333rem;
                    height: 2.64rem;
                    background-color: rgba(255,255,255,.9);
                    display flex
                    align-items center
                    justify-content: center
                    .info_line1
                      position: relative;
                      font-size: .26667rem;
                      color: #7f7f7f;
                      line-height: .4rem;
                      padding: 0 .10667rem;
                      &:before
                        content: ' ';
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        margin: auto;
                        width: .32rem;
                        height: 1px;
                        background-color: #999;
                        left: -.32rem;
                      &:after
                        content: ' ';
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        margin: auto;
                        width: .32rem;
                        height: 1px;
                        background-color: #999;
                        right: -.32rem;
                    .info_line2
                      font-size: .42667rem;
                      line-height: .64rem;
                      color: #333;
                      margin-top: .21333rem;
                      font-weight: 700;
                    .info_line3
                      font-size: .32rem;
                      color: #333;
                      line-height: .48rem;
                      margin-top: .05333rem;

        /*文章块*/
        .container_main
          box-sizing border-box
          .main_channels
            overflow: hidden;
            padding: .42667rem .4rem .37333rem;
            height: 3.0134rem;
            background-color: #fff;
            margin-bottom: .26667rem;
            .mode_list
              /*float left*/
              display flex
              flex-flow: row nowrap;
              width 1540px
              .list_item
                position: relative;
                width: 2.18667rem;
                height: 2.8rem;
                margin-right: .32rem;
                .item_image
                  width: 2.18667rem;
                  height: 2.18667rem;
                  margin-bottom: .29333rem;
                  border-radius: .05333rem;
                  -webkit-background-size: cover;
                  background-position: center;
                  background-repeat: no-repeat;
                  img
                    width: 2.18667rem;
                    height: 2.18667rem;
                .item_icon
                  position: absolute;
                  top: 0;
                  right: 0;
                  color: #fff;
                  width: 1.74667rem;
                  height: .42667rem;
                  border-radius: 0 .05333rem 0 0;
                  background-color #999
                  .icon_num
                    position: absolute;
                    top: 0;
                    right: .10667rem;
                    width: 2rem;
                    height: .42667rem;
                    line-height: .42667rem;
                    text-align: right;
                    font-size 25px
                .item_title
                  color: #333;
                  font-size: .32rem;
                  line-height: 1;
                  text-align: center;
                  width: 2.45333rem;
                  margin-left: -.13333rem;

        /*为你推荐*/
        .main_tuijian
          padding: 0 .4rem .53333rem;
          margin-bottom: .26667rem;
          background-color: #fff;
          .tuijian_content
            width 100%
            .content_title
              background-color: #fff;
              text-align: center;
              font-size: .42667rem;
              height: 1.6rem;
              line-height: 1.6rem;
            .content_top
              display: block;
              position: relative;
              color: #333;
              border: 1px solid #d9d9d9;
              border-radius: .10667rem;
              overflow: hidden;
              margin-bottom: .4rem;
              .top_image
                position: relative;
                height: 5.14667rem;
                border-radius: .10667rem .10667rem 0 0;
                overflow: hidden;
                background-image: url(//yanxuan.nosdn.127.net/09d83c97c9963495e6518cfbec776b4c.jpg?imageView&quality=75);
                -webkit-background-size: cover;
                background-position: center;
                background-repeat: no-repeat;

                .image_icon
                  box-sizing border-box
                  font-size 34%
                  display: inline-block;
                  padding: 0 .21333rem;
                  height: .48rem;
                  line-height: .48rem;
                  background-color: rgba(255,255,255,.9);
                  border: 1px solid #d9d9d9;
                  border-radius: .26667rem;
                  color: #333;
                  margin-left 20px
              .top_title
                overflow: hidden;
                position: relative;
                padding: .32rem .26667rem 0;
                background-color: #fff;
                padding-bottom: 0.8933333333333333rem;
                .title_top
                  align-items: center;
                  line-height: 1.2;
                  margin-bottom: .25333rem;
                  display: flex;
                  -webkit-box-pack: justify;
                  justify-content: space-between;
                  -webkit-box-align: center;
                  .top_name
                    -webkit-box-flex 1
                    flex: 1;
                    margin-right: .4rem;
                    font-size: .48rem;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                  .top_price
                    line-height: 1;
                    font-size: .42667rem;
                    text-align: center;
                    min-width: 1.53333rem;
                .title_bottom
                  position: relative;
                  font-size: .37333rem;
                  line-height: 1.2;
                  color: #7f7f7f;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden;
            .content_bottom
              display: flex;
              background-color: #fff;
              color: #333;
              border: 1px solid #d9d9d9;
              border-radius: .05333rem;
              margin-bottom: .4rem;
              .bottom_left
                justify-content: center;
                overflow: hidden;
                position: relative;
                padding-left: .26667rem;
                padding-right: .4rem;
                flex-direction: column;
                -webkit-box-pack: center;
                flex: 1;
                display flex
                .left_line1
                  margin-bottom: .33333rem;
                  .line_info
                    height: 0.64rem;
                    font-size: 0.26666666666666666rem;
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                    .info_avatar
                      width: 0.64rem;
                      height: 0.64rem;
                      margin-right: 0.10666666666666667rem;
                      border-radius: 50%;
                      overflow: hidden;
                      border: 1px solid #d9d9d9;
                      img
                        display: block;
                        width: 100%;
                        height: 100%;
                    .info_name
                      color: #333;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      overflow: hidden;
                .left_line2
                  margin-bottom: .18667rem;
                  line-height: 1.2;
                  .line2_title
                    margin-right: .4rem;
                    font-size: .42667rem;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    .line2_title
                      margin-right: .4rem;
                      font-size: .42667rem;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      overflow: hidden;
                .left_line3
                  .line3_title
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    position: relative;
                    font-size: .32rem;
                    line-height: 1.5;
                    color: #7f7f7f;
              .bottom_right
                position: relative;
                width: 3.73333rem;
                height: 3.62667rem;
                .right_image
                  background-position: center;
                  background-repeat: no-repeat;
                  -webkit-background-size: cover;
                  position: relative;
                  width: 100%;
                  height: 100%;
                  background-color: #f4f4f4;
                  img
                    width: 100%;
                    height: 100%;
                  .image_icon
                    position: absolute;
                    top: .13333rem;
                    left: .13333rem;
                    .icon_text
                      display: inline-block;
                      padding: 0 .21333rem;
                      height: .48rem;
                      line-height: .48rem;
                      background-color: rgba(255,255,255,.9);
                      border: 1px solid #d9d9d9;
                      border-radius: .26667rem;
                      color: #333;
        /*十点一刻*/
        .main_tenfifteen
          overflow: hidden;
          padding: 0 .4rem .53333rem;
          height: 7.08rem;
          background-color: #fff;
          margin-bottom: .26667rem;
          .tenfifteen_wrap
            width 690px

            .wrap_title
              background-color: #fff;
              text-align: center;
              font-size: .42667rem;
              height: 1.6rem;
              line-height: 1.6rem;
            .wrap_wrap
              display: flex;
              .wrap_list
                display: flex;
                flex-flow: row nowrap;
                flex:1
                float left
                .list_item
                  display: inline-block;
                  vertical-align: middle;
                  background-repeat: no-repeat;
                  background-size: 100% 100%;
                  position: relative;
                  width: 6.667rem
                  height: 3.92rem;
                  padding: .50667rem .53333rem 1.05333rem;
                  margin-right: .4rem;
                  text-align: center;
                  color: #333;
                  background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png);
                  .item_title
                    justify-content: center;
                    margin-bottom: .53333rem;
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                    -webkit-box-pack: center;
                    span
                      margin: 0 .10667rem;
                      font-size: .32rem;
                      color: #7f7f7f;
                  .item_name
                    font-size: .48rem;
                    font-weight: 700;
                    margin-bottom: .18667rem;
                  .item_info
                    font-size: .37333rem;
                    line-height: 1.5;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  .item_joininfo
                    position: absolute;
                    bottom: 1.05333rem;
                    width: 6.66667rem;
                    text-align: center;
                    .joininfo_inner
                      display: inline-block;
                      overflow: hidden;
                      .inner_avatars
                        float: left;
                        .avatar
                          position: relative;
                          float: left;
                          height: .64rem;
                          width: .64rem;
                          overflow: hidden;
                          border: 1px solid #fff;
                          border-radius: 50%;
                          display flex
                        .avatar_all
                          align-items: center;
                          justify-content: center;
                          -webkit-box-align: center;
                          display: flex;
                          -webkit-box-pack: center;
                          border: 2px solid #fff;
                          background-color: #d9d9d9;
                          margin-left: -.08rem;
                          position: relative;
                          float: left;
                          height: .64rem;
                          width: .64rem;
                          overflow: hidden;
                          border-radius: 50%;
                          .dot
                            width: .08rem;
                            height: .08rem;
                            border-radius: 50%;
                            margin-right: .05333rem;
                            background-color: #fff;

                      .inner_join
                        float: left;
                        text-align: left;
                        line-height: .64rem;
                        font-size: .32rem;
                        color: #7f7f7f;
        /*严选甄品*/
        .main_zhenpin
          padding: 0 .4rem .53333rem;
          margin-bottom: .26667rem;
          background-color: #fff;
          .tuijian_content
            width 100%
            .content_title
              background-color: #fff;
              text-align: center;
              font-size: .42667rem;
              height: 1.6rem;
              line-height: 1.6rem;
            .content_top
              display: block;
              position: relative;
              color: #333;
              border: 1px solid #d9d9d9;
              border-radius: .10667rem;
              overflow: hidden;
              margin-bottom: .4rem;
              .top_image
                position: relative;
                height: 5.14667rem;
                border-radius: .10667rem .10667rem 0 0;
                overflow: hidden;
                background-image: url(//yanxuan.nosdn.127.net/39c9199f7d40425b3dcd9e6737955816.jpg?imageView&quality=75);
                -webkit-background-size: cover;
                background-position: center;
                background-repeat: no-repeat;

                .image_icon
                  box-sizing border-box
                  font-size 34%
                  display: inline-block;
                  padding: 0 .21333rem;
                  height: .48rem;
                  line-height: .48rem;
                  background-color: rgba(255,255,255,.9);
                  border: 1px solid #d9d9d9;
                  border-radius: .26667rem;
                  color: #333;
                  margin-left 20px
              .top_title
                overflow: hidden;
                position: relative;
                padding: .32rem .26667rem 0;
                background-color: #fff;
                padding-bottom: 0.8933333333333333rem;
                .title_top
                  align-items: center;
                  line-height: 1.2;
                  margin-bottom: .25333rem;
                  display: flex;
                  -webkit-box-pack: justify;
                  justify-content: space-between;
                  -webkit-box-align: center;
                  .top_name
                    -webkit-box-flex 1
                    flex: 1;
                    margin-right: .4rem;
                    font-size: .48rem;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                  .top_price
                    line-height: 1;
                    font-size: .42667rem;
                    text-align: center;
                    min-width: 1.53333rem;
                .title_bottom
                  position: relative;
                  font-size: .37333rem;
                  line-height: 1.2;
                  color: #7f7f7f;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden;
            .content_bottom
              display: flex;
              background-color: #fff;
              color: #333;
              border: 1px solid #d9d9d9;
              border-radius: .05333rem;
              margin-bottom: .4rem;
              .bottom_left
                justify-content: center;
                overflow: hidden;
                position: relative;
                padding-left: .26667rem;
                padding-right: .4rem;
                flex-direction: column;
                -webkit-box-pack: center;
                flex: 1;
                display flex
                .left_line1
                  margin-bottom: .33333rem;
                  .line_info
                    height: 0.64rem;
                    font-size: 0.26666666666666666rem;
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                    .info_avatar
                      width: 0.64rem;
                      height: 0.64rem;
                      margin-right: 0.10666666666666667rem;
                      border-radius: 50%;
                      overflow: hidden;
                      border: 1px solid #d9d9d9;
                      img
                        display: block;
                        width: 100%;
                        height: 100%;
                    .info_name
                      color: #333;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      overflow: hidden;
                .left_line2
                  margin-bottom: .18667rem;
                  line-height: 1.2;
                  .line2_title
                    margin-right: .4rem;
                    font-size: .42667rem;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    .line2_title
                      margin-right: .4rem;
                      font-size: .42667rem;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      overflow: hidden;
                .left_line3
                  .line3_title
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    position: relative;
                    font-size: .32rem;
                    line-height: 1.5;
                    color: #7f7f7f;
                    white-space: nowrap;
              .bottom_right
                position: relative;
                width: 3.73333rem;
                height: 3.62667rem;
                .right_image
                  background-position: center;
                  background-repeat: no-repeat;
                  -webkit-background-size: cover;
                  position: relative;
                  width: 100%;
                  height: 100%;
                  background-color: #f4f4f4;
                  img
                    width: 100%;
                    height: 100%;
                  .image_icon
                    position: absolute;
                    top: .13333rem;
                    left: .13333rem;
                    .icon_text
                      display: inline-block;
                      padding: 0 .21333rem;
                      height: .48rem;
                      line-height: .48rem;
                      background-color: rgba(255,255,255,.9);
                      border: 1px solid #d9d9d9;
                      border-radius: .26667rem;
                      color: #333;
        /*严选LOOK*/
        .main_look
          position: relative;
          .look_title
            background-color: #fff;
            text-align: center;
            font-size: .42667rem;
            height: 1.6rem;
            line-height: 1.6rem;

          .look_content
            position: relative;
            display: block;
            color: #333;
            img
              width: 100%;
              height: 500px;
            .content_main
              overflow: hidden;
              position: relative;
              padding: .32rem .4rem .61333rem;
              background-color: #fff;
              .main_author
                margin-bottom: .32rem;
                .author_info
                  height: 0.64rem;
                  font-size: 0.32rem;
                  display flex
                  align-items content
                  .info_avatar
                    width: 0.64rem;
                    height: 0.64rem;
                    margin-right: 0.10666666666666667rem;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 1px solid #d9d9d9;
                    img
                      display: block;
                      width: 100%;
                      height: 100%;
                  .info_name
                    color: #333;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;



              .main_info
                font-size: .37333rem;
                line-height: 1.6;
                color: #7f7f7f;

            .content_tag
              position: absolute;
              width: .21333rem;
              height: .21333rem;
              border-radius: 50%;
              background-color: #f48f18;
              top: 4.1066666666666665rem;
              left: 5.173333333333333rem;
              .tag_center
                position: absolute;
                width: .21333rem;
                height: .21333rem;
                border-radius: 50%;
                background-color: #f48f18;
                -webkit-transform-origin: 50% 50%;
                -webkit-animation: blink 1s infinite;

        /*更多精彩*/
        .main_more
          margin: 0 .4rem .4rem;
          .more_title
            height 1.86667rem
            display flex
            align-items center
            &:before
              content: ' ';
              display: block;
              width: 3.52rem;
              height: 1px;
              background-color: #d9d9d9;
            &:after
              content: ' ';
              display: block;
              width: 3.52rem;
              height: 1px;
              background-color: #d9d9d9;
            .title_name
              margin: 0 .32rem;
              font-size: .37333rem;
              color: #333;


          .more_content
            display: block;
            color: #333;
            .content_list
              .list_item
                display: block;
                padding: .32rem;
                margin-bottom: .4rem;
                background-color: #fff;
                color: #333;
                .item_image
                  -webkit-background-size: cover;
                  background-position: center;
                  background-repeat: no-repeat;
                  width: 8.56rem;
                  height: 4.8rem;
                  background-color: #f4f4f4;
                  img
                    width: 8.56rem;
                    height: 4.8rem;
                .item_info
                  background-color: #fff;
                  font-size: .37333rem;
                  padding-top: .38667rem;
                  padding-bottom: .37333rem;
                  line-height: 1.2;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden;




</style>
