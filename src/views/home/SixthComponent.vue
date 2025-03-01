<template>
    <div ref="sixthRef" class="flex justify-center pt-[2rem] pb-[11rem] w-full overflow-hidden">
        <div class="max-w-[99vw] w-[auto] overflow-hidden bg-[#01AA44] rounded-[2rem] pl-[10rem] pr-[10rem]">
            <div class="flex justify-center pt-[7rem]">
                <span class="text-[#FFFFFF] text-[3.5rem] font-bold">{{t('sixth.title')}}</span>
            </div>
            <div class="flex justify-center pt-[0.75rem]">
                <span class="text-[#FFFFFF] text-[1.625rem] font-light opacity-[0.7]">{{t('sixth.content')}}</span>
            </div>
            <div class="flex justify-center pt-[2.75rem] pb-[5rem] gap-[2rem]">
                <RippleButton class="h-[3.625rem] w-[14.625rem] rounded-[4.18rem] bg-[#191919] text-[white] text-[1.25rem] 
                font-medium hover:text-[#191919] border-[#191919] border-[1px]" :text="t('sixth.button1')">
                </RippleButton>

                <div class="h-[3.625rem] w-[14.625rem] rounded-[4.18rem]  text-[white] text-[1.25rem] 
                font-medium border-[white] border-[1px] flex justify-center items-center cursor-pointer">
                    {{t('sixth.button2')}}
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    import { ref } from 'vue'
    import RippleButton from '../../components/RippleButton.vue'
    const { t } = useI18n()
    const sixthRef = ref(null)
    defineExpose({
        sixthRef: sixthRef
    })
</script>