<template>
    <div class="w-full animate__slideInRight animate__animated overflow-hidden">
        <div class="w-full flex gap-x-[1.25rem] justify-center overflow-hidden">
            <div v-for="card in cards.slice(0,3)" class="p-[2rem] flex flex-col justify-evenly relative w-[19rem] h-[22.125rem] rounded-[1.5rem]" style="background: linear-gradient( 161deg, #F2EDFF 0%, #FFFFFF 100%);">
                <div class=" absolute top-0 right-0 rounded-tr-[1.5rem] rounded-bl-[1.5rem] w-[6.875rem] h-[4rem]  flex justify-center items-center">
                    <img src="../../assets/recharge/box.png" class="w-full h-full absolute"/>
                    <span class="text-[#FFEEC1] text-[1.625rem] pl-[0.75rem] w-full font-bold z-50 text-center flex-wrap">{{ t('setmenu.deliver') }}{{card.deliver}}</span>
                </div>
                <div class="w-full flex flex-col text-[#191919] font-bold text-left">
                    <span class="text-[2.125rem]">{{t('setmenu.arrival')}}</span>
                    <span class="text-[4.125rem]"><span class="text-[2.225rem]">￥</span>{{card.arrival}}</span>
                </div>
                <div class="w-full h-[3.25rem] rounded-[1.5rem]  cursor-pointer flex justify-center items-center" style="background: linear-gradient( 95deg, #4B3585 0%, #342B4B 100%);" @click="onRecharge(card.recharge)">
                    <span class="text-[#FFEEC1] text-[1.125rem] font-medium">{{t('setmenu.recharge')}}{{card.recharge}}</span>
                </div>
            </div>
        </div>
        <div class="w-full flex gap-x-[1.25rem] justify-center mt-[1.125rem] overflow-hidden">
            <div v-for="card in cards.slice(3,4)" class="p-[2rem] flex flex-col justify-center relative w-[19rem] h-[22.125rem] rounded-[1.5rem]" style="background: linear-gradient( 161deg, #F2EDFF 0%, #FFFFFF 100%);">
                <!-- <div class=" absolute top-0 right-0 rounded-tr-[1.5rem] rounded-bl-[1.5rem] w-[8rem] h-[2.25rem] bg-[#4B3585] flex justify-center items-center">
                    <span class="text-[#FFEEC1] text-[1.625rem] font-bold">{{ t('setmenu.deliver') }}{{card.deliver}}</span>
                </div> -->
                <div class=" absolute top-0 right-0 rounded-tr-[1.5rem] rounded-bl-[1.5rem] w-[6.875rem] h-[4rem]  flex justify-center items-center">
                    <img src="../../assets/recharge/box.png" class="w-full h-full absolute"/>
                    <span class="text-[#FFEEC1] text-[1.625rem] pl-[0.75rem] w-full font-bold z-50 text-center flex-wrap">{{ t('setmenu.deliver') }}{{card.deliver}}</span>
                </div>
                <div class="w-full flex flex-col text-[#191919] font-bold text-left">
                    <span class="text-[2.125rem]">{{t('setmenu.arrival')}}</span>
                    <span class="text-[4.125rem] "><span class="text-[2.225rem]">￥</span>{{card.arrival}}</span>
                </div>
                <div class="w-full h-[3.25rem] rounded-[1.5rem] mt-[2.625rem] cursor-pointer flex justify-center items-center z-50" style="background: linear-gradient( 95deg, #4B3585 0%, #342B4B 100%);"
                @click="onRecharge(card.recharge)" >
                    <span class="text-[#FFEEC1] text-[1.125rem] font-medium">{{t('setmenu.recharge')}}{{card.recharge}}</span>
                </div>
            </div>
            <div  class="p-[2rem] flex flex-col relative w-[19rem] h-[22.125rem] rounded-[1.5rem]" style="background: linear-gradient( 161deg, #F2EDFF 0%, #FFFFFF 100%);">
                <div class="w-full h-[6rem] flex items-center" >
                    <span class="text-[#501A06] text-[1.5rem] font-bold">{{t('setmenu.illustrate')}}</span>
                </div>
                <div class="flex flex-col gap-[1.25rem]">
                    <div class="w-full flex justify-between">
                        <span class="text-[#702B12] text-[1.125rem]">1000</span>
                        <span class="text-[#702B12] text-[1.125rem]">{{ t('setmenu.deliver') }}50</span>
                        <span class="text-[#702B12] text-[1.125rem]">{{t('setmenu.arrival')}}1050</span>
                    </div>
                    <div class="w-full flex justify-between">
                        <span class="text-[#702B12] text-[1.125rem]">2000</span>
                        <span class="text-[#702B12] text-[1.125rem]">{{ t('setmenu.deliver') }}150</span>
                        <span class="text-[#702B12] text-[1.125rem]">{{t('setmenu.arrival')}}2150</span>
                    </div>
                    <div class="w-full flex justify-between">
                        <span class="text-[#702B12] text-[1.125rem]">5000</span>
                        <span class="text-[#702B12] text-[1.125rem]">{{ t('setmenu.deliver') }}450</span>
                        <span class="text-[#702B12] text-[1.125rem]">{{t('setmenu.arrival')}}5450</span>
                    </div>
                    <div class="w-full flex justify-between">
                        <span class="text-[#702B12] text-[1.125rem]">10000</span>
                        <span class="text-[#702B12] text-[1.125rem]">{{ t('setmenu.deliver') }}1000</span>
                        <span class="text-[#702B12] text-[1.125rem]">{{t('setmenu.arrival')}}11000</span>
                    </div>
                </div>
            </div>
        </div>
        <RechargeModal v-model="open" ref="rechargeRef" :money="cost"/>
        <UserAuthTips v-model="open2"/>
    </div>
</template>
<script setup lang="ts">
    import { computed, ref, nextTick } from 'vue'
    import RechargeModal from '../../components/RechargeModal.vue'
    import UserAuthTips from '../../components/UserAuthTips.vue'
    import { isLogin, isVerify} from '../../hooks/userAuth'
    import { useRouter } from 'vue-router'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const router = useRouter()
    const rechargeRef = ref<any>()
    const open = ref(false)
    const open2 = ref(false)
    const cost = ref(0)
    const cards = computed(() => {
        return [
            {
                deliver:50,
                key: 1,
                arrival: 1050,
                recharge: 1000
            },
            {
                deliver:150,
                key: 2,
                arrival: 2150,
                recharge: 2000
            },
            {
                deliver:450,
                key: 3,
                arrival: 5450,
                recharge: 5000
            },
            {
                deliver:1000,
                key: 4,
                arrival: 11000,
                recharge: 10000
            }
        ]
    })
    const onRecharge = (value:number) => {
        if (!isLogin()) {
            router.push({path:'/login'})
            return
        }
        if (!isVerify()) {
            open2.value = true
            return
        }
        cost.value = value
        open.value = true
        nextTick(() => {
            rechargeRef.value.init()
        })
    }
</script>