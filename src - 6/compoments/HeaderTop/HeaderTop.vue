<template>
  <header class="container_header">
    <a  class="header_left" @click="$router.replace('/home')"></a>
    <a  class="header_title">
      <i class="title_logo"></i>
    </a>
    <div class="header_right">
      <a  class="header_search" @click="$router.replace('/search')"></a>
      <a  class="header_gouwuche" @click="$router.replace('/gouwuche')"></a>
    </div>
  </header>
</template>

<script>
  export default {
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .container_header
    background-color #fafafa
    bottom-border-1px(#999)
    width 100%
    height 1.17333rem
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
      margin-top: -8px;
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
      margin-top: -6px;
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
</style>
