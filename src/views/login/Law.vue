<template>
    <span class="text-[#01AA44] cursor-pointer font-normal text-[0.875rem]" @click="onPage(1)">《{{ t('login.userServiceAgreement') }}》 </span>
    <span class="text-[#01AA44] text-[0.875rem] cursor-pointer " @click="onPage(2)">《{{t('login.privacyPolicy')}}》</span>
</template>
<script setup lang="ts">
    import { useRouter } from 'vue-router'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const router = useRouter()
    const onPage = (type:number) => {
        if (type==1) {
            const route = router.resolve({
                name: 'servicelaw',
            })
            window.open(route.href, '_blank')
            return
        }
        const route = router.resolve({
            name: 'privatelaw',
        })
        window.open(route.href, '_blank')
    }
</script>