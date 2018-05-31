<template>
  <div id="fenleiContainer">
    <div class="container">
      <header class="fenlei_header">
        <div class="header_main">
          <div class="top_input top_search">
            <i class="iconfont icon-sousuo1"></i>
            <span class="search_name">搜索商品, 共9770款好物</span>
          </div>
        </div>
        <div class="left_main">
          <div class="main_content" ref="mainContent">
            <ul class="content_list">
              <li class="list_item" v-for="(category,index) in fenlei.categoryL1List" :key="index">
                <div href="" class="item_title">{{category.name}}</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="right_main">
          <div class="main_top" >
            <img src="http://yanxuan.nosdn.127.net/c1adbc77984d504e48329dcc5f742905.jpg?imageView&thumbnail=0x196&quality=75" alt="">
          </div>
          <div class="main_bottom">
            <div class="bottom_title">
              <div class="title_name" >
                <span>居家分类</span>
              </div>
            </div>
            <ul class="bottom_list" >
              <li class="list_item" v-for="(categoryL2,index) in fenlei.categoryL2List" :key="index">
                <div href="" class="item_desc">
                  <div class="desc_image">
                    <img :src="categoryL2.wapBannerUrl" alt="">
                  </div>
                  <div class="desc_name">{{categoryL2.name}}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['fenlei'])
    },
    mounted(){
      this.$store.dispatch('getFenlei')

      new BScroll(this.$refs.mainContent,{
        scrollY: true,
        click: true
      })
    },


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #fenleiContainer
    .container
      position relative
      .fenlei_header
        &:after
          content: '';
          position: absolute;
          background-color: #d9d9d9;
          top:86px
          left: 0;
          width: 100%;
          height: 1px;
          transform-origin: 50% 100% 0;
          bottom: 0;
        .header_main
          display flex
          flex-flow row nowrap
          -webkit-box-align center
          align-items: center;
          padding: .21333rem .4rem
          background-color white
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
        .left_main
          left: 0;
          top: 1.17333rem;
          position: fixed;
          bottom: 0;
          z-index: 4;
          width: 2.16rem;
          background-color: #fff;
          .main_content
            position: relative;
            height: 100%;
            width: 100%;
            overflow: hidden;
            &:after
              content: '';
              position: absolute;
              background-color: rgba(0,0,0,.15);
              top: 0;
              bottom: 0;
              width: 1px;
              -webkit-transform-origin: 100% 50% 0;
              transform-origin: 100% 50% 0;
              right: 0;
            .content_list
              padding: .53333rem 0;
              .list_item
                width: 100%;
                height: .66667rem;
                text-align: center;
                border: none;
                margin-bottom 40px
                .item_title
                  display: block;
                  color: #333;
                  font-size: .37333rem;
                  line-height: .66667rem;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden;
        .right_main
          margin-left: 2.16rem;
          padding: .4rem .4rem .28rem;
          background-color white
          .main_top
            position: relative;
            width: 100%;
            height: 2.56rem;
            display: table;
            background: center no-repeat #f4f4f4;
            background-size: cover;
            border-radius: 4px;
            img
              display: table-cell;
              vertical-align: middle;
              text-align: center;
              font-size: .37333rem;
              color: #fff;
          .main_bottom
            box-sizing border-box
            .bottom_title
              height: 1.44rem;
              line-height: 1.44rem;
              text-align: center;
              font-size: .32rem;
              color: #333;
              .title_name
                position: relative
                &:before
                  left: 2.25333rem;
                  position: absolute;
                  content: '';
                  top: 0;
                  bottom: 0;
                  margin: auto;
                  height: 1px;
                  width: .53333rem;
                  background-color: #999999;
                  transform-origin: 50% 100% 0;
                &:after
                  right: 2.25333rem;
                  position: absolute;
                  content: '';
                  top: 0;
                  bottom: 0;
                  margin: auto;
                  height: 1px;
                  width: .53333rem;
                  background-color: #999999;
                  transform-origin: 50% 100% 0;


            .bottom_list
              box-sizing border-box
              .list_item
                display: inline-block;
                margin-right: 0.4268rem;
                font-size: 0;
                width: 1.92rem;
                vertical-align: top;
                box-sizing border-box

                .item_desc
                  box-sizing border-box
                  .desc_image
                    width: 1.92rem;
                    height: 1.92rem;
                    img
                      width: 1.92rem;
                      height: 1.92rem;
                  .desc_name
                    height: .96rem;
                    font-size: .32rem;
                    color: #333;
                    text-align: center;
                    line-height: .45333rem;
</style>
