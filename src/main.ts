import { createApp } from 'vue'
import './style.css'
import 'animate.css';
import App from './App.vue';
import { ElMessage } from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import i18n from './i18n'
import './api/interceptor'
import pinia from './store'
import { configure } from 'vee-validate'
import 'ant-design-vue/dist/reset.css';
import './echarts'

configure({
  validateOnBlur: false, // 关闭全局 blur 事件验证
  validateOnInput: true,  // ,
  validateOnChange: false,
  validateOnModelUpdate: false
})
const app = createApp(App)

app.use(pinia)
app.use(ElMessage)
app.use(router)
app.use(i18n)
app.mount('#app')
