<script setup lang="ts">
import A from "../../components/slotA.vue"
import B from "../../components/slotB.vue"

let ani=ref("yyy")
</script>

<template>
    <div>
        <h2>插槽：</h2>
        <A>
            <template v-slot:xxx>这是xxxx</template>
            <!-- <template #[ani]>这是yyyy</template> -->
            <!-- 简写 -->
            <template #zzz>这是zzzz</template>
        </A>

        <B>
            <!-- <template v-slot="{todata}"> -->
            <template #default="{todata}">
                {{todata.name}}
            </template>
        </B>
        <hr />
            <h2>动态插槽——父template可以动态选择slot：</h2>
        <A>
            <template #[ani]>这是yyyy</template>
        </A>
        
    </div>
</template>
