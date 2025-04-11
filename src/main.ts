import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import 'animate.css'

import App from './App.vue';
import router from './router'
import i18n from './i18n'
import './api/interceptor'
import pinia from './store'
import { configure } from 'vee-validate'
import 'ant-design-vue/dist/reset.css'
import './echarts'
import './custom.less'

// import { createMetaManager } from 'vue-meta';

import hljsVue from '@highlightjs/vue-plugin';
import 'highlight.js/styles/atom-one-dark.css'; 
configure({
  validateOnBlur: false, // 关闭全局 blur 事件验证
  validateOnInput: true,  // ,
  validateOnChange: false,
  validateOnModelUpdate: false
})
const app = createApp(App)
// app.use(createMetaManager());
app.use(pinia)
app.use(router)
app.use(hljsVue)
app.use(i18n)
app.mount('#app')
