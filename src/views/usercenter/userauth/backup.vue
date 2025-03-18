<template>
    <div class="w-full rounded-[1.5rem] bg-white p-[1.75rem] h-full">
        <div class="w-full pb-[1.5rem] border-b-[1px] border-[#EBEFF8]">
            <span>{{t('userauth.title')}}</span>
        </div>
        <div class="w-full flex justify-center pt-[6.25rem] userauth">
            <div class="w-[37.5rem] flex flex-col">
                <a-form layout="vertical" >
                    <a-form-item :label="t('userauth.form1')" required>
                        <a-input class="customAInput"></a-input>
                    </a-form-item>
                    <a-form-item :label="t('userauth.form2')" required>
                        <a-input class="customAInput"></a-input>
                    </a-form-item>
                    <a-form-item :label="t('userauth.form3')" required>
                        <div class="flex gap-[1.25rem]">
                            <img src="../../../assets/ID_1.png" class="w-[12.5rem] h-[7.125rem] cursor-pointer " @click="onUploadIDFront"/>
                            <img src="../../../assets/ID_2.png" class="w-[12.5rem] h-[7.125rem] cursor-pointer " @click="onUploadIDBack"/>
                        </div>
                    </a-form-item>  
                </a-form>
                <div class=" cursor-pointer bg-[#01AA44] w-[13.25rem] h-[3.25rem] rounded-[0.75rem] flex justify-center items-center">
                    <span class="text-[1.25rem] text-[white] font-medium">{{t('userauth.button')}}</span>
                </div>
                <div class="w-full pl-[1.5rem] h-[8rem] rounded-[1rem] border-[1px] justify-center mt-[2rem] border-[#EBEFF8] bg-[#FAFAFA] text-[#191919] text-[0.91rem] flex-col flex gap-[0.75rem]">
                    <span class="text-[#111111]">{{t('userauth.tip_title')}}</span>
                    <span>{{t('userauth.tip1')}}</span>
                    <span>{{t('userauth.tip2')}}<span class="text-[#01AA44] cursor-pointer" @click="router.push({name:'privatelaw'})">《{{t('login.privacyPolicy')}}》</span>{{t('userauth.tip3')}}</span>
                </div>
            </div>
        </div>
        <a-upload
            ref="uploadRef1"
             accept="image/*"
             v-show="false"
            >
        </a-upload>
        <a-upload
            v-show="false"
            ref="uploadRef2"
             accept="image/*"
            >
        </a-upload>
    </div>
</template>
<script setup lang="ts">
    import { useRouter } from 'vue-router'
    import { ref } from 'vue'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const router = useRouter()
    const uploadRef1 = ref()
    const uploadRef2 = ref()
    const onUploadIDFront = () => {
        const input = uploadRef1.value?.$el?.querySelector('input[type="file"]');
        if (input) {
            input.click()
        }
    }
    const onUploadIDBack = () => {
        const input = uploadRef2.value?.$el?.querySelector('input[type="file"]');
        if (input) {
            input.click()
        }
    }
</script>
