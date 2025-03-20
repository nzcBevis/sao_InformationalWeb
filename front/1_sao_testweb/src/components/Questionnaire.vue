<template>
  <!--section-->
    <section class="section">
        <form class="contact_form" name="contact_form" ><!-- :model="ruleForm" method="post" action="/home"--> 
            <ul>
                <li class="usually">
                    <h2>问卷调查</h2>
                </li>
                <li class="special">
                    <span>性别:</span>
                    <input type="radio" name="sex" id="male" value="男" checked>
                    <label for="male">男</label>
                    <input type="radio" name="sex" value="女" id="female" >
                    <label for="female">女</label>
                </li>                       
                <li class="usually">
                    <span>年龄:</span>
                    <input type="number" id="age" name="age" v-model="ruleForm.isage" min="1" max="150" required>
                </li>
                <li class="usually">
                    <span>联系邮箱:</span>
                    <input type="email" name="email" v-model="ruleForm.isemail" placeholder="javin@example.com" required>
                </li>
                <li class="usually">
                    <span>联系手机:</span><!--minlength="7"-->
                    <!--oninvalid=“setCustomValidity(‘提示内容’)" oninput:监听当前指定元素内容的改变，只要内容改变（添加内容，删除内容）就会触发这个事件-->
                    <input type="tel" id="phone" name="phone" v-model="ruleForm.istel"  oninvalid="setCustomValidity('请检查电话号码！')" οninput="setCustomValidity('')" required>
                </li>
                <li class="special">
                    <span>您接触过ACG文化:</span>
                    <input type="radio" name="acg" id="accept" checked>
                    <label for="accept">接触过</label>
                    <input type="radio" name="acg" id="know" >
                    <label for="know">听过但没接触过</label>
                    <input type="radio" name="acg" id="no" >
                    <label for="no">没接触过</label>
                </li>
                <li class="special">
                    <span>您看过或听过哪些刀剑系列的动漫或者游戏:</span>
                    <img src="../assets/images/attention.png" class="specialImg"><br/>
                    <!-- <input type="checkbox" id="SwordArtOnlineⅠ" name="interests" 
                            v-model="ruleForm.checkboxs[1]" @click="ischecked" ref="inters[1]">
                    <label for="SwordArtOnlineⅠ">刀剑神域第一季</label>
                    <input type="checkbox" id="SwordArtOnlineⅡ" name="interests" 
                            v-model="ruleForm.checkboxs[2]" @click="ischecked" ref="inters[2]">
                    <label for="SwordArtOnlineⅡ">刀剑神域第二季</label><br/>
                    <input type="checkbox" id="SwordArtOnlineⅢ" name="interests" 
                            v-model="ruleForm.checkboxs[3]" @click="ischecked" ref="inters[3]">
                    <label for="SwordArtOnlineⅢ">刀剑神域第三季</label>
                    <input type="checkbox" id="SwordArtOnlineMovie" name="interests" 
                            v-model="ruleForm.checkboxs[4]" @click="ischecked" ref="inters[4]">
                    <label for="SwordArtOnlineMovie">刀剑神域剧场版序列之争</label><br/>
                    <input type="checkbox" id="SwordArtOnlineAlternative" name="interests" 
                            v-model="ruleForm.checkboxs[5]" @click="ischecked" ref="inters[5]">
                    <label for="SwordArtOnlineAlternative">刀剑神域外传&nbsp;&nbsp;&nbsp;</label>
                    <input type="checkbox" id="SAOMD" name="interests" v-model="ruleForm.checkboxs[6]" @click="ischecked" ref="inters[6]">
                    <label for="SAOMD">刀剑神域记忆碎片</label><br/>
                    <input type="checkbox" id="SAOARS/UB" name="interests" v-model="ruleForm.checkboxs[7]" @click="ischecked" ref="inters[7]">
                    <label for="SAOARS/UB">刀剑神域ARS/UB</label>
                    <input type="checkbox" id="SAOIF" name="interests" v-model="ruleForm.checkboxs[8]" @click="ischecked" ref="inters[8]">
                    <label for="SAOIF">刀剑神域IF</label><br/>
                    <input type="checkbox" id="none" name="interests" v-model="ruleForm.checkboxs[9]" @click="ischecked" ref="none">
                    <label for="none">没看过，没听过</label> -->

                    <!-- <QuestionInterestsContent></QuestionInterestsContent> -->
                    <div v-for="(value,key,index) in msg" :key="key">
                        <input type="checkbox" 
                            :id="`${key}`" name="interests" @click="ischecked"
                            v-model="ruleForm.checkboxs[index]" >
                        <label :for="`${key}`">{{value}}</label>
                        <!-- <label :for="`${key}`">
                        <input type="checkbox" :id="`${key}`" name="interests" @click="ischecked"
                            v-model="ruleForm.checkboxs[index]">{{ value }}</label> -->
                    </div>
                </li>
                <li class="usually">
                    <span>对该网页有什么改进或建议:</span>
                    <textarea rows="10" cols="200" name="introduction" v-model="ruleForm.istextarea" 
                        placeholder="若无改进或建议填无。" class="message" required>
                    </textarea>
                </li>
            </ul>    
            <!-- <li> -->
                    <!-- <input style="display: none;" type="submit" id="sub" value="submit" @click.prevent="subm()" /> -->
                    <!-- <input class="submit" type="submit" @click.prevent="subm()" value="提交"> -->
                    <button type="button" class="submit" @click="subm()">提交</button>
            <!-- </li> -->  
        </form>
    </section>
    <!--//section-->
