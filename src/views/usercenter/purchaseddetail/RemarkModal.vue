<template>
    <ModelComponent slot-mode  v-model="open" :width="300" :title="t('purchaseddetail.edit')">
        <div class="pb-[0.5rem] pt-[0.5rem] w-full">
            <a-textarea class="customArea" :placeholder="t('sub.placeholder2')" v-model:value="remark" :rows="2" :maxlength="20" show-count />
            <div class=" flex justify-end w-full">
                <a-button :loading="loading" class="customAbutton w-[6.75rem] h-[3rem] cursor-pointer rounded-[0.75rem] bg-[#01AA44] flex justify-center items-center" @click="onConfirm">
                    <span class="text-[1rem] text-[#FFFFFF] font-bold"> {{t('sub.button')}}</span>
                </a-button>
            </div>
        </div>
    </ModelComponent>
</template>
<script setup lang="ts">
    import ModelComponent from '../ModelComponent.vue';
    import {  SetAutoRenew } from '../../../api/recharge'
    import { ref } from 'vue'
    import { useI18n } from 'vue-i18n'
import { message } from 'ant-design-vue';
    const { t } = useI18n()
    const open = defineModel()
    const remark = ref('')
    const loading = ref(false)
    const modelValue = ref<any>()
    const init = (record:any) => {
        remark.value = ''
        if (record) {
            remark.value = record.remark
            modelValue.value = record
        }
    }
    const emit  = defineEmits(['onComplate'])
    defineExpose({
        init:init
    })
    const onConfirm = () => {
        loading.value = true
        SetAutoRenew({
            id: modelValue.value.id,
            autoRenew:modelValue.value.autoRenew,
            remark:remark.value
        })
        .then((res:any) => {
            loading.value = false
            if (res.code == 200) {
                message.success(t('form.success'))
                
                emit('onComplate')
                open.value = false
            }
        })
        .catch(() => {
            loading.value = false
        })
    }
</script>