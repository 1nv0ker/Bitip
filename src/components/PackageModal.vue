<template>
    <ModelComponent v-model="open" :title="t('buying.title1')" slotMode :width="'66rem'">
        <div class="pb-[7.5rem] flex">
            <div class="w-[47.5rem] flex flex-col pt-[0.5rem] gap-[1.75rem] border-r-[1px] border-[#EBEFF8]">
                <div class="flex h-[3.625rem] items-center">
                    <div class="w-[10rem]">
                        <span class="text-[#666666] text-[1rem] font-medium">{{t('buying.form1')}}</span>
                    </div>
                    <div class="w-[37.5rem] flex">
                        <span class="text-[#191919] text-[1.125rem] font-medium">{{packageName}}</span>
                    </div>
                </div>
                <div class="flex h-[3.625rem] items-center">
                    <div class="w-[10rem]">
                        <span class="text-[#666666] text-[1rem] font-medium">{{t('buying.form5')}}</span>
                    </div>
                    <div class="w-[37.5rem] flex ">
                        <span class="text-[#191919] text-[1.125rem] font-medium">￥500</span>
                    </div>
                </div>
                <div class="flex h-[3.625rem] items-center">
                    <div class="w-[10rem]">
                        <span class="text-[#666666] text-[1rem] font-medium">{{t('buying.form2')}}</span>
                    </div>
                    <div class="w-[37.5rem] flex ">
                        <span class="text-[#191919] text-[1.125rem] font-medium">45171431741171074242563</span>
                    </div>
                </div>
                <div class="flex h-[3.625rem] items-center">
                    <div class="w-[10rem]">
                        <span class="text-[#666666] text-[1rem] font-medium">{{t('buying.form3')}}</span>
                    </div>
                    <div class="w-[37.5rem] flex">
                        <div class="w-[27.5rem] h-[3.625rem] border-[1px] border-[#EBEFF8] rounded-[0.75rem] bg-[#FAFAFA] flex  items-center pl-[1.25rem]">
                            <span class="text-[#01AA44] text-[1.25rem] font-bold">￥{{money}}</span>
                        </div>
                    </div>
                </div>
                <div class="flex h-[3.625rem] items-center">
                    <div class="w-[10rem]">
                        <span class="text-[#666666] text-[1rem] font-medium">{{t('buying.form4')}}</span>
                    </div>
                    <div class="w-[37.5rem] flex gap-[1.25rem]">
                        <div :class="`w-[10.875rem] h-[3.5rem] rounded-[0.75rem] border-[1px]  
                        flex justify-center items-center cursor-pointer relative gap-[1rem]
                        ${payMethod==0?'border-[#01AA44] bg-[rgba(1,170,68,0.08)]':'border-[#EBEFF8] bg-[#FAFAFA]'}`" @click="payMethod=0">
                            <img src="../assets/wechat.png" class="w-[2rem] h-[2rem] rounded-[0.5rem] " />
                            <span>{{t('recharge.pay1')}}</span>
                            <div class=" absolute top-[-0.75rem] right-[-0.75rem] w-[1.5rem] h-[1.5rem] bg-[#01AA44] rounded-[0.75rem] flex items-center justify-center" v-show="payMethod==0" >
                                <span class="text-[white]">✔</span>
                            </div>
                        </div>
                        <div :class="`w-[10.875rem] h-[3.5rem] rounded-[0.75rem] border-[1px]  
                        flex justify-center items-center cursor-pointer relative gap-[1rem]
                        ${payMethod==1?'border-[#01AA44] bg-[rgba(1,170,68,0.08)]':'border-[#EBEFF8] bg-[#FAFAFA]'}`" @click="payMethod=1">
                            <img src="../assets/alipay.png" class="w-[2rem] h-[2rem] rounded-[0.5rem] "/>
                            <span>{{t('recharge.pay2')}}</span>
                            <div class=" absolute top-[-0.75rem] right-[-0.75rem] w-[1.5rem] h-[1.5rem] bg-[#01AA44] rounded-[0.75rem] flex items-center justify-center" v-show="payMethod==1" >
                                <span class="text-[white]">✔</span>
                            </div>
                        </div>
                        <div :class="`w-[10.875rem] h-[3.5rem] rounded-[0.75rem] border-[1px]  
                            flex justify-center items-center cursor-pointer relative gap-[1rem]
                        ${payMethod==2?'border-[#01AA44] bg-[rgba(1,170,68,0.08)]':'border-[#EBEFF8] bg-[#FAFAFA]'}`" @click="payMethod=2">
                            <img src="../assets/pay3.png" class="w-[2rem] h-[2rem] rounded-[0.5rem]"/>
                            <span>{{t('recharge.pay3')}}</span>
                            <div class=" absolute top-[-0.75rem] right-[-0.75rem] w-[1.5rem] h-[1.5rem] bg-[#01AA44] rounded-[0.75rem] flex items-center justify-center" v-show="payMethod==2" >
                                <span class="text-[white]">✔</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pl-[10rem]">
                    <!-- <input class="form-check-input customCheck w-[1.5rem] h-[1.5rem] mt-0" type="checkbox" value="" id="flexCheckDefault" v-model="checked"> -->
                    <span class="pl-[0.75rem] text-[#191919] text-[0.9rem]">{{t('buying.subtitle')}}</span>
                    <span class="text-[#01AA44] cursor-pointer text-[0.9rem]" @click="onToRefund">《{{t('buying.content')}}》</span>
                    <span class="text-[#191919] cursor-pointer text-[0.9rem]">,{{t('buying.content2')}}</span>
                    <div class="h-[3.25rem] w-[9.625rem] rounded-[0.75rem] bg-[#01AA44] flex justify-center items-center cursor-pointer mt-[1.25rem]">
                        <span class="text-[1.125rem] text-[white] font-medium">{{t('recharge.confirmButton')}}</span>
                   </div>
                </div>
            </div>
            <div class="w-[17rem] flex justify-center items-center">
                <div class="w-[12.5rem] h-[12.5rem] bg-[#01AA44]">

                </div>
            </div>
        </div>
        
    </ModelComponent>
</template>
<script setup lang="ts">
    import ModelComponent from '../views/usercenter/ModelComponent.vue';
    import { ref } from 'vue'
    import { useI18n } from 'vue-i18n'
    import { useRouter } from 'vue-router';
    const { t } = useI18n()
    const router = useRouter()
    const open = defineModel()
    const payMethod = ref(0)
    // const checked = ref(false)
    defineProps({
        money:{
            type:Number,
            default:3000
        },
        packageName: String
    })
    const onToRefund = () => {
        const route = router.resolve({
            name: 'refundlaw',
        })
        window.open(route.href, '_blank')
    }
</script>
