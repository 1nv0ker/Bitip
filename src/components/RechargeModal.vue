<template>
    <ModelComponent v-model="open" :title="t('buying.title2')" slotMode :width="'66rem'" @onCancel="onCancel">
        <div class="pb-[7.5rem] flex">
            <div class="w-[47.5rem] flex flex-col pt-[0.5rem] gap-[1.75rem] border-r-[1px] border-[#EBEFF8]">
                <div class="flex h-[3.625rem] items-center">
                    <div class="w-[10rem]">
                        <span class="text-[#666666] text-[1rem] font-medium">{{t('buying.form5')}}</span>
                    </div>
                    <div class="w-[37.5rem] flex ">
                        <span class="text-[#191919] text-[1.125rem] font-medium">￥{{ userStore.userInfo?.accountBalance }}</span>
                    </div>
                </div>
                <!-- <div class="flex h-[3.625rem] items-center">
                    <div class="w-[10rem]">
                        <span class="text-[#666666] text-[1rem] font-medium">{{t('buying.form2')}}</span>
                    </div>
                    <div class="w-[37.5rem] flex ">
                        <span class="text-[#191919] text-[1.125rem] font-medium">45171431741171074242563</span>
                    </div>
                </div> -->
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
                        ${payMethod==1?'border-[#01AA44] bg-[rgba(1,170,68,0.08)]':'border-[#EBEFF8] bg-[#FAFAFA]'}`" @click="payMethod=1;rechargeLink='';paying=false">
                            <img src="../assets/wechat1.png" class="w-[2rem] h-[2rem] rounded-[0.5rem] " />
                            <span>{{t('recharge.pay1')}}</span>
                            <div class=" absolute top-[-0.75rem] right-[-0.75rem] w-[1.5rem] h-[1.5rem] bg-[#01AA44] rounded-[0.75rem] flex items-center justify-center" v-show="payMethod==1" >
                                <span class="text-[white]">✔</span>
                            </div>
                        </div>
                        <div :class="`w-[10.875rem] h-[3.5rem] rounded-[0.75rem] border-[1px]  
                        flex justify-center items-center cursor-pointer relative gap-[1rem]
                        ${payMethod==0?'border-[#01AA44] bg-[rgba(1,170,68,0.08)]':'border-[#EBEFF8] bg-[#FAFAFA]'}`" @click="payMethod=0;rechargeLink='';paying=false">
                            <img src="../assets/alipay.png" class="w-[2rem] h-[2rem] rounded-[0.5rem] "/>
                            <span>{{t('recharge.pay2')}}</span>
                            <div class=" absolute top-[-0.75rem] right-[-0.75rem] w-[1.5rem] h-[1.5rem] bg-[#01AA44] rounded-[0.75rem] flex items-center justify-center" v-show="payMethod==0" >
                                <span class="text-[white]">✔</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pl-[10rem]" >
                    <!-- <input class="form-check-input customCheck w-[1.5rem] h-[1.5rem] mt-0" type="checkbox" value="" id="flexCheckDefault" v-model="checked"> -->
                    <span class=" text-[#191919] text-[0.9rem]">{{t('buying.subtitle')}}</span>
                    <span class="text-[#01AA44] cursor-pointer text-[0.9rem]" @click="onToRefund">《{{t('buying.content')}}》</span>
                    <span class="text-[#191919] cursor-pointer text-[0.9rem]">,{{t('buying.content2')}}</span>
                    <a-button :loading="loading" class="customAbutton h-[3.25rem] w-[9.625rem] rounded-[0.75rem] bg-[#01AA44] flex justify-center items-center cursor-pointer mt-[1.25rem]" @click="onConfirm" v-show="!paying">
                        <span class="text-[1.125rem] text-[white] font-medium ellipsis-single" :title="t('recharge.confirmButton')">{{t('recharge.confirmButton')}}</span>
                    </a-button>
                    <a-button :loading="loading" class="customAbutton h-[3.25rem] w-[9.625rem] rounded-[0.75rem] bg-[#01AA44] flex justify-center items-center cursor-pointer mt-[1.25rem]" @click="onComplate" v-show="paying">
                        <span class="text-[1.125rem] text-[white] font-medium ellipsis-single" :title="t('recharge.confirmButton2')">{{t('recharge.confirmButton2')}}</span>
                    </a-button>
                </div>
                <!-- <div class="pl-[10rem]">
                    <a-button :loading="loading" class="customAbutton h-[3.25rem] w-[9.625rem] rounded-[0.75rem] bg-[#01AA44] flex justify-center items-center cursor-pointer mt-[1.25rem]" @click="onConfirm">
                        <span class="text-[1.125rem] text-[white] font-medium">{{t('recharge.confirmButton')}}</span>
                    </a-button>
                    <a-button :loading="loading" class="customAbutton h-[3.25rem] w-[9.625rem] rounded-[0.75rem] bg-[#01AA44] flex justify-center items-center cursor-pointer mt-[1.25rem]" @click="onConfirm">
                        <span class="text-[1.125rem] text-[white] font-medium">{{t('recharge.confirmButton')}}</span>
                    </a-button>
                </div> -->
            </div>
            <div class="w-[17rem] flex flex-col justify-center items-center">
                <span v-show="rechargeLink" class="pb-[2rem] font-medium pl-[1rem] pr-[1rem]">{{t('form.name')}}: <span>{{produceName}}</span></span>
                <span v-show="rechargeLink" class="pb-[0.5rem] font-medium">{{t('form.tip')}}</span>
                <div class="w-[12.5rem] h-[12.5rem]" v-show="rechargeLink">
                    <a-qrcode :value="rechargeLink"  :size="12.5*16"/>
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
    import { RechargeBalance } from '../api/recharge'
    import useUserStore from '../store/user'
import { Modal } from 'ant-design-vue';
    const { t } = useI18n()
    const open = defineModel()
    const payMethod = ref(1)
    const userStore = useUserStore()
    const loading = ref(false)
    const router = useRouter()
    const rechargeLink = ref('')
    const produceName = ref('')
    const paying = ref(false)
    const props = defineProps({
        money:{
            type:Number,
            default:3000
        }
    })
    const init = () => {
        payMethod.value = 1
        paying.value = false
        rechargeLink.value = ''
    }
    defineExpose({
        init
    })
    const onToRefund = () => {
        const route = router.resolve({
            name: 'refundlaw',
        })
        window.open(route.href, '_blank')
    }
    const onConfirm = async () => {
        loading.value = true
        const res:any = await RechargeBalance({
            mealType: props.money,
            paymentType: payMethod.value
        })
        .catch(() => {
            loading.value = false
        })
        if (res.code == 200) {
            loading.value = false
            paying.value = true
        }
        
        //支付宝
        if (payMethod.value == 0) {
            if (res && res.code == 200) {
                produceName.value = res.body.orderName
                rechargeLink.value = res.body.url
            }
            // setTimeout(() => {
            //     window.open(res.body.url.url, '_blank')
            // }, 1000);
        }
        if (payMethod.value == 1) {
            if (res && res.code == 200) {
                produceName.value = res.body.orderName
                rechargeLink.value = res.body.url
            }
        }
    }
    const onComplate = () => {
        userStore.setUserInfo()
        open.value = false
    }
    const onCancel = () => {
        Modal.confirm({
            title: t('form.buy'),
            centered: true,
            onOk() {
                open.value = false
                userStore.setUserInfo()
                // emit('onComplate')
            },
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onCancel() {
                open.value = true
            },
        })
        // userStore.setUserInfo()
    }
</script>
