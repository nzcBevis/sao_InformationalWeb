import Vue from 'vue'
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router/index'

import vueResource from 'vue-resource'
//全局引入axios
// import axios from 'axios'

Vue.config.productionTip = false
//应用插件
Vue.use(VueRouter)
Vue.use(vueResource)

// 只要发送axios请求，就在请求前加入/api的开头
// axios.defaults.baseURL = "/api";   

new Vue({
  render: h => h(App),
  // beforeCreate(){
  //     Vue.prototype.$bus= this//安装全局事件总线
  // }
  router:router
}).$mount('#app')


router.afterEach((to,from,next) => {
        window.scrollTo(0,0);//页面回到最顶部
    })