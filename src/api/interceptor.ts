import axios from 'axios'
import UseUserStore from '../store/user'
import { message } from 'ant-design-vue'
import router from '../router'
axios.defaults.baseURL = 'https://www.bitip.com'
// axios.defaults.baseURL = 'http://47.102.127.12'
axios.defaults.timeout = 0



// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  const userStore = UseUserStore()
    // 在发送请求之前做些什么
    if (userStore.token) {
      config.headers.Authorization = `Bearer ${userStore.token}`
    }
    // console.log('error')
    return config;
  }, function (error) {
    // 对请求错误做些什么
    console.log([error])
    message.error('server error')
    
    return Promise.reject(error);
});


// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // console.log('error')
    if (response.data.code && response.data.code !== 200) {
      message.error(response.data.message || response.data.body)
      // return Promise.reject(response.data.message)
      console.log('', response.data.message || response.data.body)
      return Promise.reject(new Error(response.data.message || response.data.body))
    }
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    // console.log([error])
    //token失效
    console.log('error', error.status)
    if (error.status == 401) {
      const userStore = UseUserStore()
      message.error(error.message)
      userStore.clearToken()
      userStore.clearUserInfo()
      router.push({path:'/home'})
      //重置token和userinfo
    } else {
      if (error.status) message.error(error.message)
    }
    
    
    return Promise.reject(error);
});

