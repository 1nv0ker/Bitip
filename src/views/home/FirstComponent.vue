<template>
    <div class="w-full pt-[5.125rem] pb-[4.8rem] bg-[#C3FF79]">
        <div class="flex justify-center">
            <div class="flex pr-[1rem]">
                <img src="../../assets/star_2.png" class="w-[1.375rem] h-[1.375rem]"/>
                <span class="pl-[0.5rem] text-[#191919] text-[1rem] font-medium">Trustpilot</span>
            </div>
            <div class="flex pl-[1rem]">
                <img src="../../assets/star_1.png" class="w-[1.375rem] h-[1.375rem]"/>
                <span  class="pl-[0.5rem] text-[#191919] text-[1rem] font-medium">G2</span>
            </div>
        </div>
        <div class="flex justify-center items-center mt-[1.5rem]">
            <span class="text-[#191919] text-[3.43rem] font-bold">{{t('first.title')}}</span>
        </div>
        <div class="flex justify-center items-center">
            <span class="text-[#191919] text-[3.43rem] font-bold">{{t('first.subtitle')}}</span>
        </div>
        <div class="flex justify-center items-center mt-[2.5rem]">
            <div class="flex items-center">
                <img src="../../assets/dome.png" class="w-[1.5rem] h-[1.5rem]" />
                <span class="text-[#191919] text-[1.12rem] font-medium pl-[0.5rem]">{{t('first.item1')}}</span>
            </div>
            <div class="flex items-center pl-[5.3rem]">
                <img src="../../assets/dome.png" class="w-[1.5rem] h-[1.5rem]" />
                <span class="text-[#191919] text-[1.12rem] font-medium pl-[0.5rem]">{{t('first.item2')}}</span>
            </div>
            <div class="flex items-center pl-[5.3rem]">
                <img src="../../assets/dome.png" class="w-[1.5rem] h-[1.5rem]" />
                <span class="text-[#191919] text-[1.12rem] font-medium pl-[0.5rem]">{{t('first.item3')}}</span>
            </div>
            <div class="flex items-center pl-[5.3rem]">
                <img src="../../assets/dome.png" class="w-[1.5rem] h-[1.5rem]" />
                <span class="text-[#191919] text-[1.12rem] font-medium pl-[0.5rem]">{{t('first.item4')}}</span>
            </div>
            
        </div>
        <div class="flex justify-center items-center mt-[3.25rem]">
            <RippleButton  class="w-[13.25rem] h-[3.25rem] rounded-[1.75rem] bg-[#01AA44] text-[1.25rem] font-medium" :text="t('first.freeUse')" @btn-click="OnFreeUse" />
            <div class="w-[13.25rem] h-[3.25rem] rounded-[1.75rem] flex items-center justify-center cursor-pointer border-[1px] border-[#191919] ml-[2rem]" @click="onContact">
                <img src="../../assets/contact.png" class="w-[1.5rem] h-1.5rem" />
                <span class="pl-[0.5rem] text-[#191919] text-[1.25rem] font-medium">{{t('first.contact')}}</span>
            </div>
        </div>
        <div class="flex justify-center items-center overflow-x-auto mt-[4.25rem] pl-[2rem] pr-[2rem] RectItems gap-[1rem]">
            <FirstRectComponent class=" flex-shrink-0" />
            <FirstRectComponent class=" flex-shrink-0" />
            <FirstRectComponent class="flex-shrink-0" />
            <FirstRectComponent class=" flex-shrink-0" />
            <FirstRectComponent class=" flex-shrink-0" />
        </div>
    </div>
</template>
<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    import RippleButton from '../../components/RippleButton.vue'
    import FirstRectComponent from './FirstRectComponent.vue'
    // import { ref } from 'vue'
    const { t } = useI18n()
    const OnFreeUse = () => {
        console.log('OnFreeUse')
    }
    const onContact = () => {
        
    }
</script>
<style scoped>
/* WebKit 浏览器 (Chrome/Safari) 隐藏滚动条 */
.RectItems::-webkit-scrollbar {
  display: none; /* 完全隐藏滚动条 */
  width: 0;      /* 移除滚动条占位空间 */
  height: 0;
}
</style>