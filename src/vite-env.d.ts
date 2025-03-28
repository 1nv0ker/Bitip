/// <reference types="vite/client" />
interface Window {
    bootstrap:any,
    initAliyunCaptcha:any,
    AliyunCaptchaConfig: any,
    getMetaInfo:any
}

// 声明扩展类型（解决TS报错）
declare module 'nprogress' {
    interface NProgressOptions {
      speed?: number
      trickleSpeed?: number,
      start?:void
    }

  }
declare module 'lodash-es' {
    export {
      debounce
    }
}



