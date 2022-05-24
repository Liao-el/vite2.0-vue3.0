<script setup lang="ts">
    import { useStore } from 'vuex';
    // import { key } from '../../store/index';
    // import { useStore } from '../../store/indexVuex';

    const store = useStore();
    console.log('store', store);
</script>

<template>
    <div>
        <h1>store-1: store.state.count={{ store.state.count }}</h1>

        <router-view></router-view>

        <div>
            vuex:https://vuex.vuejs.org/zh/
            <br />
            ts支持:https://vuex.vuejs.org/zh/guide/typescript-support.html
        </div>
    </div>
</template>
