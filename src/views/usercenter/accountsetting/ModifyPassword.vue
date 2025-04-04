<template>
    <ModelComponent v-model="open" :title="t('setting.title_modal2')" slotMode>
        <div class="p-[1.75rem]">
            <form  @submit.prevent="onSubmit">
            <!-- 手机号 -->
                <!-- <PhoneForm v-model="phoneNum" :phonenumAttrs="phonebumAttrs" class="w-[26.875rem] h-[4rem]" :errormessage="errormessage"/> -->
                <!-- 阿里验证码 -->
                <!-- <CaptchaForm v-model:captcha-status="captchaStatus" v-model:captcha-verify-param="captchaVerifyParam" captchaId="modifyemail" ref="captchaRef" class="w-[26.875rem] h-[4rem]"/> -->
                <!-- 验证码 -->
                <!-- <SendCodeForm v-model:verify-code="verifyCode" v-model:code-count="codeCount" :errormessage="errormessage" :verityCodeAttrs="verityCodeAttrs" @onSendCode="onSendCode"/> -->
                <!-- 密码 -->
                <PasswordInput :password-attrs="passwordAttrs" 
                :errormessage="errormessage"
                v-model="password" 
                :tips="t('login.passwordTips')" :error-tips="t('login.passwordValidateNew')" 
                :placeholder="t('login.passwordPlaceholder')" />

                <PasswordInput :password-attrs="newPassAttrs" 
                :errormessage="errormessage"
                :sign="'newPass'"
                v-model="newPass" 
                :tips="t('login.newPassTip')" :error-tips="t('login.newPassword')" 
                :placeholder="t('login.newPassword')" />
                <PasswordInput :password-attrs="comfirmPassAttrs" 
                :errormessage="errormessage"
                v-model="comfirmPass" 
                :sign="'comfirmPass'"
                :tips="t('login.confirmPassTips')" :error-tips="t('login.confirmPassword')" 
                :placeholder="t('login.confirmPassTips')" />
                <div>
                    <button class="w-[26.875rem] h-[4rem] mt-[2rem] bg-[#01AA44] rounded-[0.75rem] cursor-pointer flex items-center justify-center" type="submit" >
                        <span class="text-[white] text-[1.5rem] font-medium">{{t('setting.button3')}}</span>
                     </button>
                </div>
            </form>
        </div>
    </ModelComponent>
</template>
<script setup lang="ts">
    import ModelComponent from '../ModelComponent.vue';
    import { computed } from 'vue'
    import { useForm } from 'vee-validate'
    import * as yup from 'yup'
    import { useI18n } from 'vue-i18n'

    import { ModifyPass } from '../../../api/login'
    // import * as bootstrap from 'bootstrap'
    // import { useRouter } from 'vue-router'
    // import UseUserStore from '../../../store/user'
    import { message } from 'ant-design-vue'
    // import PhoneForm from '../../../components/PhoneForm.vue';
    // import CaptchaForm from '../../../components/CaptchaForm.vue';
    // import SendCodeForm from '../../../components/SendCodeForm.vue';
    import PasswordInput from '../../../components/PasswordInput.vue';
    // const store = UseUserStore()


    const open = defineModel()

 
    const { t } = useI18n()
    // const router = useRouter()


    const init = () => {
        resetForm()
    }
    defineExpose({
        init: init
    })
    const schema = yup.object({
        password: yup.string().required().min(6).max(12),
        newPass: yup.string().required().min(6).max(12),
        // .oneOf([yup.ref('comfirmPass')], t('login.confirmPassword')),
        comfirmPass: yup.string().required().min(6).max(12)
        .oneOf([yup.ref('newPass')], t('login.confirmPassword')),
    })
    const { defineField, errors, handleSubmit, resetForm } = useForm({
        validationSchema: schema,
        
    })
    const errormessage = computed(()=>errors.value)

    const [ password, passwordAttrs] = defineField('password')
    const [ newPass, newPassAttrs] = defineField('newPass')
    const [ comfirmPass, comfirmPassAttrs] = defineField('comfirmPass')
    const onSubmit = handleSubmit(() => {
        modifyPass()
    }) 
    const modifyPass = () => {
        ModifyPass({
            oldPassWord: password.value,
            newPassWord: comfirmPass.value
        })
        .then((res)=> {
            console.log(res)
            message.success(t('login.modifyMessage'))
            open.value = false
        })
    }
        
    
</script>
