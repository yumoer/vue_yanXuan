<template>
  <!-- 尾部信息 -->
  <div class="home_footer">
    <div class="wrap_content">
      <div class="content_top">
        <a href="" class="top_goapp">下载APP</a>
        <a href="" class="top_goweb">电脑版</a>
      </div>
      <div class="content_bottom">
        <span>网易公司版权所有 © 1997-</span>
        <span>2018</span><br>
        <span>食品经营许可证：JY13301080111719</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .home_footer
    border-top: 1px solid rgba(0,0,0,.15);
    background-color: #414141;
    margin-bottom 100px
    .wrap_content
      text-align: center;
      padding: .72rem .26667rem .37333rem;
      width: 10rem;
      margin-right: auto;
      margin-left: auto;
      box-sizing: border-box;
      .content_top
        height 62px
        .top_goapp
          margin-right: .46667rem;
          width: 2.29333rem;
          font-size: .32rem;
          color: #fff;
          height: .82667rem;
          line-height: .82667rem;
          border: 1px solid #999;
          background-color: transparent;
          display: inline-block;
          vertical-align: middle;
          text-align: center;
          border-radius: 4px;
          overflow: hidden;
          margin-top: -30px;
        .top_goweb
          width: 2.29333rem;
          font-size: .32rem;
          color: #fff;
          height: .82667rem;
          border: 1px solid #999;
          background-color: transparent;
          line-height: .82667rem;
          display: inline-block;
          vertical-align: middle;
          text-align: center;
          border-radius: 4px;
          overflow: hidden;
          margin-top: -30px;
      .content_bottom
        margin-top: .48rem;
        font-size: .32rem;
        line-height: .42667rem;
        color: #999;
</style>
