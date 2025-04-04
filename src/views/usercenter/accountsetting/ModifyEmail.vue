<template>
    <ModelComponent v-model="open" :title="t('setting.title_modal1')" slotMode>
        <div class="p-[1.75rem]">
            <form  @submit.prevent="onSubmit">
            <!-- 手机号 -->
            <PasswordInput :password-attrs="passwordAttrs" 
                :errormessage="errormessage"
                v-model="password" 
                :tips="t('login.passwordTips')" :error-tips="t('login.passwordValidateNew')" 
                :placeholder="t('login.passwordPlaceholder')" />
                
                <!-- 邮箱 -->
                <EmailForm v-model="email" class="w-[26.875rem] h-[4rem] mt-[2rem]" :errormessage="errormessage" :emain-attrs="emainAttrs" />
                <div>
                    <button class="w-[26.875rem] h-[4rem] mt-[2rem] bg-[#01AA44] rounded-[0.75rem] cursor-pointer flex items-center justify-center" type="submit">
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

    import { ModifyEamil } from '../../../api/login'

    import UseUserStore from '../../../store/user'
    import { message } from 'ant-design-vue'
    // import PhoneForm from '../../../components/PhoneForm.vue';
    import PasswordInput from '../../../components/PasswordInput.vue';
    import EmailForm from '../../../components/EmailForm.vue';
    const store = UseUserStore()


    const captchaRef = ref<any>()


    const open = defineModel()

 
    const { t } = useI18n()



    const init = () => {

        resetForm()
        captchaRef.value && captchaRef.value.initCaptcha()
    }
    defineExpose({
        init: init
    })
    const schema = yup.object({
        password: yup.string().required().min(6).max(12),
        email: yup.string().email().required()
    })
    const { defineField, errors, handleSubmit, resetForm } = useForm({
        validationSchema: schema,
        
    })
    const errormessage = computed(()=>errors.value)
    const [password, passwordAttrs] = defineField('password');

    const [ email, emainAttrs] = defineField('email')
    const onSubmit = handleSubmit(() => {
        console.log('modifyEamil')
        modifyEamil()
    }) 

    const modifyEamil = () => {
        ModifyEamil({
            passWord: password.value,
            email:email.value
        })
        .then((res) => {
            console.log('res', res)
            message.success(t('login.modifyMessage'))
            open.value = false
            store.setUserInfo()
        })
    }
   

</script>
