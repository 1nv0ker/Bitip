<template>
    <ModelComponent v-model="open" :title="t('renew.title')" slotMode :width="'85rem'" @onCancel="onCancel">
        <div class="pb-[7.5rem] flex">
            <div class="w-[66.5rem] flex flex-col pt-[0.5rem] gap-[1.75rem] border-r-[1px] border-[#EBEFF8]">
                <div class="flex h-[3.625rem] items-center">
                    <div class="w-[10rem]">
                        <span class="text-[#666666] text-[1rem] font-medium">{{t('renew.form1')}}</span>
                    </div>
                    <!-- 选择续费周期 -->
                    <div class="w-[56.5rem] flex gap-[0.75rem]">
                        <div v-for="time in timeSelect" :style="{
                        flex: '0 0 calc(20% - 0.75rem * 4/5)'
                    }" :class=" `rounded-[0.75rem] border-[1px] relative border-[#E2E7E4] h-[5rem] flex items-center justify-between pl-[1rem] pr-[2rem] cursor-pointer bg-[white]
                        ${selected==time.key?'selected_city':''}`" @click="onSelectCycle(time)">
                            <div class=" absolute top-0 right-0 w-[2.5rem] h-[1.125rem] rounded-tr-[0.75rem] rounded-bl-[0.75rem] bg-[#4B3585] flex justify-center items-center">
                                <span class="text-[#FFEEC1] text-[0.75rem] font-medium">{{ time.discount }}{{ t('setmenu.off') }}</span>
                            </div>
                            <div class="h-full flex items-center">
                                <div class="w-[1rem] h-[1rem] rounded-[50%] border-[1px] border-[#191919] flex justify-center items-center box">
                                    <div class="w-[0.5rem] h-[0.5rem] bg-[white] rounded-[50%]">
                                        
                                    </div>
                                </div>
                                <div class="pl-[0.75rem] flex flex-col">
                                    <span class="text-[0.9rem]">{{time.name}}</span>
                                    <span class="text-[0.9rem]">￥{{time.price}}/{{t('renew.type2')}}</span>
                                    <span class="text-[0.9rem]">￥{{time.price_single}}/{{t('renew.type1')}}</span>
                                </div>
                                
                            </div>
                            <!-- <div>
                                <span class="text-[0.9rem]">￥{{selectRow.ispType==0?time.price:time.price_single}}/IP</span>
                            </div> -->
                        </div>
                    </div>
                </div>
                <div class="flex h-[5rem] items-center overflow-auto">
                    <div class="w-[10rem]">
                        <span class="text-[#666666] text-[1rem] font-medium">IP</span>
                    </div>
                   
                    <div class="w-[56.5rem] flex">
                        <span class="text-[#191919] text-[1.125rem] font-medium">{{selectRow?.map(item=>`${item.ip}(${item.ispType==0?t('renew.type2'):t('renew.type1')})`).join(',')}}</span>
                    </div>
                </div>
                <div class="flex h-[3.625rem] items-center">
                    <div class="w-[10rem]">
                        <span class="text-[#666666] text-[1rem] font-medium">{{t('buying.form5')}}</span>
                    </div>
                    <div class="w-[37.5rem] flex ">
                        <span class="text-[#191919] text-[1.125rem] font-medium">￥{{ userStore.userInfo?.accountBalance || 0 }}</span>
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
                            <span class="text-[#01AA44] text-[1.25rem] font-bold">￥{{price}}</span>
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
                        <div :class="`w-[10.875rem] h-[3.5rem] rounded-[0.75rem] border-[1px]  
                            flex justify-center items-center cursor-pointer relative gap-[1rem]
                        ${payMethod==2?'border-[#01AA44] bg-[rgba(1,170,68,0.08)]':'border-[#EBEFF8] bg-[#FAFAFA]'}`" @click="payMethod=2;rechargeLink='';paying=false">
                            <img src="../assets/pay3.png" class="w-[2rem] h-[2rem] rounded-[0.5rem]"/>
                            <span>{{t('recharge.pay3')}}</span>
                            <div class=" absolute top-[-0.75rem] right-[-0.75rem] w-[1.5rem] h-[1.5rem] bg-[#01AA44] rounded-[0.75rem] flex items-center justify-center" v-show="payMethod==2" >
                                <span class="text-[white]">✔</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pl-[10rem] text-left">
                    <!-- <input class="form-check-input customCheck w-[1.5rem] h-[1.5rem] mt-0" type="checkbox" value="" id="flexCheckDefault" v-model="checked"> -->
                    <span class=" text-[#191919] text-[0.9rem]">{{t('buying.subtitle')}}</span>
                    <span class="text-[#01AA44] cursor-pointer text-[0.9rem]" @click="onToRefund">《{{t('buying.content')}}》</span>
                    <span class="text-[#191919] cursor-pointer text-[0.9rem]">,{{t('buying.content2')}}</span>
                    <a-button :loading="loading" class="customAbutton h-[3.25rem] w-[9.625rem] rounded-[0.75rem] bg-[#01AA44] flex justify-center items-center cursor-pointer mt-[1.25rem]" @click="onConfirm" v-show="!paying">
                        <span class="text-[1.125rem] text-[white] font-medium">{{t('recharge.confirmButton')}}</span>
                    </a-button>
                    <a-button :loading="loading" class="customAbutton h-[3.25rem] w-[9.625rem] rounded-[0.75rem] bg-[#01AA44] flex justify-center items-center cursor-pointer mt-[1.25rem]" @click="onComplate" v-show="paying">
                        <span class="text-[1.125rem] text-[white] font-medium">{{t('recharge.confirmButton2')}}</span>
                    </a-button>
                </div>
            </div>
            <div class="w-[17rem] flex flex-col justify-center items-center">
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
    import { ref, type PropType, computed, toRefs} from 'vue'
    import { useI18n } from 'vue-i18n'
    import { SetStaticRenew } from '../api/recharge'
    import useUserStore from '../store/user'
    import { useRouter } from 'vue-router';
    import { message } from 'ant-design-vue';
    const { t } = useI18n()
    const router = useRouter()
    const open = defineModel()
    const payMethod = ref(0)
    const loading = ref(false)
    const userStore = useUserStore()
    const rechargeLink = ref('')
    const paying = ref(false)
    const price = ref(0)
    //选中周期
    const selected = ref(1)
    // const checked = ref(false)
    const props = defineProps({
        selectRow: {
            type:Array as PropType<any[]>,
            default:[]
        }
    })
    const emit = defineEmits(['onComplate'])
    const init = () => {
        payMethod.value = 1
        paying.value = false
        rechargeLink.value = ''
        const { selectRow } = toRefs(props)
        // console.log(selectRow.value)
        // // console.log(toRefs(props.selectRow))
        // debugger
        const total = selectRow.value.reduce((a,b)=>{

            return a + (b.ispType===0?45:23)
        }, 0)
        price.value = total
    }
    defineExpose({
        init
    })
    //周期选择
    const timeSelect = computed(()=> {
        return [
            {
                name:t('setmenu.time1'),
                price: 45,
                price_single:23,
                key: 1,
                discount: 9
            },
            {
                name:t('setmenu.time2'),
                price: 84,
                key: 2,
                price_single:42,
                discount: 8.4
            },
            {
                name:t('setmenu.time3'),
                price: 114,
                key: 3,
                price_single:57,
                discount: 7.6
            },
            {
                name:t('setmenu.time4'),
                price: 198,
                key: 6,
                discount: 6.6,
                price_single:99,
            },
            {
                name:t('setmenu.time5'),
                price: 336,
                key: 12,
                discount: 5.6,
                price_single:168,
            }
        ]
    })
    const onToRefund = () => {
        const route = router.resolve({
            name: 'refundlaw',
        })
        window.open(route.href, '_blank')
    }
    const onSelectCycle = (time:any) => {
        selected.value = time.key
        const { selectRow } = toRefs(props)

        const total = selectRow.value.reduce((a,b)=>{

            return a + (b.ispType===0?time.price:time.price_single)
        }, 0)
        price.value = total
        // price.value =  props.selectRow.ispType==0?time.price:time.price_single
    }
    const onConfirm = async () => {
        loading.value = true
        const res:any = await SetStaticRenew({
            paymentType: payMethod.value,
            purchaseMonth: selected.value,
            ids:props.selectRow?.map(item=>item.id)
        })
        .catch(() => {
            loading.value = false
        })
        loading.value = false
        if (res && res.code == 200) {
            paying.value = true
            message.success(t('form.success'))
        }
        if (payMethod.value == 2) {
            userStore.setUserInfo()
        }
        //支付宝
        if (payMethod.value == 1) {
            if (res && res.code == 200) {
                rechargeLink.value = res.body.url
            }
        }
        //支付宝
        if (payMethod.value == 0) {
            if (res && res.code == 200) {
                rechargeLink.value = res.body.url
            }
        }
    }
    const onComplate = () => {
        userStore.setUserInfo()
        emit('onComplate')
        open.value = false
    }
    const onCancel = () => {
        userStore.setUserInfo()
        emit('onComplate')
        open.value = false
    }
</script>
<style lang="less" scoped>
    .selected_city {
            background: linear-gradient( 95deg, #4B3585 0%, #342B4B 100%);
            color:#FFFFFF;
            .box {
                border-color: white;
            }
        }
</style>