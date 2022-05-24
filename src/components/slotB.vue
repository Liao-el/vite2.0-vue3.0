<script setup lang="ts">
const list = reactive<any[]>([
    {id:1,name:"aa"},
    {id:2,name:"bb"},
    {id:3,name:"cc"},
    ])

</script>

<template>
    <div>
        <h3>作用域插槽可以传递数据</h3> 
        <div v-for="item in list" :key="item.id">
            <slot :todata="item"></slot>
        </div>
        
    </div>
</template>
