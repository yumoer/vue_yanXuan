<template>
  <!-- 居家好物 -->
  <div class="home_content_six">
    <div class="six_container">
      <h3 class="container_title">居家好物</h3>
      <div class="container_goods" >
        <ul class="goods_list">
          <li class="list_item_left" v-for="(cate,index) in home.cateList[0].itemList" :key="index" v-if="index<=6">
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
                  <p class="img_title">更多{{cate.name}}好物</p>
                  <i class="iconfont icon-yq-jt-r"></i>
                </div>
              </div>
            </a>
          </li>

          <!--<li class="list_item_more">-->
          <!--<a href="" class="more_router">-->
          <!--<div class="router_imgWrap">-->
          <!--<div class="imgWrap_img">-->
          <!--<p class="img_title">更多居家好物</p>-->
          <!--<i class="iconfont icon-yq-jt-r"></i>-->
          <!--</div>-->
          <!--</div>-->
          <!--</a>-->
          <!--</li>-->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['home'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
