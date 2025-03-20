const mongoose = require('mongoose');
//1.创建文档的结构对象
let questionnaireSchema = new mongoose.Schema({
    sex:String,
    isage:Number,
    isemail:String,
    istel:Number,
    acg:String,
    interests:[String],
    istextarea:String
});
//2.创建模型对象    (集合名称，结构对象)
let questionnaireModel = mongoose.model('ruleForm',questionnaireSchema);

module.exports = questionnaireModel;

