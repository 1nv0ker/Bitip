import axios from 'axios'

const BASIC_MODULE = '/api/SysLogin'

export interface LoginData {
    "captchaVerifyParam"?: string,//阿里验证码的参数
    "account"?: string,//账号登录，account、tel、email必填一个
    "tel": string,//手机登录，account、tel、email必填一个
    "email"?: string,//邮箱登录，account、tel、email必填一个
    "loginType": string,//登录类型，值为pwd和code，分为密码登录(pwd),验证码登录(code)
    "passWord"?: string,//密码，当loginType为pwd时需要填写
    "verifyCode"?: string//验证码，当loginType为code时需要填写
}
export function Login(loginData:LoginData) {
    return axios.post(`${BASIC_MODULE}/Login`, loginData)
}

export interface RegisterData {
    "captchaVerifyParam"?: string,//阿里验证码的参数
    "account"?: string,//注册账号，账号注册时需要填写
    "email"?: string,//注册的邮箱，邮箱注册时需要填写
    "tel"?: string,//注册的手机号，手机注册时需要填写
    verifyCode?: string,
    "passWord": string//登录密码，密码的二次验证前端直接实现就好，判断两次密码一致直接填
}

export function Register(registerData:RegisterData) {
    return axios.post(`${BASIC_MODULE}/Register`, registerData)
}

export interface ResetData {
    "newPassWord": string,//新密码
    "oldPassWord": string//老密码
}


export function ResetPassword(resetData:ResetData) {
    return axios.post(`${BASIC_MODULE}/ResetPassWord`, resetData)
}

export interface PasswordRecoveryData {
    "verifyCode": string,//手机或者邮箱的验证码
    "newPassword": string,//新密码，密码的二次验证前端直接实现就好，判断两次密码一致直接填
    "tel": string,//找回密码的手机，手机和邮箱必填一个
    "email"?: string//找回密码的邮箱，手机和邮箱必填一个
}
export function PasswordRecovery(passwordRecoveryData:PasswordRecoveryData) {
    return axios.post(`${BASIC_MODULE}/PasswordRecovery`, passwordRecoveryData)
}

export interface UpdateUserInfoData {
    "name": string,//用户昵称(非账号)
    "tel": string,//绑定的手机号
    "email": string,//绑定的邮箱
    "remark": string//备注信息
}

export function UpdateUserInfo (updateUserInfoData:UpdateUserInfoData) {
    return axios.post(`${BASIC_MODULE}/UpdateUserInfo`, updateUserInfoData)
}

export function GetUserInfo() {
    return axios.get(`${BASIC_MODULE}/GetUserInfo`)
}


export interface SmsCodeData {
    "tel": string,//手机号
    "smsType": string,//验证类型分为登录，注册和找回密码，对应的值为login,register,recovery
    "captchaVerifyParam": string//发送短信前需要校验滑块验证码
}
export function SendSms(smsCode:SmsCodeData) {
    return axios.post(`${BASIC_MODULE}/SendSms`, smsCode)
}