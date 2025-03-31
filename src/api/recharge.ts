import axios from 'axios'

const BASIC_MODULE = '/api/ProxyBuy'
const BASIC_MODULE2 = `/api/UserIsps`

//余额充值
export interface balanceData {
    "mealType": number,//1000代表1000的套餐，2000代表2000的套餐，5000代表5000的套餐，10000代表10000的套餐
    "paymentType": number//0支付宝，1微信
}

export function RechargeBalance(datas:balanceData) {
    return axios.post(`${BASIC_MODULE}/BalanceRecharge`, datas)
}
//动态套餐
export interface dyPackageData {
    "mealType": number,//5代表5G套餐，25代表25G套餐，100代100G套餐，300代表300套餐，1000代表1000G套餐，3000代表3000G套餐，
    "paymentType": number//0支付宝，1微信，2余额
}

export function DyPackageRecharge(datas:dyPackageData) {
    return axios.post(`${BASIC_MODULE}/DynamicResidenceRecharge`, datas)
}
//静态套餐
interface purchaseItem {
    "ispType": number,//0双ISP，1单ISP
    "ispLocation":string,//ISP位置，数据库中现有测试数据：双isp有us-fl，单ISP有gb-ld
    "purchaseMonth": number,//购买月份，一季度你就传3，一年就传12，一个月就传1，二个月就传2，半年就是6
    "purchaseNum": number//购买条数
}
export interface staticPackageData {
    purchaseIspInfos: purchaseItem[],
    paymentType:number
}

export function StaticPackageRecharge(datas:staticPackageData) {
    return axios.post(`${BASIC_MODULE}/StaticResidenceRecharge`, datas)
}

//已购代理
export interface proxyData {
    KeyWord?:string,
    PageNo:number,
    PageSize:number,
    SearchBeginTime?:string,
    SearchEndTime?:string,
    IspLocation?:string,
    AutoRenew?:number|null,
    IspType?:number|null
}
export function GetList(params:proxyData) {
    return axios.get(`${BASIC_MODULE2}/PageList`, {
        params: params
    })
}
//静态续费
export interface StaticRenewData {
    ids: number[],
    purchaseMonth:number,
    paymentType:number
}

export function SetStaticRenew(datas:StaticRenewData) {
    return axios.post(`${BASIC_MODULE}/StaticResidenceRenew`, datas)
}
//自动续费
export interface AutoRenewData {
    id:number,
    autoRenew:number,//0关闭自动续费，1开启自动续费
    remark?:string
}

export function SetAutoRenew(datas:AutoRenewData) {
    return axios.post(`${BASIC_MODULE2}/Update`, datas)
}
//删除已购代理
export interface DeleteData {
    id:string
}
export function DeleteISP(params:DeleteData) {
    return axios.get(`${BASIC_MODULE2}/Delete`, {
        params: params
    })
}

//导出
export function DownloadIsp(params:proxyData) {
    return axios.get(`${BASIC_MODULE2}/DownIsp`, {
        params: params,
        responseType: 'blob'
    })
}