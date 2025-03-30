<template>
    <ModelComponent v-model="open" slot-mode title="" :width="'24.25rem'">
        <div>
            <span>{{t('tips.content')}}</span>
            <div class="w-full flex mt-[1.125rem] justify-end gap-[2rem]">
                <div class="w-[6.75rem] h-[3rem] cursor-pointer rounded-[0.75rem] bg-[#01AA44] flex justify-center items-center" @click="onConfirm">
                    <span class="text-[1rem] text-[#FFFFFF] font-bold"> {{t('tips.button')}}</span>
                </div>
            </div>
        </div>
    </ModelComponent>
</template>
<script setup lang="ts">
    import ModelComponent from '../views/usercenter/ModelComponent.vue';
    import { useRouter } from 'vue-router'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const router = useRouter()
    const open = defineModel()
    const onConfirm = () => {
        router.push({
            name:'userauth'
        })
        open.value = false
    }
</script>
