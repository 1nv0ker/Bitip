<template>
    <ComponentLayout ref="sixthRef" class="pb-[11rem]">
        <div class="w-full md:h-[27rem] h-[24rem] overflow-hidden relative rounded-[2rem] pl-[10rem] pr-[10rem] pb-[10rem]" ref="boxRef">
            <div class=" absolute top-0 bottom-0 left-0 right-0" >
                <img src="../../assets/card_bg.png" class="w-full h-full" />
            </div>
            <div class=" absolute bg-[#6DFFEB] w-[10rem] h-[10rem] z-1" ref="imgRef" style="transition: all 2s ease-in-out;;will-change: transform;filter: blur(100px);">

            </div>
            <div class="flex justify-center pt-[7.625rem] z-10">
                <span class="text-[#FFFFFF] text-[3.5rem] font-bold text-center z-10">{{t('sixth.title')}}</span>
            </div>
            <!-- <div class="flex justify-center pt-[0.75rem] z-10">
                <span class="text-[rgba(255,255,255,0.7)] text-[1.625rem] z-10">{{t('sixth.content')}}</span>
            </div> -->
            <div class="flex justify-center pt-[2.625rem] pb-[5rem] gap-[2rem] z-10" >
                <RippleButton class="h-[3.625rem] w-[14.625rem] rounded-[4.18rem] bg-[#191919] text-[white] text-[1.25rem] 
                font-medium hover:text-[#191919] border-[#191919] border-[1px]" :text="t('sixth.button1')" @btnClick="onFreeUse">
                </RippleButton>

                <div class="h-[3.625rem] w-[14.625rem] rounded-[4.18rem]  text-[white] text-[1.25rem] z-10
                font-medium border-[white] border-[1px] flex justify-center items-center cursor-pointer">
                    <span>{{t('sixth.button2')}}</span>
                </div>
            </div>
        </div>
    </ComponentLayout>
</template>
<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    import { ref, onMounted, onBeforeUnmount } from 'vue'
    import ComponentLayout from '../ComponentLayout.vue'
    import RippleButton from '../../components/RippleButton.vue'
    const { t } = useI18n()
    const emit = defineEmits(['onFreeUse'])
    const sixthRef = ref(null)
    const imgRef = ref<any>(null)
    const boxRef = ref<any>(null)
    let interval:any = null;
    let isAnimating = false;
    defineExpose({
        sixthRef: sixthRef
    })
    const onFreeUse = () => {
        emit('onFreeUse')
    }
    onMounted(()=> {
        interval = setInterval(animateToNewPosition, 2000);
    })
    onBeforeUnmount(() => {
        interval && clearInterval(interval)
    })
    // const moveImg = () => {
    //     const maxX = boxRef.value.offsetWidth - imgRef.value.offsetWidth;
    //     const maxY = boxRef.value.offsetHeight - imgRef.value.offsetHeight;
    //     imgRef.value.style.left = `${Math.random() * maxX}px`;
    //     imgRef.value.style.top = `${Math.random() * maxY}px`;
    // }
    const getRandomPosition = () => {
        const maxX = boxRef.value.offsetWidth - imgRef.value.offsetWidth;
        const maxY = boxRef.value.offsetHeight - imgRef.value.offsetHeight;
        return {
            x: Math.random() * maxX,
            y: Math.random() * maxY
        };
    }
    const animateToNewPosition = () => {
        if (isAnimating) return;

        const targetPos = getRandomPosition();
        imgRef.value.style.transform = `translate(${targetPos.x}px, ${targetPos.y}px)`;
        isAnimating = true;

        // 动画结束后重置状态
        imgRef.value.addEventListener('transitionend', () => {
            isAnimating = false;
        }, { once: true });
    }
</script> 