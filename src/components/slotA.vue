<script setup lang="ts">

</script>

<template>
    <div>
        <h3>匿名插槽没有name，会把slot内容全部展示出来，不会进行判断</h3> 
        <h3>这是具名插槽 A-slot</h3> 
        <header>
            <div>头部</div>
            <slot name="xxx"></slot>
            <slot name="yyy"></slot>
        </header>
        <footer>
            <div>底部</div>
            <slot name="zzz"></slot>
        </footer>

        
    </div>
</template>
