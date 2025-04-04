<template>
    <BasicLayout>
        <ComponentLayout :customClass="'service_bg'">
            <!-- <div class=" absolute top-[0] bottom-0 left-0 right-0 ">
                <img :src="bg" class="w-full h-full" />
            </div> -->
            <div class="w-full ">
                <div class="w-full h-[31.5625rem] flex justify-between items-center">
                    <div class="flex flex-col justify-center gap-[2.625rem] max-w-[36.4375rem] ">
                        <span class="text-[#191919] text-[3.4375rem] font-bold ">{{ t('service.title1') }}</span>
                        <span class="text-[#666666] text-[1rem] font-medium">{{ t('service.content1') }}</span>
                    </div>
                    <!-- <div class="w-[19.375rem] h-[19.375rem] ">
                        <img src="" />
                    </div> -->
                </div>
            </div>
        </ComponentLayout>
        <ComponentLayout classs="bg-[white]">
            <div class="w-full pt-[8rem] pb-[10rem]">
                <div class="flex justify-center">
                    <span class="text-[#191919] text-[2rem] font-medium">{{t('service.title2')}}</span>
                </div>
                <div class=" relative w-full h-[17.125rem] mt-[2.5rem] flex rounded-[1rem] pt-[2.25rem] pl-[1.75rem] pr-[1.75rem] justify-between" style="box-shadow: 0px 8px 16px 0px rgba(120,161,143,0.12);">
                    <div class="absolute top-0 left-0 right-0 bottom-0 h-full" style="background: linear-gradient( 145deg, #E6FFF0 0%, #FFFFFF 100%);transform: scaleX(-1);">

                    </div>
                    <div v-for="content in contents" class="flex flex-col z-10 w-[1/3] h-[17.125rem] ">
                        <img :src="content.img" class="w-[4rem] h-[4rem]" />
                        <span class="pt-[1.5rem] text-[#191919] text-[1.75rem] font-medium ">{{content.title}}</span>
                        <span class="pt-[1rem] text-[#666666] max-w-[25rem] text-[1rem] text-wrap">{{ content.content }}</span>
                    </div>
                </div>
            </div>
        </ComponentLayout>
        <ComponentLayout :bg="'#F2FFF7'">
            <div class="w-full pb-[10rem] pt-[9.25rem]">
                <div class="w-full flex justify-center">
                    <span class="text-[#191919] text-[2rem] font-medium">{{t('service.title3')}}</span>
                </div>
                <div class="w-full mt-[5.375rem] flex gap-[2.25rem]">
                    <div v-for="(item, index) in itmes" class="w-[19.25rem]">
                        <div class="w-full flex items-center gap-[3rem]">
                            <img :src="item.img" class="w-[4rem] h-[4rem]" />
                            <div class="arrow-line w-[10.75rem] h-[2px] relative bg-[#000000]" v-if="index!=(itmes.length-1)">

                            </div>
                        </div>
                        <div class="pt-[1.25rem]">
                            <span class="text-[#191919] text-[1.75rem] font-semibold">{{item.title}}</span>
                        </div>
                        <div class="pt-[1rem]">
                            <span class="text-[#666666] text-[1rem] max-w-[18.0625rem]">{{item.content}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class=" absolute top-0 right-0 left-0 bottom-0 h-[43.1875rem] bg-[#F6FDFF]">

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
            </div> -->
        </ComponentLayout>
        <ComponentLayout :bg="'#white'">
            <div class="w-full pt-[8.625rem] pb-[9.625rem]">
                <div class="w-full flex justify-center items-center">
                    <span class="text-[#191919] text-[2rem] font-bold">{{t('service.title4')}}</span>
                </div>
                <div class="w-full mt-[2.875rem] flex flex-wrap gap-[1rem]">
                    <div v-for="company in companys" class="bg-[#FAFAFA] border-[#EBEFF8] border-[1px] rounded-[1.5rem] flex justify-center items-center bitip_logo">
                        <img :src="company.img" :style="company.style"/>
                    </div>
                </div>
                <!-- <div class="w-full h-full rounded-[1rem] border-[1px] border-[#EBEFF8]" style="box-shadow: 0px 8px 16px 0px rgba(120,161,143,0.12);">
                    <CompanyForm />
                </div> -->
            </div>
        </ComponentLayout>
    </BasicLayout>
</template>
<script setup lang="ts">
    import BasicLayout from '../BasicLayout.vue';
    import ComponentLayout from '../ComponentLayout.vue';
    // import CompanyForm from './CompanyForm.vue';
    import handImg from '../../assets/hold.svg?inline'
    import item2Img from '../../assets/service/item.svg?inline'
    import item3Img from '../../assets/service/item2.svg?inline'
    import image1 from '../../assets/service/1.svg?inline'
    import image2 from '../../assets/service/2.svg?inline'
    import image3 from '../../assets/service/3.svg?inline'
    import image4 from '../../assets/service/4.svg?inline'
    import company1 from '../../assets/service/huawei.svg?inline'
    import company2 from '../../assets/service/tencent.svg?inline'
    import company3 from '../../assets/service/JD.svg?inline'
    import company4 from '../../assets/service/pdd.svg?inline?inline'
    import company5 from '../../assets/service/mi.svg'
    import company6 from '../../assets/service/bd.svg?inline'
    import company7 from '../../assets/service/ali.svg?inline'
    import company8 from '../../assets/service/meituan.svg?inline'
    // import bg from '../../assets/service/bg.svg'
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
                title: t('service.title2_subtitle2'),
                content:t('service.title2_content2'),
                img: item2Img
            },
            {
                title: t('service.title2_subtitle3'),
                content:t('service.title2_content3'),
                img: item3Img
            }
        ]
    })
    const itmes = computed(() => {
        return [
            {
                title: t('service.title3_title1'),
                content:t('service.title3_title1_content'),
                img: image1
            },
            {
                title: t('service.title3_title2'),
                content:t('service.title3_title2_content'),
                img: image2
            },
            {
                title: t('service.title3_title3'),
                content:t('service.title3_title3_content'),
                img: image3
            },
            {
                title: t('service.title3_title4'),
                content:t('service.title3_title4_content'),
                img: image4
            }
        ]
    })
    const companys =  computed(() => {
        return [
            {
                img:company1,
                style:{
                    width:'17.75rem',
                    height:'4.125rem'
                }
            },
            {
                img:company2,
                style:{
                    width:'17.75rem',
                    height:'4.125rem'
                }
            },
            {
                img:company3,
                style:{
                    width:'17.75rem',
                    height:'6.125'
                }
            },
            {
                img:company4,
                style:{
                    width:'17.75rem',
                    height:'5.5rem'
                }
            },
            {
                img:company5,
                style:{
                    width:'17.75rem',
                    height:'6.25rem'
                }
            },
            {
                img:company6,
                style:{
                    width:'17.75rem',
                    height:'5.5rem'
                }
            },
            {
                img:company7,
                style:{
                    width:'17.75rem',
                    height:'6.25rem'
                }
            },
            {
                img:company8,
                style:{
                    width:'17.75rem',
                    height:'4.875rem'
                }
            }
        ]
    })
</script>
<style  scoped>
    /* 右侧箭头 */
.arrow-line::after {
    content: '';
    position: absolute;
    right: 0px;
    top: 50%;
    width: 5px;
    height: 5px;
    border-top: 1px solid #333;
    border-right: 1px solid #333;
    transform: translateY(-50%) rotate(45deg);
    /* background-repeat: no-repeat;
    background-size: cover; */
}
</style>
