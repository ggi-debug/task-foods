/**
 * 路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

//引入组件
import Msite from "@/pages/Msite/Msite";
import Order from "@/pages/Order/Order";
import Profile from "@/pages/Profile/Profile";
import Serch from "@/pages/Serch/Serch";
import Login from "@/pages/Login/Login";

//  声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    //所有路由
    routes:[
        {
            path:'/msite',
            component:Msite,
            meta:{
                FooterGuide:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                FooterGuide:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                FooterGuide:true
            }
        },
        {
            path:'/serch',
            component:Serch,
            meta:{
                FooterGuide:true
            }
        },
        {
            path:'/login',
            component:Login
        },
        //默认显示页面
        {
            path:'/',
            redirect:'/msite'
        }
    ]
})


