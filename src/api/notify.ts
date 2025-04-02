import axios from 'axios'

const BASIC_MODULE = '/api/Notify'

export interface noticeData {
    KeyWord?:string,
    PageNo:number,
    PageSize:number
}

export function GetNotify(params:noticeData) {
    return axios.get(`${BASIC_MODULE}/PageList`, {
        params: params
    })
}