<template>
    <ComponentLayout class="pt-[3.125rem] pb-[8rem]" ref="thirdRef" style="background: linear-gradient( 180deg, #F4FAF6 0%, #FFFFFF 100%) ;">
        <div class="w-full">
            <div class="flex items-center justify-center">
                <span class="text-[#191919] text-[2.625rem] font-bold">{{ t('third.title') }}</span>
            </div>
            <div class="mt-[4.5rem] flex justify-between gap-[6.25rem]">
                <div class="flex flex-col  gap-[1.25rem] ">
                    <div :class="`w-[26.31rem] h-[5.75rem] rounded-[3.5rem] border-[1px] pl-[1.875rem] border-[#e2e7e4] ${selected==button.key?'selected text-[white]':'unSelected text-[#191919]'} 
                    cursor-pointer flex items-center relative`" 
                    @mouseenter="onMouseEnter(button.key)"
                    @mouseleave="onMouseLeave"
                    style="transition: background-color 0.5s ease-in-out;"
                    v-for="button in buttons" @click="selected=button.key">
                        <img :src="button.img" :class="selected==button.key?'changeColor-img w-[1.5rem] h-[1.5rem]':'w-[1.5rem] h-[1.5rem]'" v-if="button.key==2 || button.key==4" />
                        <img :src="button.img" :class="selected==button.key?'w-[1.5rem] h-[1.5rem]':'changeColor-img w-[1.5rem] h-[1.5rem]'" v-else />
                        <img  src="../../assets/button_arrow.png" :class=" `absolute top-0 right-0 left-0 bottom-0 ${selected==button.key?'change_arrow_img':''}`"/>
                        <span class=" text-[1.5rem] pl-[1.25rem] font-medium">{{button.title}}</span>
                    </div>
                </div>
                <div class="flex flex-col animate__animated animate__fadeIn w-auto" v-show="selected==1">
                    <div class="flex flex-col gap-[0.75rem] pl-[6rem]">
                        <span class="text-[#191919] text-[1.875rem] font-bold">{{currentContent?.subtitle}}</span>
                        <span class="text-[#191919] text-[1.25rem] font-medium pt-[0.75rem]">{{currentContent?.content}}</span>
                    </div>

                    <div class="w-[50rem] h-[21rem]  mt-[2rem]">
                        <img src="../../assets/globalSource.png" class="w-full h-full"/>
                    </div>
                </div>
                <!-- <div class="flex flex-col animate__animated animate__fadeIn w-auto" v-show="selected==2">
                    <div class="flex flex-col gap-[0.75rem] pl-[6rem]">
                        <span class="text-[#191919] text-[1.875rem] font-bold">{{currentContent?.subtitle}}</span>
                        <span class="text-[#191919] text-[1.25rem] font-medium pt-[0.75rem]">{{currentContent?.content}}</span>
                    </div>

                    <div class="w-[50rem] h-[21rem]  mt-[2rem]">
                        <img src="../../assets/globalSource.png" class="w-full h-full"/>
                    </div>
                </div> -->
                <div class="flex flex-col animate__animated animate__fadeIn w-auto" v-show="selected==2">
                    <div class="flex flex-col gap-[0.75rem] pl-[6rem]">
                        <span class="text-[#191919] text-[1.875rem] font-bold">{{currentContent?.subtitle}}</span>
                        <span class="text-[#191919] text-[1.25rem] font-medium pt-[0.75rem]">{{currentContent?.content}}</span>
                    </div>

                    <div class="w-[50rem] h-[21rem]  mt-[2rem]">
                        <img src="../../assets/globalSource.png" class="w-full h-full"/>
                    </div>
                </div>
                <div class="flex flex-col animate__animated animate__fadeIn w-auto" v-show="selected==3">
                    <div class="flex flex-col gap-[0.75rem] pl-[6rem]">
                        <span class="text-[#191919] text-[1.875rem] font-bold">{{currentContent?.subtitle}}</span>
                        <span class="text-[#191919] text-[1.25rem] font-medium pt-[0.75rem]">{{currentContent?.content}}</span>
                    </div>

                    <div class="w-[50rem] h-[21rem]  mt-[2rem]">
                        <img src="../../assets/globalSource.png" class="w-full h-full"/>
                    </div>
                </div>
                <div class="flex flex-col animate__animated animate__fadeIn w-auto" v-show="selected==4">
                    <div class="flex flex-col gap-[0.75rem] pl-[6rem]">
                        <span class="text-[#191919] text-[1.875rem] font-bold">{{currentContent?.subtitle}}</span>
                        <span class="text-[#191919] text-[1.25rem] font-medium pt-[0.75rem]">{{currentContent?.content}}</span>
                    </div>

                    <div class="w-[50rem] h-[21rem]  mt-[2rem]">
                        <img src="../../assets/globalSource.png" class="w-full h-full"/>
                    </div>
                </div>
            </div>
        </div>
    </ComponentLayout>
</template>
<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    import ComponentLayout from '../ComponentLayout.vue'
    import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
    import dome1 from '../../assets/gif/1.gif'
    // import dome2 from '../../assets/dome2.png'
    import dome3 from '../../assets/dome3.png'
    import dome4 from '../../assets/gif/3.gif'
    import dome5 from '../../assets/dome5.png'
    const { t } = useI18n()
    const thirdRef = ref<HTMLElement>()
    const selected = ref(1)
    let interval:any = null
    const buttons = computed(() => {
        return [
            {
                title: t('third.item1title'),
                img: dome1,
                key: 1
            },
            // {
            //     title: t('third.item2title'),
            //     img: dome2,
            //     key: 2
            // },
            {
                title: t('third.item3title'),
                img: dome3,
                key:2
            },
            {
                title: t('third.item4title'),
                img: dome4,
                key: 3
            },
            {
                title: t('third.item5title'),
                img: dome5,
                key: 4
            }
        ]
    })
    const contents = computed(() => {
        return [
            {
                key: 1,
                subtitle: t('third.item1Subtitle'),
                content: t('third.item1Content')
            },
            // {
            //     key: 2,
            //     subtitle: t('third.item2Subtitle'),
            //     content: t('third.item2Content')
            // },
            {
                key: 2,
                subtitle: t('third.item3Subtitle'),
                content: t('third.item3Content')
            },
            {
                key: 3,
                subtitle: t('third.item4Subtitle'),
                content: t('third.item4Content')
            },
            {
                key: 4,
                subtitle: t('third.item5Subtitle'),
                content: t('third.item5Content')
            }
        ]
    })
    const currentContent = computed(() => {
        return contents.value.find(item=>item.key == selected.value)
    })
    defineExpose({
        thirdRef: thirdRef
    })
    onMounted(() => {
        interval = setInterval(() => {
            if (selected.value ===4) {
                selected.value = 0
            }
            selected.value = selected.value + 1
        }, 3000);
        selected.value = 1
    })
    onBeforeUnmount(() => {
        interval && clearInterval(interval)
    })
    const onMouseEnter = (key:number) => {
        selected.value = key
        interval && clearInterval(interval)
    }
    const onMouseLeave = () => {
        interval = setInterval(() => {
            if (selected.value ===4) {
                selected.value = 0
            }
            selected.value = selected.value + 1
        }, 3000);
    }
</script>
<style scoped>
    .unSelected {
        background: linear-gradient( 138deg, #E6FFF0 0%, #FFFFFF 100%);
        animation: flow 8s ease infinite;
    }
    .selected {
        background-color: #01AA44;
    }
    @keyframes flow {
        0% {
            background-position: 0% 20%;  /* 初始位置 */
        }
        30% {
            background-size: 100% 50%;
        }
        60% {
            background-size: 100% 80%;
        }
        100% {
            background-position: 100% 100%; /* 横向移动两倍背景宽度 */
        }
    }
    .changeColor-img {
        filter: invert(100%)     
    }
    .change_arrow_img {
        filter: invert(96%) brightness(2000%) saturate(100%);
    }
</style>