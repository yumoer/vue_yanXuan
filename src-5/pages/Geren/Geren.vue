<template>
  <div class="geren_Container">
    <!-- 头部 -->
    <header class="container_header">
      <a class="header_left" ></a>
      <a class="header_title">
        <i class="title_logo"></i>
      </a>
      <div class="header_right">
        <a class="header_search"></a>
        <a class="header_gouwuche"></a>
      </div>
    </header>

    <div class="container_content">
      <div class="content_top">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="content_center">
        <div class="center_phone">
          <i class="iconfont icon-shouji"></i>
          <span>手机号码登录</span>
        </div>
        <div class="center_email">
          <i class="iconfont icon-email"></i>
          <span>邮箱帐号登录</span>
        </div>
        <div class="center_likelogin">
          <span>手机号快捷注册</span>
          <i class="iconfont icon-jiantou1"></i>
        </div>
      </div>
      <ul class="content_footer">
        <li class="chatType Wechat">
          <span class=" chat_item weixin_item">
            <i class="iconfont icon-weixin icon"></i>
            <span class=" chat wexin">微信</span>
          </span>
        </li>
        <li class="chatType QQ">
          <span class="chat_item  wechat_item">
            <i class="iconfont icon-weixin icon"></i>
            <span class="chat qq">QQ</span>
          </span>
        </li>
        <li class="chatType Weibo">
          <span class="chat_item wechat_item">
            <i class="iconfont icon-webo icon"></i>
            <span class="chat weibo">微博</span>
          </span>
        </li>
      </ul>
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
  .geren_Container
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
    .container_content
      position: relative;
      background: #F2F5F4;
      height 1245px
      .content_top
        text-align: center;
        padding-top: 2.13333rem;
        padding-bottom: 2.13333rem;
        img
          width: 3.57333rem;
          height: 1.2rem;
      .content_center
        padding: 0 .53333rem;
        margin-bottom: 2.73333rem;
        .center_phone
          margin-bottom: .42667rem;
          border-radius: 2px;
          display: block;
          width: 100%;
          height: 1.25333rem;
          line-height: 1.25333rem;
          font-size: .37333rem;
          color: #fff;
          border: 1px solid #b4282d;
          background-color: #b4282d;
          overflow: hidden;
          vertical-align: middle;
          text-align: center;
        .center_email
          display: block;
          width: 100%;
          height: 1.25333rem;
          line-height: 1.25333rem;
          border-color: #b4282d;
          color: #b4282d;
          background-color: transparent;
          vertical-align: middle;
          text-align: center;
          font-size: .37333rem;
          border: 1px solid #b4282d;
          overflow: hidden;

        .center_likelogin
          color: #333;
          font-size: .37333rem;
          text-align: center;
          width: 100%;
          margin-top 40px
          .icon-jiantou1
            margin-right: .21333rem;
            position: relative;
            top: -.02667rem;
            color #666
      .content_footer
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 1.06667rem;
        height: .53333rem;
        text-align: center;

        .chatType
          height: .53333rem;
          border-right: 1px solid #979797;
          display: inline-block;
          text-align: center;
          padding: 0 .53333rem;
          &.Weibo
            border-right: none;
          .chat_item
            height: .53333rem;
            position: relative;
            top: -0.4833rem;
            .iconfont
              font-size 25px
            .chat
              height: .53333rem;
              color: #7F7F7F;
              margin-left: -0.1rem;
              font-size: .37333rem;
              line-height: .53333rem;
</style>
