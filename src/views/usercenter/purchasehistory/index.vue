<template>
    <div class="w-full bg-[white] p-[1.75rem] rounded-[1.5rem]">
        <div class="w-full flex items-center">
            <span class="text-[#191919] text-[1.25rem] font-bold">{{t('purchasedhistory.title')}}</span>
        </div>
        <div class="w-full gap-[1.75rem] h-[3rem] flex mt-[1.5rem]">
            <div style="width:calc( 25% - 1.75rem*3/4)" class="h-[3rem]">
                <a-input  :placeholder="t('purchaseddetail.search1')" size="large" class="customInput" />
            </div>
            <div style="width:calc( 25% - 1.75rem*3/4)" class="h-[3rem]">
                <a-select :placeholder="t('purchaseddetail.search2')"  class="customSelect h-[3rem] w-full">
                    <a-select-option value="jack">Jack</a-select-option>
                    <a-select-option value="lucy">Lucy</a-select-option>
                    <a-select-option value="Yiminghe">yiminghe</a-select-option>
                </a-select>
            </div>
            <div style="width:calc( 25% - 1.75rem*3/4)" class="h-[3rem]">
                <a-config-provider :locale="I18Store.language=='zh'?zhCN:enUS">
                    <a-range-picker  picker="day" :placeholder="[t('trafficmanager.placeholder1'), t('trafficmanager.placeholder2')]" class=" traffic_select w-full" >
                        <template #suffixIcon>
                            <div class="w-[1.25rem] h-[1.25rem] bg-[#01AA44]">
                            </div>
                        </template>
                    </a-range-picker>
                </a-config-provider>
            </div>
            <div style="width:calc( 25% - 1.75rem*3/4)" class="h-[3rem]">
                <div class="text-[] bg-[#01AA44] w-[6.875rem] h-full rounded-[0.75rem] flex justify-center items-center cursor-pointer">
                    <span class="text-[1rem] text-white font-medium">{{t('purchasedhistory.button1')}}</span>
                </div>
            </div>
        </div>
        <div class="w-full mt-[1.5rem] h-[45rem]">
            <a-table :columns="columns" :data-source="tableDatas" :scroll="{y:'37.5rem'}" >
                <template #headerCell="{ title }">
                    <span class="text-[#191919] text-[1rem] font-medium">
                        {{title}}
                    </span>
                </template>
                <template #bodyCell="{ column, record }">
                    <span class="text-[#191919] text-[1rem]" :title="record[column.key]">
                        {{ record[column.key] }}
                    </span>
                </template>
            </a-table>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { ref, computed } from 'vue'
    import 'dayjs/locale/zh-cn';
    import enUS from 'ant-design-vue/es/locale/en_US';
    import zhCN from 'ant-design-vue/es/locale/zh_CN';
    import useI18nStore from '../../../store/i18n'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const I18Store = useI18nStore()
    const columns = computed(() => {
        return [
            {
                title: t('purchasedhistory.column1'),
                dataIndex: 'orderNumber',
                key: 'orderNumber',
                align:'center',
                ellipsis: true
            },
            {
                title: t('purchasedhistory.column2'),
                dataIndex: 'orderName',
                key: 'orderName',
                align:'center',
                ellipsis: true
            },
            {
                title: t('purchasedhistory.column3'),
                dataIndex: 'lumpSum',
                key: 'lumpSum',
                align:'center',
                ellipsis: true
            },
            {
                title: t('purchasedhistory.column4'),
                dataIndex: 'orderStatus',
                key: 'orderStatus',
                align:'center',
                ellipsis: true
            },
            {
                title: t('purchasedhistory.column5'),
                dataIndex: 'paymentMethod',
                key: 'paymentMethod',
                align:'center',
                ellipsis: true
            },
            {
                title: t('purchasedhistory.column6'),
                dataIndex: 'time',
                key: 'time',
                align:'center',
                ellipsis: true
            },
        ]
    })
    const tableDatas = ref([
        {
            orderNumber:'DH434345646',
            orderName: '123123',
            lumpSum:'￥5000000',
            orderStatus: '已支付',
            paymentMethod: '支付宝',
            time: '2025-10-02 16:10:02'
        },
        {
            orderNumber:'DH434345646',
            orderName: '123123',
            lumpSum:'￥5000000',
            orderStatus: '已支付',
            paymentMethod: '支付宝',
            time: '2025-10-02 16:10:02'
        },
        {
            orderNumber:'DH434345646',
            orderName: '123123',
            lumpSum:'￥5000000',
            orderStatus: '已支付',
            paymentMethod: '支付宝',
            time: '2025-10-02 16:10:02'
        },
        {
            orderNumber:'DH434345646',
            orderName: '123123',
            lumpSum:'￥5000000',
            orderStatus: '已支付',
            paymentMethod: '支付宝',
            time: '2025-10-02 16:10:02'
        },
        {
            orderNumber:'DH434345646',
            orderName: '123123',
            lumpSum:'￥5000000',
            orderStatus: '已支付',
            paymentMethod: '支付宝',
            time: '2025-10-02 16:10:02'
        },
        {
            orderNumber:'DH434345646',
            orderName: '123123',
            lumpSum:'￥5000000',
            orderStatus: '已支付',
            paymentMethod: '支付宝',
            time: '2025-10-02 16:10:02'
        },
        {
            orderNumber:'DH434345646',
            orderName: '123123',
            lumpSum:'￥5000000',
            orderStatus: '已支付',
            paymentMethod: '支付宝',
            time: '2025-10-02 16:10:02'
        },
        {
            orderNumber:'DH434345646',
            orderName: '123123',
            lumpSum:'￥5000000',
            orderStatus: '已支付',
            paymentMethod: '支付宝',
            time: '2025-10-02 16:10:02'
        },
        {
            orderNumber:'DH434345646',
            orderName: '123123',
            lumpSum:'￥5000000',
            orderStatus: '已支付',
            paymentMethod: '支付宝',
            time: '2025-10-02 16:10:02'
        },
        {
            orderNumber:'DH434345646',
            orderName: '123123',
            lumpSum:'￥5000000',
            orderStatus: '已支付',
            paymentMethod: '支付宝',
            time: '2025-10-02 16:10:02'
        },
        {
            orderNumber:'DH434345646',
            orderName: '123123',
            lumpSum:'￥5000000',
            orderStatus: '已支付',
            paymentMethod: '支付宝',
            time: '2025-10-02 16:10:02'
        },
        
    ])
</script>

<style lang="less" scoped>
    .customInput {
        font-family: "Alibaba Sans";
        height: 3rem!important;
        border-color: #666;
        border-radius: 0.75rem;
        // &>:focus {
        //     border-color: #666!important;
        // }
        &::placeholder {
            color: #999999; /* 改变文字颜色 */
            font-size: 0.9rem;
            text-align: left;
            font-family: "Alibaba Sans";
            line-height: 100%;
        }
         
    }
.customSelect  {
    
    .ant-select-selector {
        height: 3rem!important;
        border-color: #666!important;
        border-radius: 0.75rem;
    }
    .ant-select-selection-item {
        line-height: 3rem!important;
    }
    .ant-select-selection-placeholder {
        height: 3rem!important;
        line-height: 3rem!important;
        color: #999999;
        font-size: 1rem!important;
        font-family: "Alibaba Sans";
    }
}
</style>
<style lang="less">
    .traffic_select {
        height: 3rem;
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