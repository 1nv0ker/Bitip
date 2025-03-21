import axios from 'axios'

const BASIC_MODULE = '/api/InviteHistory'
const BASIC_MODULE_2 = '/api/WithdrawHistory'

//邀请历史记录
export interface invitehistoryData {
    Status?: number,
    PageNo:number,
    PageSize:number
}

export function GetList(params:invitehistoryData) {
    return axios.get(`${BASIC_MODULE}/PageList`, {
        params: params
    })
}

//邀请记录提现
export interface inviteWithdrawData {
    withdrawWay:number
}

export function GetInviteWithdraw(params:inviteWithdrawData) {
    return axios.get(`${BASIC_MODULE}/Withdraw`, {
        params: params
    })
}


//提现记录

export interface withdrawData {
    Status?:number,
    PageNo:number,
    PageSize:number
}

export function GetWithdrawList(params:withdrawData) {
    return axios.get(`${BASIC_MODULE_2}/PageList`, {
        params: params
    })
}
//邀请记录统计

export function InvitationRecord() {
    return axios.get(`${BASIC_MODULE}/InvitationRecordAnalysis`)
}