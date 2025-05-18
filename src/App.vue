
<template>
 <RouterView />
</template>
<script setup lang="ts">
   import useI18nStore from './store/i18n'
   import { onMounted } from 'vue'
    import { useI18n } from 'vue-i18n'
    import { isMobileDevice } from './hooks/userAuth'
    // import { onMounted } from 'vue'
    const i18n = useI18n()

    const store = useI18nStore()
    i18n.locale.value = store.language
    onMounted(() => {
      function setViewportScale() {
          const designWidth = 8000;
          const scale = window.innerWidth / designWidth;
          const viewportMeta:any = document.querySelector('meta[name="viewport"]');
          viewportMeta.content = `width=device-width, initial-scale=${scale}, maximum-scale=${scale},height=widthdevice-height, user-scalable=no`;
      }

      if (isMobileDevice()) {
        window.addEventListener('resize', setViewportScale);
        setViewportScale()
      }
    })

</script>
<style>
  body, html, #app {
    width: 100%;
    height: 100%;
  }
</style>
