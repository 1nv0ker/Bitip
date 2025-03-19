<template>
    <div class="w-full row gx-0 pt-[5.125rem] pb-[7.8125rem] relative" @mousemove="onMouseMove" ref="mouseBoxRef" @mouseleave="onMouseLeave">
        <!-- 移动渐变区块 -->
        <img src="../../assets/bg_hover.png" class=" absolute w-[17rem] h-[17rem] pointer-events-none hidden" 
        ref="hoverbgRef" style="transform: translate(-50%, -50%);"/>
        <!-- 背景图片 -->
        <div class="absolute top-0 right-0 left-0 bottom-0">
            <img src="../../assets/mask_bg.png" class="  w-full h-full" />
        </div>

        <div class="col"></div>

        <div class="col-10 col-sm-10 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
            <div class="flex justify-center flex-col items-center w-full">
                <div class="flex justify-center gap-[2.5rem] z-20">
                    <div class="flex cursor-pointer items-center">
                        <img src="../../assets/star_2.png" class="w-[1.375rem] h-[1.375rem]"/>
                        <span class="pl-[0.5rem] text-[#191919] text-[1rem] font-medium pr-[0.625rem]">Trustpilot</span>
                        <div class="flex gap-[0.125rem] items-center">
                            <img src="../../assets/stars_2.png" class="w-[1.375rem] h-[1.375rem]" />
                            <img src="../../assets/stars_2.png" class="w-[1.375rem] h-[1.375rem]" />
                            <img src="../../assets/stars_2.png" class="w-[1.375rem] h-[1.375rem]" />
                            <img src="../../assets/stars_2.png" class="w-[1.375rem] h-[1.375rem]" />
                            <img src="../../assets/stars_2.png" class="w-[1.375rem] h-[1.375rem]" />
                        </div>
                    </div>
                    <div class="flex cursor-pointer items-center">
                        <img src="../../assets/star_1.png" class="w-[1.375rem] h-[1.375rem]"/>
                        <span  class="pl-[0.5rem] text-[#191919] text-[1rem] font-medium pr-[0.625rem]">G2</span>
                        <div class="flex gap-[0.125rem] items-center">
                            <img src="../../assets/stars_1.png" class="w-[1.375rem] h-[1.375rem]" />
                            <img src="../../assets/stars_1.png" class="w-[1.375rem] h-[1.375rem]" />
                            <img src="../../assets/stars_1.png" class="w-[1.375rem] h-[1.375rem]" />
                            <img src="../../assets/stars_1.png" class="w-[1.375rem] h-[1.375rem]" />
                            <img src="../../assets/stars_1.png" class="w-[1.375rem] h-[1.375rem]" />
                        </div>
                    </div>
                </div>


                <div class="flex justify-center items-end mt-[1.5rem]">
                    <span class="text-[#01AA44] text-[3.75rem] font-extrabold">{{ t('first.title1') }}</span>
                    <span class="text-[#191919] text-[3.43rem] font-bold"> {{t('first.title')}}</span>
                    <span class="text-[3.43rem] text-[#01AA44] font-extrabold"> IP</span>
                </div>
                <div class="flex justify-center items-center w-full">
                    <span class="text-[#191919] text-[3.43rem] font-bold text-center">{{t('first.subtitle')}}</span>
                </div>

                <div class="flex justify-center items-center w-full mt-[1.875rem]">
                    <span class="text-[#666666] text-[1.25rem] text-center">{{t('first.content')}}
                        <!-- <span ">200+ -->
                            <NumberComponent class="text-[#191919] text-[1.25rem] font-bold" :number="200" :extra="'+'" :step="1"></NumberComponent>
                        {{t('first.content2')}}</span>
                </div>

                <div class="flex justify-center items-center mt-[3.75rem] gap-[2rem]">
                    <RippleButton  class="w-[13.25rem] h-[3.25rem] rounded-[1.75rem] bg-[#01AA44] text-[1.25rem] font-medium hover:text-[#01AA44] text-[white]
                    border-[1px] border-[#01AA44]" :text="t('first.freeUse')" @btn-click="onFreeUse" />
                    <!-- <div class="w-[13.25rem] h-[3.25rem] rounded-[1.75rem] flex items-center justify-center cursor-pointer border-[1px] border-[#191919] ml-[2rem] z-50" @click="onContact">
                        <img src="../../assets/contact.png" class="w-[1.5rem] h-1.5rem" />
                        <span class="pl-[0.5rem] text-[#191919] text-[1.25rem] font-medium">{{t('first.contact')}}</span>
                    </div> -->
                    <RippleButton  class="w-[13.25rem] h-[3.25rem] rounded-[1.75rem] bg-[white] text-[1.25rem] font-medium hover:text-[white] text-[#191919]
                    border-[1px] border-[#191919]" :text="t('first.contact')" :color="'#01AA44'" @btn-click="onContact" @mouse-enter="(v)=>hoverStatus=v" @mouse-out="(v)=>hoverStatus=v">
                        <img src="../../assets/contact.png" :class="`w-[1.5rem] h-1.5rem mr-[0.5rem] z-10 ${hoverStatus?'change_color':''}`"/>
                    </RippleButton>
                </div>
                <div class="flex justify-center items-center mt-[5.125rem]">
                    <div :class="`flex items-center  ${number>0?'show_class':'hidden_class'}`" >
                        <img src="../../assets/gif/dome.gif" class="w-[1.5rem] h-[1.5rem]" />
                        <span class="text-[#191919] text-[1.12rem] font-medium pl-[0.5rem]">{{t('first.item1')}}</span>
                    </div>
                    <div :class="`flex items-center pl-[5.3rem]  ${number>1?'show_class':'hidden_class'}`"  >
                        <img src="../../assets/gif/dome.gif" class="w-[1.5rem] h-[1.5rem]" />
                        <span class="text-[#191919] text-[1.12rem] font-medium pl-[0.5rem]">{{t('first.item2')}}</span>
                    </div>
                    <div :class="`flex items-center pl-[5.3rem]  ${number>2?'show_class':'hidden_class'}`" >
                        <img src="../../assets/gif/dome.gif" class="w-[1.5rem] h-[1.5rem]" />
                        <span class="text-[#191919] text-[1.12rem] font-medium pl-[0.5rem]">{{t('first.item3')}}</span>
                    </div>
                    <div :class="`flex items-center pl-[5.3rem] ${number>3?'show_class':'hidden_class'}`">
                        <img src="../../assets/gif/dome.gif" class="w-[1.5rem] h-[1.5rem]" />
                        <span class="text-[#191919] text-[1.12rem] font-medium pl-[0.5rem]">{{t('first.item4')}}</span>
                    </div>
                </div>


                


                <!-- <div class="overflow-auto mt-[4.25rem] w-full RectItems grid place-items-center">
                    <div class="flex gap-[1rem] w-full justify-between">
                        <FirstRectComponent 
                        class="flex-shrink-0 flex-grow-0" 
                        v-for="card in cardItems" :title="card.title" :content="card.content" :img="card.img"/>
                    </div>
                </div> -->
                <div class="pt-[3rem]">
                    <span class="text-[#999999] text-[1rem]">{{t('first.tips')}}</span>
                </div>
            </div>
        </div>

        <div class="col"></div>
    </div>
</template>
<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    import RippleButton from '../../components/RippleButton.vue'
    import NumberComponent from '../../components/NumberComponent.vue'
    // import FirstRectComponent from './FirstRectComponent.vue'
    // import img1 from '../../assets/first_1.png'
    // import img2 from '../../assets/first_2.png'
    // import img3 from '../../assets/first_3.png'
    // import img4 from '../../assets/first_4.png'
    // import img5 from '../../assets/first_5.png'
    import {  ref, onMounted, onBeforeUnmount } from 'vue'
    const { t } = useI18n()
    const emit = defineEmits(['onFreeUse'])
    const hoverStatus = ref(false)
    const number = ref(0)
    let interval:any = null
    onMounted(() => {
        interval = setInterval(() => {
            number.value = number.value + 1
            if (number.value>4) {
                clearInterval(interval)
            }
        }, 1000);
    })
    onBeforeUnmount(() => {
        interval && clearInterval(interval)
    }) 
    // const cardItems = computed(() => {
    //     return [
    //     {
    //         title: t('first.cardTitle1'),
    //         content: t('first.cardContent1'),
    //         img: img1
    //     },
    //     {
    //         title: t('first.cardTitle2'),
    //         content: t('first.cardContent2'),
    //         img: img2
    //     },
    //     {
    //         title: t('first.cardTitle3'),
    //         content: t('first.cardContent3'),
    //         img: img3
    //     },
    //     {
    //         title: t('first.cardTitle4'),
    //         content: t('first.cardContent4'),
    //         img: img4
    //     },
    //     {
    //         title: t('first.cardTitle5'),
    //         content: t('first.cardContent5'),
    //         img: img5
    //     }
    // ]
    // })
    const hoverbgRef = ref<any>()
    const mouseBoxRef = ref<HTMLElement|null>()
    const onFreeUse = () => {
        emit('onFreeUse')
        
        console.log('OnFreeUse')
    }
    const onContact = () => {
        
    }
    const onMouseMove = (event:MouseEvent) => {
        // console.log('MouseEvent')
        if (mouseBoxRef.value) {
            const boxRect = mouseBoxRef.value.getBoundingClientRect();
            const mouseX = event.clientX - boxRect.left;
            // console.log('mouseX', mouseX )
            const mouseY = event.clientY - boxRect.top;
            hoverbgRef.value.style.top = `${mouseY}px`

            hoverbgRef.value.style.left = `${mouseX}px`
            hoverbgRef.value.style.display = 'block'
        }
    }
    const onMouseLeave = () => {
         hoverbgRef.value.style.display = 'none'
    }
</script>
<style scoped>
/* WebKit 浏览器 (Chrome/Safari) 隐藏滚动条 */
.RectItems::-webkit-scrollbar {
  display: none;
  width: 0;      
  height: 0;
}
.gradient-overlay {
  filter: blur(20px); /* 添加模糊效果 */
}
.RectItems {
    -webkit-overflow-scrolling: touch; /* 优化移动端滚动 */
}
/* .first_class {
    background-image: url('../../assets/massk_bg.png');
    background-repeat: no-repeat;
    background-size: cover;
} */
 .change_color {
    filter:invert(100%)
 }
.hidden_class {
    visibility: hidden;
}
.show_class {
    animation: fadeIn 1s ease; /* referring directly to the animation's @keyframe declaration */
}
</style>