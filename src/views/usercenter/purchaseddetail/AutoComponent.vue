<template>
    <div class="flex items-center">
        <a-switch :checked="tempChecked" @change="onChange" />
        <span class="pl-[0.5rem] font-medium cursor-pointer" @click="onChange(!checked)">{{t('purchaseddetail.action1')}}</span>
        <ModelComponent v-model="open" 
        :title="t('purchaseddetail.tips')" 
        :content="t('purchaseddetail.message')"
         @onClick="onConfirm">
            
        </ModelComponent>
        <!-- <StaticRenew v-model="openRenew"/> -->
    </div>
</template>
<script setup lang="ts">
    import ModelComponent from '../ModelComponent.vue'
    
    import { ref } from 'vue'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const emit = defineEmits(['onRenewal'])
    const props = defineProps({
        checked: {
            type: Boolean,
            default:false
        }
    })
    const open = ref(false)
    // const openRenew = ref(false)
    const tempChecked = ref(props.checked)
    const onChange = (check:boolean) => {
        tempChecked.value = check
        if (check) {
            open.value = true
        } else {
            emit('onRenewal', tempChecked.value)
        }
    }
    //打开续费框
    const onConfirm = () => {
        open.value = false
        emit('onRenewal', tempChecked.value)
        // openRenew.value = true
        // checked.value = true
    }
</script>