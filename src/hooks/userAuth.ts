import useUserStore from '../store/user'

//是否实名认证
export const isVerify = () => {
    const sotre = useUserStore()
    return sotre.userInfo?.isVerify
}

export const isLogin = () => {
    const sotre = useUserStore()
    return !!sotre.token
}
