<template>
    <div class="w-full bg-[white] p-[1.75rem] rounded-[1.5rem]">
        <div class="w-full flex items-center">
            <span class="text-[#191919] text-[1.25rem] font-bold">{{t('purchaseddetail.title')}}</span>
        </div>
        <div class="w-full gap-[1.75rem] mt-[1.5rem] flex flex-wrap">
            <div style="width:calc( 25% - 1.75rem*3/4)" class="h-[3rem] " >
                <a-input  :placeholder="t('purchaseddetail.search1')" size="large" class="customInput" />
            </div>
            <div style="width:calc( 25% - 1.75rem*3/4)" class="h-[3rem] " >
                <a-input  :placeholder="t('purchaseddetail.search2')" size="large" class="customInput" />
            </div>
            <div style="width:calc( 25% - 1.75rem*3/4)" class="h-[3rem]" >
                <a-select :placeholder="t('purchaseddetail.search3')" class="customSelect h-[3rem] w-full">
                    <a-select-option value="jack">Jack</a-select-option>
                    <a-select-option value="lucy">Lucy</a-select-option>
                    <a-select-option value="Yiminghe">yiminghe</a-select-option>
                </a-select>
            </div>
            <div style="width:calc( 25% - 1.75rem*3/4)" class="h-[3rem] " >
                <a-input  :placeholder="t('purchaseddetail.search4')" size="large" class="customInput" />
            </div>
            <div style="width:calc( 25% - 1.75rem*3/4)" class="h-[3rem]" >
                <a-select :placeholder="t('purchaseddetail.search5')"  class="customSelect h-[3rem] w-full">
                    <a-select-option value="0">{{t('purchaseddetail.yes')}}</a-select-option>
                    <a-select-option value="1">{{t('purchaseddetail.no')}}</a-select-option>
                </a-select>
            </div>
            <div class="h-[3rem] flex gap-[1.75rem] " style="width:calc( 75% - 1.75rem * 1/4 )" >
                <div class="text-[] bg-[#01AA44] w-[6.875rem] h-full rounded-[0.75rem] flex justify-center items-center cursor-pointer">
                    <span class="text-[1rem] text-white font-medium">{{t('purchaseddetail.button1')}}</span>
                </div>
                <div class="border-[1px] border-[#EBEFF8] bg-[#FAFAFA] rounded-[0.5rem] flex justify-center items-center h-full w-[6.875rem] cursor-pointer">
                    <span class="text-[1rem] text-[#191919]">{{t('purchaseddetail.button2')}}</span>
                </div>
                <div class="border-[1px] border-[#EBEFF8] bg-[#FAFAFA] rounded-[0.5rem] flex justify-center items-center h-full w-[6.875rem] cursor-pointer">
                    <span class="text-[1rem] text-[#191919]">{{t('purchaseddetail.button3')}}</span>
                </div>
                <!-- <div class="flex gap-[1.75rem] h-full">
                    <div class="border-[1px] border-[#EBEFF8] bg-[#FAFAFA] rounded-[0.5rem] flex justify-center items-center h-full w-[6.875rem] cursor-pointer">
                        <span class="text-[1rem] text-[#191919]">{{t('purchaseddetail.button2')}}</span>
                    </div>
                    <div class="border-[1px] border-[#EBEFF8] bg-[#FAFAFA] rounded-[0.5rem] flex justify-center items-center h-full w-[6.875rem] cursor-pointer">
                        <span class="text-[1rem] text-[#191919]">{{t('purchaseddetail.button3')}}</span>
                    </div>
                </div> -->
            </div>
        </div>
        <div class="w-full mt-[1.75rem] h-[42rem]">
            <a-table :columns="columns" :data-source="tableDatas" :scroll="{y:'37.5rem'}" :row-selection="rowSelection">
                <template #headerCell="{ title }">
                    <span class="text-[#191919] text-[1rem] font-medium">
                        {{title}}
                    </span>
                </template>
                <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'action'">
                        <div class="flex gap-[1.75rem] justify-center action_button text-[#5E6F94] text-[1rem] font-medium">
                            <div class="flex">
                                <a-switch :checked="true" /><span class="pl-[0.5rem] font-medium">{{t('purchaseddetail.action1')}}</span>
                            </div>
                            <span class="font-medium cursor-pointer">{{t('purchaseddetail.action2')}}</span>
                            <DeleteOutlined class=" cursor-pointer" />
                        </div>
                    </template>
                    <template v-else>
                        <span class="text-[#191919] text-[1rem]" :title="record[column.key]">
                            {{ record[column.key] }}
                        </span>
                    </template>
                </template>
            </a-table>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { ref, computed } from 'vue'
    import { DeleteOutlined } from '@ant-design/icons-vue';
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const columns = computed(() => {
        return [
            {
                title: t('purchaseddetail.column1'),
                dataIndex: 'code',
                key: 'code',
                align:'center'
            },
            {
                title: t('purchaseddetail.column2'),
                dataIndex: 'time',
                key: 'time',
                align:'center',
                ellipsis: true
            },
            {
                title: t('purchaseddetail.column3'),
                dataIndex: 'region',
                key: 'region',
                align:'center',
                ellipsis: true
            },
            {
                title: t('purchaseddetail.column4'),
                dataIndex: 'type',
                key: 'type',
                align:'center',
                ellipsis: true
            },
            {
                title: t('purchaseddetail.column5'),
                dataIndex: 'ip',
                key: 'ip',
                align:'center',
                ellipsis: true
            },
            {
                title: t('purchaseddetail.column6'),
                dataIndex: 'remark',
                key: 'remark',
                align:'center',
                ellipsis: true
            },
            {
                title: t('purchaseddetail.column7'),
                key: 'action',
                align:'center',
                width: '20rem'
            },
        ]
    })
    const tableDatas = ref([
        {
            code:'1',
            time: '2025-11-10 11:12:22',
            region: '类型',
            type: '类型',
            ip: '原始（Socks5）原始（Socks5）原始（Socks5）原始（',
            remark:'中转代理（Socks5）'
        },{
            code:'1',
            time: '2025-11-10 11:12:22',
            region: '类型',
            type: '类型',
            ip: '原始（Socks5）原始（Socks5）原始（Socks5）原始（',
            remark:'中转代理（Socks5）'
        },{
            code:'1',
            time: '2025-11-10 11:12:22',
            region: '类型',
            type: '类型',
            ip: '原始（Socks5）原始（Socks5）原始（Socks5）原始（',
            remark:'中转代理（Socks5）'
        },
        {
            code:'1',
            time: '2025-11-10 11:12:22',
            region: '类型',
            type: '类型',
            ip: '原始（Socks5）原始（Socks5）原始（Socks5）原始（',
            remark:'中转代理（Socks5）'
        },
        {
            code:'1',
            time: '2025-11-10 11:12:22',
            region: '类型',
            type: '类型',
            ip: '原始（Socks5）原始（Socks5）原始（Socks5）原始（',
            remark:'中转代理（Socks5）'
        },
        {
            code:'1',
            time: '2025-11-10 11:12:22',
            region: '类型',
            type: '类型',
            ip: '原始（Socks5）原始（Socks5）原始（Socks5）原始（',
            remark:'中转代理（Socks5）'
        },{
            code:'1',
            time: '2025-11-10 11:12:22',
            region: '类型',
            type: '类型',
            ip: '原始（Socks5）原始（Socks5）原始（Socks5）原始（',
            remark:'中转代理（Socks5）'
        },{
            code:'1',
            time: '2025-11-10 11:12:22',
            region: '类型',
            type: '类型',
            ip: '原始（Socks5）原始（Socks5）原始（Socks5）原始（',
            remark:'中转代理（Socks5）'
        },
        {
            code:'1',
            time: '2025-11-10 11:12:22',
            region: '类型',
            type: '类型',
            ip: '原始（Socks5）原始（Socks5）原始（Socks5）原始（',
            remark:'中转代理（Socks5）'
        },
        {
            code:'1',
            time: '2025-11-10 11:12:22',
            region: '类型',
            type: '类型',
            ip: '原始（Socks5）原始（Socks5）原始（Socks5）原始（',
            remark:'中转代理（Socks5）'
        },
        {
            code:'1',
            time: '2025-11-10 11:12:22',
            region: '类型',
            type: '类型',
            ip: '原始（Socks5）原始（Socks5）原始（Socks5）原始（',
            remark:'中转代理（Socks5）'
        }
    ])
    const rowSelection = {
        onChange: (selectedRowKeys: string[], selectedRows: any[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record: any) => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };
</script>

<style lang="less" scoped>
    .customInput {
        font-family: "Alibaba Sans";
        height: 3rem!important;
        border-color: #666;
        border-radius: 0.75rem;
        &::placeholder {
            color: #999999; /* 改变文字颜色 */
            font-size: 0.9rem;
            text-align: left;
            font-family: "Alibaba Sans";
            line-height: 100%;
        }
         
    }
    
</style>
<style lang="less">
.action_button {
    :where(.css-dev-only-do-not-override-1p3hq3p).ant-switch.ant-switch-checked {
        background-color: #01AA44!important;
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