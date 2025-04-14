<template>
  <div class="register">
  <div class="hasregform">
    <form class="regform">
      <div class="regheader">
        <button type="button" class="back" @click="backToHome()">返回首页</button>
        <!-- <a href="javascript:window.history.back()">返回首页</a> -->
        <h3>{{ msg }}</h3>
      </div>
      <div class="regcontent">
        <div class="usernamecontent">
          <input type="text" id="username" autocomplete="username" placeholder="姓名" v-model="username">
          <!-- 清除所填内容 -->
          <i v-show="username!==''" class="aliicon iconfont icon-guanbi" @click="clearContent"></i>
        </div>
        <div class="pwdcontent">
          <input :type="inputType" id="password" autocomplete="password" placeholder="密码" v-model="password">
          <!-- 清除所填内容 -->
          <i v-show="password!==''" class="aliicon iconfont icon-guanbi" style="right:30px;" @click="clearContent"></i>
          <!-- 不可见（默认） -->
          <i v-if="!passwordVisible" class="aliicon iconfont icon-yanjing_yincang_o" @click="showpwd()"></i>
          <!-- 可见 -->
          <i v-else class="aliicon iconfont icon-yanjing_xianshi_o" @click="showpwd()"></i>
        </div>
      </div>
      <button class="btm" @click.prevent="login()">登录</button>
      <a href="/register" class="toregister">去注册？</a>
      <!-- <router-link to="/register" class="toregister">去注册？</router-link> -->
    </form>
  </div>
  </div>
</template>

<script>
import {backToHome,clearContent,inputType,showpwd} from '../assets/js/common';
// import axios from 'axios'
export default {
        name:'Login',
        data(){
          return{
            msg:"登录",
            username:'',
            password:'',
            passwordVisible:false,//密码不可见
          }  
        },
        computed:{
          inputType
        },
        mounted(){
          //setAttribute(name,value)  name：要设置的属性名  value:要设置的属性值
          const newbgurl = require('../assets/images/loginbg1.jpg');
          //revert：属性应用了该值后，将还原到具有由浏览器或用户创建的自定义样式表（在浏览器侧设置）设置的值。  initial（默认）和 inherit（继承）
          document.querySelector('body').setAttribute('style',' background-image: url("'+ newbgurl +'");background-position:revert;');
          // document.querySelector('body').setAttribute('style',' background-image: url("'+require('../assets/images/asuna.jpg')+'")');
          // document.querySelector('body').style.backgroundImage = 'url('+require('../assets/images/asuna.jpg')+')';
        },
        beforeDestroy(){
          //removeAttribute(attrName)   接收的是要删除属性的名字，但是最终是把这个属性的名字和值都删掉了
          document.body.removeAttribute('style');
        },
        methods:{
          backToHome,
          clearContent,
          showpwd,
          login(){
            if(!this.username  || !this.password ){
              alert("请输入账号密码！");
              return;
            }
            const loginmsg={
              username:this.username,
              password:this.password
            };
            // axios.post('http://localhost:3000/home',loginmsg,
            //   {
              //     Headers:{
                //       'Content-Type':'application/json'
                //     }
                //   }
                // ).then(res=>{
                  //   if(res.data){
                    alert('登录成功!');
                    this.$nextTick(()=>{
                      this.$router.push({name:'/',params:loginmsg});
                    });
                    //   }else{
            //     alert('账号或密码错误！');
            //   }
            // }).catch(err=>{
            //   console.error(err);
            // });
          },
          
        }
}
</script>

<style scoped>
.register,.regform,.regheader,.regcontent{
  display: flex;/*该属性需写在父容器上，即要动哪个元素位置则在其父容器上设置该属性*/
}
.register{
  width: 100vw;
  height: 100vh;
  align-items: center;/**定义项目在交叉轴上如何对齐 */
  justify-content:center;/**定义了项目在主轴(默认水平)上的对齐方式。 */
}
.hasregform{
  width: 450px;
}
.regform{
  backdrop-filter:blur(10px);/*要想实现该属性必须使用rgba，不能直接写颜色*/ 
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50px;
  flex-wrap:wrap;/*换行*/
  margin:0 20px;
  padding:20px 0;
}
.regheader,.regcontent{
  margin:10px 0;
}
.regheader {
  width: 85%;/*flex后若父容器没设置宽度则等于所有子容器宽度之和 */
  margin:0 auto;
}
.regheader h3{
  flex-grow: 10;
  color:rgba(0,0,0,0.8);
}
.back{
  flex-grow: 1;
  color:blue;
  opacity:0.5;
  border-radius:25px;
  border: none;
  box-shadow:10px 2px 5px gray;
  /* position: absolute; */
}
.regcontent{
  width: 100%;
  flex-wrap:wrap;
}
.usernamecontent,.pwdcontent{
  width: 85%;
  position: relative;
  text-align: center;
  margin: 0 auto;
}
.regcontent input{/**a b:该父元素内部所有的input      a>b:该父元素下的input元素*/
  width: 100%;
  padding: 5px 0;
  margin:10px auto;
  border-radius: 10px;
  border:1px solid black;
  text-align:center;
}
.regform .btm{
  margin:0 auto;
  font-size: 20px;
  border-radius: 5px;
  border:1px solid black;
}
button:hover{
  cursor:pointer;
  opacity:0.85;
}
.toregister{
  position: absolute;
  bottom: 25px;
  right: 15px;
}

</style>