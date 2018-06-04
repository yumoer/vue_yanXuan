<template>
  <div id="fenleiContainer">
    <div class="container">
      <header class="fenlei_main">
        <!--头部-->
        <FenleiHeader/>
        <div class="left_main">
          <div class="main_content" ref="mainContent">
            <ul class="content_list">
              <li class="list_item" v-for="(category,index) in fenlei.categoryL1List" :key="index" :class="{active:current === index}" @click="currentIndex(index)" >
                <span >{{category.name}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="right_main" v-for="(category,index) in fenlei.categoryL1List" :key="index" :class="{active:currentindex === index}"
             v-if="currentindex?currentindex===index:current===index">
          <div class="main_top" >
            <img :src="category.bannerUrl" alt="">
          </div>
          <div class="main_bottom">
            <div class="bottom_title">
              <div class="title_name" >
                <span>{{category.name}}分类</span>
              </div>
            </div>
            <ul class="bottom_list" >
              <li class="list_item"  v-for="(item,index) in category.subCateList" :key="index">
                <div href="" class="item_desc">
                  <div class="desc_image">
                    <img :src="item.wapBannerUrl" alt="">
                  </div>
                  <div class="desc_name">{{item.name}}</div>
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

  import FenleiHeader from './Fenlei_hander/FenleiHeader'
  export default {
    data(){
      return{
        current: 3,
        currentindex: 3
      }
    },
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

    methods:{
      currentIndex (index) {
        this.current = index
        this.currentindex = index
      }
    },

    components:{
      FenleiHeader
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #fenleiContainer
    .container
      position relative
      .fenlei_main
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
              height: 1230px;
              .list_item
                width: 100%;
                height: .66667rem;
                text-align: center;
                border: none;
                margin-bottom 40px
                span
                  display: block;
                  color: #333;
                  font-size: .37333rem;
                  line-height: .66667rem;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden
                &.active
                  color #b4282d
                  position relative
                  span
                    color #b4282d
                    font-size .45rem
                    &:before
                      content: ' ';
                      position: absolute;
                      top: 0;
                      left: 0;
                      bottom: 0;
                      width: .08rem;
                      margin-top: -5px;
                      height: 60px;
                      background-color: #ab2b2b;
        .right_main
          margin-left: 2.16rem;
          padding: .4rem .4rem .28rem;
          background-color white
          .main_top
            position: relative;
            height: 2.56rem;
            display: table;
            background: center no-repeat #f4f4f4;
            background-size: cover;
            border-radius: 4px;
            margin-top: 88px;
            img
              width 100%
              height 100%
              display: table-cell;
              vertical-align: middle;
              text-align: center;
              font-size: .37333rem;
              color: #fff;
          .main_bottom
            box-sizing border-box
            padding-bottom: 50px;
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
