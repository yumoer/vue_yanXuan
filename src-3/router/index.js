/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home'
import Shiwu from '../pages/Shiwu/Shiwu'
import Fenlei from '../pages/Fenlei/Fenlei'
import Gouwuche from '../pages/Gouwuche/Gouwuche'
import Geren from '../pages/Geren/Geren'

import Jujia from '../pages/Jujia/Jujia'
import Peijian from '../pages/Peijian/Peijian'
import Fuzhuang from '../pages/Fuzhuang/Fuzhuang'
import Dianqi from '../pages/Dianqi/Dianqi'
import Xihu from '../pages/Xihu/Xihu'
import Yinshi from '../pages/Yinshi/Yinshi'
import Canchu from '../pages/Canchu/Canchu'
import Yintong from '../pages/Yintong/Yintong'
import Wenti from '../pages/Wenti/Wenti'
import Tesequ from '../pages/Tesequ/Tesequ'

//声明使用vue-router插件
Vue.use(VueRouter)  //内部定义并注册了2个组件标签（router-link/router-view）

export default new VueRouter ({
  //注册应用中所有的路由
  routes:[
    {
      path:"/",
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/shiwu',
      component:Shiwu
    },
    {
      path:'/fenlei',
      component:Fenlei
    },
    {
      path:'/gouwuche',
      component:Gouwuche
    },
    {
      path:'/geren',
      component:Geren
    },

    {
      path:'/jujia',
      component:Jujia
    },
    {
      path:'/peijian',
      component:Peijian
    },
    {
      path:'/fuzhuang',
      component:Fuzhuang
    },
    {
      path:'/dianqi',
      component:Dianqi
    },
    {
      path:'/xihu',
      component:Xihu
    },
    {
      path:'/yinshi',
      component:Yinshi
    },
    {
      path:'/canchu',
      component:Canchu
    },
    {
      path:'/yintong',
      component:Yintong
    },
    {
      path:'/wenti',
      component:Wenti
    },
    {
      path:'/tesequ',
      component:Tesequ
    }
  ]
})



