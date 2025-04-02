import axios from 'axios'

const BASIC_MODULE = '/api/SiteConfig'

export function GetCooperativePartner() {
    return axios.get(`${BASIC_MODULE}/GetCooperativePartner`)
}

export function GetImage() {
    return axios.get(`${BASIC_MODULE}/GetCarouselImage`)
}