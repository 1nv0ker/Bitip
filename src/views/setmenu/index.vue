<template>
    <BasicLayout>
        <ComponentLayout :bg="'#F8CFA2'">
            <div class="w-full pt-[3.375rem] pb-[6.75rem] z-10">
                <div class="w-full flex justify-center">
                    <span class="text-[#702B12] text-[2.625rem] z-10 font-semibold">{{t('setmenu.title')}}</span>
                </div>
                <div class="w-full flex justify-center mt-[2.25rem]">
                    <div class="w-[27rem] h-[3rem] rounded-[3.125rem] bg-[white] z-10 flex">
                        <div :class="`flex items-center justify-center w-1/3 h-full rounded-[3.125rem] cursor-pointer text-[#191919] ${selected==0?'bg-[#702B12] text-[#FFFFFF] font-medium':'text-[#191919]'}` " @click="selected=0">
                            <span class="text-[1.1rem]">{{ t('setmenu.subtitle1') }}</span>
                        </div>
                        <div :class="`flex items-center justify-center w-1/3 h-full rounded-[3.125rem] cursor-pointer ${selected==1?'bg-[#702B12] text-[#FFFFFF] font-medium':'text-[#191919'}`" @click="selected=1">
                            <span class="text-[1.1rem]">{{ t('setmenu.subtitle2') }}</span>
                        </div>
                        <div :class="`flex items-center justify-center w-1/3 h-full rounded-[3.125rem] cursor-pointer ${selected==2?'bg-[#702B12] text-[#FFFFFF] font-medium':'text-[#191919'}`" @click="selected=2">
                            <span class="text-[1.1rem]">{{ t('setmenu.subtitle3') }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </ComponentLayout>
    </BasicLayout>
</template>
<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import BasicLayout from '../BasicLayout.vue';
    import { useRoute } from 'vue-router'
    import ComponentLayout from '../ComponentLayout.vue';
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const route = useRoute()
    const selected = ref(0)
    onMounted(() => {
        selected.value = Number(route.query.type) || 0
    })
    
</script>