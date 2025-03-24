<template>
    <ModelComponent v-model="open" slot-mode :title="t('whitelist.message1')" :width="'24.25rem'">
        <div class="w-full flex mt-[1.125rem] justify-end gap-[2rem]">
            <div class="w-[6.75rem] h-[3rem] cursor-pointer rounded-[0.75rem] border-[#666666] border-[1px] flex justify-center items-center" @click="onCancel">
                <span class="text-[1rem] text-[#191919]"> {{t('whitelist.button4')}}</span>
            </div>
            <div class="w-[6.75rem] h-[3rem] cursor-pointer rounded-[0.75rem] bg-[#01AA44] flex justify-center items-center" @click="onConfirm">
                <span class="text-[1rem] text-[#FFFFFF] font-bold"> {{t('whitelist.button5')}}</span>
            </div>
        </div>
    </ModelComponent>
</template>
<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    import ModelComponent from '../ModelComponent.vue';
    const { t } = useI18n()
    const open = defineModel()
    const emit = defineEmits(['onConfirmDelete'])
    const onCancel = () => {
        open.value = false
    }
    const onConfirm = () => {
        emit('onConfirmDelete')
    }
</script>