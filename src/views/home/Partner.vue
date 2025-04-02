<template>
    <ComponentLayout>
       <div v-for="list in lists" class="flex gap-[0.5rem] pb-[6rem]">
            <span class="text-[1rem] text-[#191919]">{{list}}</span>
       </div>
    </ComponentLayout>
</template>
<script setup lang="ts">
    import { onMounted, ref } from 'vue'
    import { GetCooperativePartner } from '../../api/site'
    import ComponentLayout from '../ComponentLayout.vue'

    const lists = ref<any[]>([])
    onMounted(() => {
        loadPartner()
    })
    const loadPartner = () => {
        GetCooperativePartner()
        .then((res:any) => {
            if (res.code ) {
                lists.value = res.body
            }
        })
    }
</script>
