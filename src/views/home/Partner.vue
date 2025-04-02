<template>
    <ComponentLayout>
       <div class="w-full flex gap-[1rem] pb-[3rem]">
            <div v-for="list in lists" class="flex gap-[1rem]">
                <span class="text-[1.2rem] hover:text-[#01AA44] cursor-pointer text-[#191919]" @click="onLink(list.partnerUrl)">{{list.partnerName}}</span>
            </div>
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
    const onLink = (url:string) => {
        window.open(url, '__blank')
    }
</script>
