<template>
  <div id="homeContainer" ref="pic_scroll">
    <div class="home_header">
      <div></div>
      <header class="header_main">
        <div class="main_top">
          <div class="top_title"></div>
          <div class="top_input top_search">
            <i class="iconfont icon-sousuo1"></i>
            <span class="search_name">搜索商品, 共9770款好物</span>
          </div>
        </div>
        <nav class="main_bottom" ref="nav_scroll">
          <ul class="bottom_title">
            <li class="title_name tuijian active">推荐</li>
            <li class="title_name jujia">居家</li>
            <li class="title_name peijian">配件</li>
            <li class="title_name fuzhuang">服装</li>
            <li class="title_name dianqi">电器</li>
            <li class="title_name xihu">洗护</li>
            <li class="title_name yinshi">饮食</li>
            <li class="title_name canchu">餐厨</li>
            <li class="title_name yintong">婴童</li>
            <li class="title_name wenti">文体</li>
            <li class="title_name tesequ">特色区</li>
          </ul>
        </nav>
      </header>
    </div>
    <div class="home_fool">
      <div class="fool_slideWarp">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/e6434443defc9a226336695702c29f5b.jpg?imageView&thumbnail=750x0&quality=75" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/645f3d7b9d89b2dec7e6ab2c80a9abeb.jpg?imageView&thumbnail=750x0&quality=75" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/6ae7de247351fecffd3fd3593d58bac7.jpg?imageView&thumbnail=750x0&quality=75" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/65b047d86dbca73dbf7f3e4c14c7b6f3.jpg?imageView&thumbnail=750x0&quality=75" alt="">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="fool_policy">
        <ul class="policy_grow">
          <li class="policy_item">
            <a>
              <i class="iconfont icon-checkmark"></i>
              <span class="item_text">网易自营品牌</span>
            </a>
          </li>
          <li class="policy_item">
            <a>
              <i class="iconfont icon-checkmark"></i>
              <span class="item_text">30天无忧退货</span>
            </a>
          </li>
          <li class="policy_item">
            <a>
              <i class="iconfont icon-checkmark"></i>
              <span class="item_text">48小时快速退款</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 品牌制造商 -->
    <div class="home_content_one">
      <header class="one_title">
        <a href="#" class="title_name">
          <span class="name_left">品牌制造商直供</span>
          <i class="iconfont icon-jiantou3"></i>
        </a>
      </header>
      <div class="one_container">
        <ul class="container_list">
          <li class="list_item_left">
            <a class="itme_main">
              <div class="main_title">
                <div class="title_company">CK制造商</div>
                <div class="title_price">25元起</div>
              </div>
              <img src="http://yanxuan.nosdn.127.net/bcca932aeb9d818dcf6d3a4804f7311b.png?imageView&thumbnail=355x0&quality=65" style="opacity: 1">
            </a>
          </li>
          <li class="list_item_right">
            <a class="itme_main">
              <div class="main_title">
                <div class="title_company">Nine West制造商</div>
                <div class="title_price">199元起</div>
              </div>
              <img src="http://yanxuan.nosdn.127.net/dd604acce92e61616a0fa2498cf0fd35.png?imageView&thumbnail=355x0&quality=65" style="opacity: 1">
            </a>
          </li>
          <li class="list_item_left">
            <a class="itme_main">
              <div class="main_title">
                <div class="title_company">新秀丽制造商</div>
                <div class="title_price">49元起</div>
              </div>
              <img src="http://yanxuan.nosdn.127.net/f57d460dde6e737f2bacd9f67cb73a41.png?imageView&thumbnail=355x0&quality=65" style="opacity: 1">
            </a>
          </li>
          <li class="list_item_right">
            <a class="itme_main">
              <div class="main_title">
                <div class="title_company">Birkenstock集团制造商</div>
                <div class="title_price">59.9元起</div>
              </div>
              <img src="http://yanxuan.nosdn.127.net/52aa744559c6fc951e63f98229f36367.png?imageView&thumbnail=355x0&quality=65" style="opacity: 1">
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 新品首发 -->
    <div class="home_content_two">
      <header class="two_title">
        <a href="" class="title_name">
          <span class="name_top">新品首发</span>
          <div class="name_bottom">
            <span class="bottom_main">
              <span class="main_all">查看全部</span>
              <i class="iconfont icon-jiantou1"></i>
            </span>
          </div>
        </a>
      </header>
      <div class="two_container" >
        <div class="container_inner">
          <ul class="inner_list "  ref="inner_scroll">
            <li class="list_item ">
              <a href="" class="item_router">
                <div class="router_image">
                  <img src="http://yanxuan.nosdn.127.net/33148f20c32525c6dcb9f33577957e77.png?imageView&quality=65&thumbnail=330x330" alt="">
                </div>
                <div class="router_tag">
                  <p class="tag_title">十点一刻</p>
                </div>
                <div class="router_name">
                  <span>小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</span>
                </div>
                <div class="router_desc">夏季爆品，媲美现煮</div>
                <div class="router_price">
                  <span>￥88</span>
                </div>
              </a>
            </li>
            <li class="list_item ">
              <a href="" class="item_router">
                <div class="router_image">
                  <img src="http://yanxuan.nosdn.127.net/33148f20c32525c6dcb9f33577957e77.png?imageView&quality=65&thumbnail=330x330" alt="">
                </div>
                <div class="router_tag">
                  <p class="tag_title">十点一刻</p>
                </div>
                <div class="router_name">
                  <span>小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</span>
                </div>
                <div class="router_desc">夏季爆品，媲美现煮</div>
                <div class="router_price">
                  <span>￥88</span>
                </div>
              </a>
            </li>
            <li class="list_item ">
              <a href="" class="item_router">
                <div class="router_image">
                  <img src="http://yanxuan.nosdn.127.net/33148f20c32525c6dcb9f33577957e77.png?imageView&quality=65&thumbnail=330x330" alt="">
                </div>
                <div class="router_tag">
                  <p class="tag_title">十点一刻</p>
                </div>
                <div class="router_name">
                  <span>小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</span>
                </div>
                <div class="router_desc">夏季爆品，媲美现煮</div>
                <div class="router_price">
                  <span>￥88</span>
                </div>
              </a>
            </li>
            <li class="list_item ">
              <a href="" class="item_router">
                <div class="router_image">
                  <img src="http://yanxuan.nosdn.127.net/33148f20c32525c6dcb9f33577957e77.png?imageView&quality=65&thumbnail=330x330" alt="">
                </div>
                <div class="router_tag">
                  <p class="tag_title">十点一刻</p>
                </div>
                <div class="router_name">
                  <span>小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</span>
                </div>
                <div class="router_desc">夏季爆品，媲美现煮</div>
                <div class="router_price">
                  <span>￥88</span>
                </div>
              </a>
            </li>
            <li class="list_item ">
              <a href="" class="item_router">
                <div class="router_image">
                  <img src="http://yanxuan.nosdn.127.net/33148f20c32525c6dcb9f33577957e77.png?imageView&quality=65&thumbnail=330x330" alt="">
                </div>
                <div class="router_tag">
                  <p class="tag_title">十点一刻</p>
                </div>
                <div class="router_name">
                  <span>小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</span>
                </div>
                <div class="router_desc">夏季爆品，媲美现煮</div>
                <div class="router_price">
                  <span>￥88</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 人气推荐 -->
    <div class="home_content_two">
      <header class="two_title">
        <a href="" class="title_name">
          <span class="name_top">新品首发</span>
          <div class="name_bottom">
            <span class="bottom_main">
              <span class="main_all">查看全部</span>
              <i class="iconfont icon-jiantou1"></i>
            </span>
          </div>
        </a>
      </header>
      <div class="two_container" >
        <div class="container_inner" >
          <ul class="inner_list "  >
            <li class="list_item ">
              <a href="" class="item_router">
                <div class="router_image">
                  <img src="http://yanxuan.nosdn.127.net/33148f20c32525c6dcb9f33577957e77.png?imageView&quality=65&thumbnail=330x330" alt="">
                </div>
                <div class="router_tag">
                  <p class="tag_title">十点一刻</p>
                </div>
                <div class="router_name">
                  <span>小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</span>
                </div>
                <div class="router_desc">夏季爆品，媲美现煮</div>
                <div class="router_price">
                  <span>￥88</span>
                </div>
              </a>
            </li>
            <li class="list_item ">
              <a href="" class="item_router">
                <div class="router_image">
                  <img src="http://yanxuan.nosdn.127.net/33148f20c32525c6dcb9f33577957e77.png?imageView&quality=65&thumbnail=330x330" alt="">
                </div>
                <div class="router_tag">
                  <p class="tag_title">十点一刻</p>
                </div>
                <div class="router_name">
                  <span>小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</span>
                </div>
                <div class="router_desc">夏季爆品，媲美现煮</div>
                <div class="router_price">
                  <span>￥88</span>
                </div>
              </a>
            </li>
            <li class="list_item ">
              <a href="" class="item_router">
                <div class="router_image">
                  <img src="http://yanxuan.nosdn.127.net/33148f20c32525c6dcb9f33577957e77.png?imageView&quality=65&thumbnail=330x330" alt="">
                </div>
                <div class="router_tag">
                  <p class="tag_title">十点一刻</p>
                </div>
                <div class="router_name">
                  <span>小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</span>
                </div>
                <div class="router_desc">夏季爆品，媲美现煮</div>
                <div class="router_price">
                  <span>￥88</span>
                </div>
              </a>
            </li>
            <li class="list_item ">
              <a href="" class="item_router">
                <div class="router_image">
                  <img src="http://yanxuan.nosdn.127.net/33148f20c32525c6dcb9f33577957e77.png?imageView&quality=65&thumbnail=330x330" alt="">
                </div>
                <div class="router_tag">
                  <p class="tag_title">十点一刻</p>
                </div>
                <div class="router_name">
                  <span>小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</span>
                </div>
                <div class="router_desc">夏季爆品，媲美现煮</div>
                <div class="router_price">
                  <span>￥88</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 限时购 -->
    <div class="home_content_three">
      <a href="" class="three_router">
        <div class="router_container">
          <div class="container_left">
            <div class="left_title">严选限时购</div>
            <div class="left_count">
              <span class="count_hours">00</span>
              <span class="count_colon">:</span>
              <span class="count_mins">00</span>
              <span class="count_colon">:</span>
              <span class="count_secs">00</span>
            </div>
            <div class="left_next">
              <span class="next_main">
                <span>下一场</span>
                <span>14：00</span>
                <span>开始</span>
              </span>
            </div>
          </div>
          <div class="container_right">
            <div class="right_image">
              <img src="http://yanxuan.nosdn.127.net/191be005f37aecfef781d567042954cd.png?imageView&quality=85&thumbnail=330x330" alt="">
            </div>
            <div class="right_price">
              <div class="price_top">
                <span>￥</span>
                <span>36</span>
              </div>
              <div class="price_bottom">
                <span>￥</span>
                <span class="price">39</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>

    <!-- 福利社 -->
    <div class="home_content_four">
      <a href="" class="four_router"></a>
    </div>

    <!-- 专题精选-->
    <div class="home_content_five">
      <header class="five_title">
        <a href="#" class="title_name">
          <span class="name_left">专题精选</span>
          <i class="iconfont icon-jiantou3"></i>
        </a>
      </header>
      <div class="five_slide">
        <div class="slide_inner">
          <ul class="inner_list">
            <li class="list_item">
              <a href="" class="item_imgWarp">
                <img src="https://yanxuan.nosdn.127.net/22c06cba5722e5fd0e9561cf5b7b1800.jpg?imageView&thumbnail=474y322&enlarge=1&quality=75" alt="">
              </a>
              <div class="item_title">
                <h4 class="title_name">给毛孔来一次深度清洁</h4>
                <span class="title_price">
                  <span>107.1</span>
                  <span>元起</span>
                </span>
              </div>
              <div class="item_info">硅胶洁面仪，洗出会发光的素颜肌</div>
            </li>
            <li class="list_item">
              <a href="" class="item_imgWarp">
                <img src="https://yanxuan.nosdn.127.net/22c06cba5722e5fd0e9561cf5b7b1800.jpg?imageView&thumbnail=474y322&enlarge=1&quality=75" alt="">
              </a>
              <div class="item_title">
                <h4 class="title_name">给毛孔来一次深度清洁</h4>
                <span class="title_price">
                  <span>107.1</span>
                  <span>元起</span>
                </span>
              </div>
              <div class="item_info">硅胶洁面仪，洗出会发光的素颜肌</div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 居家好物 -->
    <div class="home_content_six">
      <div class="six_container">
        <h3 class="container_title">居家好物</h3>
        <div class="container_goods">
          <ul class="goods_list">
            <li class="list_item_left">
              <a href="" class="item_router">
                <div class="router_imgWrap">
                  <div class="imgWrap_img">
                    <img src="http://yanxuan.nosdn.127.net/1059f517cd4a529fcc3f9299f5173bef.png?imageView&quality=65&thumbnail=330x330" alt="">
                  </div>
                  <div class="imgWrap_desc">宽细夹排，升级爽滑凉感</div>
                </div>
                <div class="router_name">
                  <span>天然宽篾头层青碳化竹凉席</span>
                </div>
                <div class="router_price">
                  <span class="price_left">￥</span>
                  <span class="price_right">279</span>
                </div>
              </a>
            </li>
            <li class="list_item_right">
              <a href="" class="item_router">
                <div class="router_imgWrap">
                  <div class="imgWrap_img">
                    <img src="http://yanxuan.nosdn.127.net/1059f517cd4a529fcc3f9299f5173bef.png?imageView&quality=65&thumbnail=330x330" alt="">
                  </div>
                  <div class="imgWrap_desc">宽细夹排，升级爽滑凉感</div>
                </div>
                <div class="router_name">
                  <span>天然宽篾头层青碳化竹凉席</span>
                </div>
                <div class="router_price">
                  <span class="price_left">￥</span>
                  <span class="price_right">279</span>
                </div>
              </a>
            </li>
          </ul>
          <ul class="goods_list">
            <li class="list_item_left">
              <a href="" class="item_router">
                <div class="router_imgWrap">
                  <div class="imgWrap_img">
                    <img src="http://yanxuan.nosdn.127.net/1059f517cd4a529fcc3f9299f5173bef.png?imageView&quality=65&thumbnail=330x330" alt="">
                  </div>
                  <div class="imgWrap_desc">宽细夹排，升级爽滑凉感</div>
                </div>
                <div class="router_name">
                  <span>天然宽篾头层青碳化竹凉席</span>
                </div>
                <div class="router_price">
                  <span class="price_left">￥</span>
                  <span class="price_right">279</span>
                </div>
              </a>
            </li>
            <li class="list_item_right">
              <a href="" class="item_router">
                <div class="router_imgWrap">
                  <div class="imgWrap_img">
                    <img src="http://yanxuan.nosdn.127.net/1059f517cd4a529fcc3f9299f5173bef.png?imageView&quality=65&thumbnail=330x330" alt="">
                  </div>
                  <div class="imgWrap_desc">宽细夹排，升级爽滑凉感</div>
                </div>
                <div class="router_name">
                  <span>天然宽篾头层青碳化竹凉席</span>
                </div>
                <div class="router_price">
                  <span class="price_left">￥</span>
                  <span class="price_right">279</span>
                </div>
              </a>
            </li>
          </ul>
          <ul class="goods_list">
            <li class="list_item_left">
              <a href="" class="item_router">
                <div class="router_imgWrap">
                  <div class="imgWrap_img">
                    <img src="http://yanxuan.nosdn.127.net/1059f517cd4a529fcc3f9299f5173bef.png?imageView&quality=65&thumbnail=330x330" alt="">
                  </div>
                  <div class="imgWrap_desc">宽细夹排，升级爽滑凉感</div>
                </div>
                <div class="router_name">
                  <span>天然宽篾头层青碳化竹凉席</span>
                </div>
                <div class="router_price">
                  <span class="price_left">￥</span>
                  <span class="price_right">279</span>
                </div>
              </a>
            </li>
            <li class="list_item_right">
              <a href="" class="item_router">
                <div class="router_imgWrap">
                  <div class="imgWrap_img">
                    <img src="http://yanxuan.nosdn.127.net/1059f517cd4a529fcc3f9299f5173bef.png?imageView&quality=65&thumbnail=330x330" alt="">
                  </div>
                  <div class="imgWrap_desc">宽细夹排，升级爽滑凉感</div>
                </div>
                <div class="router_name">
                  <span>天然宽篾头层青碳化竹凉席</span>
                </div>
                <div class="router_price">
                  <span class="price_left">￥</span>
                  <span class="price_right">279</span>
                </div>
              </a>
            </li>
          </ul>
          <ul class="goods_list_more">
            <li class="list_item_left">
              <a href="" class="item_router">
                <div class="router_imgWrap">
                  <div class="imgWrap_img">
                    <img src="http://yanxuan.nosdn.127.net/1059f517cd4a529fcc3f9299f5173bef.png?imageView&quality=65&thumbnail=330x330" alt="">
                  </div>
                  <div class="imgWrap_desc">宽细夹排，升级爽滑凉感</div>
                </div>
                <div class="router_name">
                  <span>天然宽篾头层青碳化竹凉席</span>
                </div>
                <div class="router_price">
                  <span class="price_left">￥</span>
                  <span class="price_right">279</span>
                </div>
              </a>
            </li>
            <li class="list_item_right">
              <a href="" class="item_router">
                <div class="router_imgWrap">
                  <div class="imgWrap_img">
                    <p class="img_title">更多居家好物</p>
                    <i class="iconfont icon-yq-jt-r"></i>
                  </div>
                </div>
              </a>
            </li>
            <!--<li class="list_item_more">
              <a href="" class="more_router">
                <div class="router_imgWrap">
                  <div class="imgWrap_img">
                    <p class="img_title">更多居家好物</p>
                    <i class="iconfont icon-yq-jt-r"></i>
                  </div>
                </div>
              </a>
            </li>-->
          </ul>
        </div>
      </div>
    </div>

    <!-- 配件好物 -->
    <div class="home_content_six">
      <div class="six_container">
        <h3 class="container_title">配件好物</h3>
        <div class="container_goods">
          <ul class="goods_list">
            <li class="list_item_left">
              <a href="" class="item_router">
                <div class="router_imgWrap">
                  <div class="imgWrap_img">
                    <img src="http://yanxuan.nosdn.127.net/1059f517cd4a529fcc3f9299f5173bef.png?imageView&quality=65&thumbnail=330x330" alt="">
                  </div>
                  <div class="imgWrap_desc">宽细夹排，升级爽滑凉感</div>
                </div>
                <div class="router_name">
                  <span>天然宽篾头层青碳化竹凉席</span>
                </div>
                <div class="router_price">
                  <span class="price_left">￥</span>
                  <span class="price_right">279</span>
                </div>
              </a>
            </li>
            <li class="list_item_right">
              <a href="" class="item_router">
                <div class="router_imgWrap">
                  <div class="imgWrap_img">
                    <img src="http://yanxuan.nosdn.127.net/1059f517cd4a529fcc3f9299f5173bef.png?imageView&quality=65&thumbnail=330x330" alt="">
                  </div>
                  <div class="imgWrap_desc">宽细夹排，升级爽滑凉感</div>
                </div>
                <div class="router_name">
                  <span>天然宽篾头层青碳化竹凉席</span>
                </div>
                <div class="router_price">
                  <span class="price_left">￥</span>
                  <span class="price_right">279</span>
                </div>
              </a>
            </li>
          </ul>
          <ul class="goods_list">
            <li class="list_item_left">
              <a href="" class="item_router">
                <div class="router_imgWrap">
                  <div class="imgWrap_img">
                    <img src="http://yanxuan.nosdn.127.net/1059f517cd4a529fcc3f9299f5173bef.png?imageView&quality=65&thumbnail=330x330" alt="">
                  </div>
                  <div class="imgWrap_desc">宽细夹排，升级爽滑凉感</div>
                </div>
                <div class="router_name">
                  <span>天然宽篾头层青碳化竹凉席</span>
                </div>
                <div class="router_price">
                  <span class="price_left">￥</span>
                  <span class="price_right">279</span>
                </div>
              </a>
            </li>
            <li class="list_item_right">
              <a href="" class="item_router">
                <div class="router_imgWrap">
                  <div class="imgWrap_img">
                    <img src="http://yanxuan.nosdn.127.net/1059f517cd4a529fcc3f9299f5173bef.png?imageView&quality=65&thumbnail=330x330" alt="">
                  </div>
                  <div class="imgWrap_desc">宽细夹排，升级爽滑凉感</div>
                </div>
                <div class="router_name">
                  <span>天然宽篾头层青碳化竹凉席</span>
                </div>
                <div class="router_price">
                  <span class="price_left">￥</span>
                  <span class="price_right">279</span>
                </div>
              </a>
            </li>
          </ul>
          <ul class="goods_list">
            <li class="list_item_left">
              <a href="" class="item_router">
                <div class="router_imgWrap">
                  <div class="imgWrap_img">
                    <img src="http://yanxuan.nosdn.127.net/1059f517cd4a529fcc3f9299f5173bef.png?imageView&quality=65&thumbnail=330x330" alt="">
                  </div>
                  <div class="imgWrap_desc">宽细夹排，升级爽滑凉感</div>
                </div>
                <div class="router_name">
                  <span>天然宽篾头层青碳化竹凉席</span>
                </div>
                <div class="router_price">
                  <span class="price_left">￥</span>
                  <span class="price_right">279</span>
                </div>
              </a>
            </li>
            <li class="list_item_right">
              <a href="" class="item_router">
                <div class="router_imgWrap">
                  <div class="imgWrap_img">
                    <img src="http://yanxuan.nosdn.127.net/1059f517cd4a529fcc3f9299f5173bef.png?imageView&quality=65&thumbnail=330x330" alt="">
                  </div>
                  <div class="imgWrap_desc">宽细夹排，升级爽滑凉感</div>
                </div>
                <div class="router_name">
                  <span>天然宽篾头层青碳化竹凉席</span>
                </div>
                <div class="router_price">
                  <span class="price_left">￥</span>
                  <span class="price_right">279</span>
                </div>
              </a>
            </li>
          </ul>
          <ul class="goods_list_more">
            <li class="list_item_left">
              <a href="" class="item_router">
                <div class="router_imgWrap">
                  <div class="imgWrap_img">
                    <img src="http://yanxuan.nosdn.127.net/1059f517cd4a529fcc3f9299f5173bef.png?imageView&quality=65&thumbnail=330x330" alt="">
                  </div>
                  <div class="imgWrap_desc">宽细夹排，升级爽滑凉感</div>
                </div>
                <div class="router_name">
                  <span>天然宽篾头层青碳化竹凉席</span>
                </div>
                <div class="router_price">
                  <span class="price_left">￥</span>
                  <span class="price_right">279</span>
                </div>
              </a>
            </li>
            <li class="list_item_right">
              <a href="" class="item_router">
                <div class="router_imgWrap">
                  <div class="imgWrap_img">
                    <p class="img_title">更多配件好物</p>
                    <i class="iconfont icon-yq-jt-r"></i>
                  </div>
                </div>
              </a>
            </li>
            <!--<li class="list_item_more">
              <a href="" class="more_router">
                <div class="router_imgWrap">
                  <div class="imgWrap_img">
                    <p class="img_title">更多居家好物</p>
                    <i class="iconfont icon-yq-jt-r"></i>
                  </div>
                </div>
              </a>
            </li>-->
          </ul>
        </div>
      </div>
    </div>

    <!-- 电器好物 -->
    <div class="home_content_six">
      <div class="six_container">
        <h3 class="container_title">电器好物</h3>
        <div class="container_goods">
          <ul class="goods_list">
            <li class="list_item_left">
              <a href="" class="item_router">
                <div class="router_imgWrap">
                  <div class="imgWrap_img">
                    <img src="http://yanxuan.nosdn.127.net/1059f517cd4a529fcc3f9299f5173bef.png?imageView&quality=65&thumbnail=330x330" alt="">
                  </div>
                  <div class="imgWrap_desc">宽细夹排，升级爽滑凉感</div>
                </div>
                <div class="router_name">
                  <span>天然宽篾头层青碳化竹凉席</span>
                </div>
                <div class="router_price">
                  <span class="price_left">￥</span>
                  <span class="price_right">279</span>
                </div>
              </a>
            </li>
            <li class="list_item_right">
              <a href="" class="item_router">
                <div class="router_imgWrap">
                  <div class="imgWrap_img">
                    <img src="http://yanxuan.nosdn.127.net/1059f517cd4a529fcc3f9299f5173bef.png?imageView&quality=65&thumbnail=330x330" alt="">
                  </div>
                  <div class="imgWrap_desc">宽细夹排，升级爽滑凉感</div>
                </div>
                <div class="router_name">
                  <span>天然宽篾头层青碳化竹凉席</span>
                </div>
                <div class="router_price">
                  <span class="price_left">￥</span>
                  <span class="price_right">279</span>
                </div>
              </a>
            </li>
          </ul>
          <ul class="goods_list">
            <li class="list_item_left">
              <a href="" class="item_router">
                <div class="router_imgWrap">
                  <div class="imgWrap_img">
                    <img src="http://yanxuan.nosdn.127.net/1059f517cd4a529fcc3f9299f5173bef.png?imageView&quality=65&thumbnail=330x330" alt="">
                  </div>
                  <div class="imgWrap_desc">宽细夹排，升级爽滑凉感</div>
                </div>
                <div class="router_name">
                  <span>天然宽篾头层青碳化竹凉席</span>
                </div>
                <div class="router_price">
                  <span class="price_left">￥</span>
                  <span class="price_right">279</span>
                </div>
              </a>
            </li>
            <li class="list_item_right">
              <a href="" class="item_router">
                <div class="router_imgWrap">
                  <div class="imgWrap_img">
                    <img src="http://yanxuan.nosdn.127.net/1059f517cd4a529fcc3f9299f5173bef.png?imageView&quality=65&thumbnail=330x330" alt="">
                  </div>
                  <div class="imgWrap_desc">宽细夹排，升级爽滑凉感</div>
                </div>
                <div class="router_name">
                  <span>天然宽篾头层青碳化竹凉席</span>
                </div>
                <div class="router_price">
                  <span class="price_left">￥</span>
                  <span class="price_right">279</span>
                </div>
              </a>
            </li>
          </ul>
          <ul class="goods_list">
            <li class="list_item_left">
              <a href="" class="item_router">
                <div class="router_imgWrap">
                  <div class="imgWrap_img">
                    <img src="http://yanxuan.nosdn.127.net/1059f517cd4a529fcc3f9299f5173bef.png?imageView&quality=65&thumbnail=330x330" alt="">
                  </div>
                  <div class="imgWrap_desc">宽细夹排，升级爽滑凉感</div>
                </div>
                <div class="router_name">
                  <span>天然宽篾头层青碳化竹凉席</span>
                </div>
                <div class="router_price">
                  <span class="price_left">￥</span>
                  <span class="price_right">279</span>
                </div>
              </a>
            </li>
            <li class="list_item_right">
              <a href="" class="item_router">
                <div class="router_imgWrap">
                  <div class="imgWrap_img">
                    <img src="http://yanxuan.nosdn.127.net/1059f517cd4a529fcc3f9299f5173bef.png?imageView&quality=65&thumbnail=330x330" alt="">
                  </div>
                  <div class="imgWrap_desc">宽细夹排，升级爽滑凉感</div>
                </div>
                <div class="router_name">
                  <span>天然宽篾头层青碳化竹凉席</span>
                </div>
                <div class="router_price">
                  <span class="price_left">￥</span>
                  <span class="price_right">279</span>
                </div>
              </a>
            </li>
          </ul>
          <ul class="goods_list_more">
            <li class="list_item_left">
              <a href="" class="item_router">
                <div class="router_imgWrap">
                  <div class="imgWrap_img">
                    <img src="http://yanxuan.nosdn.127.net/1059f517cd4a529fcc3f9299f5173bef.png?imageView&quality=65&thumbnail=330x330" alt="">
                  </div>
                  <div class="imgWrap_desc">宽细夹排，升级爽滑凉感</div>
                </div>
                <div class="router_name">
                  <span>天然宽篾头层青碳化竹凉席</span>
                </div>
                <div class="router_price">
                  <span class="price_left">￥</span>
                  <span class="price_right">279</span>
                </div>
              </a>
            </li>
            <li class="list_item_right">
              <a href="" class="item_router">
                <div class="router_imgWrap">
                  <div class="imgWrap_img">
                    <p class="img_title">更多电器好物</p>
                    <i class="iconfont icon-yq-jt-r"></i>
                  </div>
                </div>
              </a>
            </li>
            <!--<li class="list_item_more">
              <a href="" class="more_router">
                <div class="router_imgWrap">
                  <div class="imgWrap_img">
                    <p class="img_title">更多居家好物</p>
                    <i class="iconfont icon-yq-jt-r"></i>
                  </div>
                </div>
              </a>
            </li>-->
          </ul>
        </div>
      </div>
    </div>

    <!-- 尾部信息 -->
    <div class="footer_wrap">
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
  </div>

