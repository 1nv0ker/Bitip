import axios from 'axios'

const BASIC_MODULE = '/api/Order'


export interface orderListData {
    Status?:number,
    KeyWord?:string,
    PageNo?: number,
    PageSize?: number,
    SearchBeginTime?:any,
    SearchEndTime?:any
}

export function getOrderList(params:orderListData) {
    return axios.get(`${BASIC_MODULE}/PageList`, {
        params: params
    })
}