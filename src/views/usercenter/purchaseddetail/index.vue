<template>
    <div class="w-full bg-[white] p-[1.75rem] rounded-[1.5rem]">
        <div class="w-full flex items-center">
            <span class="text-[#191919] text-[1.25rem] font-bold">{{t('purchaseddetail.title')}}</span>
        </div>
        <div class="w-full gap-[1.75rem] mt-[1.5rem] flex flex-wrap">
            <div style="width:calc( 25% - 1.75rem*3/4)" class="h-[3rem] " >
                <!-- <a-input  :placeholder="t('purchaseddetail.search1')" size="large" class="customAInput" /> -->
                <a-input  :placeholder="'IP'" size="large" class="customAInput"  v-model:value="params.KeyWord" allowClear />
            </div>
            <div style="width:calc( 25% - 1.75rem*3/4)" class="h-[3rem] " >
                <a-input  :placeholder="t('purchaseddetail.column4')" size="large" class="customAInput" />
            </div>
            <div style="width:calc( 25% - 1.75rem*3/4)" class="h-[3rem]" >
                <!-- <a-select :placeholder="t('purchaseddetail.search3')" class="customASelect h-[3rem] w-full" >
                    <a-select-option value="jack">Jack</a-select-option>
                    <a-select-option value="lucy">Lucy</a-select-option>
                    <a-select-option value="Yiminghe">yiminghe</a-select-option> -->
                    <a-input  :placeholder="t('purchaseddetail.search3')" size="large" class="customAInput" v-model:value="params.IspLocation" allowClear />
                <!-- </a-select> -->
            </div>
            
            <div style="width:calc( 25% - 1.75rem*3/4)" class="h-[3rem] " >
                <!-- <a-input  :placeholder="t('purchaseddetail.search4')" size="large" class="customAInput" /> -->
                <a-config-provider :locale="I18Store.language=='zh'?zhCN:enUS">
                    <a-range-picker showTime picker="day" :placeholder="[t('trafficmanager.placeholder1'), t('trafficmanager.placeholder2')]" class="customADate w-full" v-model:value="dates">
                        <template #suffixIcon>
                            <div class="w-[1.25rem] h-[1.25rem] ">
                                    <img src="../../../assets/usercenter/date.png" class="w-full h-full"/>
                                </div>
                        </template>
                    </a-range-picker>
                </a-config-provider>
            </div>
            <div style="width:calc( 25% - 1.75rem*3/4)" class="h-[3rem]" >
                <a-select :placeholder="t('purchaseddetail.search5')"  class="customASelect h-[3rem] w-full" v-model:value="params.AutoRenew" allowClear>
                    <a-select-option :value="1">{{t('purchaseddetail.yes')}}</a-select-option>
                    <a-select-option :value="0">{{t('purchaseddetail.no')}}</a-select-option>
                </a-select>
            </div>
            <div class="h-[3rem] flex gap-[1.75rem] " style="width:calc( 75% - 1.75rem * 1/4 )" >
                <div class="text-[] bg-[#01AA44] w-[6.875rem] h-full rounded-[0.75rem] flex justify-center items-center cursor-pointer" @click="loadTable" >
                    <span class="text-[1rem] text-white font-medium">{{t('purchaseddetail.button1')}}</span>
                </div>
                <div class="border-[1px] border-[#EBEFF8] bg-[#FAFAFA] rounded-[0.5rem] flex justify-center items-center h-full w-[6.875rem] cursor-pointer" @click="onAllRenew">
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
        <div class="w-full mt-[1.75rem] h-[45rem]">
            <a-table :columns="columns" :data-source="tableDatas" rowKey="id" :scroll="{y:'38.5rem'}" :row-selection="rowSelection" :pagination="false">
                <template #headerCell="{ title }">
                    <span class="text-[#191919] text-[1rem] font-medium">
                        {{title}}
                    </span>
                </template>
                <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'action'">
                        <div class="flex gap-[1.75rem] justify-center action_button text-[#5E6F94] text-[1rem] font-medium items-center">
                            <AutoComponent  :checked="record['autoRenew']==1?true:false" @onRenewal="(checked:boolean)=>onRenewal(checked, record)"/>
                            <span class="font-medium cursor-pointer" @click="onSetRenew(record)">{{t('purchaseddetail.action2')}}</span>

                            <a-popconfirm placement="topLeft" :ok-text="t('purchaseddetail.yes')" :cancel-text="t('purchaseddetail.no')" @confirm="onDelete(record)">
                            <template #title>
                                <span>{{t('whitelist.message1')}}</span>
                            </template>
                            
                                <img src="../../../assets/usercenter/delete.png" class=" cursor-pointer w-[1.125rem] h-[1.125rem] mb-[0.125rem]"/>
                            
                            </a-popconfirm>
                            <!-- <img src="../../../assets/usercenter/delete.png" class="w-[1.125rem] h-[1.125rem] mb-[0.125rem]"/> -->
                        </div>
                    </template>
                    <template v-else-if="column.key == 'code'">
                        <QrcodeOutlined class="text-[1.5rem] cursor-pointer text-[#666666]" @click="onOpenQRcode(record['ip'])"/>
                        <!-- <a-qrcode :value="record[column.key]" :size="24" /> -->
                    </template>
                    <template v-else-if="column.key == 'ispType'">
                        <!-- <QrcodeOutlined class="text-[1.5rem] cursor-pointer text-[#666666]" @click="onOpenQRcode(record['ip'])"/> -->
                        <!-- <a-qrcode :value="record[column.key]" :size="24" /> -->
                         <span>{{record[column.key]==0?t('setmenu.location'):t('setmenu.location2')}}</span>
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
            <PaginationComponent v-model:total="params.total" v-model:page-size="params.pageSize" v-model="params.current" @onCurrentChange="onCurrentChange" @onSizeChange="onSizeChange"/>
        </div>
        <QrCodeModal v-model="open" :qrcode="qrcode"/>
        <StaticRenew v-model="openRenew" ref="modalRef" :selectRow="selectRow"/>
    </div>
