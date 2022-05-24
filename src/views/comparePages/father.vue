<script setup lang="ts">
import Children from "../../components/children.vue"
let msg=ref("这是父传给子的数据")

const getChildren=(str)=>{
    msg.value=str
}
</script>

<template>
    <div>
        <h2>父与子：</h2>
        <Children :fatherMsg="msg" @fn="getChildren"></Children>
    </div>
</template>
