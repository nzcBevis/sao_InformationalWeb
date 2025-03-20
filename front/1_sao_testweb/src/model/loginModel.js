const mongoose = require('mongoose');
//1.创建文档的结构对象
let loginSchema = new mongoose.Schema({
    username:String,
    password:String,
});
//2.创建模型对象    (集合名称，结构对象)
let loginModel = mongoose.model('user',loginSchema);

module.exports = loginModel;

