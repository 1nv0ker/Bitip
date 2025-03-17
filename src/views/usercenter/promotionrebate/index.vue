<template>
    <div class="w-full">
        <div class="w-full h-[16.375rem] bg-white rounded-[1.5rem]">
            <div class="w-full h-[8.125rem] rounded-tl-[1.5rem] rounded-tr-[1.5rem] flex flex-col gap-[0.25rem] text-[#191919] justify-center items-center" style="background: linear-gradient( 180deg, #FAFFED 0%, #FDFFEC 100%);"> 
                <span class="text-[2rem] font-bold">{{t('promotionrebate.title')}}</span>
                <span class="text-[1.25rem]">{{t('promotionrebate.subtitle')}}</span>
            </div>
            <div class="p-[1.5rem] w-full flex gap-[1.75rem]">
                <div class="flex flex-col gap-[0.5rem] w-[24%]">
                    <span>{{t('promotionrebate.button1')}}</span>
                    <div class="border-[1px] border-[#666666] w-full flex items-center justify-between rounded-[0.75rem] h-[3rem] pl-[1.25rem] pr-[1.25rem] ">
                        <span class="text-[#191919] text-[1rem]">1234123</span>
                        <a-tooltip  trigger="click" :open="copy1"  @click="onClick" :arrow="false" >
                            <template #title>
                                <span class="text-[1rem]">{{t('promotionrebate.copy')}}</span>
                            </template>
                            <img src="../../../assets/copy.png" class="w-[1.5rem] h-[1.5rem] cursor-pointer"/>
                        </a-tooltip>
                    </div>
                </div>
                <div class="flex flex-col gap-[0.5rem] w-[75%]">
                    <span>{{t('promotionrebate.button2')}}</span>
                    <div class="border-[1px] border-[#666666] w-full max-w-[68.75rem] flex items-center justify-between rounded-[0.75rem] h-[3rem] pl-[1.25rem] pr-[1.25rem] ">
                        <span class="text-[#191919] text-[1rem]">https://www.figma.com/d91?node-id=1195-1345&t=AMb4套餐1?node-id=入邀请码</span>
                        <a-tooltip  trigger="click" :open="copy2"  @click="onClick2" :arrow="false" >
                            <template #title>
                                <span class="text-[1rem]">{{t('promotionrebate.copy')}}</span>
                            </template>
                            <img src="../../../assets/copy.png" class="w-[1.5rem] h-[1.5rem] cursor-pointer"/>
                        </a-tooltip>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full bg-[white] p-[1.75rem] rounded-[1.5rem] mt-[1.75rem] pr-[2.5rem]">
            <!-- <div class="w-full flex items-center">
                <span class="text-[#191919] text-[1.25rem] font-bold">{{t('promotionrebate.title2')}}</span>
            </div> -->
            <div class=" flex gap-[1.875rem]">
                <div class="h-[7.625rem] rounded-[1rem] border-[#EBEFF8] border-[1px] pl-[1.75rem] gap-[0.25rem] flex flex-col justify-center hover:border-[#01AA44]" v-for="item in items" style="width: calc( (100% - 1.875rem*5)/6 );background: linear-gradient( 145deg, #E6FFF0 0%, #FFFFFF 100%);">
                    <span class="text-[#999999] text-[1rem]">{{item.title}}</span>
                    <span class="text-[#191919] text-[2.25rem] font-bold">{{cardData[item.key]}}</span>
                </div>
                <div class="h-[7.625rem] rounded-[1rem]  gap-[0.75rem] flex flex-col justify-center items-end"  style="width: calc( (100% - 1.875rem*5)/6 )">
                   <div class="h-[3.25rem] w-[9.625rem] rounded-[0.75rem] border-[1px] border-[#191919] flex justify-center items-center cursor-pointer" @click="onWithdrawalToAccount">
                        <span class="text-[1.125rem] text-[#191919]">{{t('promotionrebate.title2_button1')}}</span>
                   </div>
                   <div class="h-[3.25rem] w-[9.625rem] rounded-[0.75rem] bg-[#01AA44] flex justify-center items-center cursor-pointer" @click="onWithdrawal">
                        <span class="text-[1.125rem] text-[white] font-medium">{{t('promotionrebate.title2_button2')}}</span>
                   </div>
                </div>
            </div>
        </div>
        <div class="w-full bg-white p-[1.75rem] rounded-[1.5rem] mt-[1.75rem]">
            <div class="w-full flex gap-[2.5rem] text-[#191919]">
                <span :class="`text-[1.25rem]  font-bold`">{{t('promotionrebate.tab1')}}</span>
                <span :class="`text-[1.25rem] `" >{{t('promotionrebate.tab2')}}</span>
            </div>
            <div class="w-full mt-[1.5rem]">
                <a-table :columns="tableObject.columns" :data-source="tableObject.tableDatas" :scroll="{y:'11.25rem'}">
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
        <ModelComponent v-model="openModel" :title="modelWord.title" :content="modelWord.content" />
    </div>
