<template>
    <BasicLayout >
        <!-- :customeStyle="{
        background:'transparent'
    }" -->
        <ComponentLayout>
            <div class="w-full pt-[3.375rem] pb-[6.75rem] z-10 overflow-hidden">
                <div class="absolute top-0 right-0 bottom-0 left-0 custome_bg" :style="`background-image: url(${bgImg})`">
                    <!-- <img :src="bgImg" class="w-full h-full"/> -->
                </div>
                <div class="w-full flex justify-center" v-show="selected!==2">
                    <span class="text-[#702B12] text-[2.625rem] z-10 font-semibold">{{t('setmenu.title')}}</span>
                </div>
                <div class="w-full flex justify-center flex-col items-center" v-show="selected==2">
                    <span class="text-[#702B12] text-[2.625rem] z-10 font-medium">{{t('setmenu.recharge_title')}}</span>
                    <span class="text-[#702B12] text-[1.375rem] z-10 font-medium pt-[0.75rem]">{{t('setmenu.recharge_subtitle')}}</span>
                </div>
                <div class="w-full flex justify-center mt-[2.25rem] mb-[2.8125rem]">
                    <div class="w-[27rem] h-[3rem] rounded-[3.125rem] bg-[white] z-10 flex">
                        <div style="transition: background-color 0.5s ease-in-out; /* 动画属性 */" :class="`flex items-center justify-center w-1/3 h-full rounded-[3.125rem] cursor-pointer text-[#191919] ${(selected!=1 && selected !=2)?'bg-[#702B12] text-[#FFFFFF] font-medium':'text-[#191919]'}` " @click="selected=0">
                            <span class="text-[1.1rem] pl-[0.5em] pr-[0.5rem] ellipsis-single unSelect">{{ t('setmenu.subtitle1') }}</span>
                        </div>
                        <div style="transition: background-color 0.5s ease-in-out; /* 动画属性 */" :class="`flex items-center justify-center w-1/3 h-full rounded-[3.125rem] cursor-pointer ${selected==1?'bg-[#702B12] text-[#FFFFFF] font-medium':'text-[#191919'}`" @click="selected=1">
                            <span class="text-[1.1rem] pl-[0.5em] pr-[0.5rem] ellipsis-single unSelect">{{ t('setmenu.subtitle2') }}</span>
                        </div>
                        <div style="transition: background-color 0.5s ease-in-out; /* 动画属性 */" :class="`flex items-center justify-center w-1/3 h-full rounded-[3.125rem] cursor-pointer ${selected==2?'bg-[#702B12] text-[#FFFFFF] font-medium':'text-[#191919'}`" @click="selected=2">
                            <span class="text-[1.1rem] pl-[0.5em] pr-[0.5rem] ellipsis-single unSelect" :title="t('setmenu.subtitle3')">{{ t('setmenu.subtitle3') }}</span>
                        </div>
                    </div>
                </div>
                <DySetmenu v-show="selected!=1 && selected !=2"/>
                <StaticSetmenu v-show="selected==1" showPadding />
                <Recharge v-show="selected==2"/>
                <!-- <QuestionComponent /> -->
            </div>
        </ComponentLayout>
    </BasicLayout>
</template>
<script setup lang="ts">
    import { onMounted, ref, watch } from 'vue';
    import BasicLayout from '../BasicLayout.vue';
    import { useRoute } from 'vue-router'
    import ComponentLayout from '../ComponentLayout.vue';
    import DySetmenu from './DySetmenu.vue';
    import StaticSetmenu from './StaticSetmenu.vue';
    import bgImg from '../../assets/recharge_bg3.svg'
    // import QuestionComponent from './QuestionComponent.vue';
    import Recharge from './Recharge.vue';
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const route = useRoute()
    const selected = ref(0)
    onMounted(() => {
        selected.value = Number(route.query.type) || 0

    })
    watch(
        () => route.query.type,
        (newId:any) => {
            console.log('newId', newId)
            selected.value = newId
        }
    )
</script>
<style scoped>
/* .custome_bg {
    background: 
    url("../../assets/recharge_bg3.png") top / 100% 30rem no-repeat,

    #FFFCF4 bottom/ 100% calc(100% - 30rem) ;
    
} */
 .custome_bg {
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("../../assets/recharge_bg3.svg?inline");
 }
</style>