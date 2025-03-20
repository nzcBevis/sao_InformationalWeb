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
        <div class="regcontent-div">
          <input type="text" id="username" autocomplete="username" placeholder="姓名" v-model="username">
          <i v-show="username!==''" class="aliicon iconfont icon-guanbi" @click="clearContent"></i>
        </div>
        <div class="regcontent-div">
          <input :type="inputType" id="password" autocomplete="new-password" placeholder="密码" v-model="password">
          <i v-show="password!==''" class="aliicon iconfont icon-guanbi" style="right:30px;" @click="clearContent"></i>
          <i v-if="!passwordVisible" class="aliicon iconfont icon-yanjing_yincang_o" @click="showpwd()"></i>
          <i v-else class="aliicon iconfont icon-yanjing_xianshi_o" @click="showpwd()"></i>
        </div>
        <div class="regcontent-div">
          <input type="email" id="email" autocomplete="new-email" placeholder="邮箱" v-model="email">
          <i v-show="email!==''" class="aliicon iconfont icon-guanbi" @click="clearContent"></i>
        </div>
      </div>
      <button class="btm" @click.prevent="register()">注册</button>
      <a href="/login" class="hasaccount" @click="beforeDestory()">已有账号？</a>
    </form>
  </div>
  </div>
</template>

<script>
import {backToHome,clearContent,inputType,showpwd} from '../assets/js/common';
export default {
        name:'Register',
        data(){
              return{
                msg:"注册",
                username:'',
                password:'',
                email:'',
                passwordVisible:false
              }  
        },
        mounted(){
          //setAttribute(name,value)  name：要设置的属性名  value:要设置的属性值
          const newbgurl = require('../assets/images/sao1.jpg');
          document.querySelector('body').setAttribute('style',' background: url("'+ newbgurl +'") no-repeat; background-size:cover;');
          // document.querySelector('body').setAttribute('style',' background-image: url("'+require('../assets/images/asuna.jpg')+'")');
          // document.querySelector('body').style.backgroundImage = 'url('+require('../assets/images/asuna.jpg')+')';
        },
        beforeDestroy(){
          //removeAttribute(attrName)   接收的是要删除属性的名字，但是最终是把这个属性的名字和值都删掉了
          document.querySelector('body').removeAttribute('style');
        },
        computed:{
          inputType
        },
        methods:{
          backToHome,
          clearContent,
          showpwd,
          register(){
            let emailstyle = /\w*@[A-z0-9]+(\.[A-z]{2,}){1,2}/;
            if(!this.username || !this.password || !this.email){
              alert('请检查输入内容！');
              return;
            }else if(!emailstyle.test(this.email)){
              alert('请检查邮箱填写格式!');
              return;
            }
            const regmsg = {
              username:this.username,
              password:this.password,
              email:this.email
            };
            // axios.post('http://localhost:3000/home',regmsg,
            //   {
            //     Headers:{
            //       'Content-Type':'application/json'
            //     }
            //   }
            // ).then(res=>{
              alert("注册成功！");
              // document.querySelector('body').removeAttribute('style');
              this.$nextTick(()=>{
                this.$router.push({name:'/',params:regmsg});
              });
            // }).catch(err=>{
            //   console.error("注册失败！");
            // });
          }
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
.regcontent-div{
  width: 85%;
  position: relative;
  text-align: center;
  margin: 0 auto;
}
.regcontent input{
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
.hasaccount{
  position: absolute;
  bottom: 25px;
  right: 15px;
}
</style>