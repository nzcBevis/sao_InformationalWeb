const express = require('express');
// const cors = require('cors');
const path = require('path');
// 处理类型是 application/x-www-form-urlencoded 和 application/json 格式的表单
// const bodyParser = require('body-parser');
const app = express();
// app.use(cors());
const compath = path.join(__dirname,'../assets');
app.use(express.static(compath));
//解析querystring格式请求体的中间件
// const urlencodedParser = bodyParser.urlencoded({
//     extended:false//表示使用系统模块querystring来处理
// });


app.get('/',(req,res)=>{
    console.log('触发了get方法',);
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','*');
    res.sendFile(path.join(__dirname,'/index.html'));
});
app.get('/index',(req,res)=>{///src/test/index1.html
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','*');
    res.sendFile(path.join(__dirname,'/index.html'));
});
app.get('/questionnaire.html',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','*');
    res.sendFile(path.join(__dirname,'/questionnaire.html'));
});
app.get('/movie.html',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','*');
    res.sendFile(path.join(__dirname,'/movie.html'));
});


app.post('/index.html',(req,res)=>{
    console.log('触发了server的post方法');
    // res.setHeader('Content-Type','application/x-www-form-urlencoded');
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','*');
    res.setHeader('Access-Control-Allow-Method','*');
    res.redirect('http://127.0.0.1:5501/src/test/index.html');
    // res.sendFile(path.join(__dirname,'/index.html'));
});

app.listen(5502,()=>{
    console.log('端口监听中...');
});