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
