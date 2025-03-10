<template>
    <ComponentLayout ref="extraRef" class="pt-[2.5rem] pb-[5.625rem] bg-[white]">
        <div class="w-full h-full">
            <div class="flex justify-center">
                <span class="text-[#191919] text-[3.25rem] font-bold">{{t('extra.title')}}</span>
            </div>
            <div class="mt-[3.25rem] w-full flex gap-[1rem] justify-between flex-wrap ]">
                <div v-for="content in contents" :class="`flex-${content.col} border-[1px] hover_bg border-[#EBEFF8] rounded-[1rem]`" :style="content.basic">
                    <div v-if="content.titleImg" class="flex justify-between  p-[2rem]">
                        <div class="flex flex-col gap-[0.625rem] justify-center pb-[1.25rem]">
                            <img :src="content.titleImg" class=" w-[2.5rem] h-[3.125rem]"/>
                            <span class="text-[#191919] text-[2rem] font-bold">{{content.title}}</span>
                            <span class="text-[#191919] text-[1.25rem]">{{content.content}}</span>
                        </div>
                        <img :src="content.img" class=" w-[20.8125rem] h-[15.375rem]"/>
                    </div>
                    <div v-else class="flex flex-col gap-[1rem] justify-between p-[2rem] h-auto">
                        <span class="text-[#191919] text-[2rem] font-bold">{{content.title}}</span>
                        <span class="text-[#191919] text-[1.25rem]">{{content.content}}</span>
                        <img :src="content.img" class="w-[26rem] h-[10.5rem]"/>
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
    import planImg2 from '../../assets/plan2.png'
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
                basic:`flex-basis: calc( (100% - 1rem) *2 /3 )`
            },
            {
                title: t('first.cardTitle2'),
                col:1,
                img:planImg2,
                content: t('first.cardContent2'),
                basic:`flex-basis: calc( (100% - 1rem) *1 /3 )`
            },
            {
                title: t('first.cardTitle3'),
                col:1,
                img:planImg3,
                content: t('first.cardContent3'),
                basic:`flex-basis: calc( (100% - 2rem) *1 /3 )`
            },
            {
                title: t('first.cardTitle4'),
                col:1,
                img:planImg4,
                content: t('first.cardContent4'),
                basic:`flex-basis: calc( (100% - 2rem) *1 /3 )`
            },
            {
                title: t('first.cardTitle5'),
                col:1,
                img:planImg5,
                content: t('first.cardContent5'),
                basic:`flex-basis: calc( (100% - 2rem) *1 /3 )`
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