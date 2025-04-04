<template>
    <div class="w-full animate__fadeIn animate__animated flex gap-[1rem] justify-between ">
        <div :class="`flex-[4] min-w-0 bg-[white] rounded-[1rem] h-[37.5rem] pl-[0.75rem]  pr-[1.25rem] ${showPadding?'pl-[1.25rem]':''}`">
            <div class="w-full h-[3.375rem] border-b-[1px] border-[#EBEFF8] flex">
                <div :class="`h-full pl-[1rem] pr-[1rem] border-b-[1px] flex justify-start items-center w-auto cursor-pointer ${selectType==0?'border-[#702B12] ':' '}`" @click="selectType=0">
                    <span class="text-[#702B12] text-[1rem] font-bold">{{t('setmenu.location')}}</span>
                </div>
                <div :class="`${selectType==1?'border-[#702B12] ':' '} cursor-pointer h-full pl-[1rem] pr-[1rem] border-b-[1px] flex justify-start items-center w-auto ml-[0.5rem]`" @click="selectType=1">
                    <span class="text-[#702B12] text-[1rem] font-bold">{{t('setmenu.location2')}}</span>
                </div>
            </div>
            <div class="w-full h-[16.6875rem] overflow-y-auto pt-[1.25rem] pb-[1.25rem] flex gap-[0.75rem] flex-wrap all_citys">
                <div v-for="city in (selectType==0?citys:citys_type2)" :style="customStyle" :class=" `rounded-[0.75rem] border-[1px] border-[#E2E7E4] h-[3.125rem] justify-between flex items-center pl-[1rem] cursor-pointer bg-[white]
                 ${selectedCitys.findIndex(item=>(item.key==city.key && item.type==city.type))>-1?'selected_city':''}`" @click="onSelect(city)">
                    <div class="flex items-center ">
                        <div class="w-[1rem] h-[1rem] rounded-[50%] border-[1px] border-[#191919] flex justify-center items-center box">
                            <div class="w-[0.5rem] h-[0.5rem] bg-[white] rounded-[50%]">

                            </div>
                        </div>
                        <div class="pl-[0.75rem] ">
                                <span class="text-[0.9rem] w-[8rem]  bitip_text" :title="city['name']()">{{city['name']()}}</span>
                            </div>
                        </div>
                        <div class="flex justify-between pr-[0.5rem]">
                            <img :src="city.img" class="w-[1.5rem] h-[1.5rem]" />
                        </div>
                </div>
            </div>
            <div class="w-full h-[3.375rem] border-b-[1px] border-[#EBEFF8] flex">
                <div class="h-full pl-[1rem] pr-[1rem] border-b-[1px] border-[#702B12] flex justify-start items-center w-auto">
                    <span class="text-[#702B12] text-[1rem] font-bold">{{t('setmenu.timeSelect')}}</span>
                </div>
            </div>

            <div class="w-full overflow-y-auto pt-[1.25rem] pb-[1.25rem] flex gap-[0.75rem] flex-wrap all_citys coustom_overflow">
                <div v-for="time in timeSelect" :style="customStyle" :class=" `rounded-[0.75rem] border-[1px] relative border-[#E2E7E4] h-[4rem] flex items-center justify-between pl-[1rem] pr-[2rem] cursor-pointer bg-[white]
                 ${selected_time?.key==time.key?'selected_city':''}`" @click="onSelectTime(time)">
                    <div class=" absolute top-0 right-0 w-[2.5rem] h-[1.125rem] rounded-tr-[0.75rem] rounded-bl-[0.75rem] bg-[#4B3585] flex justify-center items-center">
                        <span class="text-[#FFEEC1] text-[0.75rem] font-medium">{{ time.discount }}{{ t('setmenu.off') }}</span>
                    </div>
                    <div class="h-full flex items-center">
                        <div class="w-[1rem] h-[1rem] rounded-[50%] border-[1px] border-[#191919] flex justify-center items-center box">
                            <div class="w-[0.5rem] h-[0.5rem] bg-[white] rounded-[50%]">
                                
                            </div>
                        </div>
                        <div class="pl-[0.75rem]">
                            <span class="text-[0.9rem]">{{time.name}}</span>
                        </div>
                    </div>
                    <div>
                        <span class="text-[0.9rem]">￥{{selectType==0?time.price:time.price_single}}/IP</span>
                    </div>
                </div>
            </div>

        </div>
        <div class="flex-[1] min-w-0 bg-[white] rounded-[1rem] h-[37.5rem] pl-[1rem] pr-[1.25rem]">
            <div class=" pt-[0.625rem] pb-[0.625rem] overflow-y-auto coustom_overflow h-[20rem] w-[15rem]">
                <div class="w-full border-b-[1px] border-[#E2E7E4] h-[3.125rem] justify-between flex items-center" v-for="staff in buyNumbers">
                    <div class="text-[#191919] text-[0.9rem] flex flex-col w-[15rem]">
                        <span class="w-[]">{{staff['name']()}} ({{staff.type==0?t('setmenu.type2'):t('setmenu.type1')}})</span>
                        <span class="font-bold">￥{{staff.type==0?selected_time?.price:selected_time?.price_single}}/{{t('setmenu.number')}}</span>
                    </div>
                    <div class="max-w-[5.625rem] w-[5.625rem] h-[1.75rem] rounded-[1.5rem]  flex justify-evenly items-center">
                        <span class=" cursor-pointer text-[#666666] text-[1.5rem]" @click="onRemove(staff.key, staff.number, staff.type)">-</span>
                        <!-- <span class="text-[#191919] text-[0.9rem] font-bold" contenteditable>{{staff.number}}</span> -->
                        <a-input-number  :min="1" :max="1000" :controls="false" :value="staff.number" class="custom_number" @change="(value:number)=>onChangeNumber(value, staff.key, staff.type)"/>
                        <span class=" cursor-pointer text-[#666666] text-[1.5rem]" @click="onAdd(staff.key, staff.type)">+</span>
                    </div>
                </div>
            </div>
            <div class="w-full">
                <div class="w-full h-[3rem] flex justify-end items-center border-b-[1px] border-[#EBEFF8]">
                    <span class="text-[#666666] text-[0.9rem] font-bold cursor-pointer" @click="onClear">{{t('setmenu.clear')}}</span>
                </div>
                <div class="w-full flex flex-col gap-[0.75rem] pt-[1rem]">
                    <div class="w-full flex justify-between">
                        <span class="text-[0.9rem] text-[#666666]">{{ t('setmenu.areas') }}</span>
                        <span class="text-[#191919] font-bold text-[1rem]">{{ selectedCitys.length }}</span>
                    </div>
                    <div class="w-full flex justify-between">
                        <span class="text-[0.9rem] text-[#666666]">{{ t('setmenu.ips') }}</span>
                        <span class="text-[#191919] font-bold text-[1rem]">{{buyNumbers.reduce((a,b)=>a+b.number, 0)}}</span>
                    </div>
                    <div class="w-full flex justify-between">
                        <span class="text-[#191919] font-medium text-[1rem]">{{ t('setmenu.allPrice') }}</span>
                        <span class="text-[#191919] font-semibold text-[1rem]">￥{{buyNumbers.reduce((a,b)=>a+(b.number*((b.type==0?selected_time?.price:selected_time?.price_single) || 0)), 0) }}</span>
                    </div>
                </div>
                <div class="w-full h-[3.25rem] rounded-[1.75rem] mt-[2rem] flex justify-center items-center cursor-pointer bitip_button" style="background: linear-gradient( 95deg, #4B3585 0%, #342B4B 100%);" @click="onRecharge">
                    <span class="text-[#FFEEC1] text-[1rem] font-medium">{{ t('setmenu.buyButton') }}</span>
                </div>
            </div>
        </div>
        <PackageModal v-model="open" :money="cost" :package-name="packageName" :purchaseIspInfos="purchaseIspInfos" ref="modalRef"/>
        <UserAuthTips v-model="open2"/>
    </div>
</template>
<script setup lang="ts">
    import { ref, onMounted, computed, nextTick } from 'vue'
    import { useI18n } from 'vue-i18n'
    import PackageModal from '../../components/StaticPackageModal.vue'
    import UserAuthTips from '../../components/UserAuthTips.vue'
    import { isLogin, isVerify} from '../../hooks/userAuth'
    import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
    const { t } = useI18n()
    const images = import.meta.glob('../../assets/nations/*.png')
    const open = ref(false)
    const open2 = ref(false)
    const router = useRouter()
    const cost = ref(0)
    const packageName = ref('')
    interface region_type {
        name:any,
        price:number,
        id?:string,
        key:number | string,
        title?:string,
        type?:string | number,
        price_single?:number,
        img?:any
    }
    interface time_type {
        name:any,
        price:number,
        price_single?:number,
        key:number,
        discount:number
    }
    interface buying_type {
        key:number|string,
        number:number,
        name:any,
        title?:string,
        type?:string |number
    }
    defineProps({
        customStyle:Object,
        showPadding:{
            type:Boolean,
            default:false
        }
    })
    const citys = ref<region_type[]>([])
    const citys_type2 = ref<region_type[]>([])
    const buyNumbers = ref<buying_type[]>([])
    const selectType = ref(0)
    const purchaseIspInfos = ref<any[]>([])
    const modalRef = ref<any>()
    const timeSelect = computed(():time_type[]=> {
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
    const selectedCitys = ref<region_type[]>([])
    const selected_time = ref<region_type>()
    onMounted(async () => {
        citys.value = [
            {
                name: ():string=>t('nations.usca'),
                price: 80,
                key: 'us-ca',
                type: 0,
                img: await getImage('us')
            },
            {
                name: ():string=>t('nations.usva'),
                price: 80,
                key: 'us-va',
                type: 0,
                img: await getImage('us')
            },
            {
                name: ():string=>t('nations.usnj'),
                price: 80,
                key: 'us-nj',
                type: 0,
                img: await getImage('us')
            },
            {
                name: ():string=>t('nations.ustx'),
                price: 80,
                key: 'us-tx',
                type: 0,
                img: await getImage('us')
            },
            {
                name: ():string=>t('nations.gblondon'),
                price: 80,
                key: 'gb-london',
                type: 0,
                img: await getImage('uk')
            },
            {
                name: ():string=>t('nations.dehesse'),
                price: 80,
                key: 'de-hesse',
                type: 0,
                img: await getImage('ger')
            },
            {
                name: ():string=>t('nations.sg'),
                price: 80,
                key: 'sg',
                type: 0,
                img: await getImage('id')
            }
        ]
        citys_type2.value = [
            {
                name: ():string=>t('nations.us'),
                price: 80,
                key: 'us',
                type: 1,
                img: await getImage('us')
            },
            {
                name: ():string=>t('nations.cnhk'),
                price: 80,
                key: 'cn-hk',
                type: 1,
                img: await getImage('cn')
            },
            {
                name: ():string=>t('nations.cntw'),
                price: 80,
                key: 'cn-tw',
                type: 1,
                img: await getImage('cn')
            },
        ]
        selected_time.value = timeSelect.value[0]
    })
    // 获取具体图片路径
    const getImage = async (name:string) => {
        // console.log(images)
        const module:any = await images[`../../assets/nations/${name}.png`]();
        return module.default;
    };
    const onSelectTime = (time:region_type) => {
        selected_time.value = time
    }
    const onSelect = (city:region_type) => {
        const index = selectedCitys.value.findIndex(item=>(item.key==city.key && item.type ==city.type))
        if (index>-1) {
            const index2 = buyNumbers.value.findIndex(item=>(item.key==city.key && item.type ==city.type))
            buyNumbers.value.splice(index2, 1)
            selectedCitys.value.splice(index, 1)
        } else {
            buyNumbers.value.push({
                number: 1,
                key: city.key,
                name:city.name,
                type:city.type
            })
            selectedCitys.value.push(city)
        }
        console.log(
            'buyNumbers',buyNumbers.value
        )
    }
    const onRemove = (key:number|string, number:number, type:any) => {
        const index = buyNumbers.value.findIndex(item=>(item.key==key && item.type ==type))
        if (number==1) {
            index>-1 && buyNumbers.value.splice(index, 1)
            const index2 =  selectedCitys.value.findIndex(item=>(item.key==key && item.type ==type))
            selectedCitys.value.splice(index2, 1)
        } else {
            if (buyNumbers.value[index]) {
                const newItem = Object.assign({}, buyNumbers.value[index], {
                    number: buyNumbers.value[index].number-1
                })
                buyNumbers.value.splice(index, 1, newItem)
            }
        }
        console.log(
            'buyNumbers',buyNumbers.value
        )
    }
    const onChangeNumber = (value:number, key:number|string, type:any) =>  {
        const index = buyNumbers.value.findIndex(item=>(item.key==key && item.type ==type))
        if (buyNumbers.value[index]) {
            const newItem = Object.assign({}, buyNumbers.value[index], {
                number: value
            })
            buyNumbers.value.splice(index, 1, newItem)
        }
        console.log(
            'buyNumbers',buyNumbers.value
        )
    }
    const onAdd = (key:number|string, type:any) => {
        const index = buyNumbers.value.findIndex(item=>(item.key==key && item.type ==type))
        if (buyNumbers.value[index]) {
            const newItem = Object.assign({}, buyNumbers.value[index], {
                number: buyNumbers.value[index].number+1
            })
            buyNumbers.value.splice(index, 1, newItem)
        }
        console.log(
            'buyNumbers',buyNumbers.value
        )
    }
    const onClear = () => {
        buyNumbers.value = []
        selectedCitys.value = []
    }

    const onRecharge = () => {
        if (!isLogin()) {
            
            router.push({path:'/login'})
            return
        }
        if (!isVerify()) {
            open2.value = true
            return
        }

        packageName.value = t('setmenu.subtitle2')
        // console.log(buyNumbers .value, selected_time.value)
        purchaseIspInfos.value = buyNumbers.value.map((item)=> ({
            ispType:item.type,
            ispLocation: item.key,
            purchaseMonth:selected_time.value?.key,
            purchaseNum:item.number
        }))
        
        if (selectType.value==0) {
            cost.value = buyNumbers.value.reduce((a,b)=>a+b.number, 0)*(selected_time.value?.price || 0)
        } else {
            cost.value = buyNumbers.value.reduce((a,b)=>a+b.number, 0)*(selected_time.value?.price_single || 0)
        }
        if (cost.value == 0) {
            message.warn(t('setmenu.tips'))
            return
        }
        open.value = true
        nextTick(() => {
            modalRef.value.init()
        })
    }
</script>
<style lang="less" scoped>
    .all_citys {
        align-content: flex-start;
        &>div {
            flex: 0 0 calc(25% - 0.75rem * 3/4);
            // height: 3.125rem;
            /* 可选样式 */
            min-width: 0;     /* 防止内容溢出 */
        }
        .selected_city {
            background: linear-gradient( 95deg, #4B3585 0%, #342B4B 100%);
            color:#FFFFFF;
            .box {
                border-color: white;
            }
        }
    }
</style>
<style>
.coustom_overflow::-webkit-scrollbar {
  width: 14px;
  background: #fff;
}

.coustom_overflow::-webkit-scrollbar-thumb {
  background: #2196F3;
  border: 4px solid transparent;
  border-radius: 999px;
  background-clip: content-box;
}
</style>
<style lang="less">
    .custom_number {
        border:none;
        .ant-input-number-input-wrap {
            &>input {
                text-align: center;
            }
        }
    }
</style>