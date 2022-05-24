<script setup lang="ts">
defineProps({
    fatherMsg:{
        type:String,
        default:"子默认的值"
    }
})
const emit=defineEmits<{
    (e:'fn',str:string):void
}>()
const changeFather=()=>{
    emit('fn','子传父')
}
</script>

<template>
    <div>
        <h3>这是子组件</h3> 
        <div>{{fatherMsg}}</div>
        <button @click="changeFather">子按钮</button>
        
    </div>
</template>
