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