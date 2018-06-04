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
import Login from '../pages/Login/Login'

//声明使用vue-router插件
Vue.use(VueRouter)  //内部定义并注册了2个组件标签（router-link/router-view）

export default new VueRouter ({
  //注册应用中所有的路由
  routes:[
    {
      path:"/",
      redirect:'/home',
      meta:{
        showFooter:true
      }
    },
    {
      path:'/home',
      component:Home,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/shiwu',
      component:Shiwu,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/fenlei',
      component:Fenlei,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/gouwuche',
      component:Gouwuche,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/geren',
      component:Geren
    },

    {
      path:'/jujia',
      component:Jujia,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/peijian',
      component:Peijian,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/fuzhuang',
      component:Fuzhuang,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/dianqi',
      component:Dianqi,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/xihu',
      component:Xihu,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/yinshi',
      component:Yinshi,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/canchu',
      component:Canchu,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/yintong',
      component:Yintong,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/wenti',
      component:Wenti,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/tesequ',
      component:Tesequ,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/login',
      component:Login,
    },
  ]
})



