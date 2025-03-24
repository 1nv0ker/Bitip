import axios from 'axios'

const BASIC_MODULE = '/api/IpWhitelist'

//获取数据列表
export interface listData {
    KeyWord?:string,
    PageNo: number,
    PageSize:number
}

export function GetList(params:listData) {
    return axios.get(`${BASIC_MODULE}/PageList`, {
        params: params
    })
}
//新增白名单
export interface AddWhitelistData {
    ipAddress:string,
    remark?:string
}

export function AddWhiteList(addData:AddWhitelistData) {
    return axios.post(`${BASIC_MODULE}/Add`, addData)
}
//删除白名单
export interface DeleteWhitelistData {
    id:string
}
export function DeleteWhitelist(params:DeleteWhitelistData) {
    return axios.get(`${BASIC_MODULE}/Delete`, {
        params: params
    })
}
//更新白名单
export interface EditWhitelistData {
    id:string,
    remark?:string
}
export function EditWhitelist(EditWhitelistData:EditWhitelistData) {
    return axios.post(`${BASIC_MODULE}/Update`, EditWhitelistData)
}
//批量删除
// export interface BattchDelete {

// }
export function BatchDelete(datas:any[]) {
    // console.log('datas', datas)
    return axios.post(`${BASIC_MODULE}/BulkDelete`,datas)
}
