//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件

import Login from '../components/Login'
import Register from '../components/Register'

//创建并暴露一个路由器
const router = new VueRouter({
    // mode:'history',
    routes:[
        {   //登录
            name:'login',
            path:'/login',
            component:Login,
            meta:{title:'登录'}
        },
        {   //注册
            name:'register',
            path:'/register',
            component:Register,
            meta:{title:'注册'}
        }
    ]
})


//全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
// router.beforeEach((to,from,next)=>{	//函数体
//     console.log('前置路由守卫',to,from)
    
//     // if(to.path === '/home/news' || to.name === 'xiaoxi'){
//     if(to.meta.isAuth){//是否需要鉴权
//         if(localStorage.getItem('userTable')==='huiyuan1'){
//             // document.title = to.meta.title || 'Vue路由'
//             next()
//         }
//         else{
//             // document.title = to.meta.title || 'Vue路由'
//             alert('userTable不对，无权限查看')
//         }
//     }
//     else{
//         next()
//     }
// })

//全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
/* router.afterEach((to,from)=>{	//函数体
    console.log('后置路由守卫',to,from)
    document.title = to.meta.title || 'Vue路由'
}) */

export default router