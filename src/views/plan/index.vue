<template>
    <BasicLayout >
        <ComponentLayout >
            <div class="w-full h-[51.625rem] overflow-hidden pt-[6rem] ">
                <div class=" absolute top-0 right-0 bottom-0 left-0 plan_bg" :style="`background-image: url(${bg})`">
                    
                </div>
                <div class="flex items-center flex-col gap-[2rem] ">
                    <span class="text-[#191919] text-center z-20 text-[4.125rem] font-bold max-w-[74.124rem]">{{t('plan.title')}}</span>
                    <RippleButton 
                    @click="onToPlan"
                    class="w-[13.25rem] h-[3.25rem] text-[#FFFFFF] rounded-[1.75rem] bg-[#01AA44] z-20 flex justify-center items-center hover:text-[#191919]" :text="t('plan.button')">
                        <!-- <span>{{t('plan.button')}}</span> -->
                    </RippleButton>
                </div>
                <div class="mt-[1.25rem] flex gap-[1rem] justify-center h-[23.5625rem] z-20">
                    <div class="w-[19.25rem] h-full rounded-[2.25rem] flex flex-col bg-[#C7D8B6] p-[1.5rem]  z-20 gap-[2rem]">
                        <div>
                            <span class="text-[#687D53] text-[1.25rem] bitip_text">{{t('plan.item1_content1')}}</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-[#191919] bitip_text text-[3.9375rem] font-bold">{{t('plan.item1_content2')}}</span>
                            <span class="text-[#687D53] bitip_text text-[1.25rem] font-medium">{{t('plan.item1_content3')}}</span>
                        </div>
                        <div class="flex flex-col w-full h-[5.75rem] rounded-[1.625rem] bg-[rgba(255,255,255,0.6)] justify-center items-center text-[#687D53] text-[1.25rem] font-medium">
                            <span class="bitip_text">{{t('plan.item1_content4')}}</span>
                            <span class="bitip_text">{{t('plan.item1_content5')}}</span>
                        </div>
                    </div>
                    <div class="w-[12.5rem] h-full flex flex-col justify-end  z-20 gap-[2rem]">
                        <div class="pl-[3rem]">
                            <!-- <div class="w-[1rem] h-[1rem] bg-[#01AA44]">

                            </div> -->
                        </div>
                        <div class="w-full h-[15.1875rem] bg-[#EEEEEE] rounded-[2.25rem] flex flex-col justify-center items-center gap-[0.5rem]">
                            <div class="flex flex-col text-[#191919] text-[1.75rem] font-bold">
                                <span>{{t('plan.item2_content1')}}</span>
                                <span>{{t('plan.item2_content2')}}</span>
                            </div>
                            <span class="text-[#8E8E8E] text-[1rem] font-medium">{{t('plan.item2_content3')}}</span>
                        </div>
                    </div>
                    <div class="w-[12.625rem] h-full flex flex-col justify-end gap-[0.5rem] z-20">
                        <div class="w-full h-[7rem] ">
                            <img src="../../assets/plan/card.png" class="w-full h-full"/>
                        </div>
                        <div class="w-full h-[7rem] bg-[#C7D8B6] rounded-[2.25rem] flex justify-center items-center">
                            <span class="text-[#687D53] text-[1.25rem] font-medium">{{t('plan.item3_content')}}</span>
                        </div>
                    </div>
                    <div class="w-[12.5rem] h-full flex items-end z-20">
                        <div class="w-full rounded-[2.25rem] h-[15.125rem] bg-[#DAFF8D] flex flex-col items-center justify-center">
                            <span class="text-[#191919] text-[2.75rem] font-bold">10%</span>
                            <span class="text-[#48640E] text-[1.25rem] font-medium">{{t('plan.item4_content')}}</span>
                        </div>
                    </div>
                    <div class="w-[19.25rem] h-full rounded-[2.25rem] bg-[#4AD3B5] p-[2rem]  z-20 flex flex-col gap-[0.25rem]  justify-center">
                        <div class="flex text-[#191919] items-center gap-[0.75rem]">
                            <span class="font-bold text-[3.9375rem]">10%</span>
                            <span class="text-[1.4375rem] font-bold">{{t('plan.item5_content1')}}</span>
                        </div>
                        <span class="text-[#0D5545] text-[1.25rem]">{{t('plan.item5_content2')}}</span>
                    </div>
                </div>
            </div>
        </ComponentLayout>
        <ComponentLayout :bg="'white'">
            <div class="w-full h-[48.5rem] pt-[6rem]">
                <div class="w-full flex flex-col gap-[0.75rem] items-center">
                    <span class="text-[#191919] text-[2rem] font-medium">{{t('plan.title2')}}</span>
                    <span class="text-[#666666] text-[1rem] font-medium">{{t('plan.title2_subtitle')}}</span>
                </div>
                <div class="w-full mt-[8.25rem] relative flex gap-[1rem] justify-center">
                    <!-- <div class="w-1 h-1 absolute bg-[red] left-[200px]"></div> -->
                    <!-- <svg width="400" height="200" class=" absolute left-[200px] bg-[red] top-[-200px]">

                        <path 
                            d="M0 200 Q400 10 0 400" 
                            stroke="#2c3e50" 
                            fill="none"
                            stroke-width="2"
                        />

                        <circle cx="200" cy="50" r="4" fill="#e74c3c"/>
                    </svg> -->
                    <img src="../../assets/plan/test.jpg " class="w-[16rem] h-[5rem] absolute top-[-5rem] left-[11.5rem]"/>
                    <img src="../../assets/plan/test2.jpg " class="w-[18rem] h-[5rem] absolute top-[-5rem] right-[6.5rem]"/>
                    <img src="../../assets/plan/test3.jpg " class="w-[12.125rem] h-[3.625rem] absolute bottom-[-3.625rem] left-[33.5rem]"/>
                    <div class="w-[19.25rem] h-[19.5rem] 
                    flex flex-col gap-[1.5rem]
                    p-[1.25rem]
                    rounded-[1rem] border-[1px] border-[#EBEFF8]" style="box-shadow: 0px 8px 16px 0px rgba(120,161,143,0.12);" v-for="item in items">
                        <div class="w-full h-[10.125rem]">
                            <img :src="item.img" class="w-[16.75rem] h-[10.1875rem]"/>
                        </div>
                        <span class="text-[#191919] text-[1.125rem] font-bold">{{item.title}}</span>
                        <span class="text-[#666666] text-[1rem]">{{item.subtitle}}</span>
                    </div>
                </div>
            </div>
        </ComponentLayout>
    </BasicLayout>
</template>
<script setup lang="ts">
    import RippleButton from '../../components/RippleButton.vue';
    import { useRouter } from 'vue-router'
    import BasicLayout from '../BasicLayout.vue';
    import ComponentLayout from '../ComponentLayout.vue';
    import img1 from '../../assets/plan/1.svg'
    import img2 from '../../assets/plan/2.svg'
    import img3 from '../../assets/plan/3.svg'
    import img4 from '../../assets/plan/4.svg'
    import bg from '../../assets/plan/bg.svg'
    import { computed } from 'vue'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const router = useRouter()
    const onToPlan = () => {
        router.push({name:'promotionrebate'})
    }
    const items = computed(() => {
        return [
            {
                title:t('plan.step')+'1',
                subtitle:t('plan.step1'),
                img:img1
            },
            {
                title:t('plan.step')+'2',
                subtitle:t('plan.step2'),
                img:img2
            },
            {
                title:t('plan.step')+'3',
                subtitle:t('plan.step3'),
                img:img3
            },
            {
                title:t('plan.step')+'4',
                subtitle:t('plan.step4'),
                img:img4
            }
        ]
    })
</script>
<style  scoped>
    .plan_bg {
        
        background-size: cover; /* 关键属性 */

        background-repeat: no-repeat;
    }
</style>