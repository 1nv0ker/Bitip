<template>
    <div class="w-full flex flex-col gap-[1.75rem]">
        <div class="w-full rounded-[1.5rem] bg-white p-[1.75rem]">
            <div class="w-full flex justify-between items-center">
                <span class="text-[#191919] text-[1.25rem] font-bold">{{t('backend_menu.setting')}}</span>
                <div class="h-[2.5rem] w-[8.75rem] border-[#666666] border-[1px] rounded-[0.75rem] flex justify-center items-center text-[1rem] text-[#191919] font-medium cursor-pointer">
                    <span>+</span> <span class="pl-[0.5rem] ">{{t('trafficmanager.add_account')}}</span>
                </div>
            </div>
            <div class="mt-[1.5rem]">
                <a-table :columns="columns" :data-source="tableDatas" :scroll="{y:'7.5rem'}" :pagination="false" >
                    <template #headerCell="{ title }">
                        <span class="text-[#191919] text-[1rem] font-medium">
                        {{title}}
                        </span>
                    </template>
                    <template #bodyCell="{ column, record }">
                        <template v-if="column.key === 'action'">
                            <div class="flex gap-[1.875rem] justify-center">
                                <div class="w-[1.25rem] h-[1.25rem] bg-[#01AA44] cursor-pointer">

                                </div>
                                <div class="w-[1.25rem] h-[1.25rem] bg-[#01AA44] cursor-pointer">

                                </div>
                                <div class="w-[1.25rem] h-[1.25rem] bg-[#01AA44] cursor-pointer">

                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <span class="text-[#191919] text-[1rem]">
                                {{ record[column.key] }}
                            </span>
                        </template>
                    </template>
                </a-table>
            </div>
        </div>
        <div class="w-full h-[35rem] p-[1.75rem] rounded-[1.5rem] bg-[white]">
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
            <div class="w-full h-[25rem]" ref="mainRef">
                <div id="traffic_chart" class="w-full h-full"></div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { computed, ref, onMounted, toRaw  } from 'vue'
    import { useI18n } from 'vue-i18n'
    import 'dayjs/locale/zh-cn';
    import enUS from 'ant-design-vue/es/locale/en_US';
    import zhCN from 'ant-design-vue/es/locale/zh_CN';
    import useI18nStore from '../../../store/i18n'
    import * as echarts from 'echarts';
    const { t } = useI18n()
    const selected = ref('date')
    const mainRef = ref<HTMLElement>()
    const I18Store = useI18nStore()
    const datas = ref([
        { date: '2023-01', value: '30' },
        { date: '2023-02', value: '45' },
        { date: '2023-03', value: '60' },
        { date: '2023-04', value: '25' },
        { date: '2023-05', value: '75' }
    ])
    const columns = computed(() => {
        return  [
            {
                title: t('trafficmanager.name'),
                dataIndex: 'name',
                key: 'name',
                align:'center',
                ellipsis: true
            },
            {
                title: t('trafficmanager.limit'),
                dataIndex: 'limit',
                key: 'limit',
                align:'center',
                ellipsis: true
            },
            {
                title: t('trafficmanager.flow'),
                dataIndex: 'flow',
                key: 'flow',
                align:'center',
                ellipsis: true
            },
            {
                title:t('trafficmanager.date'),
                key: 'date',
                dataIndex: 'date',
                align:'center',
                ellipsis: true
            },
            {
                title: t('trafficmanager.status'),
                key: 'status',
                dataIndex: 'status',
                align:'center',
                ellipsis: true
            },
            {
                title: t('trafficmanager.mark'),
                key: 'mark',
                dataIndex: 'mark',
                align:'center',
                ellipsis: true
            },
            {
                title: t('trafficmanager.action'),
                key: 'action',
                align:'center'
            },
        ];
    })
    const tableDatas = ref([
        {
            name: 'DH434345646',
            limit:'￥50000',
            flow: '100',
            date: '2025-10-02 16:10:02',
            status:'11',
            mark: '1234'
        },
        {
            name: 'DH434345646',
            limit:'￥50000',
            flow: '100',
            date: '2025-10-02 16:10:02',
            status:'11',
            mark: '1234'
        },
        {
            name: 'DH434345646',
            limit:'￥50000',
            flow: '100',
            date: '2025-10-02 16:10:02',
            status:'11',
            mark: '1234'
        }
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
    }
    onMounted(() => {
        loadD3Chart()
        
    })
    const loadD3Chart = () => {
        const dataset = toRaw(datas.value).map((item)=>({date: item.date, value:item.value}))

        var chartDom = document.getElementById('traffic_chart');
        var myChart = echarts.init(chartDom);
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
        option && myChart.setOption(option);
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
</style>