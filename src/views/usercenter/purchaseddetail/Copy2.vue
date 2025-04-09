<template>
    <a-tooltip trigger="click" :arrow="false" :open="copy"  @click="onClick">
        <template #title>
            <span class="text-[1rem]">{{t('promotionrebate.copy')}}</span>
        </template>
        <CopyOutlined class="text-[1.5rem] cursor-pointer text-[#5E6F94] ml-[4px]" />
    </a-tooltip>
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import { CopyOutlined } from '@ant-design/icons-vue';
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    let interval:any = null
    const copy = ref(false)
    const props = defineProps({
        message:{
            type:String,
            default:''
        }
    })
    const onClick =  () => {
        copy.value = true
        if (navigator.clipboard) {
            navigator.clipboard.writeText(props.message)
        } else {
            const input = document.createElement('input');
            input.value = props.message;
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            input.remove();
        }
        interval && clearInterval(interval)
        interval = setInterval(() => {
            copy.value = false
            clearInterval(interval)
        }, 1000);
    }
</script>