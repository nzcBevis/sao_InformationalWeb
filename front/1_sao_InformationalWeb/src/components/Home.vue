<template>
<section class="indexSection">
    <div>
        <h1>Sword Art Online</h1>
        <h2>刀剑神域</h2>
        <h3>“这虽然是游戏，但可不是闹着玩的。”</h3>
        <button class="showit" @click="show()">点击显示问卷信息</button>
        <div class="showMsg" v-show="isShow">
            <div class="showMsgs">
                年龄: {{ mess.isage }}<br/>
                性别:&nbsp;{{mess.sex}}<br>
                邮箱: {{ mess.isemail }}<br/>
                电话号码: {{ mess.istel }}<br/>
                您 {{mess.acg}} ACG文化<br>
                看/听过该系列动漫/游戏:<br/>
                <div class="interests" v-for="(item,index) in mess.interests" :key="index">
                    &#12288;&#12288;{{item.toString()}}<br>
                </div>
                意见反馈:<br/>
                <div class="istextarea" ><!--&#12288;中文全角空格 （一个中文宽度）-->
                    &#12288;&#12288;{{ mess.istextarea }}
                </div><br/>               
                <button class="msgBtm" @click="isShowIt()">点击关闭</button>
            </div>
        </div>
    </div>
</section>
</template>
  
<!--引入在线文件-->
<!-- <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script> -->
<script>
import '../assets/css/1.css'
export default {
    name:'Home',
    // update(){
    //     window.scroll(0, 0)
    // },
    data(){
        return{
            isShow:false,
            mess:this.$route.params
        }
    },
    methods:{
        show(){
            if(this.mess.isage==undefined){//判断是否有数据
                //如果没有问卷填写信息则弹出提示框
                alert('暂无问卷填写信息！');
            }else{
                this.isShow=true;
                console.log(this.mess);
                // console.log(this.$route.params)
            }
        },
        isShowIt(){
            this.isShow=false;
            console.log('false了')
        }
    }
}
</script>

<style scoped>
/* body{
    width: 100%;
} */
button{
	bottom:200px;
	left:300px;/*图标居中*/
	position:relative;
	border-radius:24px;/*圆形按钮*/
	opacity:0.3;	
	display:none;/**/
}
button:hover
{/*当鼠标悬停在“提交”按钮上时：背景颜色透明度为0.85；光标变成“小手”形状*/
	opacity:85%;
	cursor:pointer;
}
.showit{
    opacity: 0.6;
    display:block;
    bottom:0;
    left:44%;
    font-size: 20px;
}
.showMsg{
    position:absolute; /*绝对定位*/
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5); /*半透明 */
    /* height: 172%; */
    display:flex;
    justify-content:center;
    height: 100vh;
    align-items: center;
}
.showMsgs{
    position:absolute; /*相对定位*/
    /* top:30vh; */
    /* left: 40vw; */
    /* text-align:center; */
    background-color: white;
    opacity: 0.8;
    padding:0 30px;
    /*设置溢出滚动条*/
    overflow-y:auto;
    max-height: 50vh;
}
.msgBtm{
    /*position:relative;*/ /*相对定位*/
    bottom: 0;
    left: 0;
    margin:auto;
    display: block;
    background-color: white;
    font-size:15px;
    opacity: 0.5;
}
.interests,.istextarea{
    white-space:pre-wrap;
}
/* .istextarea{
    width: 450px;
} */
</style>