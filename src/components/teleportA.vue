<script setup lang="ts">

</script>

<template>
    <div>
        <h3>teleport子组件</h3> 
        <teleport to="body">
            <div>这是传送 </div>
            {{'<teleport to="传送到父的某个元素上">'}}
        </teleport>

        
    </div>
</template>
