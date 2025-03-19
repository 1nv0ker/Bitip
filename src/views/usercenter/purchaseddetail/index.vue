<template>
    <div class="w-full bg-[white] p-[1.75rem] rounded-[1.5rem]">
        <div class="w-full flex items-center">
            <span class="text-[#191919] text-[1.25rem] font-bold">{{t('purchaseddetail.title')}}</span>
        </div>
        <div class="w-full gap-[1.75rem] mt-[1.5rem] flex flex-wrap">
            <div style="width:calc( 25% - 1.75rem*3/4)" class="h-[3rem] " >
                <a-input  :placeholder="t('purchaseddetail.search1')" size="large" class="customAInput" />
            </div>
            <div style="width:calc( 25% - 1.75rem*3/4)" class="h-[3rem] " >
                <a-input  :placeholder="t('purchaseddetail.search2')" size="large" class="customAInput" />
            </div>
            <div style="width:calc( 25% - 1.75rem*3/4)" class="h-[3rem]" >
                <a-select :placeholder="t('purchaseddetail.search3')" class="customASelect h-[3rem] w-full">
                    <a-select-option value="jack">Jack</a-select-option>
                    <a-select-option value="lucy">Lucy</a-select-option>
                    <a-select-option value="Yiminghe">yiminghe</a-select-option>
                </a-select>
            </div>
            <div style="width:calc( 25% - 1.75rem*3/4)" class="h-[3rem] " >
                <a-input  :placeholder="t('purchaseddetail.search4')" size="large" class="customAInput" />
            </div>
            <div style="width:calc( 25% - 1.75rem*3/4)" class="h-[3rem]" >
                <a-select :placeholder="t('purchaseddetail.search5')"  class="customASelect h-[3rem] w-full">
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
        <div class="w-full mt-[1.75rem] h-[44rem]">
            <a-table :columns="columns" :data-source="tableDatas" :scroll="{y:'38.5rem'}" :row-selection="rowSelection">
                <template #headerCell="{ title }">
                    <span class="text-[#191919] text-[1rem] font-medium">
                        {{title}}
                    </span>
                </template>
                <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'action'">
                        <div class="flex gap-[1.75rem] justify-center action_button text-[#5E6F94] text-[1rem] font-medium items-center">
                            <AutoComponent />
                            <span class="font-medium cursor-pointer">{{t('purchaseddetail.action2')}}</span>
                            <img src="../../../assets/usercenter/delete.png" class="w-[1.125rem] h-[1.125rem] mb-[0.125rem]"/>
                        </div>
                    </template>
                    <template v-else-if="column.key == 'code'">
                        <QrcodeOutlined class="text-[1.5rem] cursor-pointer text-[#666666]" @click="onOpenQRcode(record[column.key])"/>
                        <!-- <a-qrcode :value="record[column.key]" :size="24" /> -->
                    </template>
                    <template v-else-if="column.key == 'ip'">
                        <div class="p-[0.5rem] relative ip_box">
                            <span class="text-[#191919] text-[1rem]" :title="record[column.key]">
                            {{ record[column.key] }}
                            </span>
                            <div class=" absolute top-0 bottom-0 left-0 right-0 w-full h-full ip_mask flex items-center justify-center" style="z-index: 100;background-color: rgba(0, 0, 0, 0.5);">
                                <!-- <img src="../../../assets/copy.png" class="w-[1.5rem] h-[1.5rem] cursor-pointer" /> -->
                               
                                <Copy :message="record[column.key]" />
                            </div>
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
        <QrCodeModal v-model="open" v-model:qrcode="qrcode"/>
    </div>
