const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false, //关闭语法检查
})
//跨域配置
// module.exports = {
//   lintOnSave:false, //关闭语法检查
//   devServer: {
//     proxy: {
//       '/api': {                      /*这里就是如果遇到自己要访问的路径里面有'/api'字
//                                       样就自动转化为下面target加在‘/api’去前面*/
//         target: 'http://localhost:8081', //这里写要访问(请求)的网址和端口
//         // ws: true, //用于支持websocket
//         changeOrigin: true, //用于控制请求头中的host值
//         pathRewrite:{'^/api':''}
//       }
//     }
//   }
// }


