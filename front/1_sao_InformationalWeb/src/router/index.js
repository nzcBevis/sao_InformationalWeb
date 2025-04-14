//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import Index from '../components/Index'
import Home from '../components/Home'
import Movie from '../components/Movie'
import Questionnaire from '../components/Questionnaire'
import Login from '../components/Login'
import Register from '../components/Register'
// import Message from '../pages/Message'
// import Detail from '../pages/Detail'

//创建并暴露一个路由器
const router = new VueRouter({
    mode:'history',
    routes:[
        {   //默认路由
            path:'/',
            component:Index,
            // component:Home,           
            children:[
                {   //设置index中router-view显示内容，默认是首页内容
                    path:'/',
                    name:'/',
                    component:Home,
                    //重定向
                    // redirect:'/home'
                },
                {   //首页
                    name:'home',
                    path:'/home',
                    component:Home,
                    meta:{title:'首页'}
                },
                {   //电影
                    name:'movie',
                    path:'/movie',
                    component:Movie,
                    meta:{title:'电影'},
                    // children:[
                    //     {
                    //         name:'xinwen',
                    //         path:'news',
                    //         component:News,
                    //         meta:{isAuth:true,title:'新闻'},
                            //独享守卫
                            /* beforeEnter:(to,from,next)=>{
                                console.log('前置路由守卫',to,from)   
                                // if(to.path === '/home/news' || to.name === 'xiaoxi'){
                                if(to.meta.isAuth){//是否需要鉴权
                                    if(localStorage.getItem('userTable')==='huiyuan1'){
                                        next()
                                    }
                                    else{
                                        alert('userTable不对，无权限查看')
                                    }
                                }
                                else{
                                    next()
                                }
                            } */
                },
                {   //问卷
                    name:'questionnaire',
                    path:'/questionnaire',
                    component:Questionnaire,
                    meta:{title:'问卷'},
                    // children:[
                    //     {
                    //         name:'xiangqing',
                    //         path:'detail',//detail/:id/:title  其中,:id ==>占位符
                    //         component:Detail,
                    //         meta:{isAuth:true,title:'详情'},
                            //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
                            // props:{a:1,b:'hello'}
        
                            //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
                            // props:true
        
                            //props的第三种写法，值为函数
                            // props($route){//,可写连续解构赋值query(但不推荐):{query:{id,title}}
                            //     return{
                            //         id:$route.query.id,
                            //         title2:$route.query.title1
                            //     }
                            // }
                }
            ]
        },
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