<template>
    <div class="w-full p-[1.75rem] rounded-[1.5rem] bg-[white]">
        <div class="pb-[1.5rem] flex justify-between">
            <span class="text-[#191919] text-[1.25rem] font-bold">{{t('trafficmanager.title')}}</span>
            <div class="flex items-center gap-[1.75rem]">
                <a-config-provider :locale="I18Store.language=='zh'?zhCN:enUS">
                    <a-range-picker  :picker="selected" :placeholder="[t('trafficmanager.placeholder1'), t('trafficmanager.placeholder2')]" class=" traffic_select" >
                        <template #suffixIcon>
                            <div class="w-[1.25rem] h-[1.25rem] bg-[#01AA44]">
                            </div>
                        </template>
                    </a-range-picker>
                </a-config-provider>
                <div class="w-[12.125rem] h-[2.5rem] rounded-[0.75rem] border-[1px] border-[#999999] p-[0.25rem] flex">
                    <div v-for="item in items" :class="`h-[2rem] w-[3.875rem] rounded-[0.75rem] flex cursor-pointer items-center justify-center ${selected==item.key?'bg-[#191919] text-[#FFFFFF]':'text-[#191919]'}`" @click="onSelected(item.key)">
                        <span class="text-[1rem]">{{item.label}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class=" w-full h-[47rem]">
            <!-- <div id="traffic_chart"></div> -->
        </div>
    </div>
</template>
<script setup lang="ts">
    import { computed, ref, onMounted  } from 'vue'
    import { useI18n } from 'vue-i18n'
    import 'dayjs/locale/zh-cn';
    import enUS from 'ant-design-vue/es/locale/en_US';
    import zhCN from 'ant-design-vue/es/locale/zh_CN';
    import useI18nStore from '../../../store/i18n'
    // import * as d3 from 'd3';
    const { t } = useI18n()
    const selected = ref('date')
    const I18Store = useI18nStore()
    // const datas = ref([
    //     { date: '2023-01', value: '30' },
    //     { date: '2023-02', value: '45' },
    //     { date: '2023-03', value: '60' },
    //     { date: '2023-04', value: '25' },
    //     { date: '2023-05', value: '75' }
    // ])
    const items = computed(() => {
        return [
            {
                key: 'date',
                label: t('trafficmanager.day')
            },
            {
                key: 'month',
                label: t('trafficmanager.month')
            },
            {
                key: 'year',
                label: t('trafficmanager.year')
            }
        ]
    })
    const onSelected = (type:string) => {
        selected.value = type
    }
    onMounted(() => {
        loadD3Chart()
        console.log('onMounted')
    })
    const loadD3Chart = () => {

    }
</script>
<style lang="less">
    .traffic_select {
        height: 2.5rem;
        border-radius: 0.75rem;
        border: 1px solid #666666;
        .ant-picker-input {
            &>input {
                font-size: 1rem!important;
                line-height: 100%;
                font-family: "Alibaba Sans";
                &::placeholder {
                    color: #999999;
                    font-size: 1rem!important;
                    font-family: "Alibaba Sans";
                }
            }
        }
        .ant-picker-separator {
            height: auto!important;
        }
    }
</style>