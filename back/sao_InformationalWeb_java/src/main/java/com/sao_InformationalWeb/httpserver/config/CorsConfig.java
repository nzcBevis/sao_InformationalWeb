package com.sao_InformationalWeb.httpserver.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//表明这就是一个配置类

//第二种自行配置跨域类
//@Configuration
//public class CorsConfig implements WebMvcConfigurer {
//    //可以通过方法参数实现依赖注入
////    @Bean
//    //目的是为了明确表示一个方法是重写了父类中的方法。
//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//
//        registry.addMapping("/**")// 允许跨域的路径
//                .allowedOrigins("http://localhost:8081")// 前端运行的地址
//                .allowedHeaders()// 允许的请求头
//                .allowedMethods("GET", "POST", "PUT", "DELETE");// 允许的请求方法
//    //            .allowCredentials(true); // 是否允许证书（cookies）
//    }
//}
