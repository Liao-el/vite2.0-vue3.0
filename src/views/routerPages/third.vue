<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()  // 返回 router 实例。相当于在模板中使用 $router。必须在 setup() 中调用。
const route = useRoute()  // 返回当前路由地址。相当于在模板中使用 $route。必须在 setup() 中调用。

console.log("3:", route.query)

const back = () => {
    router.go(-1)
}

</script>

<template>
    <div>
        <h1>router-3</h1>
        <button @click="back">返回</button>
    </div>
</template>

<style lang="less" scoped>
</style>
