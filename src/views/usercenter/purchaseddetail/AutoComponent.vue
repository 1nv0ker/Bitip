<template>
    <div class="flex items-center">
        <a-switch :checked="checked" @change="onChange" />
        <span class="pl-[0.5rem] font-medium cursor-pointer" @click="onChange(!checked)">{{t('purchaseddetail.action1')}}</span>
        <ModelComponent v-model="open" 
        :title="t('purchaseddetail.tips')" 
        :content="t('purchaseddetail.message')"
         @onClick="onConfirm">
            
        </ModelComponent>
    </div>
</template>
<script setup lang="ts">
    import ModelComponent from '../ModelComponent.vue'
    import { ref } from 'vue'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const checked = ref(false)
    const open = ref(false)
    const onChange = (check:boolean) => {
        if (check) {
            open.value = true
        } else {
            checked.value = check
        }
    }
    const onConfirm = () => {
        checked.value = true
    }
</script>