<template>
    <ModelComponent v-model="open" :title="t('setting.title_modal2')" slotMode>
        <div class="p-[1.75rem]">
            <form  @submit.prevent="onSubmit">
            <!-- 手机号 -->
                <PhoneForm v-model="phoneNum" :phonenumAttrs="phonebumAttrs" class="w-[26.875rem] h-[4rem]" :errormessage="errormessage"/>
                <!-- 阿里验证码 -->
                <CaptchaForm v-model:captcha-status="captchaStatus" v-model:captcha-verify-param="captchaVerifyParam" captchaId="modifyemail" ref="captchaRef" class="w-[26.875rem] h-[4rem]"/>
                <!-- 验证码 -->
                <SendCodeForm v-model:verify-code="verifyCode" v-model:code-count="codeCount" :errormessage="errormessage" :verityCodeAttrs="verityCodeAttrs" @onSendCode="onSendCode"/>
                <!-- 密码 -->
                <PasswordInput :password-attrs="passwordAttrs" 
                :errormessage="errormessage"
                v-model="password" 
                :tips="t('login.passwordTips')" :error-tips="t('login.passwordValidateNew')" 
                :placeholder="t('login.passwordPlaceholder')" />
                <div>
                    <button class="w-[26.875rem] h-[4rem] mt-[2rem] bg-[#01AA44] rounded-[0.75rem] cursor-pointer flex items-center justify-center" type="submit" id="cap_button">
                        <span class="text-[white] text-[1.5rem] font-medium">{{t('setting.button3')}}</span>
                     </button>
                </div>
            </form>
        </div>
    </ModelComponent>
</template>
<script setup lang="ts">
    import ModelComponent from '../ModelComponent.vue';
    import { ref, computed } from 'vue'
    import { useForm } from 'vee-validate'
    import * as yup from 'yup'
    import { useI18n } from 'vue-i18n'

    import { Login, SendSms } from '../../../api/login'
    // import * as bootstrap from 'bootstrap'
    import { useRouter } from 'vue-router'
    import UseUserStore from '../../../store/user'
    import { ElMessage } from 'element-plus'
    import PhoneForm from '../../../components/PhoneForm.vue';
    import CaptchaForm from '../../../components/CaptchaForm.vue';
    import SendCodeForm from '../../../components/SendCodeForm.vue';
    import PasswordInput from '../../../components/PasswordInput.vue';
    const store = UseUserStore()
    // const modalRef = ref(null)
    const sendCodeStaus = ref(false)
    const codeCount = ref(60)
    const captchaVerifyParam = ref('')
    const captchaStatus = ref(false)

    const captchaRef = ref<any>()
    let codeCountInterval:any = null

    const open = defineModel()

 
    const { t } = useI18n()
    const router = useRouter()


    const init = () => {
        resetForm()
        captchaRef.value && captchaRef.value.initCaptcha()
    }
    defineExpose({
        init: init
    })
    const schema = yup.object({
        phoneNum: yup.string().required().length(11),
        verifyCode: yup.string().required(),
        password: yup.string().required().min(6).max(12),
    })
    const { defineField, errors, handleSubmit, validateField, resetForm } = useForm({
        validationSchema: schema,
        
    })
    const errormessage = computed(()=>errors.value)
    const [phoneNum, phonebumAttrs] = defineField('phoneNum');
    const [verifyCode, verityCodeAttrs ] = defineField('verifyCode')
    const [ password, passwordAttrs] = defineField('password')
    const onSubmit = handleSubmit(() => {
        return
        accountLogin()
    }) 
    const accountLogin = () => {
        Login({
            loginType:'code',
            tel: ''+phoneNum.value,
            verifyCode: verifyCode.value
        })
        .then((res:any) => {
            console.log('res', res)
            store.setToken(res.body.token)
            router.push('/home')
            // GetUserInfo()
            // .then((res1:any) => {
            //     console.log('res1', res1)
            //     store.setUserInfo({})
                
            // })
        })
        
    }
    const onSendCode = () => {
        if (sendCodeStaus.value) {
            return
        }
        
        if (!captchaVerifyParam.value) {
            captchaStatus.value = true
            return
        }
        if (!phoneNum.value) {
            validateField('phoneNum')
            return
        }
        if (errormessage.value.hasOwnProperty('phoneNum')) {
            // ElMessage.warning(t('login.textValidate'))
            return
        }
        sendCodeStaus.value = true
        
        SendSms({
            tel:''+phoneNum.value,
            smsType: 'login',
            captchaVerifyParam:captchaVerifyParam.value
        })
        .then((res:any) => {
            console.log('res', res)
            ElMessage.success(t('login.sendSms'))
            codeCountInterval = setInterval(() => {
                codeCount.value--
                if (codeCount.value<=0) {
                    sendCodeStaus.value = false
                    captchaVerifyParam.value = ''
                    captchaRef.value && captchaRef.value.onRefresh()
                    clearInterval(codeCountInterval)
                }
            }, 1000);
        })
        .catch(() => {
            captchaRef.value && captchaRef.value.onRefresh()
        })
        
    }
</script>