</template>
<script setup lang="ts">
    import { ref, computed } from 'vue'
    import { QrcodeOutlined } from '@ant-design/icons-vue';
    import QrCodeModal from './QrCodeModal.vue';
    import Copy from './Copy.vue';
    import AutoComponent from './AutoComponent.vue';
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const qrcode = ref('')
    const open = ref(false)
    const columns = computed(() => {
        return [
            {
                title: t('purchaseddetail.column1'),
                dataIndex: 'code',
                key: 'code',
                align:'center',
                width:'5rem'
            },
            {
                title: t('purchaseddetail.column2'),
                dataIndex: 'time',
                key: 'time',
                align:'center',
                ellipsis: true,
                width:'12rem'
            },
            {
                title: t('purchaseddetail.column3'),
                dataIndex: 'region',
                key: 'region',
                align:'center',
                ellipsis: true,
                width:'4rem'
            },
            
            {
                title: t('purchaseddetail.column5'),
                dataIndex: 'ip',
                key: 'ip',
                align:'center',
                ellipsis: true,
                width: '36rem',
                
            },
            {
                title: t('purchaseddetail.column4'),
                dataIndex: 'type',
                key: 'type',
                align:'center',
                ellipsis: true,
                width:'4rem'
            },
            {
                title: t('purchaseddetail.column6'),
                dataIndex: 'remark',
                key: 'remark',
                align:'center',
                ellipsis: true,
                width:'8rem'
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
            code:'www.baidu.com',
            time: '2025-11-10 11:12:22',
            region: '类型',
            type: '类型',
            ip: '原始（Socks5）原始（Socks5）原始（Socks5）原始（',
            remark:'中转代理（Socks5）'
        },{
            code:'www.baidu.com',
            time: '2025-11-10 11:12:22',
            region: '类型',
            type: '类型',
            ip: '原始（Socks5）原始（Socks5）原始（Socks5）原始（',
            remark:'中转代理（Socks5）'
        },{
            code:'www.baidu.com',
            time: '2025-11-10 11:12:22',
            region: '类型',
            type: '类型',
            ip: '原始（Socks5）原始（Socks5）原始（Socks5）原始（',
            remark:'中转代理（Socks5）'
        },
        {
            code:'www.baidu.com',
            time: '2025-11-10 11:12:22',
            region: '类型',
            type: '类型',
            ip: '原始（Socks5）原始（Socks5）原始（Socks5）原始（',
            remark:'中转代理（Socks5）'
        },
        {
            code:'www.baidu.com',
            time: '2025-11-10 11:12:22',
            region: '类型',
            type: '类型',
            ip: '原始（Socks5）原始（Socks5）原始（Socks5）原始（',
            remark:'中转代理（Socks5）'
        },
        {
            code:'www.baidu.com',
            time: '2025-11-10 11:12:22',
            region: '类型',
            type: '类型',
            ip: '原始（Socks5）原始（Socks5）原始（Socks5）原始（',
            remark:'中转代理（Socks5）'
        },{
            code:'www.baidu.com',
            time: '2025-11-10 11:12:22',
            region: '类型',
            type: '类型',
            ip: '原始（Socks5）原始（Socks5）原始（Socks5）原始（',
            remark:'中转代理（Socks5）'
        },{
            code:'www.baidu.com',
            time: '2025-11-10 11:12:22',
            region: '类型',
            type: '类型',
            ip: '原始（Socks5）原始（Socks5）原始（Socks5）原始（',
            remark:'中转代理（Socks5）'
        },
        {
            code:'www.baidu.com',
            time: '2025-11-10 11:12:22',
            region: '类型',
            type: '类型',
            ip: '原始（Socks5）原始（Socks5）原始（Socks5）原始（',
            remark:'中转代理（Socks5）'
        },
        {
            code:'www.baidu.com',
            time: '2025-11-10 11:12:22',
            region: '类型',
            type: '类型',
            ip: '原始（Socks5）原始（Socks5）原始（Socks5）原始（',
            remark:'中转代理（Socks5）'
        },
        {
            code:'www.baidu.com',
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
    const onOpenQRcode = (code:string) => {
        qrcode.value = code
        open.value = true
    }
</script>

<style lang="less" scoped>
    .ip_box {
        .ip_mask {
            display: none;
        }
        &:hover {
            .ip_mask {
                display: flex;
            }
            &>span {
                color:#d7d7d7;
            }
        }
    }
    
</style>
<style lang="less">
.action_button {
    :where(.css-dev-only-do-not-override-1p3hq3p).ant-switch.ant-switch-checked {
        background-color: #01AA44!important;
    }
}
</style>