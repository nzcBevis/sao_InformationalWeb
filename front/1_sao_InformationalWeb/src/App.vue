<template>
  <div id="app">
    <!-- <img alt="Sao logo" src="./assets/logo.png"> -->
    <!-- <router-view></router-view> -->
    <router-view v-if="currentUrl">首页</router-view>
    <Login v-else-if="currentUrl ==='/login'">登录</Login>
    <Register v-else-if="currentUrl ==='/register'">注册</Register>
    <h1 v-else class="errormsg">请检查URL路径</h1>
  </div>
</template>

<script>
import Index from './components/Index.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import './assets/css/common.css'

export default {
  name: 'App',
  data(){
    return{
      paths:[]
    }
  },
  components: {
    // Index,
    Login,
    Register
  },
  beforeMount(){
    this.paths=['/','/home','/movie','/questionnaire','/login','/register'];
  },
  computed:{
    currentUrl(){
      const currentPath = window.location.pathname;
      for(let i=0;i<this.paths.length;i++){
        if(currentPath === this.paths[i]){
          if(!/^\/login|\/register$/.test(currentPath)){
            return true;
          }else{
            return currentPath;
          }
        }
      }
    }
  }
}
</script>

<style>
/*style中的引入写法 */
/* @import './assets/css/1.css';
@import './assets/css/2.css';
@import './assets/css/3.css';
@import './assets/css/common.css'; */
@import 'https://at.alicdn.com/t/c/font_4212090_04kbd40vyh0o.css';
.errormsg{
  line-height:100vh;
}
</style>
