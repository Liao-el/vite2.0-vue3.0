<script setup lang="ts">
import Children from "../../components/children.vue"
let msg=ref("这是父传给子的数据")
</script>

<template>
    <div>
        <h2>父与子：</h2>
        <Children :fatherMsg="msg"></Children>
    </div>
</template>
