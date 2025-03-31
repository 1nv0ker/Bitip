<template>
    <div class="w-full flex flex-col gap-[1.75rem]">
        <div class="w-full rounded-[1.5rem] bg-white p-[1.75rem]">
            <div class="w-full flex justify-between items-center">
                <span class="text-[#191919] text-[1.25rem] font-bold">{{t('trafficmanager.title2')}}</span>
                <div class="h-[2.5rem] w-[8.75rem] border-[#666666] border-[1px] rounded-[0.75rem] flex justify-center items-center text-[1rem] text-[#191919] font-medium cursor-pointer" @click="onAddSub">
                    <span class="pl-[0.5rem]">+</span> <span class="pl-[0.5rem] pr-[0.5rem] ellipsis-single" :title="t('trafficmanager.add_account')">{{t('trafficmanager.add_account')}}</span>
                </div>
            </div>
            <div class="mt-[1.5rem] h-[18rem]">
                <a-table :columns="columns" :data-source="tableDatas" :scroll="{y:'16rem'}" :pagination="false" :loading="loading">
                    <template #headerCell="{ title }">
                        <span class="text-[#191919] text-[1rem] font-medium">
                        {{title}}
                        </span>
                    </template>
                    <template #bodyCell="{ column, record }">
                        <template v-if="column.key === 'action'">
                            <div class="flex gap-[1.875rem] justify-center">
                                <div class="w-[1.25rem] h-[1.25rem]  cursor-pointer" :title="t('trafficmanager.edit')" @click="onEdit(record)">
                                    <img src="../../../assets/usercenter/flowmanager/edit.png" class="w-full h-full"/>
                                </div>
                                <a-switch :checked="record['enabled']==0?false:true" :checked-children="t('trafficmanager.disabled')" :un-checked-children="t('trafficmanager.enable')" @change="(checked:boolean)=>onEditStatus(record, checked?1:0)">
                                </a-switch>
                                <!-- <a-popconfirm placement="topLeft" :ok-text="t('purchaseddetail.yes')" :cancel-text="t('purchaseddetail.no')" :disabled="record['enabled']==0" @confirm="onEditStatus(record, 0)">
                                    <template #title>
                                        <span>{{t('sub.message3')}}</span>
                                    </template>
                                    <div class="w-[1.25rem]  flex justify-center items-center h-[1.25rem]  " :title="t('trafficmanager.disabled')">
                                        <img src="../../../assets/usercenter/flowmanager/disabled.png" :class="`w-full h-full ${record['enabled']==1?'cursor-pointer':'disabled_button'}`"/>
                                    </div>
                                </a-popconfirm>
                                <a-popconfirm placement="topLeft" :ok-text="t('purchaseddetail.yes')" :cancel-text="t('purchaseddetail.no')" :disabled="record['enabled']==1" @confirm="onEditStatus(record, 1)">
                                    <template #title>
                                        <span>{{t('sub.message2')}}</span>
                                    </template>
                                    <div class="w-[1.25rem] 
                                    flex justify-center items-center h-[1.25rem] cursor-pointer ]" :title="t('trafficmanager.enable')">
                                    <img src="../../../assets/usercenter/flowmanager/enable.png" :class="`w-full h-full ${record['enabled']==0?'cursor-pointer':'disabled_button'}`" />
                                    </div>
                                </a-popconfirm> -->
                            </div>
                        </template>
                        <template v-else-if="column.key === 'enabled'">
                            <span class="text-[#191919] text-[1rem]">
                                {{ record[column.key]?t('trafficmanager.enable'):t('trafficmanager.disabled') }}
                            </span>
                        </template>
                        <template v-else>
                            <span class="text-[#191919] text-[1rem]">
                                {{ record[column.key] }}
                            </span>
                        </template>
                    </template>
                </a-table>
                <PaginationComponent v-model:total="params.total" v-model:page-size="params.pageSize" v-model="params.current" @onCurrentChange="onCurrentChange" @onSizeChange="onSizeChange"/>
            </div>
        </div>
        <div class="w-full h-[35rem] p-[1.75rem] rounded-[1.5rem] bg-[white]">
            <div class="pb-[1.5rem] flex justify-between">
                <span class="text-[#191919] text-[1.25rem] font-bold">{{t('trafficmanager.title')}}</span>
                <div class="flex items-center gap-[1.75rem]">
                    <div>
                        <a-select class="customASelect w-[20rem]" :loading="loading" :placeholder="t('trafficmanager.placeholder3')" @select="onSelected(selected)" v-model:value="KeyName">
                            <a-select-option :value="item.value" v-for="item in accountList">{{item.label}}</a-select-option>
                        </a-select>
                    </div>
                    <a-config-provider :locale="I18Store.language=='zh'?zhCN:enUS">
                        <a-range-picker  :picker="selected" :placeholder="[t('trafficmanager.placeholder1'), t('trafficmanager.placeholder2')]" class=" traffic_select" v-model:value="dates" @change="onSelected(selected)">
                            <template #suffixIcon>
                                <div class="w-[1.25rem] h-[1.25rem] ">
                                    <img src="../../../assets/usercenter/date.png" class="w-full h-full"/>
                                </div>
                            </template>
                        </a-range-picker>
                    </a-config-provider>
                    <div class="w-[12.125rem] h-[2.5rem] rounded-[0.75rem] border-[1px] border-[#999999] p-[0.25rem] flex">
                        <div v-for="item in items" :class="`h-[2rem] w-[3.875rem] rounded-[0.75rem] flex cursor-pointer items-center justify-center
                         ${selected==item.key?'bg-[#191919] text-[#FFFFFF]':'text-[#191919]'}`" @click="onSelected(item.key)">
                            <span class="text-[1rem]">{{item.label}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full h-[25rem]" ref="mainRef">
                <div id="traffic_chart" class="w-full h-full flex justify-center items-center">
                    <a-config-provider :locale="I18Store.language=='zh'?zhCN:enUS">
                        <a-empty v-if="isEmpty" />
                    </a-config-provider>
                    
                </div>

                
            </div>
        </div>
        <AddSubModal v-model="open" :type="type" @on-add-complate="onAddComplate" ref="addsubRef" />
    </div>
</template>
<script setup lang="ts">
    import { computed, ref, onMounted, toRaw, reactive, nextTick} from 'vue'
    import AddSubModal from './AddSubModal.vue';
    import PaginationComponent from '../../../components/PaginationComponent.vue';
    import { useI18n } from 'vue-i18n'
    import  dayjs, { Dayjs } from 'dayjs';
    import 'dayjs/locale/zh-cn';
    import { GetSubAccountList, UpdateAccount, type updateData } from '../../../api/account'
    import { GetFlow } from '../../../api/flow'
    import enUS from 'ant-design-vue/es/locale/en_US';
    import zhCN from 'ant-design-vue/es/locale/zh_CN';
    import useI18nStore from '../../../store/i18n'
    import * as echarts from 'echarts';
    import { message } from 'ant-design-vue';
    const { t } = useI18n()
    const selected = ref('date')
    const dates = ref<[Dayjs, Dayjs]|null>(null);
    const open = ref(false)
    const mainRef = ref<HTMLElement>()
    const I18Store = useI18nStore()
    const type = ref('add')
    const addsubRef = ref<any>()
    const loading = ref(false)
    let myChart:any = null
    const KeyName = ref<any>()
    const isEmpty = ref(false)
    // const checked = ref(false)
    const params = reactive({
        total: 0,
        pageSize: 3,
        current: 1
    })
    const datas = ref<any[]>([

    ])
    const accountList = ref<any[]>([])
    const columns = computed(() => {
        return  [
            {
                title: t('trafficmanager.name'),
                dataIndex: 'keyName',
                key: 'keyName',
                align:'center',
                ellipsis: true
            },
            {
                title: t('trafficmanager.limit'),
                dataIndex: 'limited',
                key: 'limited',
                align:'center',
                ellipsis: true
            },
            {
                title: t('trafficmanager.flow'),
                dataIndex: 'usedBandwidth',
                key: 'usedBandwidth',
                align:'center',
                ellipsis: true
            },
            {
                title:t('trafficmanager.date'),
                key: 'sysCreateTime',
                dataIndex: 'sysCreateTime',
                align:'center',
                ellipsis: true
            },
            {
                title: t('trafficmanager.status'),
                key: 'enabled',
                dataIndex: 'enabled',
                align:'center',
                ellipsis: true
            },
            {
                title: t('trafficmanager.mark'),
                key: 'remark',
                dataIndex: 'remark',
                align:'center',
                ellipsis: true
            },
            {
                title: t('trafficmanager.action'),
                key: 'action',
                align:'center',
                width: '15rem'
            },
        ];
    })
    const tableDatas = ref([
        
    ])
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
        // loadAccount()
        console.log('onSelected', KeyName.value)
        if (KeyName.value) {
            console.log('loadFlow')
            loadFlow()
        }
    }
    onMounted(() => {
        // loadD3Chart()
        loadAccount()
        
    })
    const loadFlow = async () => {
        isEmpty.value = false
        myChart?.showLoading('default')
        const res:any = await GetFlow({
            DateBegin: dates.value?dates.value[0].format('YYYY-MM-DD HH:mm:ss'):undefined,
            DateEnd: dates.value?dates.value[1].format('YYYY-MM-DD HH:mm:ss'):undefined,
            // DateBegin:dayjs().subtract(2, 'day').format('YYYY-MM-DD HH:mm:ss'),
            // DateEnd:dayjs().format('YYYY-MM-DD HH:mm:ss'),
            KeyName:KeyName.value
        })
        
        if (res.code != 200) {
            myChart?.hideLoading()
            return
        }
        if (res.body.length == 0) {
            isEmpty.value = true
            myChart?.hideLoading()
            return
        }
        const tempDatas:any[] = res.body.map((item:any)=> {
            if (selected.value == 'date') {
                return {
                    date:dayjs(item.recordDate).format('YYYY-MM-DD'),
                    value: item.flow
                }
            } else if (selected.value == 'month') {
                return {
                    date:dayjs(item.recordDate).format('YYYY-MM'),
                    value: item.flow
                }
            } else {
                return {
                    date:dayjs(item.recordDate).format('YYYY'),
                    value: item.flow
                }
            }
        }).reverse()
        if (selected.value !== 'date') {
            const mergeDatas:any = tempDatas.reduce((acc:any, {date,value}) => {
                acc[date] = (acc[date] || 0 ) + value
                return acc
            }, {})
            datas.value = Object.entries(mergeDatas).map((item:any)=>({
                date: item[0],
                value: item[1].toFixed(2)
            }))
        } else {
            datas.value = tempDatas
        }
        // console.log(datas.value)
        loadD3Chart()
        myChart.resize(); 
        
    }
    const loadAccount = () => {
        loading.value = true
         GetSubAccountList({
            PageNo: params.current,
            PageSize: params.pageSize
        })
        .then((res:any) => {
            loading.value = false
            tableDatas.value = res.body.records
            params.total = res.body.totalRows
            params.current = res.body.pageNo
            params.pageSize = res.body.pageSize
            accountList.value = res.body.records
            .map((item:any)=> ({
                value:item.keyName,
                label:item.keyName
            }))
            
        })
        .catch(() => {
            loading.value = false
        })
        
    }
    const onAddComplate = () => {
        loadAccount()
        open.value = false
    }
    const onCurrentChange = (num:number) => {
        params.current = num
        loadAccount()
    }
    const onSizeChange = (num:number,size:number) => {
        params.current = num
        params.pageSize = size
        loadAccount()
    }
    const onAddSub = () => {
        type.value = 'add'
        open.value = true
        nextTick(() => {
            addsubRef.value.init()
        })
    }
    const onEdit = (record:updateData) => {
        type.value = 'edit'
        open.value = true
        nextTick(() => {
            addsubRef.value.init(record)
        })
    }
    const onEditStatus = async (record:updateData, type:number) => {
        record.enabled = type
        const res:any = await UpdateAccount({
            ...record,
            enabled:type
        })
        if (res.code == 200) {
            message.success(t('form.success'))
            loadAccount()
        }
    }
    const loadD3Chart = () => {
        const dataset = toRaw(datas.value).map((item:any)=>({date: item.date, value:item.value}))

        var chartDom = document.getElementById('traffic_chart');
        myChart?.dispose();
        myChart = echarts.init(chartDom);
        var option;
        option = {
            grid: {
                top: 10,
                bottom: 30,
                left: 50,
                right:50

            },
            tooltip: {
                trigger: 'axis',
                // borderColor: '#01AA44',
                // borderType: 'dashed',
                // backgroundColor: '#191919', // 蓝色背景
                borderWidth: 0,             // 隐藏边框线
                padding: [0,0 ],           // 紧凑内间距
                textStyle: {
                    color: '#fff',            // 白色文字
                    fontSize: '1rem',
                    fontWeight: 'bolder',
                    fontFamily: "Alibaba Sans",
                },
                axisPointer: {
                    type: 'line',
                    axis:'x',
                    lineStyle: {
                        type: [5, 10],
                        color:'#01AA44',
                        dashOffset: 8,
                        miterLimit: 0
                    }
                },
                confine: false,
                // position:[],
                position: function (_point:any, params:any, _dom:any, _rect:any, size:any) {
                    const dataPoint = myChart.convertToPixel({ xAxisIndex: 0, yAxisIndex: 0 }, [params[0].dataIndex, params[0].value]);
                    // console.log(params, dataPoint)
                    const contentSize = size.contentSize
                    // console.log(point, params, dom, rect, size)
                    return [dataPoint[0]-contentSize[0]/2, dataPoint[1]-contentSize[1]*1.5];
                },
                appendToBody: true,
                className:'usercenter_tooltip',
                formatter: function (params:any) {
                return `
                    <div class="tooltip-body">
                        <span>${params[0].value}GB</span>
                        <div class="arrow-down"></div>
                    </div>
                `;
                },
            },
            xAxis: {
                type: 'category',
                data: dataset.map(item=>item.date),
                axisTick: {
                    show: false
                },
                axisLabel: {
                    fontFamily: "Alibaba Sans",
                    fontSize: '1.125rem',
                    color:'#999999'
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    fontFamily: "Alibaba Sans",
                    fontSize: '1.125rem',
                    color:'#999999'
                }
            },
            series: [
                {
                    data: dataset.map(item=>item.value),
                    type: 'line',
                    // symbol: 'none',
                    lineStyle: {
                        color:'#01AA44'
                    },
                    showSymbol: false,
                    areaStyle: {
                        color: {
                            type: 'linear', // 线性渐变
                            x: 0,          // 水平方向起始点 (0=左侧, 1=右侧)
                            y: 0,          // 垂直方向起始点 (0=顶部, 1=底部)
                            x2: 0,         // 水平方向终点
                            y2: 1,         // 垂直方向终点 (垂直向下渐变)
                            colorStops: [
                            {
                                offset: 1, // 0% 位置
                                color: 'rgba(254, 255, 184, 0.1)' // 浅黄色半透明
                            },
                            {
                                offset: 0, // 100% 位置
                                color: 'rgba(1, 170, 68, 0.5)'    // 绿色半透明
                            }
                            ]
                        }
                    },
                    emphasis: {
                        show: true,
                        itemStyle: {
                            color: '#01AA44',
                        },
                    },
                }
            ]
        };
        myChart?.hideLoading();
        option && myChart?.setOption(option);
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
<style>
    /* 在全局 CSS 中定义 */
    /* .usercenter_tooltip {
        background-color: transparent;
        width: 6.25rem;
        height: 3.25rem;
        padding:0!important;
    } */
.tooltip-body {
    width: 100%;
    height: 100%;
    /* padding-top: 0.5rem;
    padding-bottom: 0.5rem; */
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    font-size: 1rem;
    font-family: "Alibaba Sans";
    border-radius: 0.5rem;
    background-color:#191919;
    /* background: white; */
}
/* 核心三角实现 */
.arrow-down {
  position: absolute;
  bottom: -7px;      /* 定位到容器下方 */
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 12px solid #191919; /* 颜色与容器背景一致 */
}
.disabled_button {
    filter:  grayscale(100%) brightness(0.7) contrast(0.8);
    cursor: not-allowed;
}
</style>