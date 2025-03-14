<template>
    <div class="w-full rounded-[1.5rem] bg-white p-[1.75rem] h-full">
        <div class="w-full pb-[1.5rem] border-b-[1px] border-[#EBEFF8]">
            <span>{{t('recharge.title')}}</span>
        </div>
        <div class="w-full flex justify-center pt-[6.25rem]">
            <div class="flex flex-col">
                <div class="flex gap-[6.25rem] items-center">
                    <div class="w-[8rem] max-w-[8rem]">
                        <span class="text-[#666666] text-[1rem] font-medium">{{t('recharge.form1')}}</span>
                    </div>
                    <span class="text-[#191919] text-[1.5rem] font-bold">￥{{Balance}}</span>
                </div>
                <div class="flex gap-[6.25rem] items-center mt-[1.5rem] ">
                    <div class="w-[8rem] max-w-[8rem]">
                        <span class="text-[#666666] text-[1rem] font-medium">{{t('recharge.form2')}}</span>
                    </div>
                    <span class="text-[#191919] text-[1.125rem] font-medium">{{orderNum}}</span>
                </div>
                <div class="flex gap-[6.25rem] mt-[1.5rem]">
                    <div class="w-[8rem] max-w-[8rem] h-[3.5rem] items-center flex">
                        <span class="text-[#666666] text-[1rem] font-medium">{{t('recharge.form1')}}</span>
                    </div>
                    <div class="flex flex-col gap-[1.25rem]">
                        <div class="h-[3.5rem] w-[21.75rem] bg-[#FAFAFA] rounded-[0.75rem] border-[1px] border-[#EBEFF8] recharge_amount">
                            <a-input-number v-model:value="amount"  style="width: 100%" :controls="false" :formatter="onParser"/>
                        </div>
                        <div class="h-[3.5rem] gap-[1.25rem] flex">
                            <div class="w-[10.25rem] h-full bg-[#FAFAFA] rounded-[0.75rem] border-[1px] border-[#EBEFF8] flex justify-center items-center cursor-pointer" @click="amount=50">
                                <span class="text-[#01AA44] text-[1.25rem] font-bold">￥50</span>
                            </div>
                            <div class="w-[10.25rem] h-full bg-[#FAFAFA] rounded-[0.75rem] border-[1px] border-[#EBEFF8] flex justify-center items-center cursor-pointer" @click="amount=100">
                                <span class="text-[#01AA44] text-[1.25rem] font-bold">￥100</span>
                            </div>
                            <div class="w-[10.25rem] h-full bg-[#FAFAFA] rounded-[0.75rem] border-[1px] border-[#EBEFF8] flex justify-center items-center cursor-pointer" @click="amount=500">
                                <span class="text-[#01AA44] text-[1.25rem] font-bold">￥500</span>
                            </div>
                            <div class="w-[10.25rem] h-full bg-[#FAFAFA] rounded-[0.75rem] border-[1px] border-[#EBEFF8] flex justify-center items-center cursor-pointer" @click="amount=1000">
                                <span class="text-[#01AA44] text-[1.25rem] font-bold">￥1000</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex gap-[6.25rem] items-center mt-[1.5rem]">
                    <div class="w-[8rem] max-w-[8rem] h-[3.5rem]">
                        <span class="text-[#666666] text-[1rem] font-medium">{{t('recharge.form4')}}</span>
                    </div>
                   <div>
                    <div class="flex gap-[1.25rem] h-[3.5rem]">
                        <div :class="`w-[16rem] h-[3.5rem] rounded-[0.75rem] border-[1px]  
                        flex justify-center items-center cursor-pointer relative gap-[1rem]
                        ${payMethod==0?'border-[#01AA44] bg-[rgba(1,170,68,0.08)]':'border-[#EBEFF8] bg-[#FAFAFA]'}`" @click="payMethod=0">
                            <img src="../../../assets/wechat.png" class="w-[2rem] h-[2rem] rounded-[0.5rem] " />
                            <span>{{t('recharge.pay1')}}</span>
                            <div class=" absolute top-[-0.75rem] right-[-0.75rem] w-[1.5rem] h-[1.5rem] bg-[#01AA44] rounded-[0.75rem] flex items-center justify-center" v-show="payMethod==0" >
                                <span class="text-[white]">✔</span>
                            </div>
                        </div>
                        <div :class="`w-[16rem] h-[3.5rem] rounded-[0.75rem] border-[1px]  
                        flex justify-center items-center cursor-pointer relative gap-[1rem]
                        ${payMethod==1?'border-[#01AA44] bg-[rgba(1,170,68,0.08)]':'border-[#EBEFF8] bg-[#FAFAFA]'}`" @click="payMethod=1">
                            <img src="../../../assets/alipay.png" class="w-[2rem] h-[2rem] rounded-[0.5rem] "/>
                            <span>{{t('recharge.pay2')}}</span>
                            <div class=" absolute top-[-0.75rem] right-[-0.75rem] w-[1.5rem] h-[1.5rem] bg-[#01AA44] rounded-[0.75rem] flex items-center justify-center" v-show="payMethod==1" >
                                <span class="text-[white]">✔</span>
                            </div>
                        </div>
                        <div :class="`w-[16rem] h-[3.5rem] rounded-[0.75rem] border-[1px]  
                        flex justify-center items-center cursor-pointer relative gap-[1rem]
                        ${payMethod==2?'border-[#01AA44] bg-[rgba(1,170,68,0.08)]':'border-[#EBEFF8] bg-[#FAFAFA]'}`" @click="payMethod=2">
                            <img src="../../../assets/alipay.png" class="w-[2rem] h-[2rem] rounded-[0.5rem]"/>
                            <span>{{t('recharge.pay3')}}</span>
                            <div class=" absolute top-[-0.75rem] right-[-0.75rem] w-[1.5rem] h-[1.5rem] bg-[#01AA44] rounded-[0.75rem] flex items-center justify-center" v-show="payMethod==2" >
                                <span class="text-[white]">✔</span>
                            </div>
                        </div>
                    </div>
                    <div class="mt-[1.25rem] items-center flex">
                        <input class="form-check-input customCheck w-[1.5rem] h-[1.5rem] mt-0" type="checkbox" value="" id="flexCheckDefault" v-model="checked">
                        <label class="text-[#111111] text-[0.875rem] pl-[0.75rem] bitip_font_family font-normal" for="flexCheckDefault">
                            {{t('login.agree')}} 
                        </label>
                        <Law />
                    </div>
                    <div class="mt-[2rem]">
                        <div class=" cursor-pointer bg-[#01AA44] w-[13.25rem] h-[3.25rem] rounded-[0.75rem] flex justify-center items-center">
                            <span class="text-[1.25rem] text-[white] font-medium">{{t('recharge.button')}}</span>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import Law from '../../login/Law.vue'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const Balance = ref(344)
    const orderNum = ref('45171431741171074242563')
    const amount = ref(0)
    const checked = ref(false)
    const payMethod = ref(0)
    const onParser = (value:number) => {
        return `￥${value}`
    }
</script>
<style lang="less">
    .recharge_amount {
        color:#01AA44;
        font-size: 1.25rem;
        .ant-input-number-input-wrap {
            &>input {
                height: 3.5rem!important;
                color:#01AA44;
                font-size: 1.25rem!important;
            }
        }
        .ant-input-number-prefix {
            color:#01AA44;
            font-size: 1.25rem!important;
        }
        
    }
</style>