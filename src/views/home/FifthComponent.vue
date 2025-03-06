<template>
    <div ref="fifthRef" class="pb-[8rem] w-full">
        <div class="flex justify-center mt-[5rem]">
            <span class="text-[#191919] text-[2.625rem] font-bold">{{t('fifth.title')}}</span>
        </div>
        <div class=" gap-x-[10.5rem] gap-y-[4rem] mt-[2rem] cursor-default justify-center md:hidden grid" style="grid-template-columns: repeat(2, 20rem);">
            <div class="w-[20rem] h-[16rem] hover:border-[#01AA44] p-[2rem] text[text-[#191919] rounded-[1rem] flex-shrink-0 flex-grow-0 hover_style" v-for="item in items"
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
                <!-- <div class="pt-[1.3rem] cursor-pointer flex items-center" v-show="key==item.key" @click="onGetMore">
                    <span class="text-[#01AA44] pr-[1.25rem] font-medium">{{t('fifth.more')}}</span>
                    <img src="../../assets/arrow.png" class="w-[2rem] h-[2rem]" />
                </div> -->
            </div>
        </div>
        <div class=" gap-x-[10.5rem] gap-y-[4rem] mt-[2rem] cursor-default justify-center md:grid hidden" style="grid-template-columns: repeat(3, 20rem);">
            <div class="w-[20rem] h-[18rem] hover:border-[#01AA44] p-[2rem] text[text-[#191919] rounded-[1rem] flex-shrink-0 flex-grow-0 hover_style" v-for="item in items"
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
    </div>
</template>
<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    import { ref, computed } from 'vue'
    import handImg from '../../assets/hand.png'
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
                img: handImg,
                key: 1
            },
            {
                title: t('fifth.subtitle2'),
                content: t('fifth.content2'),
                img: handImg,
                key: 2
            },
            {
                title: t('fifth.subtitle3'),
                content: t('fifth.content3'),
                img: handImg,
                key: 3
            },
            {
                title: t('fifth.subtitle4'),
                content: t('fifth.content4'),
                img: handImg,
                key: 4
            },
            {
                title: t('fifth.subtitle5'),
                content: t('fifth.content5'),
                img: handImg,
                key: 5
            },
            {
                title: t('fifth.subtitle6'),
                content: t('fifth.content6'),
                img: handImg,
                key: 6
            }
        ]
    })
    // const onGetMore = () => {

    // }
</script>
<style  scoped>
    .hover_style:hover {
        background: #fff;
        box-shadow: 0 2px 3px 0 transparent, 0 8px 7px 0 rgba(0, 0, 0, .01), 0 20px 13px 0 rgba(0, 0, 0, .01), 0 39px 25px 0 rgba(0, 0, 0, .01), 0 65px 47px 0 rgba(0, 0, 0, .02), 0 100px 80px 0 rgba(0, 0, 0, .02);
        border: 1px solid #f5f5f5;
    }
</style>