<template>
    <div class="w-full">
        <!-- 基础展示 -->
        <div class="w-full rounded-[1.5rem] bg-white p-[1.75rem]">
            <span class="text-[#191919] text-[1.25rem] font-bold">{{t('proxycity.card1')}}</span>
            <div class="w-full flex justify-between  gap-[1.75rem] mt-[1.5rem]">
                <div v-for="item in items" class="w-[30rem] h-[3.75rem]  rounded-[0.75rem] items-center border-[1px] proxycity_card relative p-[1.75rem] pl-[2rem] pr-[2rem] flex" 
                    style="background: linear-gradient( 145deg, #E6FFF0 0%, #FBFFEC 100%);">
                    <div class="flex gap-[1.25rem] items-center">
                        <span class="text-[#191919] text-[1rem] font-medium">{{item.title}} [GB]</span>
                        <span class="text-[#191919] text-[1.5rem] font-bold" style="line-height: 100%;">{{ cardDatas.find(data=>data.key==item.key)?cardDatas.find(data=>data.key==item.key)['value']:0 }}</span>
                    </div>
                    <div class="pl-[0.25rem]" v-if="item.showButton">
                        <img src="../../../assets/run.png" class="w-[2.5rem] h-[0.75rem]" />
                    </div>
                    <div v-if="item.showButton" class=" absolute right-[1rem] w-[5.5rem] h-[2rem] top-[0.875rem] border-[#01AA44] 
                    border-[1px] rounded-[0.5rem] flex justify-center items-center cursor-pointer" @click="onBuyFlow">
                        <span class="text-[#01AA44] text-[1rem]">{{t('proxycity.card_button')}}</span>
                    </div>
                </div>
            </div>
            <div class="w-full border-[1px] border-[#EBEFF8] mt-[1.5rem]">

            </div>
            <!-- 定位城市 -->
            <div class="pt-[1.5rem] pr-[1.5rem]">
                <a-form layout="vertical">
                    <a-row :gutter="24">
                        <a-col :span="6" v-for="form in formItems">
                            <a-form-item :label="form.label" required>
                                <div class="relative h-[3rem]">
                                    <a-select :placeholder="form.placeholder" class="proxycity_select ">
                                   
                                    </a-select>
                                    <div class=" absolute z-20 h-[1.25rem] w-[1.25rem] bg-[#01AA44] cursor-pointer top-[0.875rem] right-[3rem]" v-if="form.showButton" @click="onAddSub">
                                    </div>
                                </div>
                            </a-form-item>
                        </a-col>
                    </a-row>    
                </a-form>
                <div class="pt-[1.75rem] pb-[1.75rem] flex gap-[1.75rem]">
                    <div class="w-[9.625rem] h-[3rem] rounded-[0.75rem] bg-[#01AA44] flex justify-evenly items-center cursor-pointer">
                        <img src="" class="w-[1.25rem] h-[1.25rem]" />
                        <span class=" text-white font-medium text-[1rem]">{{t('proxycity.button1')}}</span>
                    </div>

                    <div class="w-[9.625rem] h-[3rem] rounded-[0.75rem] bg-[#FAFAFA] flex justify-evenly items-center border-[1px] border-[#EBEFF8] cursor-pointer">
                        <img src="" class="w-[1.25rem] h-[1.25rem]" />
                        <span class=" text-[#191919] font-medium text-[1rem]">{{t('proxycity.button2')}}</span>
                    </div>
                </div>
                <div class="w-full h-[16.6875rem] bg-[#FAFAFA] rounded-[0.75rem] border-[#EBEFF8] border-[1px] p-[1.5rem]">
                    <div class=" border-b-[1px] border-[#EBEFF8] flex flex-col gap-[1rem]  text-[#666666] text-[1rem] h-[12rem]">
                        <span>https://www.figma.com/d91?node-id=1195-1345&t=AMb4pO4N2KjsmNdA-01?node-id=1195-1345&t=AMb4pO4N2KjsmNdA-0套餐1?node-id=</span>
                        <span>https://www.figma.com/d91?node-id=1195-1345&t=AMb4pO4N2KjsmNdA-01?node-id=1195-1345&t=AMb4pO4N2KjsmNdA-0套餐1?node-id=</span>
                    </div>
                    <div class="w-full flex gap-[2.75rem] h-[3rem]">
                        <div class="flex items-center text-[#666666] text-[1rem] cursor-pointer">
                            <img src="../../../assets/copy.png" class="w-[1.5rem] h-[1.5rem]"/>
                            <span class="pl-[0.75rem]">{{ t('proxycity.copy') }}</span>
                        </div>
                        <div class="flex items-center text-[#666666] text-[1rem] cursor-pointer">
                            <img src="../../../assets/switch.png" class="w-[1.5rem] h-[1.5rem]"/>
                            <span class="pl-[0.75rem]">{{ t('proxycity.switch') }}</span>
                        </div>
                    </div>
                </div>
                <!-- <div class="pt-[1.25rem]">
                    <span class="text-[#999999] text-[0.9rem]">IP地址国家：美国IP地址 IP号码12834740329457209</span>
                </div> -->
            </div>
        </div>
        <AddSubModal v-model="open"/>
    </div>