</template>
<script setup lang="ts">
    import { ref, computed, onMounted, reactive, nextTick } from 'vue'
    import 'dayjs/locale/zh-cn';
    import enUS from 'ant-design-vue/es/locale/en_US';
    import zhCN from 'ant-design-vue/es/locale/zh_CN';
    import  { Dayjs } from 'dayjs';
    import { QrcodeOutlined } from '@ant-design/icons-vue';
    import PaginationComponent from '../../../components/PaginationComponent.vue';
    import { GetList, SetAutoRenew, DeleteISP } from '../../../api/recharge'
    import QrCodeModal from './QrCodeModal.vue';
    import Copy from './Copy.vue';
    import AutoComponent from './AutoComponent.vue';
    import { useI18n } from 'vue-i18n'
    import useI18nStore from '../../../store/i18n'
    import StaticRenew from '../../../components/StaticRenew.vue'
    import { message } from 'ant-design-vue';
    const { t } = useI18n()
    const I18Store = useI18nStore()
    const qrcode = ref('')
    const open = ref(false)
    const openRenew = ref(false)
    const modalRef = ref<any>()
    const selectRow = ref<any[]>([])
    const selectedData = ref<any[]>([])
    const dates = ref<[Dayjs, Dayjs]|null>(null);
    const params = reactive({
        total:0,
        pageSize: 10,
        current: 1,
        KeyWord: '',
        Status: undefined,
        loading: false,
        IspLocation:'',
        AutoRenew:null
    })
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
                dataIndex: 'expireTime',
                key: 'expireTime',
                align:'center',
                ellipsis: true,
                width:'12rem'
            },
            {
                title: t('purchaseddetail.column3'),
                dataIndex: 'ispLocation',
                key: 'ispLocation',
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
                dataIndex: 'ispType',
                key: 'ispType',
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
    onMounted(() => {
        loadTable()
    })
    const loadTable = async () => {
        const res:any = await GetList({
            PageNo: params.current,
            PageSize:params.pageSize,
            IspLocation:params.IspLocation,
            AutoRenew:params.AutoRenew,
            KeyWord:params.KeyWord,
            SearchBeginTime: dates.value?dates.value[0].format('YYYY-MM-DD HH:mm:ss'):undefined,
            SearchEndTime: dates.value?dates.value[1].format('YYYY-MM-DD HH:mm:ss'):undefined
        })
        if (res.code == 200) {
            tableDatas.value = res.body.records
            params.total = res.body.totalRows
        }
    }   
    const onCurrentChange = (num:number) => {
        params.current = num
        loadTable()
    }
    const onSizeChange = (num:number,size:number) => {
        params.current = num
        params.pageSize = size
        loadTable()
    }
    const onAllRenew = () => {
        if(selectedData.value.length == 0) {
            return
        }
        selectRow.value = selectedData.value
        console.log(selectRow.value)
        // selectRow.value = [record]
        openRenew.value = true
        
        nextTick(() => {
            modalRef.value.init()
        })
    }
    //自动续费
    const onRenewal = async (checked:boolean, record:any) => {
        record.autoRenew = checked?1:0
        const res:any = await SetAutoRenew({
            id:record.id as number,
            autoRenew:checked?1:0
        })
        if (res.code == 200) {
            message.success(t('form.success'))
            loadTable()
        }
    }
    //删除
    const onDelete = async (record:any) => {
        const res:any = await DeleteISP({
            id: record.id
        })
        if (res.code == 200) {
            message.success(t('form.success'))
            params.current = 1
            loadTable()
        }
    }
    const onSetRenew = (record:any) => {
        selectRow.value = [record]
        openRenew.value = true
        
        nextTick(() => {
            modalRef.value.init()
        })
    }
    const tableDatas = ref([
    ])
    const rowSelection = {
        // selectedRowKeys:toRaw(selectedData.value),
        onChange: (_selectedRowKeys: string[], selectedRows: any[]) => {
            selectedData.value = selectedRows
            
            // console.log(selectedRows)
        },
        getCheckboxProps: (record: any) => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };
    const onOpenQRcode = (code:string) => {
        console.log('code', code)
        
        open.value = true
        nextTick(() => {
            qrcode.value = code
        })
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