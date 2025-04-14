# 项目前端网页展示  
## 原html所有页面(未修改前：仅有首页、电影和问卷)  
<img src="/Scrrenshots/index1.png" alt="原html项目index" width="200" heigth="300">  
<img src="/Scrrenshots/movie1.png" alt="原html项目movie" width="200" heigth="300">  
<img src="/Scrrenshots/questionnaire1.png" alt="原html项目问卷" width="200" heigth="300">  
<img src="/Scrrenshots/questionnaire2.png" alt="原html项目问卷" width="200" heigth="300">  

## 修改成vue项目并添加功能  
### (此处展示新添加部分，多个单独的html改为由组件渲染的，在下面有截图)  
<img src="/Scrrenshots/newIndex1.png" alt="index新增部分问卷信息部分" width="200" heigth="300">  
<img src="/Scrrenshots/newIndex2.png" alt="index新增部分问卷信息部分" width="200" heigth="300">  

## 当前vue(截止目前，目前尝试新增注册登录跳转)  
<img src="/Scrrenshots/newIndex3.png" alt="index新增登录注册部分" width="200" heigth="300">  
<img src="/Scrrenshots/newIndex4.png" alt="index新增登录注册部分" width="200" heigth="300">  
<img src="/Scrrenshots/newQuestionnaire1.png" alt="问卷新增复选判断部分" width="200" heigth="300">  
<img src="/Scrrenshots/newIndex5.png" alt="index新增获取全部问卷信息" width="200" heigth="300">  

### 登录注册页面(暂时)  
<img src="/Scrrenshots/oldLogin.png" alt="修改前登录界面" width="200" heigth="300">  
<img src="/Scrrenshots/oldRegister.png" alt="修改前注册界面" width="200" heigth="300">  

### 登录注册页面(目前)  
<img src="/Scrrenshots/newLogin.png" alt="修改后登录界面" width="200" heigth="300">  
<img src="/Scrrenshots/newRegister.png" alt="修改后注册界面" width="200" heigth="300">  

# 原html中部分功能代码（详细请查看web期末作业项目readme）  
**判断浏览器内核类型实现背景音乐是否自动播放**  
<img src="/Scrrenshots/musicIsAutoPlay.png" alt="判断浏览器内核控制音乐是否自动播放" width="200" heigth="300">  

**点击图标时停止旋转图标同时暂停背景音乐，重新点击后再次旋转并重新播放音乐：**  
<img src="/Scrrenshots/clickMusicIcon.png" alt="点击音乐图片触发事件" width="200" heigth="300">  

