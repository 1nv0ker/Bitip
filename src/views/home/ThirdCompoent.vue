<template>
    <div class="w-full pt-[3.125rem] pb-[8rem]" ref="thirdRef" style="background: linear-gradient( 180deg, #FFFFFF 0%, #F4FAF6 100%);">
        <div class="flex items-center justify-center">
            <span class="text-[#191919] text-[2.625rem] font-bold">{{ t('third.title') }}</span>
        </div>
        <div class="flex">

        </div>
    </div>
</template>
<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    import { ref } from 'vue'
    const { t } = useI18n()
    const thirdRef = ref<HTMLElement>()
    defineExpose({
        thirdRef: thirdRef
    })
</script>