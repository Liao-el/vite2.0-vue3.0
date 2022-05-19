<!-- vue2.x -->
<!-- <script type="text/javascript">
    let msg='vue2.x == watch数据'
    watch:{
        msg:{
            handle(newVal, oldVal){
                console.log(newVal, oldVal);
            },
            immediate:true,
            deep:true,
        }
    }
</script> -->

<!-- vue3.x -->
<script setup lang="ts">
    let msg = ref('vue3.x == watch - msg 数据');
    let msg2 = ref('vue3.x == watch - msg2 数据');

    // 单独监听
    // watch(msg, (newVal, oldVal) => {
    //     console.log(newVal, oldVal);
    // },{
    //     immediate:true,
    // });
    // watch(msg2, (newVal, oldVal) => {
    //     console.log(newVal, oldVal);
    // },{
    //     immediate:true,
    // });

    // 多个一起监听
    watch(
        [msg, msg2],
        (newVal, oldVal) => {
            console.log(newVal, oldVal);
        },
        {
            immediate: true,
        }
    );

    let obj = reactive({
        a: 'aa',
        arr: [1, 2, 3],
    });
    watch(
        obj,
        (newVal, oldVal) => {
            console.log(newVal, oldVal);
        }
    );
    // 对象的key值
    watch(
        () => obj.arr,
        (newVal, oldVal) => {
            console.log(newVal, oldVal);
        }
    );
</script>

<template>
    <div>
        <h2>watch：</h2>
        <input type="text" v-model="msg" />
        <input type="text" v-model="msg2" />
        <input type="text" v-model="obj.a" />
        <input type="text" v-model="obj.arr" />
    </div>
</template>
