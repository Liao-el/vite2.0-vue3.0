<!-- <script setup lang="ts"></script> -->
<script>
    export default {
        name: 'Home',
        data() {
            return {
                homeData: '原始写法',
            };
        },
    };
</script>

<template>
    <h1>home</h1>
    {{ homeData }}
</template>

<style lang="less" scoped>
    h1 {
        color: red;
    }
</style>
