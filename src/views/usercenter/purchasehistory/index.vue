<template>
    <div class="w-full bg-[white] p-[1.75rem] rounded-[1.5rem]">
        <div class="w-full flex items-center">
            <span class="text-[#191919] text-[1.25rem] font-bold">{{t('purchasedhistory.title')}}</span>
        </div>
        <div class="w-full gap-[1.75rem] h-[3rem] flex mt-[1.5rem]">
            <div style="width:calc( 25% - 1.75rem*3/4)" class="h-[3rem]">
                <a-input  :placeholder="t('purchaseddetail.search1')" size="large" class="customAInput" v-model:value="params.KeyWord" allowClear/>
            </div>
            <div style="width:calc( 25% - 1.75rem*3/4)" class="h-[3rem]">
                <a-select :placeholder="t('purchaseddetail.search2')"  class="customASelect h-[3rem] w-full" v-model:value="params.Status" allowClear>
                    <!-- <a-select-option :value="-1">{{t('purchaseddetail.status3')}}</a-select-option> -->
                    <a-select-option :value="1">{{t('purchaseddetail.status1')}}</a-select-option>
                    <a-select-option :value="0">{{t('purchaseddetail.status2')}}</a-select-option>
                </a-select>
            </div>
            <div style="width:calc( 25% - 1.75rem*3/4)" class="h-[3rem]">
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
            <div style="width:calc( 25% - 1.75rem*3/4)" class="h-[3rem]">
                <!-- <div class="text-[] bg-[#01AA44] w-[6.875rem] h-full rounded-[0.75rem] flex justify-center items-center cursor-pointer" @click="onLoad">
                    <span class="text-[1rem] text-white font-medium">{{t('purchasedhistory.button1')}}</span>
                </div> -->
                <a-button type="primary" @click="onLoad" :loading="params.loading"  class="bg-[#01AA44] w-[6.875rem] h-full rounded-[0.75rem] flex justify-center items-center cursor-pointer customAbutton">
                    <span class="text-[1rem] text-white font-medium">{{t('purchasedhistory.button1')}}</span>
                </a-button>
            </div>
        </div>
        <div class="w-full mt-[1.5rem] h-[44.5rem]">
            <a-table :columns="columns" :data-source="tableDatas"  :pagination="false" :loading="params.loading" class="h-[41rem]">
                <template #headerCell="{ title }">
                    <span class="text-[#191919] text-[1rem] font-medium">
                        {{title}}
                    </span>
                </template>
                <template #bodyCell="{ column, record }">
                    <span class="text-[#191919] text-[1rem]" :title="record[column.key]" v-if="column.key=='status'">
                        {{ record[column.key]==0?t('purchaseddetail.status2'):t('purchaseddetail.status1') }}
                    </span>
                    <span class="text-[#191919] text-[1rem]" :title="record[column.key]" v-else>
                        {{ record[column.key] }}
                    </span>
                </template>
            </a-table>
            <PaginationComponent v-model:total="params.total" v-model:page-size="params.pageSize" v-model="params.current" @onCurrentChange="onCurrentChange" @onSizeChange="onSizeChange"/>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { ref, computed, onMounted, reactive } from 'vue'
    import PaginationComponent from '../../../components/PaginationComponent.vue';
    import 'dayjs/locale/zh-cn';
    import { getOrderList } from '../../../api/order'
    import enUS from 'ant-design-vue/es/locale/en_US';
    import zhCN from 'ant-design-vue/es/locale/zh_CN';
    import useI18nStore from '../../../store/i18n'
    import  { Dayjs } from 'dayjs';
    import { useI18n } from 'vue-i18n'
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
    const dates = ref<[Dayjs, Dayjs]|null>(null);
    onMounted(() => {
        loadTable()
    })
    const loadTable = async () => {
        params.loading = true
        const res:any = await getOrderList({
            PageNo:params.current,
            PageSize:params.pageSize,
            KeyWord: params.KeyWord,
            Status: params.Status,
            // ...params,
            SearchBeginTime: dates.value?dates.value[0].format('YYYY-MM-DD HH:mm:ss'):undefined,
            SearchEndTime: dates.value?dates.value[1].format('YYYY-MM-DD HH:mm:ss'):undefined
        })
        params.total = res.body.totalRows
        tableDatas.value = res.body.records
        params.loading = false
    }
    
    const onLoad = () => {
        params.current = 1
        loadTable()
    }
    const columns = computed(() => {
        return [
            {
                title: t('purchasedhistory.column1'),
                dataIndex: 'orderNo',
                key: 'orderNo',
                align:'center',
                ellipsis: true,
                width:'20rem'
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
                dataIndex: 'amount',
                key: 'amount',
                align:'center',
                ellipsis: true
            },
            {
                title: t('purchasedhistory.column4'),
                dataIndex: 'status',
                key: 'status',
                align:'center',
                ellipsis: true
            },
            {
                title: t('purchasedhistory.column5'),
                dataIndex: 'payType',
                key: 'payType',
                align:'center',
                ellipsis: true
            },
            {
                title: t('purchasedhistory.column6'),
                dataIndex: 'sysCreateTime',
                key: 'sysCreateTime',
                align:'center',
                ellipsis: true
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
