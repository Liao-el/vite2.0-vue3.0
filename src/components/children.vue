<script setup lang="ts">
defineProps({
    fatherMsg:{
        type:String,
        default:"子默认的值"
    }
})
</script>

<template>
    <div>
        <h3>这是子组件</h3> 
        {{fatherMsg}}
    </div>
</template>
