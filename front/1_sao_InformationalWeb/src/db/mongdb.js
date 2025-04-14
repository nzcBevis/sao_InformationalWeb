/**
 * 
 * @param {*} success 数据库连接成功的回调
 * @param {*} error 数据库连接失败的回调
 */
module.exports=function(success,error){
    //判断error，为其设置默认值
    if(typeof error !== 'function'){
        error = ()=>{
            console.log('连接失败！');
        };
    }
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
    mongoose.connect('mongodb://127.0.0.1:27017/saoInformationalWeb');
    //4.设置回调
    //连接成功的回调
    mongoose.connection.once('open',()=>{
        //当mongodb服务断线时，8080端口依然占用，若使用on，则会在服务重新上线时重连，但无法监听8080端口
        console.log('连接成功！');
        success();
    });
    //连接失败的回调
    mongoose.connection.on('error',()=>{
        console.log('连接失败！');
        error();
    });
    //连接关闭的回调
    mongoose.connection.on('close',()=>{
        console.log('连接关闭！');
    });
}