# 通过学习vue等前端所需技术知识后，将本科时期的web期末作品中的部分html代码使用vue重新构建。以下为web期末作品的代码说明以及部分html修改为vue的详情：  
**链接：** [百度云链接](https://pan.baidu.com/s/18tfPaChGCe3OlUTKVVtl0w?pwd=l61z)**(若图片不清楚可查看front文件夹中的word或者pdf文档)**  

## 部分html改为vue:  
**由单个html文件改为多个组件组成**  
<img src="/Scrrenshots/htmlProject.png" alt="原html项目" width="200" heigth="300">  
<img src="/Scrrenshots/htmlToVue1.png" alt="用vue重写项目" width="200" heigth="300">  
<img src="/Scrrenshots/htmlToVue2.png" alt="用vue重写项目" width="200" heigth="300">  

**导航栏中的a标签改为vue中的router-link标签：**  
<img src="/Scrrenshots/aToRouterLink.png" alt="a标签改为router-link标签" width="200" heigth="300">  

**声明一个变量指向data中返回的ruleForm**  
<img src="/Scrrenshots/ruleForm.png" alt="ruleForm" width="200" heigth="300">  

**判断问卷内容必填项是否填完**  
<img src="/Scrrenshots/required.png" alt="判断问卷内容必填项" width="200" heigth="300">  

**跳转并把数据传到首页**  
<img src="/Scrrenshots/dataSendToIndex.png" alt="把数据传到首页" width="200" heigth="300">  

**嵌套，动态渲染**  
<img src="/Scrrenshots/render.png" alt="嵌套，动态渲染" width="200" heigth="300">  

## 2024.5.24新增：
**勾选单选框并获取绑定对应标签的文本内容：**  
<img src="/Scrrenshots/radioToBind.png" alt="单选框绑定事件" width="200" heigth="300">  

**勾选复选框并获取绑定对应标签的文本内容：**  
<img src="/Scrrenshots/checkBoxToBind.png" alt="复选框绑定事件" width="200" heigth="300">  

**Textarea内容输出到首页显示信息窗口时限制每行字符数：**  
<img src="/Scrrenshots/textareaMsgSendToIndex.png" alt="extarea内容输出到首页显示信息窗口时限制每行字符数" width="200" heigth="300">  

## 2024.5.29修改：  
**将联系号码的input标签中的最小长度限制删除，并在验证判断中添加手机号码格式验证：**  
<img src="/Scrrenshots/checkPhone.png" alt="检查手机格式" width="200" heigth="300">  

## 2024.6.20补全：  
**Textarea内容输出到首页显示信息窗口时限制每行字符数（由直接判断修改成按类型判断）：**  
<img src="/Scrrenshots/newTextareaMsg1.png" alt="修改Textarea内容输出判断" width="200" heigth="300">  
<img src="/Scrrenshots/newTextareaMsg2.png" alt="修改Textarea内容输出判断" width="200" heigth="300">  
<img src="/Scrrenshots/newTextareaMsg3.png" alt="修改Textarea内容输出判断" width="200" heigth="300">  
<img src="/Scrrenshots/newTextareaMsg4.png" alt="修改Textarea内容输出判断" width="200" heigth="300">  

**因循环内相对判断较多且有重复语句，后续会将可拿出来的代码重复部分封装成函数再调用。**  

## 新增连接数据库(node.js和mongoose)：  
**尝试将问卷中输入的内容，在按下提交按钮后将数据以JSON对象形式发送请求到node.js，并实现跨域**  
<img src="/Scrrenshots/toAxios.png" alt="发送axios请求" width="200" heigth="300">  
<img src="/Scrrenshots/cors.png" alt="解决跨域问题" width="200" heigth="300">  
<img src="/Scrrenshots/resMsg.png" alt="设置响应头" width="200" heigth="300">  

**尝试将问卷中输入的内容，在按下提交按钮后将数据以JSON对象形式发送请求到mongoose数据库中**  
**Node.js文件中添加关于mongoose的post请求**  
<img src="/Scrrenshots/mongoose.png" alt="添加mongoose" width="200" heigth="300">  

**新建数据库连接文件mongdb.js**  
<img src="/Scrrenshots/mongdb.png" alt="mongdb.js" width="200" heigth="300">  

**新建Mongoose模块文件questionnaireModel.js**  
<img src="/Scrrenshots/questionnaireModel.png" alt="questionnaireModel.js" width="200" heigth="300">  

**将问卷内容填写后通过axios请求将数据发送到数据库并添加至数据库中**  
<img src="/Scrrenshots/navicat.png" alt="navicat查看数据库" width="200" heigth="300">  

## 2024.8.30补全：  
### 2024.7.26 连接mysql数据库并写入相关数据(从问卷中提交的数据)  
#### Java部分：  
**application.yml文件:**  
<img src="/Scrrenshots/applicationYml.png" alt="application.yml文件" width="200" heigth="300">  
**saoInformationalWeb.sql文件:**  
<img src="/Scrrenshots/sql.png" alt="sql文件" width="200" heigth="300">  
**DataConfig.java文件：**  
<img src="/Scrrenshots/dataConfig.png" alt="DataConfig文件" width="200" heigth="300">  
**PostDataController.java文件：**  
<img src="/Scrrenshots/postDataController1.png" alt="PostDataController文件" width="200" heigth="300">  
<img src="/Scrrenshots/postDataController2.png" alt="PostDataController文件" width="200" heigth="300">  

**添加新数据前Navicat可视化表中数据为：**  
<img src="/Scrrenshots/insertBefore.png" alt="添加新数据前" width="200" heigth="300">  
**添加新数据后**  
**F12控制台工具：**  
<img src="/Scrrenshots/f12Control.png" alt="F12控制台工具" width="200" heigth="300">  
**Navicat可视化表中数据为：**  
<img src="/Scrrenshots/insertAfter.png" alt="Navicat可视化表中数据" width="200" heigth="300">  