</template>

<script>
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import '../../../static/dist/css/swiper.css'
  export default {
    methods:{
      _initScroll(){
        /*const mainBottom = new BScroll(this.$refs.nav_scroll, {
           click: true,
           scrollX:true
         })*/

        /*let scroll = new BScroll ('.container_inner', {
          scrollX: true,
          eventPassthrough:'vertical'
        })*/


      }
    },
    mounted(){
     new Swiper ('.swiper-container', {
       autoplay:true,
       loop: true,
       // 如果需要分页器
       pagination: {
         el: '.swiper-pagination'
       }
     });

      new BScroll(this.$refs.nav_scroll, {
        click: true,
        scrollX:true
      })

      new BScroll ('.container_inner', {
        scrollX: true,
        eventPassthrough:'vertical'
      })

      /*new Swiper ('.container_inner', {
        loop: true
        // 如果需要分页器
      });*/
      /*let Bottom = new BScroll('.container_inner', {

        click: true,
        scrollX:true,
        eventPassthrough:'vertical'
      })*/
     // this.$nextTick(() => {
     //
     //   this._initScroll();
     // });
   },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#homeContainer
  width 100%
  height 100%
  background-color #EDEDED
  .home_header
    width 100%
    height 148px
    .header_main
      height 148px
      .main_top
        display flex
        flex-flow row nowrap
        -webkit-box-align center
        align-items: center;
        padding: .21333rem .4rem
        background-color white
        .top_title
          width 1.84rem
          height .53333rem
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png)
          display inline-block
          margin-right .26667rem
          background-size cover
          background-position center
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
      .main_bottom
        height 60px
        width 100%
        line-height: 1.5;
        color: #333;
        outline: 0;
        font-family: PingFangSC-Light,helvetica,'Heiti SC';
        background-color white
        .bottom_title
          width 200%
          float left
          font-size 28px
          display flex
          flex-flow row nowrap
          flex-shrink 0
          /*padding .15rem .4rem*/
          height 100%
          position: relative
          text-align center

          &.active
            color #b4282d
          .title_name
            height 100%
            flex-shrink 0
            align-content center
            margin-left:.6rem
            padding 10px 16px
            box-sizing border-box
            &::after
              content: ' ';
              position: absolute;
              left: 44.5px;
              bottom: 0;
              width: 7.615%;
              height: .05333rem;
              background-color: #b4282d;
  .home_fool
    margin-bottom .26667rem
    background-color #fff

    .fool_slideWarp
      background-color antiquewhite
      height: 5.33333rem;
      position: relative;

    .fool_policy
      height .96rem
      .policy_grow
        width 92%
        height .96rem
        padding 0 .4rem
        display flex
        flex-flow row nowrap
        -webkit-box-align center
        align-content center
        zoom 1
        .policy_item
          -webkit-box-flex 1
          flex 1
          float left
          justify-content space-around
          height: 0.48rem;
          margin auto
          a
            vertical-align middle
            height .42667rem
            font-size 22px
            display flex
            .icon-checkmark
              display inline-block
              vertical-align middle
              background-repeat no-repeat
              background-size 100% 100%
              width .42667rem
              height .42667rem
              color #B52D32
              font-size 30px
            .item_text
              color black
              margin-left .08667rem
              line-height .42667rem
              display inline-block
              vertical-align middle
  .home_content_one  //品牌制造商
    width 100%
    height 586px
    margin-bottom .266667rem
    background-color white
    .one_title
      display flex
      flex-flow row nowrap
      -webkit-box-align center
      align-items center
      -webkit-box-pack center
      justify-content center
      height 1.466667rem
      font-style .42667rem
      .title_name
        font-size .42667rem
        display flex
        -webkit-box-align center
        align-items center
        flex-flow row nowrap
        color #333333
        height 48px
        .name_left
          color #333333
        .icon-jiantou3
          display: inline-block;
          vertical-align: middle;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .4rem;
          height: .4rem;
          color black
          font-size 30px
          padding-left 10px
          box-sizing border-box
    .one_container
      padding-bottom .10667rem
      height 476px
      box-sizing border-box
      .container_list
        position relative
        margin 0 .21333rem
        height 6.24rem
        display flex
        flex-wrap wrap
        width 100%
        .list_item_left
          display inline-block
          position relative
          margin-bottom .10667rem
          width 4.73333rem
          height 3.14667rem
          overflow hidden
          background-color #F4F4F4
          margin-right: .08667rem;
          .itme_main
            width 100%
            height 100%
            .main_title
              position absolute
              left 0
              top 0
              padding .26667rem 0 0 .26667rem
              width 100%
              z-index 4
              font-size 28px
              box-sizing border-box
              .title_company
                text-overflow ellipsis
                white-space nowrap
                overflow hidden
                color #333333
                font-style: .37333rem
                line-height .45333rem
                margin-bottom .08rem
              .title_price
                line-height .45433rem
        .list_item_right
          display inline-block
          position relative
          margin-bottom .10667rem
          width 4.73333rem
          height 3.14667rem
          overflow hidden
          background-color #F4F4F4
          .itme_main
            width 100%
            height 100%
            .main_title
              position absolute
              left 0
              top 0
              padding .26667rem 0 0 .26667rem
              width 100%
              z-index 4
              font-size 28px
              box-sizing border-box
              .title_company
                text-overflow ellipsis
                white-space nowrap
                overflow hidden
                color #333333
                font-style: .37333rem
                line-height .45333rem
                margin-bottom .08rem
              .title_price
                line-height .45433rem
  .home_content_two  //新品首发 人气推荐
    width 100%
    background-color #fff
    margin-bottom .3rem
    .two_title
      background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png")
      background-size 10rem 3.46667rem
      height 3.46667rem
      margin-bottom .426667rem
      position relative
      .title_name
        display block
        text-align center
        font-size .48rem
        color #8BA0B6
        width 240px
        height 126px
        padding 80px 250px
        .name_top
          box-sizing border-box
        .name_bottom
          position absolute
          margin .21333rem auto 0
          width 3.2rem
          height .74667rem
          font-size .37333rem
          line-height .74667rem
          background #D8E5F1
          .bottom_main
            width 1.70667rem
            display inline-block
            text-align left
            .main_all
              box-sizing border-box
            .icon-jiantou1
              position absolute
              background-size .13333rem .29333rem
              display inline-block
              height .29333rem
              width .13333rem
              font-size 22px
    .two_container
      height 6.4rem
      background-color white
      .container_inner
        width 100%
        height 100%
        overflow hidden
        box-sizing border-box
        .inner_list
          height 465px
          font-size 20px
          display flex
          flex-flow row nowrap
          float: left;
          .list_item
            padding 0!important
            margin-left .4rem
            width 3.73333rem
            .item_router
              display block
              width 100%
              .router_image
                border-radius .05333rem
                position relative
                z-index 0
                margin-bottom .26667rem
                img
                  background-color #f4f4f4
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;

              .router_tag
                width 100%
                z-index 1
                margin 0 0 .21333rem
                height .4rem
                overflow hidden
                .tag_title
                  margin-left .16rem
                  background-color #f48f18
                  height: .4rem;
                  padding .06667rem .21333rem
                  line-height .26667rem
                  text-align center
                  color #fff
                  font-size .26667rem
                  border-radius .02667rem
                  display inline-block
                  vertical-align middle
                  box-sizing border-box
              .router_name
                margin-bottom .13333rem
                padding 0 .13333rem
                font-size .37333rem
                line-height .45333rem
                span
                  display inline-block
                  width 100%
                  font-size .34333rem
                  line-height .45333rem
                  overflow hidden
                  white-space nowrap
                  color #333
              .router_desc
                display block
                margin-bottom .18667rem
                font-size .32rem
                color #7f7f7f
                line-height .4rem
                white-space nowrap
                text-overflow ellipsis
                overflow hidden
                padding 0 .13333rem
              .router_price
                padding 0 .13333rem
                font-size .31333rem
                color #b4282d
  .home_content_three //限时购
    height 380px
    background-color papayawhip
    margin-bottom .3rem
    .three_router
      text-decoration none
      outline 0
      .router_container
        padding: .4rem .53333rem .4rem .74667rem;
        margin-bottom: .26667rem;
        height: 4.26667rem;
        background: #fff;
        display: -moz-flex;
        display: flex;
        .container_left
          display flex
          -webkit-box-flex 1
          flex 1
          -webkit-box-direction normal
          -webkit-box-orient vertical
          flex-direction column
          padding-top 1.06667rem
          height 320px
          box-sizing border-box
          .left_title
            font-size .48rem
            line-height .48rem
            margin-bottom .32rem
            color #333
            letter-spacing .16rem
          .left_count
            display inline
            margin-top: -20px;
            .count_hours
              display: inline-block;
              line-height: .74667rem;
              text-align: center;
              width: .82667rem;
              height: .74667rem;
              font-size: .42667rem;
              color: #fff;
              border-radius: .05333rem;
              background: #444;
            .count_colon
              color: #333;
              font-size: .4rem;
              width: .26667rem;
              display: inline-block;
              text-align: center;
              font-weight: 700;
              margin-left: -20px;
            .count_mins
              display: inline-block;
              line-height: .74667rem;
              text-align: center;
              width: .82667rem;
              height: .74667rem;
              font-size: .42667rem;
              color: #fff;
              border-radius: .05333rem;
              background: #444;
              margin-left: -20px;
            .count_colon
              color: #333;
              font-size: .4rem;
              width: .26667rem;
              display: inline-block;
              text-align: center;
              font-weight: 700;
            .count_secs
              display: inline-block;
              line-height: .74667rem;
              text-align: center;
              width: .82667rem;
              height: .74667rem;
              font-size: .42667rem;
              color: #fff;
              border-radius: .05333rem;
              background: #444;
              margin-left: -20px;
          .left_next
            margin-top: 0.63333rem;
            color: #333;
            font-size: .32rem;
            line-height: .32rem;
            height: .32rem;
            .next_main
              margin-top: .53333rem;
              color: #333;
              font-size: .32rem;
              line-height: .32rem;
        .container_right
          background: #fff;
          width: 4.26667rem;
          height: 4.26667rem;
          position: relative;
          .right_image
            width 100%
            img
              display inline
              width 100%
              height 100%
          .right_price
            height: 1.28rem;
            width: 1.28rem;
            position: absolute;
            right: .26667rem;
            bottom: .48rem;
            background-color: rgba(244,143,24,.95);
            border-radius: 100%;
            color: #fff;
            text-align: center;
            display: flex;
            -webkit-box-direction: normal;
            -webkit-box-orient: vertical;
            flex-direction: column;
            -webkit-box-pack: center;
            justify-content: center;
            .price_top
              font-size: .37333rem;
              line-height: .37333rem;
              height: .37333rem;
              span
                font-size: .32rem;
            .price_bottom
              font-size: .37333rem;
              line-height: .37333rem;
              height: .37333rem;
              span
                font-size: .26667rem;
              .price
                position: relative;
                color: #fff;
                font-size: .30333rem;
  .home_content_four  // 福利社
    width: 10rem;
    height: 4rem;
    margin-bottom: .26667rem;
    background-color palegoldenrod
    .four_router
      background-image: url(http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg);
      -webkit-background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 100%;
      height: 100%;
      display: block;
  .home_content_five  //专题精选
    margin-bottom: .26667rem;
    background-color: #fff;
    height 563px
    .five_title
      display flex
      flex-flow row nowrap
      -webkit-box-align center
      align-items center
      -webkit-box-pack center
      justify-content center
      height 1.466667rem
      font-style .42667rem
      .title_name
        font-size .42667rem
        display flex
        -webkit-box-align center
        align-items center
        flex-flow row nowrap
        color #333333
        height 48px
        .name_left
          color #333333
        .icon-jiantou3
          display: inline-block;
          vertical-align: middle;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .4rem;
          height: .4rem;
          color black
          font-size 30px
          padding-left 10px
          box-sizing border-box

    .five_slide
      padding: 0 .4rem .48rem;
      overflow: hidden;
      .slide_inner
        overflow: visible;
        .inner_list
          height: 417px;
          transition-duration: 0ms;
          transform: translate3d(0px, 0px, 0px);
          width 7.66667rem
          display flex
          .list_item
            width: 7.66667rem;
            margin-right: 20.8333px;
            line-height: 1.5;
            .item_imgWarp
              display: block;
              width: 7.66667rem;
              height: 4.29333rem;
              margin-bottom: .21333rem;
              border-radius: 8px;
              overflow: hidden;
              img
                width: 100%;
                height: auto;
                position: relative;
            .item_title
              height: .54667rem;
              margin-bottom: .02667rem;
              zoom: 1;
              .title_name
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 5.46667rem;
                float: left;
                font-size: .37333rem;
              .title_price
                float: right;
                font-size: .37333rem;
                color: #b4282d;

            .item_info
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              width: 7.66667rem;
              font-size: .32rem;
              color: #7F7F7F;
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

        .goods_list_more
          position: relative;
          z-index: 0;
          overflow: hidden;
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

  .footer_wrap
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
