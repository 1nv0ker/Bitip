import axios from 'axios'

const BASIC_MODULE = '/api/ProxyLogic'

export interface proxyData {
    userName:string
}

export function GetProxyConfig(params:proxyData) {
    return axios.get(`${BASIC_MODULE}/GetProxyConfig`, {
        params: params
    })
}

export function GetBandwidthAnalysis() {
    return axios.get(`${BASIC_MODULE}/BandwidthAnalysis`)
}

export interface generateData {
    KeyName?:string,
    Num?:string,
    Country?:string,
    State?:string,
    City?:string,
    SessionTime?:string,
    AutoSwitch?:string,
    Format?:string
}

export function GenerateApi(params:generateData) {
    return axios.get(`${BASIC_MODULE}/Generate`, {
        params:params
    })
}
export function GenerateApiLink(params:any) {
    let link:string = ''
    for (let key in params) {
        if (params[key]!==undefined) {
            link = link + key + '='+ params[key] + "&"
        }
    }

    return  axios.defaults.baseURL + `${BASIC_MODULE}/Generate?`+link.slice(0, -1)
}

//手动切换为是
export interface generateData {
    KeyName?:string,
    Num?:string,
    Country?:string,
    State?:string,
    City?:string,
    SessionTime?:string,
    AutoSwitch?:string,
    Format?:string
}

export function GenerateApiWhenEnable(params:generateData) {
    return axios.get(`${BASIC_MODULE}/GenerateWhenEnableAutoSwitch`, {
        params:params
    })
}
//ip切换
export interface switchData {
    username:string,
    password:string
}
export function SwitchIP(params:switchData) {
    return axios.get(`${BASIC_MODULE}/IpChange`, {
        params: params
    })
}
//ipcheck
export interface checeData {
    proxy:string
}
export function CheckIP(params:checeData) {
    return axios.get(`${BASIC_MODULE}/IpCheck`, {
        params: params
    })
}