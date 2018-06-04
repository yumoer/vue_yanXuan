<template>
  <div class="left_main">
    <div class="main_content" ref="mainContent">
      <ul class="content_list">
        <li class="list_item" v-for="(category,index) in fenlei.categoryL1List" :key="index" :class="{active:current === index}" @click="currentIndex(index)">
          <span href="">{{category.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        current: 3
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
      }
    },
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
</style>
