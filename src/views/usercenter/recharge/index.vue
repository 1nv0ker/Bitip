<template>
    <div class="w-full bg-[white] rounded-[1.5rem] p-[1.75rem] overflow-hidden h-[57rem] usercenter_recharge">
        <div class="w-full">
            <span class="text-[#191919] text-[1.25rem] font-bold">{{t('setmenu.subtitle3')}}</span>
        </div>
        <Recharge />
    </div>
</template>
<script setup lang="ts">

    import Recharge from '../../setmenu/Recharge.vue'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
   
</script>
<style scoped>
    .usercenter_recharge {
        background: url('../../../assets/recharge_bg2.png');
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>