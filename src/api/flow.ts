import axios from 'axios'

const BASIC_MODULE = '/api/FlowAnalysis'

export interface flowData {
    KeyName?:string,
    DateBegin?:string,
    DateEnd?:string
}

export function GetFlow(params:flowData) {
    return axios.get(`${BASIC_MODULE}/Search`, {
        params: params
    })
}