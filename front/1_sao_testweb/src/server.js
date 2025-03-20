//导入express
const express = require('express');
//1.解决跨域，导入中间件cors
const cors = require('cors');
// 处理类型是 application/x-www-form-urlencoded 和 application/json 格式的表单
// const bodyParser = require('body-parser');//express4.16+已弃用body-parser
//创建应用对象
const app = express();
//1.注册跨域中间件
app.use(cors());
// 解析querystring格式请求体的中间件
// const urlencodedParser = bodyParser.urlencoded({
//     extended:false//false 表示使用系统模块querystring来处理
// });

//2.手动设置响应头
// app.use(function(req,res,next){console.log('有人请求了')
    // res.header('Access-Control-Allow-Origin', '*');
    //可单独设置'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild'
    // res.header('Access-Control-Allow-Headers', '*');
    //可仅设置'PUT, POST, GET, DELETE,OPTIONS'
    // res.header('Access-Control-Allow-Methods', '*');
    // next();
// })
// 解析JSON格式的请求体
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//创建路由规则
//1.使用body-parser
// app.post('/home',urlencodedParser,(req,res)=>{
//     //设置响应头
//     res.setHeader("Access-Control-Allow-Origin","*");
//     res.setHeader("Access-Control-Allow-Headers","*");
//     res.setHeader("Access-Control-Allow-Method","*");
//     res.send('触发了这个post方法');
//     console.log(req.body);
// });


//2.使用express.json
// app.post('/home',(req,res)=>{
//     //设置响应头
//     res.setHeader("Access-Control-Allow-Origin","*");
//     res.setHeader("Access-Control-Allow-Headers","*");
//     res.setHeader("Access-Control-Allow-Method","*");
//     res.send('触发了这个post方法');
//     console.log(req.body);
// });

//使用mongoose模块化
const questionnaireModel = require('./model/questionnaireModel');
const loginModel  = require('./model/loginModel');
const mongdb = require('./db/mongdb');
// const mongdb = require('./db/mgdb');
app.post('/home', (req,res,next)=>{console.log(req.body)
    //设置响应头
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","*");
    res.setHeader("Access-Control-Allow-Method","*");
    mongdb(()=>{
        // questionnaireModel.create({
        //     ...req.body
        // }).then(data=>{
        //     res.json({
        //         code:'0000',
        //         msg:'创建成功',
        //         data:data
        //     });
        // }).catch(err=>{
        //     res.json({
        //         code:'0001',
        //         msg:'创建失败',
        //         data:null
        //     });
        //     return;
        // });
        loginModel.create({
            ...req.body
        }).then(data=>{
            res.json({
                code:'0000',
                msg:'创建成功',
                data:data
            });
        }).catch(err=>{
            res.json({
                code:'0001',
                msg:'创建失败',
                data:null
            })
        });
    })
});

app.get('/home',(req,res)=>{
    //设置响应头
    // res.setHeader("Access-Control-Allow-Origin","*");
    // res.setHeader("Access-Control-Allow-Headers","*");
    // res.setHeader("Access-Control-Allow-Method","*");
    res.send('触发了这个get方法!');
    // console.log(req.body.istel);
});



//监听服务
app.listen(3000,()=>{
    console.log('3000端口监听中...');
});