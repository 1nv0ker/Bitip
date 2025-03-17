<template>
    <ComponentLayout ref="fifthRef" class="pb-[8rem] w-full">
        <div class="flex justify-center mt-[5rem] w-full">
            <span class="text-[#191919] text-[3.25rem] font-bold">{{t('fifth.title')}}</span>
        </div>
        <!-- <div class="gap-x-[1rem] gap-y-[4rem] mt-[2rem] cursor-default justify-between  grid w-full" style="grid-template-columns: repeat(2, 11.25rem);">
            <div class="w-[20rem]  hover:border-[#01AA44] border-[1px] border-[#fff]  text[text-[#191919] rounded-[1rem] flex-shrink-0 flex-grow-0 hover_style" v-for="item in items"
            @mouseleave="key=0"
             @mouseenter="key=item.key">
                <div>
                    <img :src="item.img" class="w-[4rem] h-[4rem]"/>
                </div>
                <div class="mt-[1.25rem]">
                    <span class="text-[1.75rem] font-bold">{{item.title}}</span>
                </div>
                <div class="mt-[1rem]">
                    <span class="text-[1rem]">{{item.content}}</span>
                </div>
            </div>
        </div> -->
        <div class=" gap-x-[1rem] gap-y-[4rem] mt-[2rem] cursor-default justify-between md:grid hidden w-full" style="grid-template-columns: repeat(3, 25.625rem);">
            <div class="w-full  border-[1px] border-[#fff]  text[text-[#191919] rounded-[1rem]  flex-shrink-0 flex-grow-0 hover_style" v-for="item in items"
            @mouseleave="key=0"
             @mouseenter="key=item.key">
                <div>
                    <img :src="item.img" class="w-[4rem] h-[4rem]"/>
                </div>
                <div class="pt-[1.25rem]">
                    <span class="text-[1.75rem] font-bold">{{item.title}}</span>
                </div>
                <div class="pt-[1rem]">
                    <span class="text-[1rem]">{{item.content}}</span>
                </div>
                <!-- <div class="pt-[1.3rem] cursor-pointer flex items-center" v-show="key==item.key" @click="onGetMore">
                    <span class="text-[#01AA44] pr-[1.25rem] font-medium">{{t('fifth.more')}}</span>
                    <img src="../../assets/arrow.png" class="w-[2rem] h-[2rem]" />
                </div> -->
            </div>
        </div>
    </ComponentLayout>
</template>
<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    import ComponentLayout from '../ComponentLayout.vue'
    import { ref, computed } from 'vue'
    import imag1 from '../../assets/hold.png'
    import imag2 from '../../assets/ad.png'
    import imag3 from '../../assets/sign.png'
    import imag4 from '../../assets/seo.png'
    import imag5 from '../../assets/media.png'
    import imag6 from '../../assets/marker.png'
    const { t } = useI18n()
    const fifthRef = ref<HTMLElement>()
    const key = ref(0)
    defineExpose({
        fifthRef: fifthRef
    })
    const items = computed(() => {
        return [
            {
                title: t('fifth.subtitle1'),
                content: t('fifth.content1'),
                img: imag1,
                key: 1
            },
            {
                title: t('fifth.subtitle2'),
                content: t('fifth.content2'),
                img: imag2,
                key: 2
            },
            {
                title: t('fifth.subtitle3'),
                content: t('fifth.content3'),
                img: imag3,
                key: 3
            },
            {
                title: t('fifth.subtitle4'),
                content: t('fifth.content4'),
                img: imag4,
                key: 4
            },
            {
                title: t('fifth.subtitle5'),
                content: t('fifth.content5'),
                img: imag5,
                key: 5
            },
            {
                title: t('fifth.subtitle6'),
                content: t('fifth.content6'),
                img: imag6,
                key: 6
            }
        ]
    })
    // const onGetMore = () => {

    // }
</script>
<style  scoped>
    /* .hover_style:hover {
        background: #fff;
        box-shadow: 0 2px 3px 0 transparent, 0 8px 7px 0 rgba(0, 0, 0, .01), 0 20px 13px 0 rgba(0, 0, 0, .01), 0 39px 25px 0 rgba(0, 0, 0, .01), 0 65px 47px 0 rgba(0, 0, 0, .02), 0 100px 80px 0 rgba(0, 0, 0, .02);
        border: 1px solid #f5f5f5;
        transition: box-shadow 1s ease;
    } */
</style>