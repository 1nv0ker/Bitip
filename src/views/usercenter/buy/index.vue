<template>
    <div class="w-full  justify-between bg-[white] rounded-[1rem] p-[1.75rem]">

        <div class="w-full">
            <span class="text-[#191919] text-[1.25rem] font-bold">{{t('backend_menu.menu2')}}-{{t('backend_menu.menu2_sub1')}}</span>
        </div>
        <StaticSetmenu class="mt-[1.5rem]"/>
    </div>
    
</template>
<script setup lang="ts">
    // import { ref, onMounted, computed } from 'vue'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    import StaticSetmenu from '../../setmenu/StaticSetmenu.vue'
    
</script>
<style lang="less" scoped>
    .all_citys {
        align-content: flex-start;
        &>div {
            flex: 0 0 calc(20% - 0.75rem * 4/5);

            // height: 3.125rem;
            /* 可选样式 */
            min-width: 0;     /* 防止内容溢出 */
        }
        .selected_city {
            background: linear-gradient( 95deg, #4B3585 0%, #342B4B 100%);
            color:#FFFFFF;
            .box {
                border-color: white;
            }
        }
    }
</style>
<style>
.coustom_overflow::-webkit-scrollbar {
  width: 14px;
  background: #fff;
}

.coustom_overflow::-webkit-scrollbar-thumb {
  background: #2196F3;
  border: 4px solid transparent;
  border-radius: 999px;
  background-clip: content-box;
}
</style>