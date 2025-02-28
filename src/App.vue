
<template>
 <RouterView />
</template>
<script setup lang="ts">
   import useI18nStore from './store/i18n'
    import { useI18n } from 'vue-i18n'
  
    const i18n = useI18n()

    const store = useI18nStore()
    i18n.locale.value = store.language
</script>
<style>
  body, html, #app {
    width: 100%;
    height: 100%;
  }
</style>
