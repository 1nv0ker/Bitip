<template>
    <div class="w-full rounded-[1.5rem] bg-white p-[1.75rem] h-full">
        <div class="w-full pb-[1.5rem] border-b-[1px] border-[#EBEFF8]">
            <span class="font-bold text-[1.25rem] text-[#191919]">{{t('setting.title')}}</span>
        </div>
        <div class="w-full flex justify-center pt-[6.25rem] userauth">
            <div class="w-[37.5rem] flex flex-col">
                <a-form layout="vertical" >
                    <a-form-item :label="t('setting.form1')" required>

                        <div class="h-[3rem] w-[37.125rem] rounded-[0.75rem] 
                        text-[#191919] text-[1rem]
                        border-[1px] border-[#666666] flex justify-between items-center pl-[1.25rem] pr-[1.25rem]">
                            <span>{{userStore.userInfo?.isVerify?t('setting.button_complated'):t('setting.placeholder')}}</span>
                            <span class="text-[#01AA44] cursor-pointer" v-show="!userStore.userInfo?.isVerify" @click="router.push({name:'userauth'})">{{t('setting.button1')}}</span>
                        </div>
                    </a-form-item>
                    <a-form-item :label="t('setting.form2')" required>
                        <div class="h-[3rem] w-[37.125rem] rounded-[0.75rem] 
                        text-[#191919] text-[1rem]
                        border-[1px] border-[#666666] flex justify-between items-center pl-[1.25rem] pr-[1.25rem]">
                            <span>{{userStore.userInfo?.email}}</span>
                            <span class=" cursor-pointer" @click="onModifyEmail">{{t('setting.button2')}}</span>
                        </div>

                    </a-form-item>
                    <a-form-item :label="t('setting.form3')" required >
                        <div class="h-[3rem] w-[37.125rem] rounded-[0.75rem] 
                        text-[#191919] text-[1rem]
                        border-[1px] border-[#666666] flex justify-between items-center pl-[1.25rem] pr-[1.25rem]">
                            <span>{{maskPhone(userStore.userInfo?.tel)}}</span>
                            <!-- <span class=" cursor-pointer">{{t('setting.button2')}}</span> -->
                        </div>
                    </a-form-item>
                    <a-form-item :label="t('setting.form4')" required>

                        <div class="h-[3rem] w-[37.125rem] rounded-[0.75rem] 
                        text-[#191919] text-[1rem]
                        border-[1px] border-[#666666] flex justify-between items-center pl-[1.25rem] pr-[1.25rem]">
                            <span>*********</span>
                            <span class=" cursor-pointer" @click="onModifyPass">{{t('setting.button2')}}</span>
                        </div>
                    </a-form-item>
                </a-form>
                <!-- <div class=" cursor-pointer bg-[#01AA44] w-[9.625rem] h-[3.25rem] rounded-[0.75rem] flex justify-center items-center">
                    <span class="text-[1.25rem] text-[white] font-medium">{{t('setting.button3')}}</span>
                </div> -->
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
        <ModifyEmail v-model="openEamil" ref="modifyeamilRef"/>
        <ModifyPassword v-model="openPass" ref="modifypassRef" />
    </div>
</template>
<script setup lang="ts">
    import { useRouter,  } from 'vue-router'
    import { ref, nextTick, onMounted } from 'vue'
    import ModifyEmail from './ModifyEmail.vue'
    import ModifyPassword from './ModifyPassword.vue'
    import UseUserStore from '../../../store/user'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const router = useRouter()
    const userStore = UseUserStore()
    const openEamil = ref(false)
    const openPass = ref(false)
    const modifyeamilRef = ref<any>()
    const modifypassRef = ref<any>()
    const onModifyPass = () => {
        openPass.value = true
        nextTick(() => {
            modifypassRef.value.init()
        })
    }
    const onModifyEmail = () => {
        openEamil.value = true
        nextTick(() => {
            modifyeamilRef.value.init()
        })
    }
    onMounted(() => {
        userStore.setUserInfo()
    })
    const maskPhone = (phone:string|undefined) => {
        if (!phone) {
            return ;
        }
        return phone.substr(0, 3) + '****' + phone.substr(7);
    }
</script>