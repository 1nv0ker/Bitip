<template>
    <div class="w-full">
        <div class="w-full h-[16.375rem] bg-white rounded-[1.5rem]">
            <div class="w-full h-[8.125rem] relative rounded-tl-[1.5rem] rounded-tr-[1.5rem] flex flex-col gap-[0.25rem] text-[#191919] justify-center items-center" 
            > 
                <img src="../../../assets/usercenter/bg.png" class="w-full h-full absolute" />
                <span class="text-[2rem] z-50 font-bold pr-[4rem]">{{t('promotionrebate.title')}}</span>
                <span class="text-[1.25rem] z-50">{{t('promotionrebate.subtitle')}}</span>
            </div>
            <div class="p-[1.5rem] w-full flex gap-[1.75rem]">
                <div class="flex flex-col gap-[0.5rem] w-[24%]">
                    <span>{{t('promotionrebate.button1')}}</span>
                    <div class="border-[1px] border-[#666666] w-full flex items-center justify-between rounded-[0.75rem] h-[3rem] pl-[1.25rem] pr-[1.25rem] ">
                        <span class="text-[#191919] text-[1rem]">{{ userStore.userInfo?.inviteCode }}</span>
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
                        <span class="text-[#191919] text-[1rem]">https://www.bitip.com/register?beInviteCode={{ userStore.userInfo?.inviteCode }}</span>
                        <a-tooltip  trigger="click" :open="copy2"  @click="onClick2(`https://www.bitip.com/register?beInviteCode=${userStore.userInfo?.inviteCode}`)" :arrow="false" >
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
                    <span class="text-[#191919] text-[2.25rem] font-bold">{{item.unit}}{{inviteRecord[item.key]}}</span>
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
                <span :class="`text-[1.25rem] cursor-pointer  ${selected==0?'font-bold':''}`" @click="onSelect(0)">{{t('promotionrebate.tab1')}}</span>
                <span :class="`text-[1.25rem] cursor-pointer ${selected==1?'font-bold':''}`" @click="onSelect(1)" >{{t('promotionrebate.tab2')}}</span>
            </div>
            <div class="w-full mt-[1.5rem]">
                <a-table :columns="tableObject.columns" :data-source="tableObject.tableDatas" :scroll="{y:'11.25rem'}" :pagination="false">
                    <template #headerCell="{ title }">
                        <span class="text-[#191919] text-[1rem] font-medium">
                            {{title}}
                        </span>
                    </template>
                    <template #bodyCell="{ column, record }">
                        <span class="text-[#191919] text-[1rem]" :title="record[column.key]" v-if="column.key=='status'">
                            {{ record[column.key]==0?t('promotionrebate.status1'):t('promotionrebate.status2') }}
                        </span>
                        <span class="text-[#191919] text-[1rem]" :title="record[column.key]" v-else>
                            {{ record[column.key] }}
                        </span>
                    </template>
                </a-table>
                <PaginationComponent v-model:total="params.total" v-model:page-size="params.pageSize" v-model="params.current" @onCurrentChange="onCurrentChange" @onSizeChange="onSizeChange"/>
            </div>
        </div>
        <ModelComponent v-model="openModel" :title="modelWord.title" :content="modelWord.content" :buttonName="modelWord.button" @onClick="onConfirm"/>
    </div>
