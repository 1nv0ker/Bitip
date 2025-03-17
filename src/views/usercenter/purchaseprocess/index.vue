<template>
    <div class="w-full p-[1.75rem] bg-[white] rounded-[1.5rem] usercenter_recharge">
        <div class="pb-[5.75rem]">
            <span class="text-[#191919] text-[1.25rem] font-bold">{{t('backend_menu.menu1')}}-{{t('backend_menu.menu1_sub2')}}</span>
        </div>
        <!-- style="grid-template-columns: repeat(4, 19rem);grid-template-rows: repeat(2, 22.125rem);" -->
        <DySetmenu />
    </div>
</template>
<script setup lang="ts">
    import DySetmenu from '../../setmenu/DySetmenu.vue'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
</script>
<style lang="less" scoped>
    .normal_card {
        background: linear-gradient( 161deg, #F2EDFF 0%, #FFFFFF 100%);
        .discount_button {
            background: linear-gradient( 95deg, #4B3585 0%, #342B4B 100%);
        }
    }
    .hover_card {
        background-image: url('../../../assets/bei.png');
        background-size:cover;
        background-repeat:no-repeat;
        .title,.price1_value, .price1 {
            color: white;
        }
        .price2_label,.originPrice_value,.originPrice_label {
            color:rgba(255,255,255,0.6);
        }
        .price2_value {
            color:white;
        }
        .discount_button {
            background: #FFEBD1;
            &>span {
                color:#3E2F65;
            }
        }
    }
    .basic_card {
        transition: background-color 0.5s ease-in-out;
    }
    .usercenter_recharge {
        background: url('../../../assets/recharge_bg.png');
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>