import axios from 'axios'

const BASIC_MODULE = '/api/SubAccount'

//子账号列表
export interface listData {
    KeyWord?:string,
    PageNo:number,
    PageSize:number
}

export function GetSubAccountList(params:listData) {
    return axios.get(`${BASIC_MODULE}/PageList`, {
        params: params
    })
}
//新增子账号
export interface addData {
    keyName:string,
    limited:number,
    enabled: number,
    remark?:string
}

export function AddAccount(addData:addData) {
    return axios.post(`${BASIC_MODULE}/Add`, addData)
}

//更新子账号
export interface updateData {
    id:string,
    remark: string,
    enabled?:number,
    keyName?:string,
    limited?:number,
    
}
export function UpdateAccount(updateData:updateData) {
    return axios.post(`${BASIC_MODULE}/Update`, updateData)
}
//删除子账号
export interface deleteData {
    id:string
}
export function DeleteAccount(params:deleteData) {
    return axios.get(`${BASIC_MODULE}/Delete`, {
        params: params
    })
}