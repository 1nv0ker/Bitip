<template>
    <BasicLayout>
        <ComponentLayout>
            <div class=" absolute top-[-4rem] right-0 bottom-0 left-0 z--1 bg-[#F6FDFF]">
               
                
            </div>
            <div class="pt-[8.75rem] pb-[8.75rem] flex gap-[12.5rem] items-center">
                <div class="flex flex-col z-50">
                    <span class=" max-w-[37.5rem] text-[#191919] font-medium text-[3.375rem] ">{{ t('safety.title') }}</span>
                    <span class="pt-[2rem] max-w-[45.0625rem] text-[#666666] text-[1.25rem] ">{{ t('safety.subtitle') }}</span>
                </div>
                <div class="w-[21.125rem] h-[22.5rem] z-50">
                    <img src="../../assets/safety/card_bg.png" class="w-full h-full" />
                </div>
            </div>
        </ComponentLayout>
        <ComponentLayout class="bg-[white]">
            <div class=" pt-[8.75rem] pb-[8.75rem]  flex flex-col items-center text-center">
                <span class="text-[#191919] text-[2rem] font-medium">{{t('safety.title2')}}</span>
                <span class="text-[#666666] text-[1rem] font-medium mt-[1rem] max-w-[49rem]">{{t('safety.subtitle2')}}</span>
                <div class="mt-[2.25rem] flex w-full justify-between gap-[1.5rem]">
                    <div v-for="item in items" 
                    :style="`width:${item.width};background: linear-gradient( 145deg, #E6FFF0 0%, #FFFFFF 100%);box-shadow: 0px 8px 16px 0px rgba(120,161,143,0.12);`"
                    class="h-[17.125rem] rounded-[1rem] relative
                    flex flex-col gap-[1.5rem] items-center justify-center pl-[1.5rem] pr-[1.5rem]" 
                    >
                        
                        <div class="w-[3rem] h-[3rem]  z-10" >
                            <img :src="item.img" class="w-full h-full"/>
                        </div>
                        <span class="text-[1.375rem] font-bold text-[#191919] z-10">{{item.title}}</span>
                        <span class="max-w-[18.75rem] text-left text-[#191919]  z-10 text-[1rem] font-normal" v-if="!item.special">{{item.subtitle}}</span>
                        <span class="w-[37.5rem] text-center text-[#191919] z-10 text-[1rem] font-normal" v-else>{{item.subtitle}}</span>
                     
                    </div>
                </div>
            </div>
            
        </ComponentLayout>
        <ComponentLayout class="bg-[#F6FDFF]">
            <div class="pt-[8rem] pb-[10.18rem] flex flex-col text-center items-center ">
                <span class="text-[2rem] text-[#191919] font-medium">{{t('safety.title3')}}</span>
                <span class="text-[1rem] text-[#666666] font-medium pt-[0.75rem]">{{t('safety.subtitle3')}}</span>
                <div class="pt-[2.75rem] flex gap-[1rem] justify-between w-full">
                    <div v-for="item in item2" class="bg-[white] rounded-[1rem] h-[14.625rem] w-[39.5rem] p-[0.625rem] gap-[3.25rem] flex" 
                    style="box-shadow: 0px 8px 16px 0px rgba(120,161,143,0.12);">
                        <div class="w-[16.1875rem] h-full  flex items-center justify-center">
                            <img :src="item.img" class="w-[12.1875rem] h-[12.375rem]" />
                        </div>
                        <div class=" flex flex-col items-start justify-center gap-[0.7rem]">
                            <div class="w-[4.5rem] h-[1.75rem]">
                                <img src="../../assets/safety/auth.png"/>
                            </div>
                            <span class="text-[#191919] font-medium text-[1.75rem]">{{ item.title }}</span>
                            <span class="text-[#191919] font-medium text-[1.25rem]">{{ item.subtitle }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </ComponentLayout>
    </BasicLayout>
</template>
<script setup lang="ts">
    import BasicLayout from '../BasicLayout.vue';
    import ComponentLayout from '../ComponentLayout.vue';
    import { computed } from 'vue'
    import titleImg from '../../assets/safety/title.png'
    import iso1Img from '../../assets/safety/iso1.png'
    import iso2Img from '../../assets/safety/iso2.png'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const items = computed(() => {
        return [
            {
                title: t('safety.title2_item1_title'),
                subtitle: t('safety.title2_item1_content'),
                special: false,
                width:'18.875rem',
                img :titleImg
            },
            {
                title: t('safety.title2_item2_title'),
                subtitle: t('safety.title2_item2_content'),
                special: true,//最大宽度不一致,
                width:'39.0625rem',
                img :titleImg
            },
            {
                title: t('safety.title2_item3_title'),
                subtitle: t('safety.title2_item3_content'),
                special: false,
                width:'18.875rem',
                img :titleImg
            },
        ]
    })
    const item2 = computed(() => {
        return [
            {
                title:t('safety.title3_item1_title1'),
                subtitle: t('safety.title3_item1_content'),
                img: iso1Img
            },
            {
                title:t('safety.title3_item2_title2'),
                subtitle: t('safety.title3_item2_content'),
                img: iso2Img
            }
        ]
    })
</script>