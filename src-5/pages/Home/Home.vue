<template>
  <div id="homeContainer">
    <!-- 头部区域 -->
    <Header/>
    <!--内容区域-->
    <Container/>
    <!-- 尾部信息 -->
    <Footer/>
  </div>

</template>

<script>
  import GoTop from '../../compoments/goTop/goTop'
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import Header from './Home_Header/Home_Header'
  import Container from './Home_Container/Home_Container'
  import Footer from './Home_Footer/Home_Footer'
  import '../../../static/dist/css/swiper.css'
  export default {

    computed:{
      ...mapState(['home'])
    },
    components:{
      Header,
      Container,
      Footer,
      GoTop
    },
    mounted(){
      this.$store.dispatch('getHome')

        new Swiper (this.$refs.fool ,{
          autoplay:true,
          click:true,
          loop: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination'
          }
        });

        /*new Swiper(this.$refs.inner_top,{
          // slidesPerView : 'auto',
          slidesPerGroup : 1,
        })*/

        /*new Swiper(this.$refs.inner_bottom,{
          slidesPerView : 'auto',
          slidesPerGroup : 1,
        })*/

        /*new Swiper(this.$refs.slide,{
          slidesPerView : 'auto',
          slidesPerGroup : 1,
        })*/

        /*console.log(this.$refs.inner_top.offsetWidth, 'xxxxxxxxxxxxxxxxxx')
        console.log(this.$refs.inner_top2.offsetWidth, 'xxxxxxxxxxxxxxxxxx')
        console.log(this.$refs.inner_bottom.offsetWidth, 'yyyyyyyyyyyyyyyy')
        console.log(this.$refs.inner_bottom2.offsetWidth, 'yyyyyyyyyyyyyyyy')

*/

        new BScroll(this.$refs.slide,{
          click: true,
          scrollX:true,
        })


        new BScroll(this.$refs.inner_top,{
          click: true,
          scrollX:true,
          scrollY:false,
          eventPassthrough: 'vertical'
        })

        new BScroll(this.$refs.inner_bottom,{
          click: true,
          scrollX:true
        })


        new BScroll(this.$refs.nav_scroll, {
          click: true,
          scrollX:true
        })
   },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#homeContainer
  width 100%
  height 100%
  background-color #EDEDED
</style>
