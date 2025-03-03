<template>
    <div class="w-full bg-[white] pt-[6.5625rem] pb-[8.25rem]" ref="secondRef">
        <div class="flex justify-center items-center">
            <span class="text-[#191919] text-[2.625rem] font-bold">{{t('second.title')}}</span>
        </div>
        <div class="flex mt-[2rem] justify-center items-center">
            <div class="w-[26.5rem] h-[3.25rem] border-[1px] border-[#191919] rounded-[6.25rem] flex p-[0.2rem]">
                <div :class="`w-[50%] h-full flex justify-center items-center rounded-[6.25rem] cursor-pointer ${selected==0?'bg-[#01AA44] text-[white]':'text-[#191919]'}`" @click="selected=0">
                    <span class="text-[1.25rem] font-medium">{{t('second.select1')}}</span>
                </div>
                <div :class="`w-[50%] h-full justify-center items-center flex rounded-[6.25rem] cursor-pointer ${selected==1?'bg-[#01AA44] text-[white]':'text-[#191919]'}`" @click="selected=1">
                    <span class=" text-[1.25rem] font-medium">{{t('second.select2')}}</span>
                </div>
            </div>
        </div>
        <div class="flex justify-center mt-[5.375rem] animate__animated animate__fadeIn" v-show="selected==0">
            <div class="w-[36.25rem] h-[25rem] bg-[#01AA44]"></div>
            <div class="w-[38.625rem] flex flex-col ml-[5.6rem]">
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
                    <!-- <div class="h-[3.25rem] w-[13.25rem] rounded-[4.18rem] bg-[#191919] flex justify-center items-center cursor-pointer">
                        <span class="text-[white] text-[1.25rem] font-medium">{{t('second.dynamicButton')}}</span>
                    </div> -->
                </div>
            </div>
        </div>

        <div class="flex justify-center mt-[5.375rem] animate__animated animate__fadeIn" v-show="selected==1">
            <div class="w-[36.25rem] h-[25rem] bg-[#01AA44]"></div>
            <div class="w-[38.625rem] flex flex-col ml-[5.6rem]">
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
    </div>
</template>
<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    import RippleButton from '../../components/RippleButton.vue'
    import { ref } from 'vue'
    const emit = defineEmits(['onFreeUse'])
    const selected = ref(0)
    const { t } = useI18n()
    const secondRef = ref<HTMLElement>()
    defineExpose({
        secondRef: secondRef
    })
    const onFreeUse = () => {
        emit('onFreeUse')
    }
</script>