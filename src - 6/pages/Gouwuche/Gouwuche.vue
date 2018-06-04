<template>
  <div class="gwc_container">
    <!-- 头部 -->
    <header class="container_header">
      <div class="header">
        <span>购物车</span>
      </div>
    </header>
    <!-- 颈部 -->
    <div class="container_nav">
      <ul class="nav_list">
        <li class="list_item">
          <span>30天无忧退货</span>
        </li>
        <li class="list_item">
          <span>48小时快速退款</span>
        </li>
        <li class="list_item">
          <span>满88元免邮费</span>
        </li>
      </ul>
    </div>
    <!-- 登陆  -->
    <div class="container_login">
      <div class="login_wrap">
        <div class="wrap_image">
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="">
        </div>
        <div class="wrap_title">
          <div class="title_top">去添加点什么吧</div>
          <a class="title_bottom" @click="$router.replace('/geren')">登录</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
.gwc_container
  width 100%
  height 100%
  &:after
    content: '';
    position: absolute;
    left: 0;
    top: 90px;
    width: 100%;
    height: 1px;
    background-color: #999;
    transform: scaleY(0.5);
  .container_header
    height: 1.17333rem;
    padding: 0 .4rem;
    line-height: 1.17333rem;
    text-align: center;
    background-color: #fff;
    position: relative;
    .header
      display flex
      justify-content center
      align-items center
      span
        display: inline-block;
        font-size: .48rem;
        color gray
  .container_nav
    width 100%
    height 15.3rem
    background-color #f4f4f4
    .nav_list
      position relative
      font-size .325rem
      padding 0 .4rem
      display flex
      justify-content space-between
      align-items center
      padding-top 22px
      color #666
      z-index 1
  .container_login
    position: fixed;
    top: 1.17333rem;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #f4f4f4;
    text-align: center;
    .login_wrap
      position: absolute;
      top: -.66667rem;
      right: 0;
      bottom: 0;
      left: 0;
      height: 4rem;
      margin: auto;
      .wrap_image
        display: inline-block;
        vertical-align: middle;
        width: 3.30667rem;
        height: 3.30667rem;
        margin-bottom: .10667rem;
        background-size: 3.30667rem 3.30667rem;
        background-position: center center;
        background-repeat: no-repeat;

      .wrap_title
        font-size: .37333rem;
        line-height: 1;
        color: #7f7f7f;
        margin-top: -.26667rem;
        .title_top
          margin-bottom: .66667rem;
          line-height: 1;
          font-size: .37333rem;
          color: #999;
        a
          display inline-block
          margin: auto;
          width: 6.4rem;
          height: 1.22667rem;
          font-size: .4rem;
          line-height: 1.22667rem;
          color: #fff;
          background-color: #b4282d;
          border-radius: .04rem;
</style>
