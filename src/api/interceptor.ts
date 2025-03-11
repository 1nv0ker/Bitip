import axios from 'axios'
import UseUserStore from '../store/user'
import { ElMessage } from 'element-plus'
// axios.defaults.baseURL = 'https://www.bitip.com'
axios.defaults.baseURL = 'http://47.102.127.12'
axios.defaults.timeout = 1000



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
    ElMessage.error('server error')
    return Promise.reject(error);
});


// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // console.log('error')
    if (response.data.code && response.data.code !== 200) {
      response.data.message && ElMessage.error(response.data.message)
      throw Error(response.data.message)
    }
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    ElMessage.error('server error')
    return Promise.reject(error);
});

