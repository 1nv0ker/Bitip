<template>
    <div class="w-full bg-[white] p-[1.75rem] rounded-[1.5rem]">
        <div class="w-full flex items-center">
            <span class="text-[#191919] text-[1.25rem] font-bold">{{t('whitelist.title')}}</span>
        </div>
        <a-row class="w-full mt-[1.5rem]" :gutter="28">
            <a-col :span="6" class="h-[3rem]">
                <a-input  :placeholder="t('whitelist.form1')" size="large" class="customAInput" v-model:value="params.KeyWord" allowClear/>
            </a-col>
            <a-col :span="6" class="h-[3rem]">
                <a-config-provider :locale="I18Store.language=='zh'?zhCN:enUS">
                    <a-range-picker showTime picker="day" :placeholder="[t('trafficmanager.placeholder1'), t('trafficmanager.placeholder2')]" class="customADate w-full" v-model:value="dates">
                        <template #suffixIcon>
                            <div class="w-[1.25rem] h-[1.25rem] ">
                                    <img src="../../../assets/usercenter/date.png" class="w-full h-full"/>
                                </div>
                        </template>
                    </a-range-picker>
                </a-config-provider>
            </a-col>
            <a-col :span="6" class="h-[3rem]">
                <a-button type="primary" @click="onLoad" :loading="params.loading"  class="bg-[#01AA44] w-[6.875rem] h-full rounded-[0.75rem] flex justify-center items-center cursor-pointer customAbutton">
                    <span class="text-[1rem] text-white font-medium">{{t('whitelist.button1')}}</span>
                </a-button>
            </a-col>
            
        </a-row>
        <a-row class="w-full mt-[1.5rem]">
            <a-col :span="6">
                <div class="flex gap-[1.75rem] h-[3rem]">
                    <div type="primary" @click="onAdd"  class="bg-[#FAFAFA] w-[6.875rem] 
                    border-[#EBEFF8] border-[1px]
                    h-full rounded-[0.75rem] flex justify-center items-center cursor-pointer ">
                        <span class="text-[1rem] text-[#191919] ">{{t('whitelist.button2')}}</span>
                    </div>
                    <div type="primary" @click="onOpenDeleteModal"   class="bg-[#FAFAFA] 
                        border-[#EBEFF8] border-[1px]
                        w-[6.875rem] h-full rounded-[0.75rem] flex justify-center items-center cursor-pointer ">
                        <span class="text-[1rem] text-[#191919] ">{{t('whitelist.button3')}}</span>
                    </div>
                </div>
            </a-col>
        </a-row>
        <div class="w-full mt-[1.5rem] h-[44rem]">
            <a-table :columns="columns" :data-source="tableDatas" :scroll="{y:'37.5rem'}" :pagination="false" :row-selection="rowSelection" rowKey="id" :loading="params.loading">
                <template #headerCell="{ title }">
                    <span class="text-[#191919] text-[1rem] font-medium">
                        {{title}}
                    </span>
                </template>
                <template #bodyCell="{ column, record }">
                    <span class="text-[#191919] text-[1rem]" :title="record[column.key]" v-if="column.key=='status'">
                        {{ record[column.key]==0?t('purchaseddetail.status2'):t('purchaseddetail.status1') }}
                    </span>
                    <template v-else-if="column.key === 'action'">
                        <div class="flex gap-[1.75rem] justify-center action_button text-[#5E6F94] text-[1rem] font-medium items-center cursor-pointer">
                            <div class="w-[1.25rem] h-[1.25rem]  cursor-pointer" :title="t('trafficmanager.edit')" @click="onEdit(record)">
                                <img src="../../../assets/usercenter/flowmanager/edit.png" class="w-full h-full"/>
                            </div>
                        <a-popconfirm placement="topLeft" :ok-text="t('purchaseddetail.yes')" :cancel-text="t('purchaseddetail.no')" @confirm="onDelete(record)">
                            <template #title>
                                <span>{{t('whitelist.message1')}}</span>
                            </template>
                            
                                <img src="../../../assets/usercenter/delete.png" class="w-[1.125rem] h-[1.125rem] mb-[0.125rem]"/>
                            
                        </a-popconfirm>
                        </div>
                    </template>
                    <span class="text-[#191919] text-[1rem]" :title="record[column.key]" v-else>
                        {{ record[column.key] }}
                    </span>
                </template>
            </a-table>
           
            <PaginationComponent showTip v-model:total="params.total" v-model:page-size="params.pageSize" v-model="params.current" @onCurrentChange="onCurrentChange" @onSizeChange="onSizeChange"/>
        </div>
        <FormModal v-model="open" ref="modalRef" @onAddComplate="onAddComplate" :type="type"/>
        <DeleteModal v-model="open2"  @onConfirmDelete="onBatchDelete" />
    </div>
</template>
<script setup lang="ts">
    import { ref, computed, onMounted, reactive, nextTick } from 'vue'
    import PaginationComponent from '../../../components/PaginationComponent.vue';
    import 'dayjs/locale/zh-cn';
    import FormModal from './FormModal.vue';
    import DeleteModal from './DeleteModal.vue';
    import { GetList, DeleteWhitelist, BatchDelete } from '../../../api/whitelist'
    import enUS from 'ant-design-vue/es/locale/en_US';
    import zhCN from 'ant-design-vue/es/locale/zh_CN';
    import useI18nStore from '../../../store/i18n'
    import  { Dayjs } from 'dayjs';
    import { useI18n } from 'vue-i18n'
    import { message } from 'ant-design-vue';

    const { t } = useI18n()
    const I18Store = useI18nStore()
    const params = reactive({
        total:0,
        pageSize: 10,
        current: 1,
        KeyWord: '',
        Status: undefined,
        loading: false
    })
    const open = ref(false)
    const open2 = ref(false)
    const modalRef = ref<any>()
    const type = ref('add')
    const selectedData= ref<any[]>([])
    const dates = ref<[Dayjs, Dayjs]|null>(null);
    onMounted(() => {
        loadTable()
    })
    const loadTable = async () => {
        params.loading = true
         await GetList({
            PageNo:params.current,
            PageSize:params.pageSize,
            KeyWord: params.KeyWord,
            // SearchBeginTime: dates.value?dates.value[0].format('YYYY-MM-DD HH:mm:ss'):undefined,
            // SearchEndTime: dates.value?dates.value[1].format('YYYY-MM-DD HH:mm:ss'):undefined
        })
        .then((res:any) => {
            params.total = res.body.totalRows
            tableDatas.value = res.body.records
            params.loading = false
        })
        .catch(() => {
            params.loading = false
        })
        
    }
    
    const onLoad = () => {
        params.current = 1
        loadTable()
    }
    const rowSelection = {
        // selectedRowKeys:toRaw(selectedData.value),
        onChange: (_selectedRowKeys: string[], selectedRows: any[]) => {
            selectedData.value = selectedRows
            console.log(selectedRows)
        },
        getCheckboxProps: (record: any) => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };
    const onAdd = () => {
        type.value = 'add'
        open.value = true
        nextTick(() => {
            modalRef.value.init()
        })
    }
    const onDelete = async (record:any) => {
        // console.log('record', record)
        const res:any = await DeleteWhitelist({
            id: record.id
        })
        if (res.code == 200) {
            message.success(t('form.success'))
        }
        onLoad()
    }
    //批量删除
    const onBatchDelete = async () => {
        // for (let i=0,len=selectedData.value.length;i<len;i++) {
        //     const data = selectedData.value[i]
        //     await DeleteWhitelist({
        //         id: data.id
        //     })
        // }
        const res:any = await BatchDelete(selectedData.value.map((item:any)=>item.id))
        selectedData.value = []
        if (res.code == 200) {
            message.success(t('form.success'))
        }
        open2.value = false
        onLoad()
    }
    const onEdit = (record:any) => {
        type.value = 'edit'
        open.value = true
        nextTick(() => {
            modalRef.value.init(record)
        })
    }
    const onOpenDeleteModal = () => {
        if (selectedData.value.length>0) {
            open2.value = true
        }
    }
    const onAddComplate = () => {
        open.value = false
        loadTable()
    }
    const columns = computed(() => {
        return [
            {
                title: t('whitelist.column1'),
                dataIndex: 'ipAddress',
                key: 'ipAddress',
                align:'center',
                ellipsis: true,
                width:'30rem'
            },
            {
                title: t('whitelist.column2'),
                dataIndex: 'sysCreateTime',
                key: 'sysCreateTime',
                align:'center',
                ellipsis: true,
                // width:'20rem'
            },
            {
                title: t('whitelist.column3'),
                dataIndex: 'remark',
                key: 'remark',
                align:'center',
                ellipsis: true
            },
            {
                title: t('trafficmanager.action'),
                key: 'action',
                align:'center',
                width: '12rem'
            },
        ]
    })
    const tableDatas = ref([
    
    ])
    const onCurrentChange = (num:number) => {
        params.current = num
        loadTable()
    }
    const onSizeChange = (num:number,size:number) => {
        params.current = num
        params.pageSize = size
        loadTable()
    }
</script>
