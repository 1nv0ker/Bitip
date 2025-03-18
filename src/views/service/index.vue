<template>
    <BasicLayout>
        <ComponentLayout >
            <div class=" absolute top-[-4rem] bottom-0 left-0 right-0 h-[31.5625rem]">
                <img src="../../assets/service/bg.png" class="w-full h-full" />
            </div>
            <div class="w-full z-10">
                <div class="w-full h-[31.5625rem] flex justify-between items-center">
                    <div class="flex flex-col justify-center gap-[2.625rem] max-w-[36.4375rem] z-50">
                        <span class="text-[#191919] text-[3.4375rem] font-bold ">{{ t('service.title1') }}</span>
                        <span class="text-[#666666] text-[1rem] font-medium">{{ t('service.content1') }}</span>
                    </div>
                    <div class="w-[19.375rem] h-[19.375rem] bg-[#01AA44]">
                        <img src="" />
                    </div>
                </div>
            </div>
        </ComponentLayout>
        <ComponentLayout classs="bg-[white]">
            <div class="w-full pt-[8.75rem] pb-[10rem]">
                <div class="flex justify-center">
                    <span class="text-[#191919] text-[2rem] font-medium">{{t('service.title2')}}</span>
                </div>
                <div class=" relative w-full h-[16.25rem] mt-[2.5rem] flex gap-x-[4rem] rounded-[1rem] pl-[2rem] pr-[2rem]" style="box-shadow: 0px 8px 16px 0px rgba(120,161,143,0.12);">
                    <div class="absolute top-0 left-0 right-0 bottom-0 h-[16.25rem]" style="background: linear-gradient( 145deg, #E6FFF0 0%, #FFFFFF 100%);transform: scaleX(-1);">

                    </div>
                    <div v-for="content in contents" class="flex flex-col z-10 justify-center">
                        <img :src="content.img" class="w-[4rem] h-[4rem]" />
                        <span class="pt-[1.5rem] text-[#191919] text-[1.75rem] font-bold">{{content.title}}</span>
                        <span class="pt-[1rem] text-[#666666] text-[1rem] text-wrap">{{ content.content }}</span>
                    </div>
                </div>
            </div>
        </ComponentLayout>
        <ComponentLayout>
            <div class=" absolute top-0 right-0 left-0 bottom-0 h-[43.1875rem] bg-[#F6FDFF]">

            </div>
            <div class="w-full h-[43.1875rem] pt-[5.625rem]">
                <div class="flex flex-col items-center ">
                    <span class="text-[#191919] text-[2rem] font-medium z-10">{{t('service.title3')}}</span>
                    <span class="text-[#666666] text-[1rem] font-medium pt-[0.75rem] z-10">{{t('service.subtitle3')}}</span>
                </div>
                <div class="w-full flex gap-[1rem] h-[22rem] mt-[2.625rem]">
                    <div class=" basis-[50%] rounded-[1rem] h-full z-10 flex flex-col pt-[3.25rem] pl-[3.25rem]" style="background: linear-gradient( 103deg, #E6FFF0 0%, rgba(255,255,255,0) 100%);">
                        <span class="text-[#191919] text-[2rem] font-medium">{{ t('service.title3_card1_title') }}</span>
                        <span class="text-[#666666] text-[1rem] font-medium pt-[1rem] max-w-[25rem]">{{ t('service.title3_card1_subtitle') }}</span>

                        <div class="pt-[2.875rem] flex flex-col gap-y-[1.25rem]">
                            <span class="text-[#666666] text-[1rem] font-medium">{{ t('service.title3_card1_content') }}</span>
                            <span class="text-[#666666] text-[1rem] font-medium">{{ t('service.title3_card1_content1') }}</span>
                            <span class="text-[#666666] text-[1rem] font-medium">{{ t('service.title3_card1_content2') }}</span>
                        </div>
                    </div>
                    <div class="basis-[25%] rounded-[1rem] z-10 h-full p-[2rem] flex-col flex" style="box-shadow: 0px 8px 16px 0px rgba(120,161,143,0.04);background: linear-gradient( 141deg, #67D1FF 0%, #4AD2B5 100%);">
                        <span class="text-[white] text-[1.75rem] font-medium">{{ t('service.title3_card2_title') }}</span>
                        <span class="text-[white] text-[1rem] font-medium pt-[1rem]">{{ t('service.title3_card2_subtitle') }}</span>
                    </div>
                    <div class="basis-[25%] rounded-[1rem] z-10 h-full p-[2rem] flex-col flex" style="box-shadow: 0px 8px 16px 0px rgba(120,161,143,0.04);background: linear-gradient( 136deg, #93A9FF 0%, #2078FC 100%);">
                        <span class="text-[white] text-[1.75rem] font-medium">{{ t('service.title3_card3_title') }}</span>
                        <span class="text-[white] text-[1rem] font-medium pt-[1rem]">{{ t('service.title3_card3_subtitle') }}</span>
                    </div>
                </div>
            </div>
        </ComponentLayout>
        <ComponentLayout>
            <div class="w-full h-[55.1875rem] pt-[4.875rem] pb-[7rem]">
                <div class="w-full h-full rounded-[1rem] border-[1px] border-[#EBEFF8]" style="box-shadow: 0px 8px 16px 0px rgba(120,161,143,0.12);">
                    <CompanyForm />
                </div>
            </div>
        </ComponentLayout>
    </BasicLayout>
</template>
<script setup lang="ts">
    import BasicLayout from '../BasicLayout.vue';
    import ComponentLayout from '../ComponentLayout.vue';
    import CompanyForm from './CompanyForm.vue';
    import handImg from '../../assets/hold.png'
    import { computed } from 'vue'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const contents = computed(() => {
        return [
            {
                title: t('service.title2_subtitle1'),
                content:t('service.title2_content1'),
                img: handImg
            },
            {
                title: t('service.title2_subtitle1'),
                content:t('service.title2_content1'),
                img: handImg
            },
            {
                title: t('service.title2_subtitle1'),
                content:t('service.title2_content1'),
                img: handImg
            }
        ]
    })
</script>