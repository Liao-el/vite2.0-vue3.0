<script setup lang="ts">
    let msg = ref('computed数据');

    // 简单写法
    // let change=computed(()=>{
    //     return msg.value.slice(1,)
    // })

    // 高级写法
    let result=ref("还没改")
    let change=computed({
        get(){
            return msg.value.slice(1,)
        },
        set(){
            return result.value="被改了"
        }
    })
    const setChange=()=>{
        change.value="啊啊啊啊"
    }
</script>

<template>
    <div>
        <h2>computed：</h2>
        <input type="text" v-model="msg">
        <button @click="setChange">改变change</button>
        <div>被计算的结果：{{ change }} —— {{result}}</div>
    </div>
</template>