</template>

<!--引入在线文件-->
<script crossorigin="anonymous" src="https://cdn.bootcdn.net/ajax/libs/axios/1.5.0/axios.js"></script>
<!-- <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script> -->
<script>
import '../assets/css/3.css'
import axios from 'axios'
import QuestionInterestsContent from './QuestionInterestsContent.vue'
    export default {
        name:'Questionnaire',
        components:{
            QuestionInterestsContent
        },
        data(){//使用组件时必须使用函数式
            return{
                // homeUrl:'/home',
                ruleForm:{
                    sex:'',
                    isage:'',
                    isemail:'',
                    istel:'',
                    acg:'',
                    checkboxs:[],
                    istrue:false,//复选框默认都没勾选
                    ischecked:false,
                    interests:'',
                    istextarea:''
                }
                ,msg:{"SwordArtOnlineⅠ":"刀剑神域第一季","SwordArtOnlineⅡ":"刀剑神域第二季",
                     "SwordArtOnlineⅢ":"刀剑神域第三季","SwordArtOnlineMovie":"刀剑神域剧场版序列之争",
                     "SwordArtOnlineAlternative":"刀剑神域外传","SAOMD":"刀剑神域记忆碎片",
                     "SAOARS/UB":"刀剑神域ARS/UB","SAOIF":"刀剑神域IF","none":"没看过，没听过"
                }
            }
        },
        methods:{
            //检测是否勾选了“没听过、没看过”(固定最后一项)，若是则其他选项为不可选
            ischecked(event){//event:输入event时，标签中绑定的事件有括号则需填入$event，方法中才能接收到参数
                let isinterests = document.querySelectorAll("input[name='interests']");

                //#region   for第一种
                // if(event.target.id !== 'none'){ //不等于最后一个  index 1= isinterests.length-1
                //     for(let i = 0;i<isinterests.length;i++){
                //         if(isinterests[i].checked){//存在勾选项 
                //             //禁用最后一项勾选
                //             i = isinterests.length-1;
                //             isinterests[i].disabled = true;
                //         }else{
                //             isinterests[i].disabled = false;//所有选项可选
                //         }       
                //     }
                // }else{
                //     for(let i = 0;i<isinterests.length-1;i++){
                //         if(event.target.checked){
                //             //禁用其他项的勾选
                //             isinterests[i].disabled = true;
                //             // event.target.disabled = false;
                //         }else{
                //             isinterests[i].disabled = false;
                //         }
                //     }
                // }
                //#endregion

                //for第二种
                for(let i = 0;i<isinterests.length;i++){
                    if(event.target.checked || isinterests[i].checked){
                        if(event.target.id !== 'none'){//非最后一项
                            i = isinterests.length - 1;
                            isinterests[i].disabled = true;
                        }else{
                            isinterests[i].disabled = true;
                            event.target.disabled = false;
                        }
                    }else{
                        isinterests[i].disabled = false;
                    }
                }

                //第三种    forEach通过 try catch 抛出异常的方式跳出循环
                // try{
                //     isinterests.forEach((item,index)=>{
                //         if(event.target.checked || item.checked){
                //             if(event.target.id !== 'none'){//非最后一项
                //                 index = isinterests.length - 1;
                //                 isinterests[index].disabled = true;
                //                 throw new Error("isOver");
                //             }else{
                //                 isinterests[index].disabled = true;
                //                 event.target.disabled = false;
                //             }
                //         }else{
                //             isinterests[index].disabled = false;
                //         }
                //     })
                // }catch(e){
                //     if(e.message !== "isOver")throw e;
                // }
            },
            //提交
            subm(){
                let sexchoose = document.getElementsByName('sex');
                let acgchoose = document.getElementsByName('acg');
                let checkboxs = document.getElementsByName('interests');
                let istrue = this.istrue;//console.log("提交后:",istrue);
                let phone=document.getElementById("phone");
                let ruleForm=this.ruleForm;
                sexchoose.forEach(item=>{
                    if(item.checked){
                        //判断是否被选中后获取绑定的label
                        var sexlabel=document.querySelector(
                            'label[for="' + item.id + '"]');
                            ruleForm.sex=sexlabel.innerText;
                        }
                    });
  
                acgchoose.forEach(item=>{
                    if(item.checked){
                        //判断是否被选中后获取绑定的label
                        var acglabel=document.querySelector(
                            'label[for="' + item.id + '"]');
                            ruleForm.acg=acglabel.innerText;
                        }
                    });
                        
                //遍历选中复选框
                let temp=[];
                for(let i = 0;i<checkboxs.length;i++){                    
                    if(checkboxs[i].checked){
                        //任意一个复选框被勾选
                        istrue = true;
                        //判断是否被选中后获取绑定的label
                        var interests = document.querySelector(
                            'label[for="' + checkboxs[i].id + '"]').innerText;
                        temp.push(interests);
                    }
                }  
                ruleForm.interests=(temp.toString().split(','));

                //判断  每3个换行
                // for(let i =0;i<temp.length;i++){
                //     if(i%3 == 2){//从0开始，i=5时长度为6
                //         temp[i]+='\n';console.log(temp);
                //     }else if(i == temp.length-1){//最后
                //         temp[i] += '\n';
                //     }
                // }    

                //遍历data中的复选框
                // for(let i=0;i<ruleForm.checkboxs.length;i++)
                // {   
                //     if(ruleForm.checkboxs[i]){
                //         var istrue=ruleForm.checkboxs[i];
                //     }
                // }
                
                //textarea每行限制输出显示长度
                let txttemp=[];
                // 转变为数组形式
                let textArr = ruleForm.istextarea.split('');//推荐let temptArr=ruleForm.istextarea; let textArr=temptArr.split('');
                    // console.log('旧的：',textArr)
                for(let i = 0;i<textArr.length;i++){
                    let reg = /[\u4e00-\u9fa5]/;//判断是否有汉字
                    if(textArr[i-1]=='\n'){  //textarea中原先已有'\n'
                        txttemp.push('\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0');
                        // txttemp.push(textArr[i]);
                        let temp = i;
                        for(let j = 0,k = 0,l=0;j<(textArr.length-i);j++,temp++){//原有\n即开始第二段  此处遍历时外部for循环中的i值固定                            
                            // arr[j]=textArr[temp];//,arr=[]新段落的索引从0开始排序
                            if(reg.test(textArr[temp])){//是汉字(2个字符)
                                // console.log(`arr[${j}]:`,reg.test(arr[j]),arr[j],`arr[${j-1}]:`,/[A-z0-9]/.test(arr[j-1]),arr[[j-1]],arr[j-1] !== undefined)
                                //判断当前汉字的相邻是否为汉字，如果不是则换行!reg.test(textArr[i-1]) && 
                                if(/[A-z0-9]/.test(textArr[temp-1]) && textArr[temp-1] !== undefined){//避免arr[-1]=undefined的情况(j-1>=0)
                                    //\w:[A-z0-9]任意数字、字母  xa0英文空格
                                    txttemp.push('\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0');
                                    txttemp.push(textArr[temp]);//换行后插入第一个汉字
                                }else{
                                    if(k%12==9){//每12个汉字(22个字符)换行
                                        txttemp.push(textArr[temp]);
                                        txttemp.push('\n');
                                    }else{//12以内直接插入数组
                                        txttemp.push(textArr[temp]);
                                    }
                                }
                                k++;l=0;   
                            }else{//不是汉字
                                //k为非汉字时的索引，从0开始计算
                                if((/[A-z]/.test(textArr[temp])&&/[A-z]/.test(textArr[temp-1])) || 
                                    (/[0-9]/.test(textArr[temp])&&/[0-9]/.test(textArr[temp-1])) || j==0){
                                    //都是同类型时
                                    if(l%20==15){//每20个字符换行
                                        txttemp.push(textArr[temp]);
                                        txttemp.push('\n');
                                    }else{//20以内直接插入数组
                                        txttemp.push(textArr[temp]);
                                    }
                                }else if(textArr[temp]==='\n'){
                                    txttemp.push(textArr[temp]);
                                    txttemp.push('\xa0\xa0\xa0\xa0\xa0\xa0');
                                }else if(txttemp[txttemp.length-1]==='\n'){
                                    //新数组最后一个为\n或者遇到换行
                                    txttemp.push('\xa0\xa0\xa0\xa0\xa0\xa0');
                                    txttemp.push(textArr[temp]);
                                }else{//前后不是同类型且前面非'\n'时
                                    txttemp.push('\n\xa0\xa0\xa0\xa0\xa0\xa0');
                                    txttemp.push(textArr[temp]);
                                }
                                l++;k=0;
                            }
                        }
                        break;//遍历完整段后跳出循环
                    }else{//textarea中原先没有'\n'
                        if(reg.test(textArr[i])){//是汉字(2个字符)
                            //判断当前汉字的前面是否为汉字，如果不是则换行!reg.test(textArr[i-1]) && 
                            if(/[A-z0-9]/.test(textArr[i-1]) && i > 0){
                                //\w:[A-z0-9]任意数字、字母  xa0英文空格
                                txttemp.push('\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0');
                                txttemp.push(textArr[i]);//换行后插入第一个汉字
                            }else{
                                if(i%12==9){//每12个汉字(22个字符)换行
                                    txttemp.push(textArr[i]);
                                    txttemp.push('\n');  
                                }else{//12以内直接插入数组
                                    txttemp.push(textArr[i]);
                                }
                            }   
                        }else{//不是汉字
                            if((/[A-z]/.test(textArr[i])&&/[A-z]/.test(textArr[i-1])) || 
                                    (/[0-9]/.test(textArr[i])&&/[0-9]/.test(textArr[i-1])) || i==0){
                                //都是同类型时
                                if(i%20==15){//每20个字符换行
                                    txttemp.push(textArr[i]); 
                                    txttemp.push('\n');                          
                                }else{//20以内直接插入数组
                                    txttemp.push(textArr[i]);
                                }
                            }else if(textArr[i]==='\n'){
                                txttemp.push(textArr[i]);
                            }else if(txttemp[txttemp.length-1]==='\n'){
                                txttemp.push('\xa0\xa0\xa0\xa0\xa0\xa0');
                                txttemp.push(textArr[i]);
                            }else{//前后不是同类型且前面非'\n'时
                                txttemp.push('\n\xa0\xa0\xa0\xa0\xa0\xa0');
                                txttemp.push(textArr[i]);
                            }
                        } 
                    }                    
                }
                // console.log("新的：",txttemp);
                // 数组转变为字符串形式
                ruleForm.istextarea = txttemp.join('');

                //验证判断
                if(  ruleForm.isage<=150 && istrue && phone.value.length >=7 
                    && phone.value.length <=11 && ruleForm.istextarea !== '')
                {
                    // 判断输入的手机格式是否正确
                    let telstyle = /^1[3-9][0-9]{9}$/;
                    // 判断输入的手机格式是否正确
                    let emailstyle = /^\w*@[A-z0-9]+(\.[A-z]{2,}){1,2}$/;
                    if(telstyle.test(ruleForm.istel) && emailstyle.test(ruleForm.isemail)){
                        //1.发送axios请求
                        axios.post('http://localhost:8081/home',ruleForm,//JSON.stringify(ruleForm),将JSON对象变成字符串
                            //其他配置
                            {
                                headers:{
                                //     //application/x-www-form-urlencoded:最常见的 POST 提交数据的方式了。浏览器的原生表单
                                    'Content-Type': 'application/json',
                                }
                            }
                        ).then(res=>{
                            alert('感谢您的反馈！正在返回首页！');
                            this.$router.push({name:'home',params:ruleForm});  
                        }).catch(err=>{
                            console.error(err);
                        });
                        // document.getElementById ('sub').click()                       
                        // this.$router.push({path:'/home',query:{key:'传达到了'}});

                        //2.调用ajax请求
                        // this.sendxhr(this,ruleForm);                       

                    }else{
                        alert('手机格式错误！');
                        ruleForm.istel='';//清除错误内容
                        phone.focus();
                    }   
                }
                else{
                    alert("请检查输入的信息！");return
                }
            },
            // sendxhr(that,ruleForm){
            //     const xhr = new XMLHttpRequest();
            //     xhr.open('POST','http://127.0.0.1:3000/home');
            //     xhr.setRequestHeader('Content-Type', 'application/json');//设置自定义请求头
            //     // xhr.setRequestHeader('Content-Type', 'multipart/form-data');
            //     xhr.send(JSON.stringify(ruleForm));
            //     xhr.onreadystatechange = function(){
            //         if(xhr.readyState===4){
            //             if(xhr.status>=200 && xhr.status<300){
            //                 //请求成功
            //                 alert('感谢您的反馈！正在返回首页！');
            //                 that.$router.push({name:'home',params:ruleForm});  
            //             }else{
            //                 //请求失败
            //                 console.error(xhr.statusText);
            //             }
            //         }
            //     }
            // }        
                     
                // console.log(document.getElementById ('sub').click ()==true)
                
                // this.$http.post(
                //         'http://localhost:8080/home',{data:this.ruleForm},{emulateJSON:true,}
                                                
                //         ).then(
                //             response=>{
                //                 if(phone.value.length >'8' || phone.value.length <'11')
                //                 {
                                    
                //                     alert('感谢您的反馈！正在返回首页！');
                //                 }
                //             },
                //             error=>{
                //                 alert("!!!!",error);return
                //             } 
                            
                //         )
            
            // textLink(){
            //     axios.get('http://localhost:8080/hello/student').then(
            //     response=>{
            //         console.log('请求成功了',response.data)
            //     },
            //     error=>{
            //         console.log('请求失败了',error.message)
            //     }
            //     )
            // },
        }
    }    
</script>

<style scoped>
/* .btm
    {
        display:none;
        width:50px;
        height:2px;
        position:absolute;
        background:#FFF;
        margin:0 50px;
        left:775px;
        bottom:0;
        transition-duration:0.5s;	
    } */
</style>