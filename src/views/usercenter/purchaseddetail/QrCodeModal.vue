<template>
    <ModelComponent slot-mode  v-model="open" :width="300">
        <div class=" flex justify-center h-[12rem] items-center">
            <a-qrcode :value="qrcode" />
        </div>
    </ModelComponent>
</template>
<script setup lang="ts">
    import ModelComponent from '../ModelComponent.vue';
    // import { useI18n } from 'vue-i18n'
    // const { t } = useI18n()
    const open = defineModel()

    defineProps({
        qrcode: String || undefined
    })
</script>