</template>
<script setup lang="ts">
    import { ref, computed, reactive, onMounted } from 'vue'
    import ModelComponent from '../ModelComponent.vue'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const openModel = ref(false)
    // const selected = ref(0)
    const items = computed(() => {
        return [
            {
                title: t('promotionrebate.title2_card1'),
                key:'card1'
            },
            {
                title: t('promotionrebate.title2_card2'),
                key:'card2'
            },
            {
                title: t('promotionrebate.title2_card3'),
                key:'card3'
            },
            {
                title: t('promotionrebate.title2_card4'),
                key:'card4'
            },
            {
                title: t('promotionrebate.title2_card5'),
                key:'card5'
            }
        ]
    })
    const tableObject = reactive<any>({
        columns:[],
        tableDatas:[]
    })
    const modelWord = reactive({
        title:'',
        content:''
    })
    const cardData:any = ref({
        card1:83,
        card2:'￥527',
        card3:'￥2123',
        card4:'￥664',
        card5:'￥964'
    })
    let interval:any;
    let interval2:any;
    const copy1 = ref(false)
    const copy2 = ref(false)
    onMounted(() => {
        tableObject.columns = [
            {
                title: t('promotionrebate.tab1_column1'),
                dataIndex: 'time',
                key: 'time',
                align:'center',
                ellipsis: true
            },
            {
                title: t('promotionrebate.tab1_column2'),
                dataIndex: 'email',
                key: 'email',
                align:'center',
                ellipsis: true
            },
            {
                title: t('promotionrebate.tab1_column3'),
                dataIndex: 'num',
                key: 'num',
                align:'center',
                ellipsis: true
            },
            {
                title: t('promotionrebate.tab1_column4'),
                dataIndex: 'rate',
                key: 'rate',
                align:'center',
                ellipsis: true
            },
            {
                title: t('promotionrebate.tab1_column5'),
                dataIndex: 'nextRate',
                key: 'nextRate',
                align:'center',
                ellipsis: true
            },
            {
                title: t('promotionrebate.tab1_column6'),
                dataIndex: 'money',
                key: 'money',
                align:'center',
                ellipsis: true
            },
            {
                title: t('promotionrebate.tab2_column3'),
                dataIndex: 'state',
                key: 'state',
                align:'center',
                ellipsis: true
            },
        ]
        tableObject.tableDatas = [
            {
                time:'2025-10-02 16:10:02',
                email:'69783475@qq.com',
                num:'10000',
                rate: '50%',
                nextRate:'50%',
                money:'¥527',
                state:'已提取'
            },
            {
                time:'2025-10-02 16:10:02',
                email:'69783475@qq.com',
                num:'10000',
                rate: '50%',
                nextRate:'50%',
                money:'¥527',
                state:'已提取'
            },
            {
                time:'2025-10-02 16:10:02',
                email:'69783475@qq.com',
                num:'10000',
                rate: '50%',
                nextRate:'50%',
                money:'¥527',
                state:'已提取'
            },
            {
                time:'2025-10-02 16:10:02',
                email:'69783475@qq.com',
                num:'10000',
                rate: '50%',
                nextRate:'50%',
                money:'¥527',
                state:'已提取'
            }
        ]
    })
    const onClick = () => {
        copy1.value = true
        interval && clearInterval(interval)
        interval = setInterval(() => {
            copy1.value = false
            clearInterval(interval)
        }, 2000);
    }
    const onClick2 = () => {
        copy2.value = true
        interval2 && clearInterval(interval2)
        interval2 = setInterval(() => {
            copy2.value = false
            clearInterval(interval2)
        }, 2000);
    }
    const onWithdrawalToAccount = () => {
        openModel.value = true
        modelWord.title = t('promotionrebate.title2_button2')
        modelWord.content = t('promotionrebate.tip1')
    }
    const onWithdrawal = () => {
        
        openModel.value = true
        modelWord.title = t('promotionrebate.tip2_title')
        modelWord.content = t('promotionrebate.tip2')
    }
    // const onTab = (type:number) => {
    //     selected.value = type
    // }
</script>