<template>
    <div id="captcha-element" ref="captchaRef">
        
    </div>
</template>
<script lang="ts" setup>
    import { ref, onMounted, onBeforeMount } from 'vue'
    const captchaRef = ref<HTMLElement | null>()
    const captcha = ref<any>(null)
    onMounted(() => {
        loadCaptha()
    })
    const loadCaptha = () => {
        window.initAliyunCaptcha({
            // 场景ID。通过步骤一添加验证场景后，您可以在验证码场景列表，获取该场景的场景ID
            SceneId: 'c9h3****',
            // 验证码模式。embed表示要集成的验证码模式为嵌入式。无需修改
            mode: 'embed',
            // 页面上预留的渲染验证码的元素，与原代码中预留的页面元素保持一致。
            element: '#captcha-element',
            // 触发业务请求的元素。button表示单击登录按钮后，触发captchaVerifyCallback函数。您可以根据实际使用的元素修改element的值
            // button: '#button',
            // 业务请求(带验证码校验)回调函数，无需修改
            captchaVerifyCallback: captchaVerifyCallback,
            // 业务请求结果回调函数，无需修改
            onBizResultCallback: onBizResultCallback,
            // 绑定验证码实例函数，无需修改
            getInstance: getInstance,
            // 滑块验证码样式，支持自定义宽度和高度，单位为px。其中，width最小值为320 px
            slideStyle: {
                width: 360,
                height: 40,
            },
            // 验证码语言类型，支持简体中文（cn）、繁体中文（tw）、英文（en）
            language: 'cn',
            // 完成验证后，是否立即发送验证请求（调用captchaVerifyCallback函数）
            immediate: false,
        });
    }
    onBeforeMount(() => {
        captchaRef.value = null
        document.getElementById('aliyunCaptcha-mask')?.remove();
        document.getElementById('aliyunCaptcha-window-popup')?.remove();
    })
    const captchaVerifyCallback = () => {

    }
    const onBizResultCallback = () => {

    }
    const getInstance = (instance:any) => {
        captcha.value = instance
    }

</script>