</template>
<script setup lang="ts">
    //选择数量1-1000 1 10 100 1000
    
    import { computed , onMounted, ref } from 'vue'
    import AddSubModal from '../trafficmanager/AddSubModal.vue'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const cardDatas = ref<any[]>([])
    const open = ref(false)
    const items = computed(() => {
        return [
            {
                title: t('proxycity.card_title1'),
                img: '',
                describe: t('proxycity.describe1'),
                key:1,
                showButton:true
            },
            {
                title: t('proxycity.card_title2'),
                img: '',
                describe: t('proxycity.describe2'),
                key:2,
                showButton: false
            },
            {
                title: t('proxycity.card_title3'),
                img: '',
                describe: t('proxycity.describe3'),
                key:3,
                showButton: false
            }
        ]
    })
    const formItems = computed(() => {
        return [
            {
                label: t('proxycity.form1'),
                placeholder: t('proxycity.form1_placeholder'),
                key:'1',
                showButton:true
            },
            {
                label: t('proxycity.form2'),
                placeholder: t('proxycity.form2_placeholder'),
                key:'2',
                showButton:false
            },
            {
                label: t('proxycity.form3'),
                placeholder: t('proxycity.form3_placeholder'),
                key:'3',
                showButton:false
            },
            {
                label: t('proxycity.form4'),
                placeholder: t('proxycity.form4_placeholder'),
                key:'4',
                showButton:false
            },
            {
                label: t('proxycity.form5'),
                placeholder: t('proxycity.form5_placeholder'),
                key:'5',
                showButton:false
            },
            {
                label: t('proxycity.form6'),
                placeholder: t('proxycity.form6_placeholder'),
                key:'6',
                showButton:false
            }
        ]
    })
    onMounted(() => {
        cardDatas.value = [
            {
                key: 1,
                value: 2123,
                rate: 2.4
            },
            {
                key: 2,
                value: 2123,
                rate: 2.4
            },
            {
                key: 3,
                value: 2123,
                rate: 2.4
            }
        ]
    })
    const onBuyFlow = () => {

    }
    const onAddSub = () => {
        open.value = true
    }
</script>
<style scoped>
    .proxycity_card::before {
        content: '';
        position: absolute;
        inset: -1.25rem; /* 边框向外扩展 */
        border-image: linear-gradient(142deg, rgba(222, 255, 75, 1), rgba(255, 255, 255, 0)) 1 1;
        z-index: -1;
    }
</style>
<style lang="less">
    .proxycity_select {
        .ant-select-selector {
            height: 3rem!important;
            border-color: #666666!important;
            border-radius: 0.75rem!important;
        }
        .ant-select-selection-item {
            line-height: 3rem!important;
        }
        .ant-select-selection-placeholder {
            height: 3rem!important;
            line-height: 3rem!important;
            color: #999999;
            font-size: 1rem;
        }
    }
</style>