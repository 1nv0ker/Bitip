<template>
    <div :id="props.element" ref="captchaRef">
        
    </div>
    <button id="cap_button" style="display:none">test</button>
</template>
<script lang="ts" setup>
    import { ref, onMounted, onBeforeMount } from 'vue'
    import { useI18n } from 'vue-i18n'
    const captchaRef = ref<HTMLElement | null>()
    const captcha = ref<any>(null)
    const i18n = useI18n()
    const emit = defineEmits(['getCaptchaVerifyParam'])
    const props = defineProps({
        element:String,
        button:String,
        immediate:{
            type: Boolean,
            default: false
        },
        autoRefresh: {
            type: Boolean,
            default: true
        }
        // captchaVerifyFunc: Function
    })
    onMounted(() => {
    
    })
    const loadCaptha = () => {
        window.initAliyunCaptcha({
            // 场景ID。通过步骤一添加验证场景后，您可以在验证码场景列表，获取该场景的场景ID
            SceneId: '1hpup7kb',
            // 验证码模式。embed表示要集成的验证码模式为嵌入式。无需修改
            mode: 'embed',
            // 页面上预留的渲染验证码的元素，与原代码中预留的页面元素保持一致。
            element: `#${props.element}`,
            // 触发业务请求的元素。button表示单击登录按钮后，触发captchaVerifyCallback函数。您可以根据实际使用的元素修改element的值
            button: `#${props.button}`,
            // 业务请求(带验证码校验)回调函数，无需修改
            captchaVerifyCallback: captchaVerifyCallback,
            // 业务请求结果回调函数，无需修改
            onBizResultCallback: onBizResultCallback,
            // 绑定验证码实例函数，无需修改
            getInstance: getInstance,
            // 滑块验证码样式，支持自定义宽度和高度，单位为px。其中，width最小值为320 px
            slideStyle: {
                width: window.innerWidth<=576?6*31.875:16*31.875,
                height: window.innerWidth<=576?6*4:16*4,
            },
            // 验证码语言类型，支持简体中文（cn）、繁体中文（tw）、英文（en）
            language: i18n.locale.value=='zh'?'cn':'en',
            // 完成验证后，是否立即发送验证请求（调用captchaVerifyCallback函数）
            immediate: props.immediate,
            autoRefresh: props.autoRefresh
        });
    }
    onBeforeMount(() => {
        window.AliyunCaptchaConfig = {
            // 必填，验证码示例所属地区，支持中国内地（cn）、新加坡（sgp）。
            region: "cn",
            // 必填，身份标。开通阿里云验证码2.0后，您可以在控制台概览页面的实例基本信息卡片区域，获取身份标。
            prefix: "h6yrh5",
        };
        captchaRef.value = null
        document.getElementById('aliyunCaptcha-mask')?.remove();
        document.getElementById('aliyunCaptcha-window-popup')?.remove();
    })
    const onRefresh = () => {
        captcha.value && captcha.value.refresh()
    }
    // const test = () => {
    //     document.getElementById("cap_button")?.addEventListener("click", function(event) {
    //         event.stopPropagation(); 
    //         event.preventDefault()
    //         console.log('captcha', captcha.value.captchaVerifyParam)
            
    //     });
    //     // captcha.value.$button.stopPropagation()
    //     // captcha.value.$button.preventDefault()
    //     captcha.value && captcha.value.$button.click()
       
    //     return {
    //         captchaVerifyParam: captcha.value.captchaVerifyParam
    //     }
    // }
    defineExpose({
        loadCaptha: loadCaptha,
        onRefresh: onRefresh,
        // test: test
    })
    const captchaVerifyCallback = (captchaVerifyParam:string) => {
        emit('getCaptchaVerifyParam', captchaVerifyParam)
        console.log('captchaVerifyParam', captchaVerifyParam)
        // return props.callback && props.callback()
        return {
            captchaResult: true,
            captchaVerifyParam: captchaVerifyParam
        }
    }
    
    const onBizResultCallback = (bizResult:any) => {
        console.log('bizResult', bizResult)
    }
    const getInstance = (instance:any) => {
        console.log('instance', instance)
        captcha.value = instance
    }

</script>