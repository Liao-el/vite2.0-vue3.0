<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()  // 返回 router 实例。相当于在模板中使用 $router。必须在 setup() 中调用。
const route = useRoute()  // 返回当前路由地址。相当于在模板中使用 $route。必须在 setup() 中调用。
console.log("page2", route.path)

const goto3 = () => {
    router.push({
        path: "/routerPage/routerThird",//目标路由地址
        query: {
            page: 3
        }
    })


    // // 路由导航守卫   
    router.beforeEach((to, from, next) => {

        // 此路由需要授权，请检查是否已登录
        // 如果没有，则重定向到登录页面
        if (to.meta.requiresAuth) {
            console.log('======meta', to.meta);
            // 【 确保 next 在任何给定的导航守卫中都被严格调用一次 】
            // next({name:"routerForth"})
            next()
        }
        else {
            console.log("即将要进入to:", to, "正要离开from:", from);
            console.log('meta', to.meta);
            next()
        }

        // return false // 取消当前的导航
    })
    // // 路由独享的守卫: 直接在路由配置上定义 beforeEnter 守卫
}
</script>

<template>
    <div>
        <h1>router-2</h1>
        <button @click="goto3">点击去page3</button>
    </div>
</template>

<style lang="less" scoped>
</style>
