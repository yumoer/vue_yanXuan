/*入口文件*/
import Vue from 'vue'
import App from './App'
import router from './router'

/*创建vm*/
new Vue ({
  el:'#app',
  /*template:'<App/>',  //映射组件标签
  components: { App }, //指定需要渲染奥页面的模板*/
  render:h=>h(app),
  router, //注册路由器
})
