<template>
    <div class="w-full animate__fadeIn animate__animated flex gap-[1rem] justify-between">
        <div class=" flex-[4] min-w-0 bg-[white] rounded-[1rem] h-[37.5rem] pl-[1.25rem] pr-[1.25rem]">
            <div class="w-full h-[3.375rem] border-b-[1px] border-[#EBEFF8] flex">
                <div class="h-full pl-[1rem] pr-[1rem] border-b-[1px] border-[#702B12] flex justify-start items-center w-auto">
                    <span class="text-[#702B12] text-[1rem] font-bold">{{t('setmenu.location')}}</span>
                </div>
            </div>
            <div class="w-full h-[18rem] overflow-y-auto pt-[1.25rem] pb-[1.25rem] flex gap-[0.75rem] flex-wrap all_citys">
                <div v-for="city in citys" :class=" `rounded-[0.75rem] border-[1px] border-[#E2E7E4] h-[3.125rem] flex items-center pl-[1rem] cursor-pointer bg-[white]
                 ${selectedCitys.findIndex(item=>item.key==city.key)>-1?'selected_city':''}`" @click="onSelect(city)">
                    <div class="w-[1rem] h-[1rem] rounded-[50%] border-[1px] border-[#191919] flex justify-center items-center box">
                        <div class="w-[0.5rem] h-[0.5rem] bg-[white] rounded-[50%]">

                        </div>
                    </div>
                    <div class="pl-[0.75rem]">
                        <span class="text-[0.9rem]">{{city.name}}</span>
                    </div>
                </div>
            </div>
            <div class="w-full h-[3.375rem] border-b-[1px] border-[#EBEFF8] flex">
                <div class="h-full pl-[1rem] pr-[1rem] border-b-[1px] border-[#702B12] flex justify-start items-center w-auto">
                    <span class="text-[#702B12] text-[1rem] font-bold">{{t('setmenu.timeSelect')}}</span>
                </div>
            </div>

            <div class="w-full overflow-y-auto pt-[1.25rem] pb-[1.25rem] flex gap-[0.75rem] flex-wrap all_citys coustom_overflow">
                <div v-for="time in timeSelect" :class=" `rounded-[0.75rem] border-[1px] relative border-[#E2E7E4] h-[4rem] flex items-center justify-between pl-[1rem] pr-[2rem] cursor-pointer bg-[white]
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
                        <span class="text-[0.9rem]">￥{{time.price}}/IP</span>
                    </div>
                </div>
            </div>

        </div>
        <div class="flex-[1] min-w-0 bg-[white] rounded-[1rem] h-[37.5rem] pl-[1.25rem] pr-[1.25rem]">
            <div class="w-full pt-[0.625rem] pb-[0.625rem] overflow-y-auto coustom_overflow h-[20rem]">
                <div class="w-full border-b-[1px] border-[#E2E7E4] h-[3.125rem] justify-between flex items-center" v-for="staff in buyNumbers">
                    <div class="text-[#191919] text-[0.9rem] flex items-center">
                        <span>{{staff.name}}</span>
                        <span class="pl-[2.5rem]">￥{{selected_time?.price}}/{{t('setmenu.number')}}</span>
                    </div>
                    <div class="max-w-[5.625rem] w-[5.625rem] h-[1.75rem] rounded-[1.5rem] border-[1px] border-[#F5F7FB] flex justify-evenly items-center">
                        <span class=" cursor-pointer text-[#666666] text-[1.5rem]" @click="onRemove(staff.key, staff.number)">-</span>
                        <span class="text-[#191919] text-[0.9rem] font-bold">{{staff.number}}</span>
                        <span class=" cursor-pointer text-[#666666] text-[1.5rem]" @click="onAdd(staff.key)">+</span>
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
                        <span class="text-[#191919] font-semibold text-[1rem]">￥{{buyNumbers.reduce((a,b)=>a+b.number, 0)*(selected_time?.price || 0) }}</span>
                    </div>
                </div>
                <div class="w-full h-[3.25rem] rounded-[1.75rem] mt-[2rem] flex justify-center items-center" style="background: linear-gradient( 95deg, #4B3585 0%, #342B4B 100%);">
                    <span class="text-[#FFEEC1] text-[1rem] font-medium">{{ t('setmenu.buyButton') }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { ref, onMounted, computed } from 'vue'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    interface region_type {
        name:string,
        price:number,
        id?:string,
        key:number
    }
    interface time_type {
        name:string,
        price:number,
        key:number,
        discount:number
    }
    interface buying_type {
        key:number,
        number:number,
        name:string
    }
    const citys = ref<region_type[]>([])
    const buyNumbers = ref<buying_type[]>([])
    const timeSelect = computed(():time_type[]=> {
        return [
            {
                name:t('setmenu.time1'),
                price: 45,
                key: 1,
                discount: 9
            },
            {
                name:t('setmenu.time2'),
                price: 84,
                key: 2,
                discount: 8.4
            },
            {
                name:t('setmenu.time3'),
                price: 114,
                key: 3,
                discount: 7.6
            },
            {
                name:t('setmenu.time4'),
                price: 198,
                key: 4,
                discount: 6.6
            },
            {
                name:t('setmenu.time5'),
                price: 160,
                key: 5,
                discount: 5.6
            }
        ]
    })
    const selectedCitys = ref<region_type[]>([])
    const selected_time = ref<region_type>()
    onMounted(() => {
        citys.value = Array.from({length: 20}).map((_, index)=>{
            return {
                name: '新加坡',
                price: 80,
                key:index+1
            }
        })
        selected_time.value = timeSelect.value[0]
    })
    const onSelectTime = (time:region_type) => {
        selected_time.value = time
    }
    const onSelect = (city:region_type) => {
        const index = selectedCitys.value.findIndex(item=>item.key==city.key)
        if (index>-1) {
            const index2 = buyNumbers.value.findIndex(item=>item.key==city.key)
            buyNumbers.value.splice(index2, 1)
            selectedCitys.value.splice(index, 1)
        } else {
            buyNumbers.value.push({
                number: 1,
                key: city.key,
                name:city.name
            })
            selectedCitys.value.push(city)
        }
    }
    const onRemove = (key:number, number:number) => {
        const index = buyNumbers.value.findIndex(item=>item.key==key)
        if (number==1) {
            index>-1 && buyNumbers.value.splice(index, 1)
            const index2 =  selectedCitys.value.findIndex(item=>item.key==key)
            selectedCitys.value.splice(index2, 1)
        } else {
            if (buyNumbers.value[index]) {
                const newItem = Object.assign({}, buyNumbers.value[index], {
                    number: buyNumbers.value[index].number-1
                })
                buyNumbers.value.splice(index, 1, newItem)
            }
        }
    }
    const onAdd = (key:number) => {
        const index = buyNumbers.value.findIndex(item=>item.key==key)
        if (buyNumbers.value[index]) {
            const newItem = Object.assign({}, buyNumbers.value[index], {
                number: buyNumbers.value[index].number+1
            })
            buyNumbers.value.splice(index, 1, newItem)
        }
    }
    const onClear = () => {
        buyNumbers.value = []
        selectedCitys.value = []
    }
</script>
<style lang="less" scoped>
    .all_citys {
        &>div {
            flex: 0 0 calc(25% - 0.75rem * 3/4);
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