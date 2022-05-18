<!-- <script setup lang="ts"></script> -->
<script>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()  // 返回 router 实例。相当于在模板中使用 $router。必须在 setup() 中调用。
const route = useRoute()  // 返回当前路由地址。相当于在模板中使用 $route。必须在 setup() 中调用
    import { reactive } from 'vue';
    export default {
        name: 'Home',
        data() {
            return {
                homeData: '原始写法',
            };
        },
        setup() {
            let setupObj = reactive({
                aa: 1,
                bb: 2,
            });
            let setupBtn = () => {
                alert('setup-btn');
                setupObj.cc = 'reactive动态改变对象添加getter、setter';
                console.log(setupObj);
            };

            return { setupObj, setupBtn };
        },
    };
</script>

<template>
    <div>
        <h1>home</h1>
        <div>{{ homeData }}</div>
        <div>
            setup写法：{{ setupObj }}
            <button @click="setupBtn">setup按钮</button>
        </div>

        <router-view></router-view>
    </div>
</template>

<style lang="less" scoped>
    h1 {
        color: red;
    }
</style>
