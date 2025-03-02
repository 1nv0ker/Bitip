<template>
    <div class="hidden md:flex justify-center gap-[10rem] pt-[4rem] pb-[4rem] h-auto">
        <div class="flex flex-col gap-[1rem] justify-start">
            <img src="../../assets/logo.png" class="w-[9.125rem] h-[3rem]"/>
            <span class=" text-[#666666] text-[1rem] font-normal">{{t('footer.describe')}}</span>
            <span class=" text-[#666666] text-[1rem] font-normal">{{t('footer.describe1')}}</span>
        </div>
        <div v-for="item in items" class="flex flex-col">
            <span class="text-[#9BA2BB] text-[1.2rem] font-medium pb-[1.5rem]">{{item.title}}</span>
            <div v-for="subtitle in item.items" class="flex flex-col gap-[1.25rem]">
                <span class="text-[#191919] text-[1rem] font-normal pb-[1.25rem] cursor-pointer">{{subtitle.title}}</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { computed } from 'vue'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const items = computed(() => {
        return [
            {
                title:t('footer.title1'),
                items: [
                    {
                        title:t('footer.title1_subtitle1')
                    },
                    {
                        title:t('footer.title1_subtitle2')
                    },
                    {
                        title:t('footer.title1_subtitle3')
                    },
                    {
                        title:t('footer.title1_subtitle4')
                    },
                    {
                        title:t('footer.title1_subtitle5')
                    }
                ]
            },
            {
                title:t('footer.title2'),
                items: [
                    {
                        title:t('footer.title2_subtitle1')
                    },
                    {
                        title:t('footer.title2_subtitle2')
                    },
                    {
                        title:t('footer.title2_subtitle3')
                    },
                    {
                        title:t('footer.title2_subtitle4')
                    },
                    {
                        title:t('footer.title2_subtitle5')
                    }
                ]
            },
            {
                title:t('footer.title3'),
                items: [
                    {
                        title:t('footer.title3_subtitle1')
                    },
                    {
                        title:t('footer.title3_subtitle2')
                    },
                    {
                        title:t('footer.title3_subtitle3')
                    },
                    {
                        title:t('footer.title3_subtitle4')
                    },
                    {
                        title:t('footer.title3_subtitle5')
                    }
                ]
            },
            {
                title:t('footer.title4'),
                items: [
                    {
                        title:t('footer.title4_subtitle1')
                    },
                    {
                        title:t('footer.title4_subtitle2')
                    },
                    {
                        title:t('footer.title4_subtitle3')
                    },
                    {
                        title:t('footer.title4_subtitle4')
                    },
                    {
                        title:t('footer.title4_subtitle5')
                    }
                ]
            }
        ]
    })
</script>