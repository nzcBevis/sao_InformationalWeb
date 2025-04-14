<template>
    <!--header-->
    <header class="theHeader">
        <div class="audio-controller">
            <!-- 方法一:--> 
            <img  class="controlIcon" :src="imgUrl"  id="audio_headerImg" @click="isImg()" alt="无法显示图片"> 
            <audio loop id="bgMusic">
                <source class="isAudio" :src="songUrl" type="audio/mp3" v-on:value="isPause"> 
                <!--<source class="isAudio" src="sounds/unlasting.mp3" type="audio/mp3">-->
            </audio>
            <!-- 方法二:
            <img class="controlIconFirst" src="images/mpause.png"  id="audio_headerimgFirst" onClick="img()" alt="无法显示图片">
            <img class="controlIconSecond" src="images/mplay.png" id="audio_headerimgSecond" onClick="img()" alt="无法显示图片">
            <audio loop  autoplay="autoplay" muted="muted" id="bgMusic" >
                <source class="isAudio" src="sounds/unlasting.mp3" type="audio/mp3" >
            </audio>-->
        </div>
        <div class="container">
            <nav>
                <!-- 定义一个复选框的input元素，并指定id或name -->
                <input type="checkbox" id="togglebox">
                <ul>
                    <li><router-link active-class="active" to="/home" id='home'>首页</router-link></li>
                    <li><a href="javascript:;">番剧</a></li>
                    <li><router-link active-class="active" to="/movie" >电影</router-link></li>
                    <li><a href="javascript:;">游戏</a></li>
                    <li><a href="javascript:;">画廊</a></li>
                    <li><router-link active-class="active" to="/questionnaire" >问卷</router-link></li>
                    <li v-if="!hasMess" class="signup-signin">
                        <a href="/register" class="sign-up">注册</a>
                        <a href="/login" class="sign-in">登录</a>
                    </li>
                    <li v-else class="loggedin">
                        <img class="defaultimg" src="../assets/images/morentouxiang.png" alt="默认图片无法显示">
                        <span>{{ mess.username }}</span>
                    </li>
                </ul>
                <!--汉堡菜单按钮-->
                <label class="menu" for="togglebox">
                    <img class="openMenu" src="../assets/images/openMenu.png" id="selectMenu" alt="无法显示图片">
                </label>
            </nav>
            <!-- <div class="btm"></div> -->
        </div>     
    </header>
    <!--//header-->
</template>

<script>
import '../assets/css/1.css'
// import {isImg} from '../assets/js/common'
// var bgMusic1=document.getElementById('bgMusic')//null
// var lis=document.getElementsByTagName("a")//不return则打印出HTMLCollection数组,但return则报错为不是一个函数
// var btm=document.getElementsByClassName("btm")[0]//刷新后打印出undefined

export default {
    name:'CommonHeader',
    data(){
        // var bgMusic=this.$refs.bgMusic
        // var bgMusic=document.getElementById('bgMusic');
        return{
            // songName:'LiSA - 往前',(超过9个字符识别后不能播放？LiSA (织部里沙) - 往け    谷歌浏览器中插件IDM影响？)
            songUrl:require("../assets/audio/LiSA - 往前.mp3"),
            //备用歌曲:../assets/audio/unlasting.mp3
            imgUrl:'',
            bgMusic:'',
            isPause:'',//1是暂停，0是播放
            mess:this.$route.params
        }        
    },
    
    mounted(){
        let audio_headerimg=document.getElementById("audio_headerImg");
        this.bgMusic = document.getElementById('bgMusic');
        // window.addEventListener('mousedown',this.handleMousedown)
        this.$nextTick(function(){//window.onload=
            // var playPromise=bgMusic//装完后调用自动播放 
            // console.log(playPromise)
            // if (playPromise !== undefined) {
            //     playPromise.play().then(_ => {
            //         bgMusic.pause();
            //     })
            //     .catch(error => {
            //         console.log('error',error)
            //     });
            // }
            if(navigator.userAgent.indexOf("Chrome")>-1)
            {             
                //bgMusic.currentTime=0;
                bgMusic.pause();
                // this.isPause=1;console.log("加载完了！",bgMusic);
                let mpauseImgUrl=require("../assets/images/mpause.png");
                audio_headerimg.src=mpauseImgUrl;
                audio_headerimg.classList.remove("controlIcon");//移除类名为img1的css属性
            }
            else
            {
                bgMusic.play();//准备就绪后自动播放
                this.isPause=0;
                let mpauseImgUrl=require("../assets/images/mplay.png");
                audio_headerimg.src=mpauseImgUrl;
                audio_headerimg.classList.add("controlIcon");//使用类名为img1的css属性
            }
            // for(let i=0;i<lis.length-1;i++)//length-1因为会把footer的a标签也遍历了
            // {	
            //     lis[i].index=i;
                // lis[i].onmousedown=function()
                // {	
                //         // btm.style.left=152*this.index+"px";
                //         let x=i;
                //         lis[x].style.backgroundColor="red";                      
                // }         

                // lis[i].onmouseenter=function()
                // {	
                //     console.log('onmouseenter',lis[i]);
                //     btm.style.display="block";//
                //     btm.style.left=152*this.index+"px";		
                // }
                // lis[i].onmouseleave=function()
                // {	
                //     // btm.style.left="0px";/*回到原来位置*/
                //     btm.style.display="none";
                // }  
            // }
        })
        
    },
    methods:{ 
        isImg(){console.log("触发了",bgMusic)
            // var bgMusic=this.$refs.bgMusicisImg()
            let audio_headerimg=document.getElementById("audio_headerImg");
            if(this.isPause)	//bgMusic.paused
            {   
                bgMusic.play();
                audio_headerimg.src=require("../assets/images/mplay.png");
                //bgMusic.currentTime=0;重头开始
                audio_headerimg.classList.add("controlIcon");/*当播放时图片转动*/
                this.isPause=0;
            }
            else
            {
                bgMusic.pause();
                audio_headerimg.src=require("../assets/images/mpause.png");
                //bgMusic.currentTime=0;
                audio_headerimg.classList.remove("controlIcon");/*停止时图片不转动*/
                this.isPause=1;
            }
        },

        // handleMousedown(e){
        //         let btm=document.getElementsByClassName("btm")[0]
        //         for(let i=0;i<lis.length-1;i++){
        //             lis[i].onmousedown=function()
        //         {	console.log('按下了',lis[i])
        //             console.log('this.index',this.index)
        //             btm.style.left=152*this.index+"px";
        //         }
        //     }
        // }
    },
    computed:{
        hasMess(){
            if(this.mess.username && this.mess.password){
                return true;//显示名字
            }else{
                return false;//显示注册登录
            }
        }
    }
}
</script>

<style scoped>
/*手动设置css属性 */
.active{
    text-decoration:underline;
}
a:hover{
    text-decoration:underline;
}
.sign-up,.sign-in{
	padding: 0 5px;
    font: 16px normal;
}
.loggedin{
    height: 40px;
    top:-10px;
	/* display: inline-flex; */
}
span{
	color:white;
	margin-top: 0;
    text-align:center;
    vertical-align:middle;
    display:unset;
}
/* .btm{
    display:none;
    width:50px;
    height:2px;
    position:absolute;
    background:#FFF;
    margin:0 50px;
    left:0px;
    bottom:0;
    transition-duration:0.5s;	
}  */
</style>