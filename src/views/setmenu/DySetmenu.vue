<template>
    <div class="w-full animate__slideInLeft animate__animated" >
        <!-- style="grid-template-columns: repeat(4, 19rem);grid-template-rows: repeat(2, 22.125rem);" -->
        <div class="flex gap-x-[1rem] justify-center">
            <div v-for="card in cards.slice(0,4)" :class="`p-[2rem] w-[19rem] h-[22.125rem] basic_card rounded-[1.5rem] ${selected==card.key?'normal_card':'normal_card'}`"
            @mouseleave="selected=0"
            @mouseenter="selected=card.key">
                <div class="w-full flex flex-col">
                    <span class="text-[#191919] text-[1.5rem] font-bold title">{{card.title}}</span>
                    <div class="w-full flex justify-between items-baseline">
                        <span class="text-[3rem] text-[#191919] font-bold price1_value">{{card.value}}G</span>
                        <span class="text-[#191919] text-[1.5rem] font-bold price1">￥{{card.price}}</span>
                    </div>
                </div>
                <div class="w-full pt-[2rem]">
                    <div class="w-full flex justify-between">
                        <span class="text-[#191919] text-[1.125rem] price2_label">- {{t('setmenu.price')}}</span>
                        <span class="text-[#191919] text-[1.125rem] font-semibold price2_value">￥{{ card.unitPrice }}/GB</span>
                    </div>
                    <div class="w-full flex justify-between">
                        <span class="text-[#191919] text-[1.125rem] originPrice_label">- {{t('setmenu.originPrice')}}</span>
                        <span class="text-[#702B12] text-[1.125rem] font-semibold originPrice_value line-through">{{ card.originPrice }}</span>
                    </div>
                </div>
                <div class="w-full flex justify-center mt-[1.5rem]" @click="onRecharge(card.title, card.price, card.value, card.custom)">
                    <div style="" class="discount_button rounded-[3.5rem] w-[15.25rem] h-[3.25rem] flex justify-center items-center cursor-pointer bitip_button">
                        <span class="text-[#FFEEC1] text-[1rem] font-medium bitip_button">{{t('setmenu.discount')}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex gap-x-[1rem] justify-center mt-[1.5rem]">
            <div v-for="card in cards.slice(4,6)" :class="`p-[2rem] basic_card w-[19rem] h-[22.125rem] rounded-[1.5rem] ${selected==card.key?'normal_card':'normal_card'}`"
            @mouseleave="selected=0"
            @mouseenter="selected=card.key">
                <div class="w-full flex flex-col">
                    <span class="text-[#191919] text-[1.5rem] font-bold title">{{card.title}}</span>
                    <div class="flex justify-between items-baseline" v-if="!card.custom">
                        <span class="text-[3rem] text-[#191919] font-bold price1_value" >{{card.value}}G</span>
                        <span class="text-[#191919] text-[1.5rem] font-bold price1">￥{{card.price}}</span>
                    </div>
                    <div class="flex justify-between items-baseline" v-else>
                        <span class="text-[3rem] text-[#191919] font-bold price1_value" >{{card.subtitle}}</span>
                        <!-- <span class="text-[#191919] text-[1.5rem] font-bold price1">￥{{card.price}}</span> -->
                    </div>
                </div>
                <div class="w-full pt-[2rem]">
                    <div class="w-full flex justify-between" v-if="card.custom" style="visibility: hidden;">
                        <span class="text-[#191919] text-[1.125rem] originPrice_label">- {{t('setmenu.originPrice')}}</span>
                        <span class="text-[#702B12] text-[1.125rem] font-semibold originPrice_value line-through">￥{{ card.originPrice }}</span>
                    </div>
                    <div class="w-full flex justify-between" >
                        <span class="text-[#191919] text-[1.125rem] price2_label">- {{t('setmenu.price')}}</span>
                        <span class="text-[#191919] text-[1.125rem] font-semibold price2_value">￥{{ card.custom?card.title:card.unitPrice +'/GB'}}</span>
                    </div>
                    <div class="w-full flex justify-between" v-if="!card.custom">
                        <span class="text-[#191919] text-[1.125rem] originPrice_label">- {{t('setmenu.originPrice')}}</span>
                        <span class="text-[#702B12] text-[1.125rem] font-semibold originPrice_value line-through">{{ card.originPrice }}</span>
                    </div>
                </div>
                <div class="w-full flex justify-center mt-[1.5rem]" >
                    <div style="" class="discount_button rounded-[3.5rem] bitip_button w-[15.25rem] h-[3.25rem] flex justify-center items-center cursor-pointer" @click="onRecharge(card.title, card.price,card.value, card.custom)">
                        <span class="text-[#FFEEC1] text-[1rem] font-medium">{{card.custom?t('setmenu.menu6_button'):t('setmenu.discount')}}</span>
                    </div>
                </div>
            </div>
            <div  class="p-[2rem] min-w-[19rem] h-[22.125rem] rounded-[1.5rem]" style="background: linear-gradient( 161deg, #F2EDFF 0%, #FFFFFF 100%);">
                <!-- <span class="text-[#501A06] text-[1.5rem] font-bold">{{t('setmenu.title2')}}</span> -->
                <div class="w-full mt-[2rem] gap-[0.75rem] flex flex-col">
                    <div class="w-full flex justify-between">
                        <span class="text-[#702B12] text-[1.125rem]">{{t('setmenu.content1')}}</span>
                        <span class="text-[#702B12]">✔</span>
                    </div>
                    <div class="w-full flex justify-between">
                        <span class="text-[#702B12] text-[1.125rem]">{{t('setmenu.content2')}}</span>
                        <span class="text-[#702B12]">✔</span>
                    </div>
                    <div class="w-full flex justify-between">
                        <span class="text-[#702B12] text-[1.125rem]">{{t('setmenu.content3')}}</span>
                        <span class="text-[#702B12]">✔</span>
                    </div>
                    <div class="w-full flex justify-between">
                        <span class="text-[#702B12] text-[1.125rem]">{{t('setmenu.content4')}}</span>
                        <span class="text-[#702B12]">✔</span>
                    </div>
                    <div class="w-full flex justify-between">
                        <span class="text-[#702B12] text-[1.125rem]">{{t('setmenu.content5')}}</span>
                        <span class="text-[#702B12]">✔</span>
                    </div>
                    <div class="w-full flex justify-between">
                        <span class="text-[#702B12] text-[1.125rem]">{{t('setmenu.content6')}}</span>
                        <span class="text-[#702B12]">✔</span>
                    </div>
                </div>
            </div>
        </div>
        <PackageModal v-model="open" :packageName="packageName"  :money="cost" :type="selectType" ref="modalRef" />
        <UserAuthTips v-model="open2"/>
    </div>
</template>
<script setup lang="ts">
    import { computed, ref, nextTick } from 'vue'
    import PackageModal from '../../components/PackageModal.vue'
    import UserAuthTips from '../../components/UserAuthTips.vue'
    import { isLogin} from '../../hooks/userAuth'
    import { useRouter } from 'vue-router'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const selected = ref(0)
    const cost = ref(0)
    const open = ref(false)
    const open2 = ref(false)
    const packageName = ref('')
    const selectType = ref(0)
    const modalRef = ref<any>()
    const router = useRouter()
    const emit = defineEmits(['onOpenContact'])
    const cards = computed(() => {
        return [
            {
                key: 1,
                title: t('setmenu.menu1'),
                value: 5,
                price: 100,
                unitPrice: 20,
                originPrice: 180,

            },
            {
                key: 2,
                title: t('setmenu.menu2'),
                value: 25,
                price: 400,
                unitPrice: 16,
                originPrice: 900,

            },
            {
                key: 3,
                title: t('setmenu.menu3'),
                value: 100,
                price: 1300,
                unitPrice: 13,
                originPrice: 3600,

            },
            {
                key: 4,
                title: t('setmenu.menu4'),
                value: 300,
                price: 3000,
                unitPrice: 10,
                originPrice: 10800,

            },
            {
                key: 5,
                title: t('setmenu.menu5'),
                value: 1000,
                price: 8000,
                unitPrice: 8,
                originPrice: 36000,

            },
            {
                key: 6,
                title: t('setmenu.menu6_title'),
                subtitle:t('setmenu.menu6'),
                value: 18000,
                price: 100,
                unitPrice: 6,
                custom:true,
                originPrice: 108000,

            }
        ]
    })
    const onRecharge = (title:string,price:number,value:number, custom:any) => {
        if (!isLogin()) {
            
            router.push({path:'/login'})
            return
        }
        if (custom) {
            emit('onOpenContact')
            return
        }
        // if (!isVerify()) {
        //     open2.value = true
        //     return
        // }
        open.value = true
        nextTick(() => {
            modalRef.value.init()
        })
        cost.value = price
        selectType.value = value
        packageName.value = t('setmenu.subtitle1')+'-'+title

    }
</script>
<style lang="less" scoped>
    .normal_card {
        background: linear-gradient( 161deg, #F2EDFF 0%, #FFFFFF 100%);
        .discount_button {
            background: linear-gradient( 95deg, #4B3585 0%, #342B4B 100%);
        }
        transition: all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* 自定义缓动曲线 */
    }
    .normal_card {
        &:hover {
            // animation-play-state: paused;
            background: url('../../assets/bei.png?inline');
            background-size:cover;
            background-repeat:no-repeat;
            .title,.price1_value, .price1 {
                color: white;
            }
            .price2_label,.originPrice_value,.originPrice_label {
                color:rgba(255,255,255,0.6);
            }
            .price2_value {
                color:white;
            }
            .discount_button {
                background: #FFEBD1;
                &>span {
                    color:#3E2F65;
                }
            }
        }
    }
    // .hover_card {
    //     background: url('../../assets/bei.png');
    //     background-size:cover;
    //     background-repeat:no-repeat;
    //     .title,.price1_value, .price1 {
    //         color: white;
    //     }
    //     .price2_label,.originPrice_value,.originPrice_label {
    //         color:rgba(255,255,255,0.6);
    //     }
    //     .price2_value {
    //         color:white;
    //     }
    //     .discount_button {
    //         background: #FFEBD1;
    //         &>span {
    //             color:#3E2F65;
    //         }
    //     }
    // }
    .basic_card {
        transition: background 1s ease-in-out; /* 设置过渡 */
    }
    
</style>