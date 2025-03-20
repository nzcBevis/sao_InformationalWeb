const express = require('express');
//解决跨域，导入中间件cors
const cors = require('cors');
//1.安装mongoose
//2.导入mongoose
const mongoose = require('mongoose');
const app = express();
//注册跨域中间件
app.use(cors());
// 解析JSON格式的请求体
app.use(express.json());
//设置strictQuery(默认严格查询模式)为true
mongoose.set('strictQuery',true);
//3.连接mongodb服务     端口后是数据库名称(数据库无则自动创建)
mongoose.connect('mongodb://127.0.0.1:27017/saotestweb');
//4.设置回调
//连接成功的回调
mongoose.connection.once('open',()=>{
    //当mongodb服务断线时，8080端口依然占用，若使用on，则会在服务重新上线时重连，但无法监听8080端口
    console.log('连接成功！');
    // //1.创建文档的结构对象
    // let questionnaireSchema = new mongoose.Schema({
    //     sex:String,
    //     isage:Number,
    //     isemail:String,
    //     istel:Number,
    //     acg:String,
    //     interests:[String],
    //     istextarea:String
    // });
    // //2.创建模型对象    (集合名称，结构对象)
    // let questionnaireModel = mongoose.model('ruleForm',questionnaireSchema);
    // app.post('/home',(req,res,next)=>{
    //     //设置响应头
    //     res.setHeader("Access-Control-Allow-Origin","*");
    //     res.setHeader("Access-Control-Allow-Headers","*");
    //     res.setHeader("Access-Control-Allow-Method","*");
    //     questionnaireModel.create({
    //         ...req.body
    //     }).then(data=>{
    //         res.json({
    //             code:'0000',
    //             msg:'创建成功',
    //             data:data
    //         });
    //     }).catch(err=>{
    //         res.json({
    //             code:'0001',
    //             msg:'创建失败',
    //             data:null
    //         });
    //         return;
    //     });
    //     //关闭mongoose的连接
    //     setTimeout(()=>{
    //         mongoose.disconnect();
    //     },1000);
    // });
});
//连接失败的回调
mongoose.connection.on('error',()=>{
    console.log('连接失败！');
});
//连接关闭的回调
mongoose.connection.on('close',()=>{
    console.log('连接关闭！');
});
// app.listen(3000,()=>{
//     console.log('端口监听中...');
// });
//1.创建文档的结构对象
// let questionnaireSchema = new mongoose.Schema({
//     sex:String,
//     isage:Number,
//     isemail:String,
//     istel:Number,
//     acg:String,
//     interests:[String],
//     istextarea:String
// });
// //2.创建模型对象    (集合名称，结构对象)
// let questionnaireModel = mongoose.model('ruleForm',questionnaireSchema);
// module.exports = questionnaireModel;
