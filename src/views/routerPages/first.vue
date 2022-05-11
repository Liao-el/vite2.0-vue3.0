<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()  // 返回 router 实例。相当于在模板中使用 $router。必须在 setup() 中调用。
const route = useRoute()  // 返回当前路由地址。相当于在模板中使用 $route。必须在 setup() 中调用。
const getParams = () => {
    console.log("router主页面：", route, router)
}
getParams()

</script>

<template>
    <div>
        <h1>router-1 =========== router:https://router.vuejs.org/</h1>

        <router-view></router-view>
        <!-- <router-view v-slot="{ Component, route }">
            <transition :name="route.meta.transition || 'fade'">
                <component :is="Component" />
            </transition>
        </router-view> -->

    </div>

</template>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
