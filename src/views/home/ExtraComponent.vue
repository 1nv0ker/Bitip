<template>
    <ComponentLayout ref="extraRef" class="pt-[2.5rem] pb-[5.625rem] bg-[white]">
        <div class="w-full h-full">
            <div class="flex justify-center">
                <span class="text-[#191919] text-[3.25rem] font-bold">{{t('extra.title')}}</span>
            </div>
            <div class="mt-[3.25rem] w-full flex justify-between flex-wrap gap-y-[1rem]">
                <div v-for="content in contents" :class="`flex-${content.col} border-[1px] hover_bg border-[#EBEFF8] rounded-[1rem]`" :style="content.basic">
                    <div v-if="content.titleImg" class="flex justify-between ">
                        <div class="flex flex-col gap-[0.625rem] justify-center pb-[2.5rem]">
                            <img :src="content.titleImg" class=" w-[3.25rem] h-[4rem] ml-[2rem]"/>
                            <span class="text-[#191919] text-[2rem] font-bold pl-[1.5rem]">{{content.title}}</span>
                            <span class="text-[#191919] text-[1.25rem] pl-[1.5rem]">{{content.content}}</span>
                        </div>
                        <img :src="content.img" :style="content.imgStyle"/>
                    </div>
                    <div v-else class="flex flex-col justify-between pt-[2rem] h-auto">
                        <span class="text-[#191919] text-[1.5rem] pl-[1.5rem] font-bold">{{content.title}}</span>
                        <span class="text-[#191919] text-[1.25rem] pl-[1.5rem]">{{content.content}}</span>
                        <img :src="content.img" :style="content.imgStyle" />
                    </div>
                </div>
            </div>
        </div>
    </ComponentLayout>
</template>
<script setup lang="ts">
    import ComponentLayout from '../ComponentLayout.vue'
    import { useI18n } from 'vue-i18n'
    import { ref, computed } from 'vue'
    import planImg1 from '../../assets/plan1.png'
    import planImg2 from '../../assets/home/1.png'
    import planImg3 from '../../assets/plan3.png'
    import planImg4 from '../../assets/plan4.png'
    import planImg5 from '../../assets/plan5.png'
    import locationImg from '../../assets/location.png'
    const { t } = useI18n()
    const extraRef = ref()
    defineExpose({
        extraRef: extraRef
    })
    const contents = computed(() => {
        return [
            {
                title: t('first.cardTitle1'),
                col:2,
                img:planImg1,
                titleImg:locationImg,
                content: t('first.cardContent1'),
                basic:`width:53rem`,
                imgStyle:'width:21.4375rem;height:16.375rem;'
            },
            {
                title: t('first.cardTitle2'),
                col:1,
                img:planImg2,
                content: t('first.cardContent2'),
                basic:`width:26rem`,
                imgStyle:'width:26rem;height:10.5rem;'
            },
            {
                title: t('first.cardTitle3'),
                col:1,
                img:planImg3,
                content: t('first.cardContent3'),
                basic:`width:26rem`,
                imgStyle:'width:26rem;height:10.5rem;'
            },
            {
                title: t('first.cardTitle4'),
                col:1,
                img:planImg4,
                content: t('first.cardContent4'),
                basic:`width:26rem`,
                imgStyle:'width:26rem;height:10.5rem;'
            },
            {
                title: t('first.cardTitle5'),
                col:1,
                img:planImg5,
                content: t('first.cardContent5'),
                basic:`width:26rem`,
                imgStyle:'width:26rem;height:10.5rem;'
            }
        ]
    })
</script>
<style scoped>
    .hover_bg:hover {
        
        box-shadow: 0 2px 3px 0 transparent, 0 8px 7px 0 rgba(0, 0, 0, .01), 0 20px 13px 0 rgba(0, 0, 0, .01), 0 39px 25px 0 rgba(0, 0, 0, .01), 0 65px 47px 0 rgba(0, 0, 0, .02), 0 100px 80px 0 rgba(0, 0, 0, .02);
        /* border: 1px solid #f5f5f5; */
    }
</style>