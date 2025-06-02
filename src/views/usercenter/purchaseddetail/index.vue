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
                <a-select :placeholder="t('purchaseddetail.column4')"  class="customASelect h-[3rem] w-full" v-model:value="params.IspType" allowClear>
                    <a-select-option :value="1">{{t('setmenu.location2')}}</a-select-option>
                    <a-select-option :value="0">{{t('setmenu.location')}}</a-select-option>
                </a-select>
                <!-- <a-input  :placeholder="t('purchaseddetail.column4')" size="large" class="customAInput" v-model:value="params.IspType"/> -->
            </div>
            <div style="width:calc( 25% - 1.75rem*3/4)" class="h-[3rem]" >
                <!-- <a-select :placeholder="t('purchaseddetail.search3')" class="customASelect h-[3rem] w-full" >
                    <a-select-option value="jack">Jack</a-select-option>
                    <a-select-option value="lucy">Lucy</a-select-option>
                    <a-select-option value="Yiminghe">yiminghe</a-select-option> -->
                    <!-- <a-input  :placeholder="t('purchaseddetail.search3')" size="large" class="customAInput" v-model:value="params.IspLocation" allowClear /> -->
                    <a-select :placeholder="t('purchaseddetail.search3')"  class="customASelect h-[3rem] w-full" :loading="selectLoading" :options="regions" v-model:value="params.IspLocation" allowClear>
                        <!-- <a-select-option :value="1">{{t('setmenu.location2')}}</a-select-option>
                        <a-select-option :value="0">{{t('setmenu.location')}}</a-select-option> -->
                    </a-select>
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
                <a-button class="text-[] bg-[#01AA44] w-[6.875rem] h-full rounded-[0.75rem] flex justify-center items-center cursor-pointer" @click="loadTable" :loading="params.loading" >
                    <span class="text-[1rem] text-white font-medium">{{t('purchaseddetail.button1')}}</span>
                </a-button>
                <div class="border-[1px] border-[#EBEFF8] bg-[#FAFAFA] rounded-[0.5rem] flex justify-center items-center h-full w-[6.875rem] cursor-pointer" @click="onAllRenew">
                    <span class="text-[1rem] text-[#191919] ellipsis-single pl-[0.5rem] pr-[0.5rem]" :title="t('purchaseddetail.button2')">{{t('purchaseddetail.button2')}}</span>
                </div>
                <a-button :loading="params.loading " class="border-[1px] border-[#EBEFF8] bg-[#FAFAFA] rounded-[0.5rem] flex justify-center items-center h-full w-[6.875rem] cursor-pointer" @click="onDownload">
                    <span class="text-[1rem] text-[#191919]">{{t('purchaseddetail.button3')}}</span>
                </a-button>
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
        <div class="w-full pt-[1.75rem] h-[47rem]">
            <a-table :columns="columns" :data-source="tableDatas" rowKey="key" :scroll="{x: '80rem', y:tableDatas.length>0?'37.5rem':'0rem'}"  :row-selection="rowSelection" :pagination="false" :loading="params.loading" class="h-[41rem]">
                <template #headerCell="{ title }">
                    <span class="text-[#191919] text-[1rem] font-medium">
                        {{title}}
                    </span>
                </template>
                <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'action'">
                        <div class="flex gap-[1.75rem] justify-center action_button text-[#5E6F94] text-[1rem] font-medium items-center">
                            <div class="w-[1.25rem] h-[1.25rem]  cursor-pointer" :title="t('trafficmanager.edit')" @click="onEdit(record)">
                                    <img src="../../../assets/usercenter/flowmanager/edit.png" class="w-full h-full"/>
                                </div>
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
                        <QrcodeOutlined class="text-[1.5rem] cursor-pointer text-[#666666]" @click="onOpenQRcode(record['code'])"/>
                        <!-- <a-qrcode :value="record[column.key]" :size="24" /> -->
                    </template>
                    <template v-else-if="column.key == 'ispType'">
                        <!-- <QrcodeOutlined class="text-[1.5rem] cursor-pointer text-[#666666]" @click="onOpenQRcode(record['ip'])"/> -->
                        <!-- <a-qrcode :value="record[column.key]" :size="24" /> -->
                         <span>{{record[column.key]==0?t('setmenu.location'):t('setmenu.location2')}}</span>
                    </template>
                    <template v-else-if="column.key == 'ip'">
                        <!-- <div class="p-[0.5rem] relative ip_box"> -->
                            <div class="p-[0.5rem] relative flex items-center justify-center "> 
                            <span class="text-[#191919] text-[1rem]" :title="record[column.key]">
                            {{ record[column.key] }}
                            </span>
                            <Copy2 :message="record[column.key]"/>
                            <!-- <CopyOutlined class="text-[1.5rem] cursor-pointer text-[#5E6F94] ml-[4px]" /> -->
                            <!-- <div class=" absolute top-0 bottom-0 left-0 right-0 w-full h-full ip_mask flex items-center justify-center" style="z-index: 100;background-color: rgba(0, 0, 0, 0.5);">
                               
                                <Copy :message="record[column.key]" />
                            </div> -->
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
        <StaticRenew v-model="openRenew" ref="modalRef" :selectRow="selectRow" @onComplate="onComplate"/>
        <RemarkModal v-model="open2"  ref="remarkRef" @onComplate="onComplate"/>
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
    import { GetList, SetAutoRenew, DeleteISP, DownloadIsp, GetSelectList } from '../../../api/recharge'
    import QrCodeModal from './QrCodeModal.vue';
    import Copy2 from './Copy2.vue';
    // import { CopyOutlined } from '@ant-design/icons-vue';
    // import Copy from './Copy.vue';
    import AutoComponent from './AutoComponent.vue';
    import { useI18n } from 'vue-i18n'
    import useI18nStore from '../../../store/i18n'
    import RemarkModal from './RemarkModal.vue';
    import StaticRenew from '../../../components/StaticRenew.vue'
    import { message } from 'ant-design-vue';
    import { Base64 } from 'js-base64';
    import { unref } from 'vue';
    const { t } = useI18n()
    const I18Store = useI18nStore()
    const qrcode = ref('')
    const open = ref(false)
    const open2 = ref(false)
    const openRenew = ref(false)
    const modalRef = ref<any>()
    const selectRow = ref<any[]>([])
    const selectedData = ref<any[]>([])
    const selectedRowKey = ref<any[]>([])
    const remarkRef = ref<any>()
    const dates = ref<[Dayjs, Dayjs]|null>(null);
    const selectLoading = ref(false)
    const params = reactive({
        total:0,
        pageSize: 10,
        current: 1,
        KeyWord: '',
        Status: undefined,
        loading: false,
        IspLocation:undefined,
        AutoRenew:null,
        IspType:null,
        selectKeys:[]
    })
    // const tableH = ref('')
    const regions = ref([])
    // const regions = computed(() => {
    //     return [
    //     {
    //         value: 'us-ca',
    //         label:t('nations.usca')
    //     },
    //     {
    //         value: 'us-va',
    //         label:t('nations.usva')
    //     },
    //     {
    //         value: 'us-nj',
    //         label:t('nations.usnj')
    //     },
    //     {
    //         value: 'us-tx',
    //         label:t('nations.ustx')
    //     },
    //     {
    //         value: 'gb-london',
    //         label:t('nations.gblondon')
    //     },
    //     {
    //         value: 'de-hesse',
    //         label:t('nations.dehesse')
    //     },
    //     {
    //         value: 'sg',
    //         label:t('nations.sg')
    //     },
    //     {
    //         value: 'us',
    //         label:t('nations.us')
    //     },
    //     {
    //         value: 'cn-hk',
    //         label:t('nations.cnhk')
    //     },
    //     {
    //         value: 'cn-tw',
    //         label:t('nations.cntw')
    //     }
    // ]
    // })
    const columns = computed(() => {
        return [
            // {
               
            //     dataIndex: 'id',
            //     key: 'id',
            //     colSpan: 0,
            //     width: 0
            // },
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
                width: '25rem',
                
            },
            {
                title: t('purchaseddetail.column4'),
                dataIndex: 'ispType',
                key: 'ispType',
                align:'center',
                ellipsis: true,
                width:'6rem'
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
        // tableDatas.value = [1,2,3,4,5,6,7,8,9,10, 11]
        selectLoading.value = true
        GetSelectList()
        .then((res:any) => {
            regions.value = res.body
            selectLoading.value = false
        })
        .catch(() => {
            selectLoading.value = false
        })
    })
    const onEdit = (record:any) => {
        open2.value = true
        nextTick(() => {
            remarkRef.value.init(record)
        })
    }
    const loadTable = async () => {
        params.loading = true
        const res:any = await GetList({
            PageNo: params.current,
            PageSize:params.pageSize,
            IspLocation:params.IspLocation,
            AutoRenew:params.AutoRenew,
            KeyWord:params.KeyWord,
            SearchBeginTime: dates.value?dates.value[0].format('YYYY-MM-DD HH:mm:ss'):undefined,
            SearchEndTime: dates.value?dates.value[1].format('YYYY-MM-DD HH:mm:ss'):undefined,
            IspType:params.IspType
        })
        .catch(() => {
            params.loading = false
        })
        params.loading = false
        if (res.code == 200) {
            tableDatas.value = res.body.records.map((item:any)=>{
                const proxySplit = item.ip.split(":");
                let str = Base64.encode(
                `${proxySplit[2]}:${proxySplit[3]}@${proxySplit[0]}:${proxySplit[1]}`)
                let codeString = `socks://${str}?obfs=none`
                return {
                    ...item,
                    code: codeString,
                    key: ''+item.id
                }
            })
            params.total = res.body.totalRows
        }
    }   
    const onCurrentChange = (num:number) => {
        params.current = num
        selectedData.value = []
        selectedRowKey.value = []
        loadTable()
    }
    const onSizeChange = (num:number,size:number) => {
        params.current = num
        params.pageSize = size
        selectedData.value = []
        selectedRowKey.value = []
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
    const onComplate = () => {
        params.current = 1
        loadTable()
    }
    const rowSelection = computed(() => {
        return {
            selectedRowKeys:unref(selectedRowKey),
            // selections: false,
            fixed: true,
            // hideDefaultSelections: true,
            onChange: (selectedRowKeys: string[], selectedRows: any[]) => {
                
                selectedRowKey.value = selectedRowKeys
                console.log('selectedRowKeys', selectedRowKeys, unref(selectedRowKey))
                selectedData.value = selectedRows
                
                // console.log(selectedRows)
            }
        }
    })
    const onOpenQRcode = (code:string) => {
        console.log('code', code)
        
        open.value = true
        nextTick(() => {
            qrcode.value = code
        })
    }
    const onDownload = async () => {
        params.loading = true
        
        // window.location.href = 'https://www.bitip.com/api/UserIsps/DownIsp?PageNo=1&PageSize=10&IspLocation=&KeyWord='
        // window.open('https://example.com/files/report.pdf', '_blank');
        const res:any = await DownloadIsp({
            PageNo: params.current,
            PageSize:params.pageSize,
            IspLocation:params.IspLocation,
            AutoRenew:params.AutoRenew,
            KeyWord:params.KeyWord,
            SearchBeginTime: dates.value?dates.value[0].format('YYYY-MM-DD HH:mm:ss'):undefined,
            SearchEndTime: dates.value?dates.value[1].format('YYYY-MM-DD HH:mm:ss'):undefined,
            IspType:params.IspType
        })
        .catch(() => {
            params.loading = false
        })
        params.loading = false
        // console.log('res', res, typeof res)
       
        // window.locaion = res
        const url =  URL.createObjectURL(res);
      
        // 创建隐藏的下载链接
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = '已购详情.xlsx';
        
        // 触发下载
        document.body.appendChild(a);
        a.click();
        
        // 清理资源
        URL.revokeObjectURL(url);
        document.body.removeChild(a);
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