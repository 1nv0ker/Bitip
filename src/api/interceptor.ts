import axios from 'axios'
import UseUserStore from '../store/user'
axios.defaults.baseURL = 'https://www.bitip.com'
axios.defaults.timeout = 1000



// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  const userStore = UseUserStore()
    // 在发送请求之前做些什么
    if (userStore.token) {
      config.headers.Authorization = `Bearer ${userStore.token}`
    }
    console.log('error')
    return config;
  }, function (error) {
    // 对请求错误做些什么
    console.log('error')
    return Promise.reject(error);
});


// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log('error')
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

