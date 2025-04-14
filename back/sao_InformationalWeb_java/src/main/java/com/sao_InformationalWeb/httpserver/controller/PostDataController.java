package com.sao_InformationalWeb.httpserver.controller;

import com.sao_InformationalWeb.httpserver.dataconfig.DataConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



import java.sql.Connection;
import java.sql.DriverManager;

/*
* @RestController注解等价于@ResponseBody ＋ @Controller。
* @RestController和@Controller的共同点是都用来表示Spring某个类是否可以接收HTTP请求，
* 二者区别： @RestController无法返回指定页面，
*   而@Controller可以；前者可以直接返回数据，后者需要@ResponseBody辅助。
* 如果需要返回JSON，XML或自定义mediaType内容到页面，
*   @RestController自己就可以搞定，这个注解对于返回数据比较方便，
*   因为它会自动将对象实体转换为JSON格式。
* 如果需要返回JSON，XML或自定义mediaType内容到页面，
*   则需要在对应的方法上加上@ResponseBody注解。
* */
@RestController
//第一种直接写跨域注解
@CrossOrigin
public class PostDataController {
    @Autowired//不能用于局部变量
    JdbcTemplate jdbcTemplate;
    //处理HTTP POST请求的方法，只能标注在方法上。
    @PostMapping("/home")
    public String getAndAddData(@RequestBody DataConfig ruleForm) {
//        System.out.println(jdbcTemplate);
        String sex = ruleForm.getSex();
        int age = ruleForm.getIsage();
        String acg = ruleForm.getAcg();
        /*for(String str:strs)相当于
            for(int i = 0;i < strs.length(); i++){
                String string = strs[i];
            }
        * */
        String[] interests = ruleForm.getInterests();
        String interest="";
        for(int i = 0;i<interests.length;i++){
            if(i==0 || i==interests.length){
                interest = interests[i];
            }else{
                interest = interests[i]+"/";
            }
            interest += interest;
        }
        String email = ruleForm.getIsemail();
        String tel = ruleForm.getIstel();
        String  text = ruleForm.getIstextarea();
        String sql = "insert into saowebtest values(?,?,?,?,?,?,?)";
        jdbcTemplate.update(sql,sex,age,email,tel,acg,interest,text);//"刀剑神域第一季"
        return "Cross-origin request successful";

//        try() {//增加数据
            //INSERT INTO 表名[所有列名] VALUES(值1,值2,...);(sex,age,email,tel,acg,interest,textarea)
//            String sql = "insert into saowebtest values(?,?,?,?,?,?,?)";
//            jdbcTemplate.update(sql,sex,age,email,tel,acg,interest,text);//"刀剑神域第一季"
//            return "Cross-origin request successful";
//        }
    }
//    public String receiveData(@RequestBody String ruleForm){
//        // 处理接收到的数据
//        System.out.println("输出以下为：");
//        System.out.println("Received data: " + ruleForm);
//        return "Data received successfully.";
//    }
}

