// import VueRouter from 'vue-router'
import { createRouter, createWebHashHistory, RouteRecordRaw, useRouter } from 'vue-router'
import Home from '../views/home.vue'
import routers from './modules/routers'
import stores from './modules/stores'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/hello',
        name: 'hello',
        component: () => import('../components/HelloWorld.vue')
    },
    {
        path: "/home",
        name: "home",
        component: Home,
    },
    ...routers,
    ...stores,

    // 所有找不到的页面跳转404
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/404.vue') },
]

// Vue-router新版本中，需要使用createRouter来创建路由 使用工厂函数创建router
const router=createRouter({
    // 指定路由的模式,此处使用的是hash模式 : 在内部传递的实际 URL 之前使用了一个哈希字符（#）
    history: createWebHashHistory(),// html5用：createWebHistory
    routes
})

// 路由守卫分类

// 【1】全局守卫：是指路由实例上直接操作的钩子函数，特点是所有路由配置的组件都会触发，直白点就是触发路由就会触发这些钩子函数
// beforeEach（to，from， next）
// beforeResolve（to，from， next）
// afterEach（to，from）

// 【2】路由守卫： 是指在单个路由配置的时候也可以设置的钩子函数
// beforeEnter（to，from， next）

// 【3】组件守卫：是指在组件内执行的钩子函数，类似于组件内的生命周期，相当于为配置路由的组件添加的生命周期钩子函数。
// beforeRouteEnter（to，from， next）
// beforeRouteUpdadte（to，from， next）
// beforeRouteLeave（to，from， next）

// 路由守卫回调参数介绍
// to：即将要进入的目标路由对象；
// from：即将要离开的路由对象；
// next：涉及到next参数的钩子函数，必须调用next()方法来resolve这个钩子，否则路由会中断在这，不会继续往下执行

// 路由导航守卫   
router.beforeEach((to, from, next) => {

    console.log("即将要进入to:", to, "正要离开from:", from);
    // 此路由需要授权，请检查是否已登录
    // 如果没有，则重定向到登录页面
    if (to.meta.requiresAuth) {
        console.log('======meta', to.meta);
        // 【 确保 next 在任何给定的导航守卫中都被严格调用一次 】
        // next({name:"routerForth"})
        next()
    }
    else {
        console.log('meta', to.meta);
        next()
    }

    // return false // 取消当前的导航
})
// 路由独享的守卫: 直接在路由配置上定义 beforeEnter 守卫


export default router


