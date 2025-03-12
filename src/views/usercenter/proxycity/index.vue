<template>
    <div class="w-full">
        <!-- 基础展示 -->
        <div class="w-full h-[18.75rem] rounded-[1.5rem] bg-white p-[1.75rem]">
            <span class="text-[#191919] text-[1.25rem] font-bold">{{t('proxycity.card1')}}</span>
            <div class="w-full flex justify-between mt-[1.25rem] gap-[1.75rem]">
                <div v-for="item in items" class="w-[30rem] h-[11.75rem] rounded-[1.25rem] border-[1px] proxycity_card relative p-[1.75rem] pl-[2rem] pr-[2rem] flex justify-between" 
                    style="background: linear-gradient( 145deg, #E6FFF0 0%, #FBFFEC 100%);">
                    <div class="flex flex-col gap-[1.125rem]">
                        <span class="text-[#191919] text-[1.125rem] font-medium">{{item.title}} [GB]</span>
                        <div class="flex items-end">
                            <span class="text-[#191919] text-[2.625rem] font-bold" style="line-height: 100%;">{{ cardDatas.find(data=>data.key==item.key)?cardDatas.find(data=>data.key==item.key)['value']:0 }}</span>
                            <div :class="`flex pl-[0.5rem] ${(cardDatas.find(data=>data.key==item.key)?cardDatas.find(data=>data.key==item.key)['rate']:0)>=0?'text-[#01AA44]':'text-[#FC4949]'}`">
                                <span class="text-[1.25rem] font-semibold">{{(cardDatas.find(data=>data.key==item.key)?cardDatas.find(data=>data.key==item.key)['rate']:0)>=0?'↑':'↓'}}</span>
                                <span class="text-[1.25rem] font-semibold">{{cardDatas.find(data=>data.key==item.key)?cardDatas.find(data=>data.key==item.key)['rate']:0}}%</span>
                            </div>
                        </div>
                        <span class="text-[#999999] text-[1.125rem]">{{item.describe}}</span>
                    </div>
                    <div class="w-[4.5rem] h-[4.5rem] rounded-[1rem] border-[1px] border-[rgba(1,170,68,0.1)] flex justify-center items-center">
                        <img :src="item.img" class="w-[2.8125rem] h-[2.8125rem]" />
                    </div>
                </div>
            </div>
        </div>
        <!-- 定位城市 -->
        <div class="w-full p-[1.75rem] bg-white rounded-[1.5rem] mt-[1.75rem] ">
            <span class="text-[#191919] text-[1.25rem] font-bold">{{t('proxycity.card2')}}</span>
            <div class="pt-[1.5rem] pr-[1.5rem]">
                <a-form layout="vertical">
                    <a-row :gutter="24">
                        <a-col :span="6" v-for="form in formItems">
                            <a-form-item :label="form.label" required>
                                <a-select :placeholder="form.placeholder" class="proxycity_select">
                                   
                                </a-select>
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
                <div class="w-full h-[11.5625rem] bg-[#FAFAFA] rounded-[0.75rem] border-[#EBEFF8] border-[1px] p-[1.5rem]">
                    <div class=" border-b-[1px] border-[#EBEFF8] flex flex-col gap-[1rem] pb-[1rem] text-[#666666] text-[1rem]">
                        <span>https://www.figma.com/d91?node-id=1195-1345&t=AMb4pO4N2KjsmNdA-01?node-id=1195-1345&t=AMb4pO4N2KjsmNdA-0套餐1?node-id=</span>
                        <span>https://www.figma.com/d91?node-id=1195-1345&t=AMb4pO4N2KjsmNdA-01?node-id=1195-1345&t=AMb4pO4N2KjsmNdA-0套餐1?node-id=</span>
                    </div>
                    <div class="w-full flex mt-[1.75rem] gap-[2.75rem]">
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
                <div class="pt-[1.25rem]">
                    <span class="text-[#999999] text-[0.9rem]">IP地址国家：美国IP地址 IP号码12834740329457209</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

    import { computed , onMounted, ref } from 'vue'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const cardDatas = ref<any[]>([])
    const items = computed(() => {
        return [
            {
                title: t('proxycity.card_title1'),
                img: '',
                describe: t('proxycity.describe1'),
                key:1
            },
            {
                title: t('proxycity.card_title2'),
                img: '',
                describe: t('proxycity.describe2'),
                key:2
            },
            {
                title: t('proxycity.card_title3'),
                img: '',
                describe: t('proxycity.describe3'),
                key:3
            }
        ]
    })
    const formItems = computed(() => {
        return [
            {
                label: t('proxycity.form1'),
                placeholder: t('proxycity.form1_placeholder'),
                key:'1',
            },
            {
                label: t('proxycity.form2'),
                placeholder: t('proxycity.form2_placeholder'),
                key:'2',
            },
            {
                label: t('proxycity.form3'),
                placeholder: t('proxycity.form3_placeholder'),
                key:'3',
            },
            {
                label: t('proxycity.form4'),
                placeholder: t('proxycity.form4_placeholder'),
                key:'4',
            },
            {
                label: t('proxycity.form5'),
                placeholder: t('proxycity.form5_placeholder'),
                key:'5',
            },
            {
                label: t('proxycity.form6'),
                placeholder: t('proxycity.form6_placeholder'),
                key:'6',
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