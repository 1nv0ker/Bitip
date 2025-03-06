<template>
    <div class="w-full mt-[5.125rem] relative h-[54rem] first_class" @mousemove="onMouseMove" ref="mouseBoxRef" @mouseleave="onMouseLeave">
        <img src="../../assets/bg_hover.png" class=" absolute w-[17rem] h-[17rem] pointer-events-none hidden" 
        ref="hoverbgRef" style="transform: translate(-50%, -50%);"/>
        <img src="../../assets/mask_bg.png" class=" absolute h-full w-full" />
        <div class="flex justify-center">
            <div class="flex pr-[1rem]">
                <img src="../../assets/star_2.png" class="w-[1.375rem] h-[1.375rem]"/>
                <span class="pl-[0.5rem] text-[#191919] text-[1rem] font-medium">Trustpilot</span>
            </div>
            <div class="flex pl-[1rem]">
                <img src="../../assets/star_1.png" class="w-[1.375rem] h-[1.375rem]"/>
                <span  class="pl-[0.5rem] text-[#191919] text-[1rem] font-medium">G2</span>
            </div>
        </div>
        <div class="flex justify-center items-center mt-[1.5rem]">
            <span class="text-[#191919] text-[3.43rem] font-bold">{{t('first.title')}}</span>
        </div>
        <div class="flex justify-center items-center">
            <span class="text-[#191919] text-[3.43rem] font-bold text-center">{{t('first.subtitle')}}</span>
        </div>
        <div class="flex justify-center items-center mt-[2.5rem]">
            <div class="flex items-center">
                <img src="../../assets/dome.png" class="w-[1.5rem] h-[1.5rem]" />
                <span class="text-[#191919] text-[1.12rem] font-medium pl-[0.5rem]">{{t('first.item1')}}</span>
            </div>
            <div class="flex items-center pl-[5.3rem]">
                <img src="../../assets/dome.png" class="w-[1.5rem] h-[1.5rem]" />
                <span class="text-[#191919] text-[1.12rem] font-medium pl-[0.5rem]">{{t('first.item2')}}</span>
            </div>
            <div class="flex items-center pl-[5.3rem]">
                <img src="../../assets/dome.png" class="w-[1.5rem] h-[1.5rem]" />
                <span class="text-[#191919] text-[1.12rem] font-medium pl-[0.5rem]">{{t('first.item3')}}</span>
            </div>
            <div class="flex items-center pl-[5.3rem]">
                <img src="../../assets/dome.png" class="w-[1.5rem] h-[1.5rem]" />
                <span class="text-[#191919] text-[1.12rem] font-medium pl-[0.5rem]">{{t('first.item4')}}</span>
            </div>
            
        </div>
        <div class="flex justify-center items-center mt-[3.25rem]">
            <RippleButton  class="w-[13.25rem] h-[3.25rem] rounded-[1.75rem] bg-[#01AA44] text-[1.25rem] font-medium hover:text-[#01AA44] text-[white]
            border-[1px] border-[#01AA44]" :text="t('first.freeUse')" @btn-click="onFreeUse" />
            <div class="w-[13.25rem] h-[3.25rem] rounded-[1.75rem] flex items-center justify-center cursor-pointer border-[1px] border-[#191919] ml-[2rem]" @click="onContact">
                <img src="../../assets/contact.png" class="w-[1.5rem] h-1.5rem" />
                <span class="pl-[0.5rem] text-[#191919] text-[1.25rem] font-medium">{{t('first.contact')}}</span>
            </div>
        </div>
        <div class="overflow-auto mt-[4.25rem] pl-[2rem] pr-[2rem] RectItems grid place-items-center">
            
            <div class="flex gap-[1rem]">
                <FirstRectComponent 
                class="flex-shrink-0 flex-grow-0" 
                v-for="card in cardItems" :title="card.title" :content="card.content" :img="card.img"/>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    import RippleButton from '../../components/RippleButton.vue'
    import FirstRectComponent from './FirstRectComponent.vue'
    import img1 from '../../assets/first_1.png'
    import img2 from '../../assets/first_2.png'
    import img3 from '../../assets/first_3.png'
    import img4 from '../../assets/first_4.png'
    import img5 from '../../assets/first_5.png'
    import { computed, ref } from 'vue'
    const { t } = useI18n()
    const emit = defineEmits(['onFreeUse'])
    const cardItems = computed(() => {
        return [
        {
            title: t('first.cardTitle1'),
            content: t('first.cardContent1'),
            img: img1
        },
        {
            title: t('first.cardTitle2'),
            content: t('first.cardContent2'),
            img: img2
        },
        {
            title: t('first.cardTitle3'),
            content: t('first.cardContent3'),
            img: img3
        },
        {
            title: t('first.cardTitle4'),
            content: t('first.cardContent4'),
            img: img4
        },
        {
            title: t('first.cardTitle5'),
            content: t('first.cardContent5'),
            img: img5
        }
    ]
    })
    const hoverbgRef = ref<any>()
    const mouseBoxRef = ref<HTMLElement|null>()
    const onFreeUse = () => {
        emit('onFreeUse')
        
        console.log('OnFreeUse')
    }
    const onContact = () => {
        
    }
    const onMouseMove = (event:MouseEvent) => {
        console.log('MouseEvent')
        if (mouseBoxRef.value) {
            const boxRect = mouseBoxRef.value.getBoundingClientRect();
            const mouseX = event.clientX - boxRect.left;
            console.log('mouseX', mouseX )
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
</style>