</template>
<script setup lang="ts">
    import { ref, computed, reactive, onMounted } from 'vue'
    import ModelComponent from '../ModelComponent.vue'
    import PaginationComponent from '../../../components/PaginationComponent.vue'
    import { InvitationRecord, GetList, GetWithdrawList, GetInviteWithdraw } from '../../../api/invite'
    import useUserStore from '../../../store/user'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const userStore = useUserStore()
    const openModel = ref(false)
    const selected = ref(0)
    const withdrawType = ref(0)
    const items = computed(() => {
        return [
            {
                title: t('promotionrebate.title2_card1'),
                key:'userCount',
                unit:''
            },
            {
                title: t('promotionrebate.title2_card2'),
                key:'todayCommission',
                unit:'￥'
            },
            {
                title: t('promotionrebate.title2_card3'),
                key:'commissionTotalAmount',
                unit:'￥'
            },
            {
                title: t('promotionrebate.title2_card4'),
                key:'withdrawableCommission',
                unit:'￥'
            },
            {
                title: t('promotionrebate.title2_card5'),
                key:'beWithdrawableCommission',
                unit:'￥'
            }
        ]
    })
    const tableObject = reactive<{columns:any[], tableDatas:any[]}>({
        columns:[],
        tableDatas:[]
    })
    const modelWord = reactive({
        title:'',
        content:'',
        button:''
    })
    const params = reactive({
        total: 0,
        pageSize: 3,
        current: 1
    })
    const inviteRecord = reactive<any>({
        userCount:0,
        todayCommission:0,
        commissionTotalAmount:0,
        beWithdrawableCommission:0,
        withdrawableCommission:0
    })
    let interval:any;
    let interval2:any;
    const copy1 = ref(false)
    const copy2 = ref(false)
    onMounted(() => {
        loadRecord()
        loadInviteHistory()
    })
    //邀请数据板
    const loadRecord = async () => {
        const res:any = await InvitationRecord()
        inviteRecord.userCount = res.body.userCount
        inviteRecord.todayCommission = res.body.todayCommission
        inviteRecord.commissionTotalAmount = res.body.commissionTotalAmount
        inviteRecord.beWithdrawableCommission = res.body.beWithdrawableCommission
        inviteRecord.withdrawableCommission = res.body.withdrawableCommission
    }
    //邀请记录
    const loadInviteHistory = async () => {
        tableObject.columns = [
            {
                title: t('promotionrebate.tab1_column1'),
                dataIndex: 'sysCreateTime',
                key: 'sysCreateTime',
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
                dataIndex: 'amount',
                key: 'amount',
                align:'center',
                ellipsis: true
            },
            {
                title: t('promotionrebate.tab1_column4'),
                dataIndex: 'subsequentCommissionRate',
                key: 'subsequentCommissionRate',
                align:'center',
                ellipsis: true
            },
            {
                title: t('promotionrebate.tab1_column6'),
                dataIndex: 'commissionAmount',
                key: 'commissionAmount',
                align:'center',
                ellipsis: true
            },
            {
                title: t('promotionrebate.tab1_column7'),
                dataIndex: 'status',
                key: 'status',
                align:'center',
                ellipsis: true
            },
        ]
        const res:any = await GetList({
            PageNo: 1,
            PageSize: 10
        })
        
        tableObject.tableDatas = res.body.records.map((item:any)=>Object.assign({}, item, {
            email: item.userInfo.email
        }))
        params.total = res.body.totalRows
        params.current = res.body.pageNo
        params.pageSize = res.body.pageSize
    }
    //提款记录
    const loadWithdraw = async () => {
        tableObject.columns = [
            {
                title: t('promotionrebate.tab2_column1'),
                dataIndex: 'sysCreateTime',
                key: 'sysCreateTime',
                align:'center',
                ellipsis: true
            },
            {
                title: t('promotionrebate.tab2_column2'),
                dataIndex: 'amount',
                key: 'amount',
                align:'center',
                ellipsis: true
            },
            {
                title: t('promotionrebate.tab2_column3'),
                dataIndex: 'withdrawWay',
                key: 'withdrawWay',
                align:'center',
                ellipsis: true
            }
        ]
        const res:any = await GetWithdrawList({
            PageNo:params.current,
            PageSize: params.pageSize
        })
        tableObject.tableDatas = res.body.records
        params.total = res.body.totalRows
        params.current = res.body.pageNo
        params.pageSize = res.body.pageSize
    }
    const onSelect = (type:number) => {
        selected.value = type
        if (type === 0) {
            loadInviteHistory()
        } else {
            loadWithdraw()
        }
    }
    const onCurrentChange = (num:number) => {
        params.current = num
        if (selected.value==0) {
            loadInviteHistory()
        } else {
            loadWithdraw()
        }
    }
    const onSizeChange = (num:number,size:number) => {
        params.current = num
        params.pageSize = size
        if (selected.value==0) {
            loadInviteHistory()
        } else {
            loadWithdraw()
        }
    }
    //
    const onConfirm = async () => {
        await GetInviteWithdraw({
            withdrawWay: withdrawType.value
        })
        loadRecord()
        openModel.value = false
    }
    const onClick = () => {
        copy1.value = true
        interval && clearInterval(interval)
        interval = setInterval(() => {
            copy1.value = false
            clearInterval(interval)
        }, 2000);
    }
    const onClick2 = (inviteLink:string) => {
        onCopy(inviteLink)
        copy2.value = true
        interval2 && clearInterval(interval2)
        interval2 = setInterval(() => {
            copy2.value = false
            clearInterval(interval2)
        }, 2000);
    }
    const onCopy = (str:string) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(str)
        } else {
            const input = document.createElement('input');
            input.value = str;
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            input.remove();
        }
    }
    const onWithdrawalToAccount = () => {
        openModel.value = true
        modelWord.title = t('promotionrebate.title2_button2')
        modelWord.content = t('promotionrebate.tip1')
        modelWord.button = t('promotionrebate.buttonName')
        withdrawType.value = 0
    }
    const onWithdrawal = () => {
        
        openModel.value = true
        modelWord.title = t('promotionrebate.tip2_title')
        modelWord.content = t('promotionrebate.tip2')
        modelWord.button = t('promotionrebate.buttonName1')
        withdrawType.value = 1
    }
    // const onTab = (type:number) => {
    //     selected.value = type
    // }
</script>