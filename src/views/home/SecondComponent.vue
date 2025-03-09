<template>
    <ComponentLayout ref="secondRef" class="bg-[white] pt-[6.5625rem] pb-[8.25rem] overflow-hidden">
        <div class="flex justify-center items-center">
            <span class="text-[#191919] text-[2.625rem] font-bold">{{t('second.title')}}</span>
        </div>
        <div class="flex mt-[2rem] justify-center items-center">
            <div class="w-[26.5rem] h-[3.25rem] border-[1px] border-[#191919] rounded-[6.25rem] flex p-[0.2rem]">
                <div :class="`w-[50%] h-full flex justify-center items-center rounded-[6.25rem] cursor-pointer ${selected==0?'bg-[#01AA44] text-[white]':'text-[#191919]'}`" @click="selected=0" 
                style="transition: background-color 0.5s ease-in-out; /* 动画属性 */"
                @mouseenter="onMouseEnter(0)" @mouseleave="onMouseLeave">
                    <span class="text-[1.25rem] font-medium">{{t('second.select1')}}</span>
                </div>
                <div :class="`w-[50%] h-full justify-center items-center flex rounded-[6.25rem] cursor-pointer ${selected==1?'bg-[#01AA44] text-[white]':'text-[#191919]'}`" @click="selected=1"
                 style="transition: background-color 0.5s ease-in-out; /* 动画属性 */"
                @mouseenter="onMouseEnter(1)" @mouseleave="onMouseLeave">
                    <span class=" text-[1.25rem] font-medium">{{t('second.select2')}}</span>
                </div>
            </div>
        </div>
        <div class="flex justify-between mt-[5.375rem] animate__animated animate__slideInLeft" v-show="selected==0">
            <div class="w-[38.8215rem] h-[26.5rem] relative">
                
                <img src="../../assets/group.png" class="w-full h-full" />
            </div>
            <div class="w-[38.625rem] flex flex-col  justify-center">
                <div class="flex">
                    <span class="text-[#191919] text-[1.875rem] font-medium">{{t('second.dynamicContent')}}</span>
                </div>
                <div class="flex flex-col mt-[1.5rem] gap-[1rem]">
                    <div class="flex items-center">
                        <div class="w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#01AA44]">

                        </div>
                        <span class="pl-[0.5rem] text-[#191919] text-[1.1rem] font-normal" >{{ t('second.dynamicItem1') }}</span>
                    </div>
                    <div class="flex items-center">
                        <div class="w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#01AA44]">

                        </div>
                        <span class="pl-[0.5rem] text-[#191919] text-[1.1rem] font-normal" >{{ t('second.dynamicItem2') }}</span>
                    </div>
                    <div class="flex items-center">
                        <div class="w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#01AA44]">

                        </div>
                        <span class="pl-[0.5rem] text-[#191919] text-[1.1rem] font-normal" >{{ t('second.dynamicItem3') }}</span>
                    </div>
                    <div class="flex items-center">
                        <div class="w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#01AA44]">

                        </div>
                        <span class="pl-[0.5rem] text-[#191919] text-[1.1rem] font-normal" >{{ t('second.dynamicItem4') }}</span>
                    </div>
                    <div class="flex items-center">
                        <div class="w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#01AA44]">

                        </div>
                        <span class="pl-[0.5rem] text-[#191919] text-[1.1rem] font-normal" >{{ t('second.dynamicItem5') }}</span>
                    </div>
                </div>
                <div class="mt-[1.5rem]">
                    <RippleButton class="h-[3.25rem] w-[13.25rem] rounded-[4.18rem] bg-[#191919] text-[white] text-[1.25rem] 
                    font-medium hover:text-[#191919] border-[#191919] border-[1px]" :text="t('second.dynamicButton')" @btnClick="onFreeUse">
                    </RippleButton>
                </div>
            </div>
        </div>

        <div class="flex justify-between mt-[5.375rem] animate__animated animate__slideInRight" v-show="selected==1">
            <div class="w-[38.8215rem] h-[26.5rem] relative">
                
                <img src="../../assets/group.png" class="w-full h-full" />
            </div>
            <div class="w-[38.625rem] flex flex-col justify-center">
                <div class="flex">
                    <span class="text-[#191919] text-[1.875rem] font-medium">{{t('second.dynamicContent')}}</span>
                </div>
                <div class="flex flex-col mt-[1.5rem] gap-[1rem]">
                    <div class="flex items-center">
                        <div class="w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#01AA44]">

                        </div>
                        <span class="pl-[0.5rem] text-[#191919] text-[1.1rem] font-normal" >{{ t('second.dynamicItem1') }}</span>
                    </div>
                    <div class="flex items-center">
                        <div class="w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#01AA44]">

                        </div>
                        <span class="pl-[0.5rem] text-[#191919] text-[1.1rem] font-normal" >{{ t('second.dynamicItem2') }}</span>
                    </div>
                    <div class="flex items-center">
                        <div class="w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#01AA44]">

                        </div>
                        <span class="pl-[0.5rem] text-[#191919] text-[1.1rem] font-normal" >{{ t('second.dynamicItem3') }}</span>
                    </div>
                    <div class="flex items-center">
                        <div class="w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#01AA44]">

                        </div>
                        <span class="pl-[0.5rem] text-[#191919] text-[1.1rem] font-normal" >{{ t('second.dynamicItem4') }}</span>
                    </div>
                    <div class="flex items-center">
                        <div class="w-[0.5rem] h-[0.5rem] rounded-[50%] bg-[#01AA44]">

                        </div>
                        <span class="pl-[0.5rem] text-[#191919] text-[1.1rem] font-normal" >{{ t('second.dynamicItem5') }}</span>
                    </div>
                </div>
                <div class="mt-[1.5rem]">
                    <RippleButton class="h-[3.25rem] w-[13.25rem] rounded-[4.18rem] bg-[#191919] text-[white] text-[1.25rem] 
                    font-medium hover:text-[#191919] border-[#191919] border-[1px]" :text="t('second.dynamicButton')" @btnClick="onFreeUse">
                    </RippleButton>
                </div>
            </div>
        </div>
    </ComponentLayout>
</template>
<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    import RippleButton from '../../components/RippleButton.vue'
    import ComponentLayout from '../ComponentLayout.vue'
    import { ref, onMounted, onBeforeUnmount } from 'vue'
    const emit = defineEmits(['onFreeUse'])
    const selected = ref(0)
    const { t } = useI18n()
    const secondRef = ref<HTMLElement>()
    let interval:any = null
    defineExpose({
        secondRef: secondRef
    })
    const onFreeUse = () => {
        emit('onFreeUse')
    }
    const onMouseEnter = (key:number) => {
        selected.value = key
        interval && clearInterval(interval)
    }
    onMounted(() => {
        interval = setInterval(() => {
            selected.value===0?selected.value=1:selected.value=0
        }, 5000);
    })
    onBeforeUnmount(() => {
        interval && clearInterval(interval)
    })
    const onMouseLeave = () => {
        interval = setInterval(() => {
            selected.value===0?selected.value=1:selected.value=0
        }, 5000);
    }
</script>